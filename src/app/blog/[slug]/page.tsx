import { notFound } from "next/navigation";
import { posts } from "@/lib/blog-posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import Image from "next/image";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function renderContent(paragraph: string, index: number) {
  if (paragraph.startsWith("### ")) {
    return (
      <h3 key={index} className="text-2xl font-bold font-headline mt-8 mb-4">
        {paragraph.substring(4)}
      </h3>
    );
  }
  if (paragraph.startsWith("![") && paragraph.endsWith(")")) {
    const match = paragraph.match(/!\[(.*)\]\((.*)\)/);
    if (match) {
      const alt = match[1];
      const src = match[2];
      return (
        <div key={index} className="my-6">
          <Image
            src={src}
            alt={alt}
            width={600}
            height={744}
            className="rounded-lg mx-auto"
          />
        </div>
      );
    }
  }
   if (paragraph.startsWith("- ")) {
    return <p key={index} className="ml-4">{paragraph}</p>;
  }
   if (paragraph.startsWith("  - ")) {
    return <p key={index} className="ml-8">{paragraph}</p>;
  }

  return <p key={index}>{paragraph}</p>;
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-20 md:py-24">
      <article className="prose prose-invert max-w-4xl mx-auto">
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

        <div className="prose-lg text-foreground/90 space-y-4">
          {post.content.map(renderContent)}
        </div>
      </article>
    </div>
  );
}
