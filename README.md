# AX Platform Website

This is the official website for the AX Platform, built with Next.js and Firebase Studio.

## Getting Started

To get started with local development, first install the necessary packages:

```bash
npm install
```

Then, to run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

---

## Managing Website Content

This website is designed to be easily updated. Here’s a guide to managing the different content areas.

### 📝 Blog Posts

Blog posts are managed as individual Markdown (`.mdx`) files in the `src/content/blog` directory. Each file contains metadata (like title, author, and date) at the top, followed by the post content.

- **To Create a New Post**: Add a new `.mdx` file to the directory.
- **To Edit a Post**: Modify the corresponding `.mdx` file.
- **To Delete a Post**: Remove the `.mdx` file.

For detailed instructions, see the **[Blog Guide](./guides/BLOG_GUIDE.md)**.

### ✨ AX Showcase

The "AX Showcase" page highlights artifacts created with the AX Platform. All artifacts are defined directly within the `src/app/docs/ax-showcase/page.tsx` file.

- **To Add a New Artifact**: Edit the `artifacts` object at the top of the `page.tsx` file and add a new item to the appropriate category array.

For detailed instructions, see the **[Showcase Guide](./guides/SHOWCASE_GUIDE.md)**.

### 🏠 Homepage

The homepage is composed of several React components located in the `src/components/home/` directory. To change the content of the homepage, you will need to edit the content within these components:

- `src/components/home/hero-section.tsx`
- `src/components/home/resources-section.tsx`
- `src/components/home/features-section.tsx`
- `src/components/home/about-section.tsx`
- `src/components/home/see-in-action-section.tsx`
- `src/components/home/community-workspaces-section.tsx`
- `src/components/home/agent-studio-section.tsx`

### 📚 Documentation Pages

All documentation pages are located in the `src/app/docs/` directory. Navigation for the documentation section is managed in two files:

- **`src/app/docs/data.ts`**: Defines the main categories in the sidebar.
- **`src/lib/docs-data.ts`**: Defines the individual pages that appear under each category.

To add a new documentation page, you'll need to create the page file and then add an entry to `src/lib/docs-data.ts`.

### 🎨 Styling and Theme

The website's colors, fonts, and overall theme are controlled by Tailwind CSS and custom variables defined in:
- **`src/app/globals.css`**: Contains the core HSL color variables for the light and dark themes.
- **`tailwind.config.ts`**: The main Tailwind CSS configuration file.
