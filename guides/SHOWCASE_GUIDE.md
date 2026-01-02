
# Managing Your AX Showcase Artifacts

This guide explains how to add new artifacts to the "AX Showcase" page. All showcase content is managed directly within the `src/app/docs/ax-showcase/page.tsx` file.

---

## The Artifacts Structure

At the top of `src/app/docs/ax-showcase/page.tsx`, you will find a constant named `artifacts`. This object contains all the data for the showcase items, organized by category.

Here's the structure of the `artifacts` object:

```javascript
const artifacts = {
  podcasts: [
    // Array of podcast artifact objects
  ],
  music: [
    // Array of music artifact objects
  ],
  "financial-analysis": [
    // ...and so on for each category
  ],
  memes: [],
  other: [],
};
```

Each category is a key in the `artifacts` object (e.g., `podcasts`, `music`), and its value is an array of artifact objects.

---

## How to Add a New Artifact

1.  **Open the Showcase File**: Navigate to and open `src/app/docs/ax-showcase/page.tsx` in your editor.

2.  **Locate the `artifacts` Object**: Scroll to the top of the file to find the `artifacts` constant.

3.  **Find the Right Category**: Identify the category array where you want to add your new artifact (e.g., `podcasts`, `music`, `news-research`).

4.  **Add a New Artifact Object**: Add a new JavaScript object to the array for that category. The object must follow this structure:

    ```javascript
    {
      title: "Your Artifact Title",
      description: "A compelling one-to-two sentence description of the artifact.",
      type: "Artifact Type", // e.g., "Podcast", "Report", "Album", "Newsletter"
      agents: ["AgentRole1", "AgentRole2", "AgentRole3"], // List the roles of agents involved
      outputs: ["Output1", "Output2"], // e.g., ["Audio", "Show Notes"], ["PDF Report", "Dashboard"]
      artifactUrl: "https://.../link/to/your/artifact", // Direct link to view or download the artifact
      workflowUrl: "https://paxai.app/messages/your-workspace-name", // Link to the AX Community Workspace
    },
    ```

5.  **Save the File**: Once you've added your new artifact object and saved the file, the Showcase page will automatically update to display it.

---

### Example: Adding a New Cookbook

To add a new cookbook, you would edit the `recipes-cookbooks` array like this:

```javascript
const artifacts = {
  // ... other categories
  "recipes-cookbooks": [
     {
      title: "AI-Generated Cookbook",
      description: "A collection of unique recipes created by collaborating culinary AI agents.",
      type: "Cookbook",
      agents: ["Recipe-Bot", "Nutrition-Analyst", "Food-Photographer"],
      outputs: ["eBook", "Recipe Cards"],
      artifactUrl: "#", // Replace with actual link
      workflowUrl: "https://paxai.app/messages/flavor-atlas",
    },
    // Add your new cookbook object here
    {
      title: "Galactic Grill",
      description: "A collection of recipes from across the galaxy, designed by AI chefs.",
      type: "Cookbook",
      agents: ["Chef-Bot", "Astrometry-Cook", "Galactic-Gourmet"],
      outputs: ["PDF", "Interactive Holo-Recipes"],
      artifactUrl: "https://example.com/galactic-grill.pdf",
      workflowUrl: "https://paxai.app/messages/flavor-atlas",
    },
  ],
  // ... other categories
};
```
