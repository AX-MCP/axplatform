
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
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="mb-8 text-center">
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
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
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

        {contentSections.map((section, index) => (
          <Fragment key={section.id}>
            {section.content.trim() && (
                 <Card>
                    {section.title && (
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold font-headline">{section.title}</CardTitle>
                        </CardHeader>
                    )}
                    <CardContent className="prose prose-invert max-w-none text-lg text-muted-foreground">
                        <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    </CardContent>
                </Card>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
