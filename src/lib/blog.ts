
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

const slugsToIgnore = [
    'multi-agent-collaboration-with-ax-and-openclaw'
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  author: string;
  avatarUrl: string;
  excerpt: string;
  featuredImage?: string;
  category: string;
  content: string;
};

export type PostMetadata = Omit<Post, 'content'>;


export function getSortedPostsData(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        if (slugsToIgnore.includes(slug)) {
            return null;
        }
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
        slug,
        ...(matterResult.data as Omit<PostMetadata, 'slug'>),
        };
    })
    .filter((post): post is PostMetadata => post !== null);

  return allPostsData.sort((a, b) => {
    const slugToMoveToTop = 'optimized-mcp-security-for-the-enterprise';
    if (a.slug === slugToMoveToTop) {
      return -1;
    }
    if (b.slug === slugToMoveToTop) {
      return 1;
    }
    if (a.date && b.date && !isNaN(new Date(a.date).getTime()) && !isNaN(new Date(b.date).getTime()) && new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        if (slugsToIgnore.includes(slug)) {
            return null;
        }
        return {
            slug,
        };
    })
    .filter((post): post is { slug: string } => post !== null);
}

export async function getPostData(slug: string): Promise<Post | null> {
  if (slugsToIgnore.includes(slug)) {
      return null;
  }
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    ...(matterResult.data as Omit<Post, 'slug' | 'content'>),
  };
}
