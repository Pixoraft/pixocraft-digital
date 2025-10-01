import { useQuery } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo/SEO";
import { getArticleSchema, getOrganizationSchema, getBreadcrumbSchema } from "@/lib/structured-data";
import { Calendar, User, Tag, ArrowLeft, Loader2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

export default function BlogDetail() {
  const [, params] = useRoute("/blog/:slug");
  const { toast } = useToast();

  const { data: blogs, isLoading } = useQuery<Blog[]>({
    queryKey: ['/data/blogs.json'],
    queryFn: async () => {
      const response = await fetch('/data/blogs.json');
      if (!response.ok) throw new Error('Failed to fetch blogs');
      return response.json();
    }
  });

  const blog = blogs?.find(b => b.slug === params?.slug);
  const relatedBlogs = blog ? blogs?.filter(b => 
    b.slug !== params?.slug && 
    (b.category === blog.category || b.tags.some(tag => blog.tags.includes(tag)))
  ).slice(0, 3) : [];

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.excerpt,
          url: url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(url);
      toast({
        title: "Link Copied!",
        description: "Blog link has been copied to clipboard.",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blogs">
            <Button data-testid="button-back-to-blogs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blogs
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://pixocraft.in";
  const blogUrl = `${siteUrl}/blog/${blog.slug}`;
  
  const structuredData = [
    getOrganizationSchema(),
    getArticleSchema({
      title: blog.title,
      description: blog.excerpt,
      image: blog.image,
      datePublished: blog.date,
      author: blog.author,
      url: blogUrl
    }),
    getBreadcrumbSchema([
      { name: "Home", url: `${siteUrl}/` },
      { name: "Blog", url: `${siteUrl}/blogs` },
      { name: blog.title, url: blogUrl }
    ])
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <SEO
        title={blog.title}
        description={blog.excerpt}
        keywords={`${blog.tags.join(", ")}, digital marketing, ${blog.category}`}
        canonical={`/blog/${blog.slug}`}
        article={true}
        author={blog.author}
        publishedTime={blog.date}
        ogImage={blog.image}
        structuredData={structuredData}
      />
      <Navigation />
      
      <article className="pt-24 sm:pt-32">
        <div className="relative h-64 sm:h-96 lg:h-[500px] mb-12">
          <img 
            src={blog.image} 
            alt={`${blog.title} - ${blog.category} article by Pixocraft Digital`}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-2xl mb-12">
            <Link href="/blogs">
              <Button 
                variant="ghost" 
                className="mb-6"
                data-testid="button-back"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Button>
            </Link>

            <div className="mb-6">
              <span className="px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold">
                {blog.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-6 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="ml-auto"
                data-testid="button-share"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              {blog.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl sm:text-3xl font-bold font-display mt-8 mb-4">
                      {paragraph.replace('##', '').trim()}
                    </h2>
                  );
                } else if (paragraph.startsWith('#')) {
                  return (
                    <h3 key={index} className="text-xl sm:text-2xl font-bold font-display mt-6 mb-3">
                      {paragraph.replace('#', '').trim()}
                    </h3>
                  );
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="font-bold text-lg mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                } else if (paragraph.match(/^\d+\./)) {
                  return (
                    <p key={index} className="mb-4 pl-4 text-base sm:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  );
                } else {
                  const formattedParagraph = paragraph
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>');
                  
                  return (
                    <p 
                      key={index} 
                      className="mb-6 text-base sm:text-lg leading-relaxed text-foreground/90"
                      dangerouslySetInnerHTML={{ __html: formattedParagraph }}
                    />
                  );
                }
              })}
            </div>

            <div className="pt-8 border-t border-border">
              <h4 className="text-lg font-semibold mb-4">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm flex items-center gap-1"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {relatedBlogs && relatedBlogs.length > 0 && (
            <div className="mb-20">
              <h2 className="text-3xl font-bold font-display mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`}>
                    <article className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={relatedBlog.image} 
                          alt={`${relatedBlog.title} - ${relatedBlog.category} article by Pixocraft Digital`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-2 line-clamp-2">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedBlog.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
