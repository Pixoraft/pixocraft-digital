import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BlogCard from "@/components/blog-card";
import SEO from "@/components/seo/SEO";
import { getOrganizationSchema, getBreadcrumbSchema } from "@/lib/structured-data";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://pixocraft.in";
  
  const structuredData = [
    getOrganizationSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: `${siteUrl}/` },
      { name: "Blog", url: `${siteUrl}/blogs` }
    ])
  ];

  const { data: blogs, isLoading } = useQuery<Blog[]>({
    queryKey: ['/data/blogs.json'],
    queryFn: async () => {
      const response = await fetch('/data/blogs.json');
      if (!response.ok) throw new Error('Failed to fetch blogs');
      return response.json();
    }
  });

  const filteredBlogs = blogs?.filter(blog => 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  ) || [];

  const categories = blogs ? Array.from(new Set(blogs.map(blog => blog.category))) : [];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <SEO
        title="Digital Marketing Blog - Tips & Insights for Jalandhar Businesses"
        description="Explore our blog for the latest digital marketing tips, social media strategies, YouTube marketing, video editing, and business growth insights for Jalandhar and Punjab businesses."
        keywords="digital marketing blog, social media tips, YouTube marketing guide, video editing tutorials, Instagram marketing tips, Facebook marketing strategies, local SEO tips Jalandhar, digital marketing insights Punjab"
        canonical="/blogs"
        structuredData={structuredData}
      />
      <Navigation />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display gradient-text mb-4 sm:mb-6">
              Digital Marketing Blog
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert tips, strategies, and insights to grow your business online
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-base sm:text-lg rounded-full border-2"
                data-testid="input-blog-search"
              />
            </div>
          </div>

          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              <button
                onClick={() => setSearchQuery("")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  searchQuery === "" 
                    ? "bg-primary text-white" 
                    : "bg-muted hover:bg-muted/80"
                }`}
                data-testid="button-category-all"
              >
                All Posts
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSearchQuery(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    searchQuery.toLowerCase() === category.toLowerCase()
                      ? "bg-primary text-white" 
                      : "bg-muted hover:bg-muted/80"
                  }`}
                  data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No blogs found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
