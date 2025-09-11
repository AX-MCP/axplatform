# Managing Your Blog Posts

This guide explains how to create, edit, and delete blog posts for your website. All blog content is managed from a single file: `src/lib/blog-posts.ts`.

---

## The Blog Post Structure

Each blog post is a TypeScript object with a specific structure. Here's an example of a single post object:

```typescript
{
  title: "The Title of Your Post",
  slug: "a-unique-slug-for-the-url",
  author: "Author's Name",
  avatarUrl: "https://picsum.photos/seed/some-seed/40/40", // A URL for the author's image
  date: "YYYY-MM-DD", // e.g., "2024-08-01"
  excerpt: "A short summary of the blog post that appears on the main blog page.",
  content: [
    "This is the first paragraph of your blog post.",
    "This is the second paragraph. Each paragraph is a separate string in the array.",
    "And so on."
  ]
}
```

- **`slug`**: This is very important. It must be unique for each post as it's used to create the URL (e.g., `/blog/a-unique-slug-for-the-url`).
- **`content`**: This is an array of strings. Each string in the array will be rendered as a separate paragraph on the page.

---

## How to Create a New Blog Post

1.  Open the file `src/lib/blog-posts.ts`.
2.  You will see an array named `posts`.
3.  Copy an existing post object and paste it as a new item in the `posts` array (make sure to add a comma after the previous object).
4.  Update the `title`, `slug`, `author`, `date`, `excerpt`, and `content` for your new post.
5.  Save the file. Your new post will automatically appear on the blog page.

---

## How to Edit an Existing Blog Post

1.  Open the file `src/lib/blog-posts.ts`.
2.  Find the post object within the `posts` array that you want to edit.
3.  Modify any of its properties (`title`, `content`, etc.).
4.  Save the file. The changes will be reflected on your site immediately.

---

## How to Delete a Blog Post

1.  Open the file `src/lib/blog-posts.ts`.
2.  Locate the entire object for the post you wish to remove from the `posts` array.
3.  Delete the entire object, including the curly braces `{}` and the trailing comma if there is one.
4.  Save the file. The post will be removed from your blog.
