import { notFound } from "next/navigation";
import { getPostData, getAllPostSlugs } from "@/lib/blog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import Image from "next/image";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

const components = {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-20 md:py-24">
      <article className="prose prose-invert max-w-4xl mx-auto">
        <header className="mb-12">
          {post.featuredImage && (
            <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden mb-8">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-contain"
                data-ai-hint="abstract technology"
              />
            </div>
          )}
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

        <MDXRemote source={post.content} components={components} />
      </article>
    </div>
  );
}
