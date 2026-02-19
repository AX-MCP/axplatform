
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData, PostMetadata } from "@/lib/blog";
import { format } from 'date-fns';
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const sortedPosts: PostMetadata[] = getSortedPostsData();

  return (
    <div className="container py-16 md:py-24">
      <header className="text-center mb-16 space-y-4">
        <p className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80 ring-1 ring-primary/20">
          Blog & Updates
        </p>
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-accent">AX Platform Blog</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Insights, guides, and release notes for developers building with AX.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 lg:gap-16">
        <aside className="hidden md:block">
          <div className="rounded-2xl border border-border/50 bg-secondary/30 p-6 shadow-lg backdrop-blur-sm">
            <h2 className="text-sm font-semibold uppercase text-muted-foreground tracking-[0.18em] mb-4">All Posts</h2>
            <nav className="flex flex-col space-y-3">
              {sortedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <main>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {sortedPosts.map((post) => (
              <article key={post.slug} className="group rounded-2xl border border-border/50 bg-secondary/30 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                <Link href={`/blog/${post.slug}`} className="block relative">
                  {post.featuredImage && (
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint="abstract technology"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  )}
                </Link>
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-xs uppercase tracking-[0.18em] text-muted-foreground/80 space-x-3">
                    <span className="rounded-full bg-primary/15 px-3 py-1 font-semibold text-primary/80">{post.category}</span>
                    <span className="h-px flex-1 bg-border" />
                    {post.date && !isNaN(new Date(post.date).getTime()) && (
                      <span>{format(new Date(post.date), 'MMM d, yyyy')}</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold font-headline leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>By {post.author}</span>
                    </div>
                    <Button variant="link" asChild className="p-0 h-auto text-primary"> 
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
