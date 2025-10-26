
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/blog-posts";
import { format } from 'date-fns';
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container py-16 md:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">AX Platform Blog</h1>
        <p className="text-lg text-muted-foreground">
          Insights for developers building with AX.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 lg:gap-16">
        <aside className="hidden md:block">
          <h2 className="text-sm font-semibold uppercase text-muted-foreground tracking-wider mb-4">All Posts</h2>
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
        </aside>

        <main>
          <div className="space-y-16">
            {sortedPosts.map((post) => (
              <article key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block group mb-4">
                  {post.featuredImage && (
                    <div className="relative w-full aspect-[8/3] rounded-lg overflow-hidden border border-border/10 mb-6">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint="abstract technology"
                      />
                    </div>
                  )}
                </Link>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </p>
                  <h3 className="text-2xl font-bold font-headline mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="link" asChild className="p-0 h-auto text-primary">
                    <Link href={`/blog/${post.slug}`}>
                      Read More
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
