Here is the complete, step-by-step guide to setting up a 100% free, permanent backend architecture. By the end of this, you will have a professional Admin Dashboard where you can upload text, publication tables, and media, all of which will automatically sync to your GitHub Pages layout.
**Step 1: Set Up Your Permanent Database (****Neon.tech****)**
Because Render's free database deletes itself after 30 days, we need a permanent home for the publication links, research text, and table data.
Go to **Neon.tech** and create a free account.
Create a new PostgreSQL project.
Once the database is created, copy the **Connection String** (it will look something like postgresql://user:password@host/dbname). Save this somewhere safe.
**Step 2: Set Up Your Image Storage (****Cloudinary****)**
To ensure Dr. Karanth's camera trap photos and media gallery images don't disappear when the Render server goes to sleep, they need to be routed to a dedicated media host.
Go to **Cloudinary.com** and sign up for a free account.
Go to your Cloudinary Dashboard and find your **Product Environment Credentials**:
**Cloud Name**
**API Key**
**API Secret**
Save these three values.
**Step 3: Configure ****Strapi**** Locally**
Now, let's generate the CMS code and connect it to your database and image storage.
Open your computer's terminal and run the following command to create the project:
Bash
npx create-strapi-app@latest my-portfolio-cms
*(When prompted, choose "Custom" installation, select PostgreSQL, and paste your Neon database details).*
Once installed, navigate into your new project folder:
Bash
cd my-portfolio-cms
Install the Cloudinary plugin so your uploaded photos route directly to your permanent storage:
Bash
npm install @strapi/provider-upload-cloudinary
Open the code in your editor. In the root folder, locate or create a .env file and add your Cloudinary credentials:
Code snippet
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
Tell Strapi to use Cloudinary. Create or edit the config/plugins.js file and add this exact code:
JavaScript
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: { upload: {}, uploadStream: {}, delete: {} },
    },
  },
});
Allow Strapi to display Cloudinary images in your dashboard. Open config/middleware.js, find the strapi::security section, and update it to look like this:
JavaScript
{
  name: 'strapi::security',
  config: {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'connect-src': ["'self'", 'https:'],
        'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
        'media-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'res.cloudinary.com'],
        upgradeInsecureRequests: null,
      },
    },
  },
}
**Step 4: Deploy to Render (Free Hosting)**
Push your my-portfolio-cms code to a new GitHub repository.
Go to **Render.com**, create a free account, and click **New > Web Service**.
Connect your GitHub repository.
Set the **Build Command** to npm run build and the **Start Command** to npm run start.
Scroll down to **Environment Variables** and add everything from your local .env file (your Database connection string, Cloudinary keys, app keys, etc.).
Click **Deploy**. Render will build your code. Once finished, your Admin Dashboard is officially live on the internet!
**Step 5: Connect Your GitHub Pages Frontend**
With the CMS deployed, you can now log into your live Strapi dashboard, create a "Publications" collection, and upload images to the Media Library.
To display this data on your layout at ckp1990.github.io/KUK-website, you just need to point your frontend HTML to your new backend.
Would you like me to write out the exact JavaScript fetch() code you need to drop into your GitHub Pages code to make the text and images appear on the screen?

**Non-technical summary**

Here is a completely jargon-free translation of those steps, designed exactly for your client to understand how his new system will be built and why each piece is necessary. You can share this directly with him!

**How We Are Building Your Website's Update System**
To make sure your website is fast, secure, and incredibly easy for you to update, we are building it using a modern "modular" approach. Instead of stuffing everything into one box, we use specialized tools for different jobs.
Here is what happens behind the scenes to build your personal publishing system:
**Step 1: Creating the "Text & Data Vault" (****Neon.tech****)**
**What it is:** We need a permanent, highly organized digital filing cabinet for all your written content.
**Why we do it:** This vault will safely store the text for your biography, your commentary articles, and the structured lists of your scientific publications. It ensures that your written work is permanently archived and perfectly organized.
**Step 2: Creating the "Photo & Media Vault" (****Cloudinary****)**
**What it is:** High-resolution camera trap photos and media gallery images are heavy and need special care. We set up a dedicated digital photo album just for your media.
**Why we do it:** By separating your images from your text, your website will load incredibly fast for visitors. This "vault" automatically resizes and optimizes your photos so they look perfect on both mobile phones and large desktop screens without you having to do any extra work.
**Step 3: Building Your Private Control Panel (****Strapi****)**
**What it is:** This is where my custom development work comes in. I will build a private, secure dashboard just for you.
**Why ****we**** do it:** Instead of you having to log into the Text Vault or the Photo Vault directly, this control panel acts as your single "Publisher's Desk." I will connect the text and photo vaults to this desk. When you log in, all you see is a simple screen to type your articles and upload your photos.
**Step 4: Putting Your Control Panel Online (Render)**
**What it is:** A control panel isn't useful if it only lives on my computer. We need to put your "Publisher's Desk" on the internet securely.
**Why we do it:** By hosting your control panel on a secure cloud server, you will be able to log in from anywhere in the world—whether you are in Bengaluru or traveling—using just a web browser and your password.
**Step 5: Connecting the Wires to the Public Website**
**What it is:** The final step is linking your private control panel to the beautiful website layout the public sees.
**Why we do it:** I will set up invisible "wires" between your desk and the live website. Once this is done, the moment you click "Publish" on a new paper or photo in your dashboard, the website will instantly and automatically update itself to display your new content to the world.

Here is a checklist of exactly what you need to gather to start the setup.
Since you will be registering for three different platforms (Neon for text, Cloudinary for photos, and Render for hosting), I highly recommend **not** using his personal email address for the initial setup. Otherwise, you will have to call or text him every five minutes asking him to forward you verification codes or click confirmation links.
Here is the best approach and the exact list of things to ask for:
**1. The Setup Strategy (For You)**
Create a brand new, free Gmail account dedicated entirely to managing this website (for example, karanth.website.admin@gmail.com).
Use this single email and one secure master password to register for Neon, Cloudinary, and Render.
Once everything is built and working perfectly, you simply hand over the email address and password to him. This ensures he owns all the accounts, but you don't have to bother him during the technical build.
**2. The Checklist (What to ask Dr. Karanth for)**
If you use the strategy above, you only need to ask him for a few pieces of actual content to get the database primed and ready. You can send him this exact list:
**Information Needed to Launch the Publishing Dashboard:**
**A Primary Email Address:** Which email address would you like to use as your official login for the new Publisher's Desk once it is finished?
**Initial Test Content (Publications):** Please provide a Word document or PDF of your most up-to-date CV or a list of 3 to 5 recent publications. I will use these to build and test the permanent "Text Vault."
**Initial Test Content (Photos):** Please share 3 to 5 high-resolution photos (such as a recent profile picture and a few camera trap or wildlife gallery images). I will use these to test the automatic resizing in the "Photo Vault."
**Website Contact Email:** Which email address should be displayed publicly on the website for media or research inquiries (e.g., info@ullaskaranth.com)?

Would you like me to map out the exact database columns you should create in Strapi for his "Publications" so that the formatting matches typical scientific citation standards?
