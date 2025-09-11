import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/blog-posts";
import { format } from 'date-fns';

export default function BlogPage() {
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">From the Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights, tutorials, and updates from the AX team.
          </p>
        </header>

        <div className="space-y-8">
          {sortedPosts.map((post) => (
            <Card key={post.slug} className="group transition-colors hover:border-primary">
              <CardHeader>
                <p className="text-sm text-muted-foreground mb-2">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </p>
                <CardTitle>
                  <Link href={`/blog/${post.slug}`} className="text-2xl font-bold font-headline hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="pt-2 text-base text-muted-foreground">{post.author}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary font-semibold mt-4 group-hover:underline">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}