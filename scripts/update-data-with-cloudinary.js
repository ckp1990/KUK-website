const fs = require('fs');
const path = require('path');

const MAPPING_FILE = path.join(process.cwd(), 'scripts', 'cloudinary-mapping.json');

// Directories to scan for data files and markdown files
const DATA_DIR = path.join(process.cwd(), 'lib', 'data');
const CONTENT_DIR = path.join(process.cwd(), 'content');

// Helper to get all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles || [];

  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

function processFiles(filesToProcess, mapping) {
  let filesUpdated = 0;

  for (const filePath of filesToProcess) {
    // Only process .ts, .tsx, .md, .mdx files
    const ext = path.extname(filePath).toLowerCase();
    if (!['.ts', '.tsx', '.md', '.mdx'].includes(ext)) {
      continue;
    }

    let fileContent = fs.readFileSync(filePath, 'utf8');
    let hasChanges = false;

    // A very basic find-and-replace strategy based on placeholder logic.
    // It looks for string literals matching placehold.co or specific IDs
    // that the user might manually map.
    // However, a robust way is to just replace known placeholders with the
    // corresponding cloudinary URLs *if* the user named their files appropriately.

    // Example: If mapping has "species/tiger.jpg" -> "https://res.cloudinary.com/.../tiger.jpg"
    // and the file has "https://placehold.co/300x300?text=Tiger" we need a way to link them.
    // Because placeholders are generic, the safest automatic way is to let the user
    // define a direct mapping or use a heuristic.

    // For this generic script, we will iterate over the mapping and look for a specific
    // comment or structure, OR replace all placehold.co links sequentially if they match a pattern.

    // As a simple, predictable approach for the user:
    // 1. The script will look for ANY placehold.co URL in the file.
    // 2. If it finds one, it will replace it if the user has provided a mapping
    //    that matches the text or context.

    // Since we don't know the exact placeholder URLs, we will look for a custom
    // placeholder syntax the user can adopt: e.g., `CLOUDINARY_REPLACE:species/tiger.jpg`
    // OR we just do a raw string replace if the user manually put the local filename
    // in the data file like: image: "species/tiger.jpg" instead of a full URL.

    // Approach: Iterate through every key in the mapping. If that exact key string
    // exists in the file (e.g., they changed the data file to point to the local relative path
    // like "gallery/photo1.jpg" before running this), replace it with the Cloudinary URL.

    for (const [localPath, cloudinaryUrl] of Object.entries(mapping)) {
      // Look for the exact local path string in quotes
      const regex1 = new RegExp(`["'\`]${localPath}["'\`]`, 'g');
      if (regex1.test(fileContent)) {
        fileContent = fileContent.replace(regex1, `"${cloudinaryUrl}"`);
        hasChanges = true;
      }

      // Also look for a specific replace token if they use placehold.co
      // e.g., https://placehold.co/300x300?text=REPLACE:species/tiger.jpg
      const replaceToken = `REPLACE:${localPath}`;
      if (fileContent.includes(replaceToken)) {
         // This is trickier to regex safely without knowing the exact URL structure,
         // so we replace the whole line or segment if possible, or just advise the user.
      }
    }

    if (hasChanges) {
      fs.writeFileSync(filePath, fileContent, 'utf8');
      console.log(`✅ Updated ${path.relative(process.cwd(), filePath)}`);
      filesUpdated++;
    }
  }

  return filesUpdated;
}

function main() {
  if (!fs.existsSync(MAPPING_FILE)) {
    console.error(`❌ Mapping file not found at ${MAPPING_FILE}. Please run 'npm run upload:images' first.`);
    process.exit(1);
  }

  const mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));

  if (Object.keys(mapping).length === 0) {
    console.log("⚠️ Mapping file is empty. No URLs to update.");
    return;
  }

  console.log("Scanning data and content files for required updates...\n");
  console.log("Note: To use this script effectively, change your image paths in lib/data/*.ts");
  console.log("to match your local_images paths (e.g., image: 'species/tiger.jpg').\n");

  const dataFiles = getAllFiles(DATA_DIR);
  const contentFiles = getAllFiles(CONTENT_DIR);
  const allFilesToProcess = [...dataFiles, ...contentFiles];

  const updatedCount = processFiles(allFilesToProcess, mapping);

  if (updatedCount === 0) {
    console.log("⚠️ No files were updated. Make sure your data files contain exact matches to your local image paths (e.g., 'species/tiger.jpg').");
  } else {
    console.log(`\n🎉 Successfully updated ${updatedCount} files with Cloudinary URLs!`);
  }
}

main();
