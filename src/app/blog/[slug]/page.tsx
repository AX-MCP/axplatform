
import { notFound } from "next/navigation";
import { getPostData, getAllPostSlugs } from "@/lib/blog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import Image from "next/image";
import { Fragment } from "react";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  // A simple function to parse the HTML and split it into sections
  const parseContent = (htmlContent: string) => {
    if (typeof DOMParser === 'undefined') {
        // Simple split for server-side rendering if DOMParser is not available
        const sections = htmlContent.split(/(?=<h2)/);
        return sections.map((section, index) => {
            const h2Match = section.match(/<h2.*?>(.*?)<\/h2>/);
            const title = h2Match ? h2Match[1] : (index === 0 ? post.title : '');
            const content = h2Match ? section.substring(section.indexOf('</h2>') + 5) : section;

            return {
                id: index,
                title: title,
                content: content
            };
        });
    }
    // This part will run on the client, but we will do our best to make it work on the server.
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const sections: { id: number; title: string | null; content: string }[] = [];
    let currentSection: { id: number; title: string | null; content: string } | null = null;
    let sectionIndex = 0;

    doc.body.childNodes.forEach((node) => {
      if (node.nodeName.toLowerCase() === 'h2') {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = { id: sectionIndex++, title: node.textContent, content: '' };
      } else if(node.nodeName.toLowerCase() === 'h3' && (node as HTMLElement).innerText.includes("Examples of MCP gateways")) {
         if (currentSection) {
            currentSection.content += (node as HTMLElement).outerHTML;
        }
      } else {
        if (!currentSection) {
          currentSection = { id: sectionIndex++, title: null, content: '' };
        }
        currentSection.content += (node as HTMLElement).outerHTML || node.textContent || '';
      }
    });

    if (currentSection) {
      sections.push(currentSection);
    }
    
    return sections.filter(s => s.title || s.content.trim() !== '<hr>');
  };

  const contentSections = parseContent(post.content);
  
  return (
    <div className="container py-20 md:py-24">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="mb-4 text-center space-y-6">
            {post.featuredImage && (
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/40">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-contain"
                  data-ai-hint="abstract technology"
                />
              </div>
            )}
            <div className="space-y-3">
              <p className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80 ring-1 ring-primary/20">
                Latest from AX Platform
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-accent">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.avatarUrl} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <span className="block text-sm uppercase tracking-wide text-primary/80">Author</span>
                  <span className="font-semibold text-foreground">{post.author}</span>
                </div>
              </div>
              <span className="text-xl">•</span>
              <time dateTime={post.date} className="text-sm uppercase tracking-wide">
                {format(new Date(post.date), "MMMM d, yyyy")}
              </time>
            </div>
        </header>

        {contentSections.map((section, index) => {
          const sectionTitle = section.title || (index === 0 ? post.title : `Section ${index + 1}`);
          return (
            <Fragment key={section.id}>
              {section.content.trim() && (
                <Card className="border border-border/60 bg-secondary/30 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-primary/40">
                  <CardHeader className="border-b border-border/50 bg-gradient-to-r from-primary/15 via-accent/10 to-transparent">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      <span className="rounded-full bg-primary/15 px-3 py-1 font-semibold text-primary/80">Section {index + 1}</span>
                      <span className="h-px flex-1 mx-3 bg-border" />
                      <span className="text-muted-foreground/70">Updated for modern reading</span>
                    </div>
                    <CardTitle className="text-3xl md:text-[32px] font-extrabold font-headline leading-tight text-foreground">
                      {sectionTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="blog-prose">
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </CardContent>
                </Card>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
