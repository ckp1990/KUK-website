# Wildlife Science Portfolio Website

A professional portfolio website for wildlife scientists, built with Next.js 14, TypeScript, and Tailwind CSS.
Modeled after [Wildlife Science Demo](https://webxdemo.wixstudio.com/wildlifescience).

## Features

- **Responsive Design:** Mobile-first layout using Tailwind CSS.
- **Pages:**
  - **Home:** Hero section, About snippet, Species grid, Testimonials.
  - **About:** Biography and profile.
  - **Publications:** Tabbed interface for Books, Scientific, and Popular articles.
  - **Media Gallery:** Image grid with hover effects.
  - **Commentary:** Markdown-based blog system.
  - **Kannada:** Regional language content page.
- **CMS:** Simple Markdown-based content management for blog posts.

## Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd wildlife-science-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

1.  **Start the server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

2.  **Open in your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Building for Production

To create a production build:

```bash
npm run build
npm start
```

## Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages using GitHub Actions.

1.  **Push the code** to your GitHub repository.
2.  **Go to Settings > Pages** in your repository.
3.  Under **Build and deployment**, select **GitHub Actions** as the source.
4.  The pre-configured workflow (`.github/workflows/deploy.yml`) will automatically detect the push to `main` and deploy the site.

**Note:** If you are deploying to a project repository (e.g., `https://username.github.io/repo-name`), you may need to update `next.config.ts` to include the `basePath`:

```typescript
const nextConfig: NextConfig = {
  // ...
  basePath: "/repo-name",
};
```

## Project Structure

- `app/`: Main application code (Next.js App Router).
- `components/`: Reusable UI components (Header, Footer, etc.).
- `content/blog/`: Markdown files for the Commentary section.
- `lib/`: Utility functions (e.g., blog post parsing).
- `public/`: Static assets.

## Configuration

- **Images:** Configured in `next.config.ts` to allow images from `placehold.co`.
- **Styling:** `app/globals.css` contains global styles and Tailwind configuration.

## License

MIT
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
