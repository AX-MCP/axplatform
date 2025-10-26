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
  if (paragraph.startsWith("#### ")) {
    return (
      <h4 key={index} className="text-xl font-bold font-headline mt-6 mb-3">
        {paragraph.substring(5)}
      </h4>
    );
  }
  if (paragraph.startsWith("```")) {
    const lang = paragraph.substring(3);
    // This assumes the next paragraph is the code.
    return null;
  }
  if (index > 0 && posts.flatMap(p => p.content).some(c => c.startsWith("```") && c === posts.flatMap(p => p.content)[index-1])) {
    const codeContent = paragraph;
    const lang = posts.flatMap(p => p.content)[index-1].substring(3);
    return (
      <pre key={index} className="bg-secondary p-4 rounded-md text-sm mt-2 overflow-x-auto">
        <code className={`language-${lang}`}>{codeContent}</code>
      </pre>
    );
  }
  // Video embedding support: [video](url)
  if (paragraph.startsWith("[video]") && paragraph.endsWith(")")) {
    const match = paragraph.match(/\[video\]\((.*)\)/);
    if (match) {
      const videoUrl = match[1];
      return (
        <div key={index} className="my-8 rounded-lg overflow-hidden">
          <video
            controls
            className="w-full rounded-lg"
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
  }
  // YouTube/Vimeo embed support: [embed](url)
  if (paragraph.startsWith("[embed]") && paragraph.endsWith(")")) {
    const match = paragraph.match(/\[embed\]\((.*)\)/);
    if (match) {
      const embedUrl = match[1];
      return (
        <div key={index} className="my-8 aspect-video rounded-lg overflow-hidden">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
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
    return <li key={index} className="ml-4 list-disc">{paragraph.substring(2)}</li>;
  }
   if (paragraph.startsWith("  - ")) {
    return <li key={index} className="ml-8 list-disc">{paragraph.substring(4)}</li>;
  }

  return <p key={index}>{paragraph}</p>;
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  // A bit of a hack to handle code blocks.
  const renderedContent = [];
  for (let i = 0; i < post.content.length; i++) {
    const currentLine = post.content[i];
    if (currentLine.startsWith("```")) {
      const lang = currentLine.substring(3);
      const codeContent = post.content[i + 1] || "";
      renderedContent.push(
         <pre key={i} className="bg-secondary p-4 rounded-md text-sm my-4 overflow-x-auto">
          <code className={`language-${lang}`}>{codeContent}</code>
        </pre>
      );
      i++; // Skip the next line as it's part of the code block
    } else {
      renderedContent.push(renderContent(currentLine, i));
    }
  }


  return (
    <div className="container py-20 md:py-24">
      <article className="prose prose-invert max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-muted-foreground mb-8">
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
          {post.featuredImage && (
            <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose-lg text-foreground/90 space-y-4">
          {renderedContent}
        </div>
      </article>
    </div>
  );
}
