
import { notFound } from "next/navigation";
import { getPostData, getAllPostSlugs } from "@/lib/blog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import Image from "next/image";
import { Fragment } from "react";
import type { Metadata } from "next";

const SITE_URL = "https://paxai.app";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const ogImage = post.featuredImage
    ? `${SITE_URL}${post.featuredImage}`
    : `${SITE_URL}/images/og-default.png`;

  const metadata: Metadata = {
    title: `${post.title} | AX Platform`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "AX Platform",
      url: `${SITE_URL}/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };

  if (post.author) {
    metadata.authors = [{ name: post.author }];
    if (metadata.openGraph) {
      metadata.openGraph.authors = [post.author];
    }
  }

  return metadata;
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  // A simple function to parse the HTML and split it into sections
  const parseContent = (htmlContent: string) => {
    if (typeof DOMParser === 'undefined') {
        // For servers/scrapers, just return the whole content as one section
        // to ensure it's always rendered and accessible. This avoids brittle
        // server-side HTML parsing. The client will still progressively
        // enhance if it needs to.
        return [{
            id: 0,
            title: post.title,
            content: htmlContent
        }];
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
              {post.author && (
                <>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-10 w-10">
                      {post.avatarUrl && <AvatarImage src={post.avatarUrl} alt={post.author} />}
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <span className="block text-sm uppercase tracking-wide text-primary/80">Author</span>
                      <span className="font-semibold text-foreground">{post.author}</span>
                    </div>
                  </div>
                  {post.date && !isNaN(new Date(post.date).getTime()) && <span className="text-xl">•</span>}
                </>
              )}
              {post.date && !isNaN(new Date(post.date).getTime()) && (
                <time dateTime={post.date} className="text-sm uppercase tracking-wide">
                  {format(new Date(post.date), "MMMM d, yyyy")}
                </time>
              )}
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
