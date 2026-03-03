const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: '.env.local' });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const IMAGES_DIR = path.join(process.cwd(), 'local_images');
const MAPPING_FILE = path.join(process.cwd(), 'scripts', 'cloudinary-mapping.json');

// Check if credentials exist
if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.error("❌ Cloudinary credentials not found in .env.local. Please check CLOUDINARY_SETUP.md");
  process.exit(1);
}

// Function to recursively get all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
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

// Upload a single file
async function uploadImage(filePath) {
  try {
    // Determine the folder structure relative to local_images
    // e.g. local_images/species/tiger.jpg -> species/tiger
    const relativePath = path.relative(IMAGES_DIR, filePath);
    const parsedPath = path.parse(relativePath);

    // The public ID is the path without the extension
    const publicId = path.join(parsedPath.dir, parsedPath.name).replace(/\\/g, '/'); // Normalize slashes

    console.log(`Uploading ${relativePath}...`);

    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      overwrite: true,
      resource_type: "image"
    });

    console.log(`✅ Success: ${result.secure_url}`);
    return result.secure_url;
  } catch (error) {
    console.error(`❌ Failed to upload ${filePath}:`, error.message);
    return null;
  }
}

async function main() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ The directory ${IMAGES_DIR} does not exist. Please create it and add your images. See CLOUDINARY_SETUP.md`);
    process.exit(1);
  }

  const allFiles = getAllFiles(IMAGES_DIR);
  // Filter for common image types
  const imageFiles = allFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log(`⚠️ No images found in ${IMAGES_DIR}.`);
    return;
  }

  console.log(`Found ${imageFiles.length} images to upload.\n`);

  const mapping = {};

  // Upload sequentially to avoid rate limiting
  for (const file of imageFiles) {
    const secureUrl = await uploadImage(file);
    if (secureUrl) {
      // Store the relative path (e.g., "species/tiger.jpg") as the key
      const relativePath = path.relative(IMAGES_DIR, file).replace(/\\/g, '/');
      mapping[relativePath] = secureUrl;
    }
  }

  // Save the mapping
  fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));
  console.log(`\n🎉 All uploads complete! Mapping saved to ${MAPPING_FILE}`);
  console.log(`You can now run 'npm run update:data' to replace placeholders.`);
}

main();
