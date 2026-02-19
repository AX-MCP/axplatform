# Managing Your Blog Posts

This guide explains how to create, edit, and delete blog posts for your website. All blog content is now managed as individual files in the `src/content/blog` directory.

---

## The Blog Post Structure

Each blog post is a Markdown file (`.mdx`) with a "frontmatter" section at the top for metadata. Here's an example of a single post file (e.g., `my-new-post.mdx`):

```yaml
---
title: "The Title of Your New Post"
date: "YYYY-MM-DD" # e.g., "2024-09-01"
author: "Author's Name"
avatarUrl: "https://picsum.photos/seed/some-seed/40/40" # URL for the author's image
excerpt: "A short summary of the blog post that appears on the main blog page."
featuredImage: "https://picsum.photos/seed/image-seed/1200/600" # URL for the main image
category: "Category Name"
---

This is the content of your blog post.

You can write in Markdown, including headings, lists, and links. Each new line creates a new paragraph.

## This is a sub-heading

- You can have lists
- And other Markdown elements

The slug (the part of the URL like `/blog/my-new-post`) is automatically created from the filename.
```

- **`slug`**: The URL for the post is automatically generated from the filename. For example, a file named `my-cool-post.mdx` will have the URL `/blog/my-cool-post`.

---

## How to Create a New Blog Post

1.  Navigate to the `src/content/blog` directory.
2.  Create a new file with the `.mdx` extension (e.g., `a-brand-new-post.mdx`). The filename will become the URL slug.
3.  Copy the frontmatter from an existing post and paste it at the top of your new file.
4.  Update the metadata (`title`, `date`, `author`, `excerpt`, `featuredImage`, etc.) for your new post.
5.  Write your blog content in Markdown below the frontmatter section.
6.  Save the file. Your new post will automatically appear on the site.

---

## How to Edit an Existing Blog Post

1.  Open the file `src/content/blog`.
2.  Find the `.mdx` file corresponding to the post you want to edit.
3.  Modify the frontmatter metadata or the Markdown content as needed.
4.  Save the file. The changes will be reflected on your site.

---

## How to Delete a Blog Post

1.  Navigate to the `src/content/blog` directory.
2.  Find the `.mdx` file for the post you wish to remove.
3.  Delete the file.
4.  The post will be removed from your blog automatically.
