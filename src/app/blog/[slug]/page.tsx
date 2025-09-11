import { notFound } from "next/navigation";
import { posts } from "@/lib/blog-posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-20 md:py-24">
      <article className="prose prose-invert max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.avatarUrl} alt={post.author} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{post.author}</span>
            </div>
            <span>•</span>
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
          </div>
        </header>

        <div className="prose-lg text-foreground/90 space-y-6">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}

// Add basic prose styling for the article content
const proseStyles = `
  .prose {
    color: hsl(var(--foreground));
  }
  .prose h1, .prose h2, .prose h3 {
    color: hsl(var(--foreground));
    font-family: 'Space Grotesk', sans-serif;
  }
  .prose a {
    color: hsl(var(--primary));
  }
  .prose a:hover {
    color: hsl(var(--accent));
  }
  .prose strong {
    color: hsl(var(--foreground));
  }
  .prose blockquote {
    color: hsl(var(--muted-foreground));
    border-left-color: hsl(var(--border));
  }
  .prose code {
    color: hsl(var(--accent-foreground));
    background-color: hsl(var(--accent));
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    border-radius: 6px;
  }
  .prose pre {
    background-color: hsl(var(--card));
    border: 1px solid hsl(var(--border));
  }
`;
export function BlogStyles() {
    return <style>{proseStyles}</style>
}
