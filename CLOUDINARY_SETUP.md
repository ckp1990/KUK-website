# Cloudinary Setup & Image Upload Guide

This guide explains how to set up Cloudinary for your Next.js application, configure your credentials securely, and run scripts to bulk-upload your local images and automatically update your application data.

## 1. Get Cloudinary Credentials

1.  Log in to your [Cloudinary Dashboard](https://cloudinary.com/console).
2.  On the main dashboard page, locate your **Product Environment Credentials**. You will need three specific keys:
    *   **Cloud Name**
    *   **API Key**
    *   **API Secret**

## 2. Configure Your `.env.local` File

To securely provide these credentials to the upload scripts without committing them to your Git repository, create a `.env.local` file in the root directory of your project.

Create a file named `.env.local` (at the same level as `package.json` and `next.config.ts`) and add the following lines, replacing the placeholder values with your actual Cloudinary credentials:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

**Important:** Never commit your `.env.local` file to version control (e.g., GitHub). It is typically ignored by default via the `.gitignore` file.

## 3. Organize Local Images for Upload

The upload script is designed to recursively read a specific local directory containing your images and upload them to Cloudinary, preserving your folder structure.

By default, the script looks for images in a folder named `local_images` in the root of your project.

Create this directory and organize your images into subfolders based on where they belong in your site (e.g., `species`, `gallery`, `blogs`).

Example directory structure:
```text
your-project-root/
├── local_images/
│   ├── species/
│   │   ├── tiger.jpg
│   │   └── elephant.jpg
│   ├── gallery/
│   │   ├── field-work-1.png
│   │   └── conference.jpg
│   └── blogs/
│       └── my-first-post-cover.webp
...
```

The script will upload `tiger.jpg` to a Cloudinary folder named `species` and assign it a public ID of `species/tiger`.

## 4. Run the Bulk Upload Script

Once your images are organized in `local_images` and your credentials are in `.env.local`, you can run the upload script.

This script will read your local files, upload them to Cloudinary, and generate a mapping file (`scripts/cloudinary-mapping.json`) that records which local file corresponds to which new Cloudinary URL.

**To run the upload script:**

```bash
npm run upload:images
```
*(Or, if running directly with Node.js: `node scripts/upload-to-cloudinary.js`)*

Wait for the script to finish. It will log the progress and output the final mapping to `scripts/cloudinary-mapping.json`.

## 5. Automatically Update Your Application Data

After successfully uploading your images, you need to replace the old placeholder URLs (e.g., `placehold.co` links) in your code with the new secure Cloudinary URLs.

A second script automates this process by reading the `scripts/cloudinary-mapping.json` file generated in the previous step and searching through your data files (like `lib/data/species.ts`, `lib/data/home.ts`, etc.) to replace placeholders.

**To run the update script:**

```bash
npm run update:data
```
*(Or, if running directly with Node.js: `node scripts/update-data-with-cloudinary.js`)*

The script will report which files were modified.

**Important Note on Updating Data:**
The update script relies on the mapping keys matching the placeholder values exactly. The current implementation is basic; if it doesn't automatically catch everything, you can refer to the `scripts/cloudinary-mapping.json` file to manually copy and paste the new URLs where needed.

## 6. Review Changes and Start the Server

1.  Review the changes made to your files (e.g., in `lib/data/`).
2.  Start your development server to verify the images load correctly from Cloudinary:

```bash
npm run dev
```

Navigate through your site (Home, Species of Interest, Media Gallery) to ensure all images are rendering correctly.
