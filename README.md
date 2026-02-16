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
