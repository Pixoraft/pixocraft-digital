import { Calendar, User, Tag } from "lucide-react";
import { Link } from "wouter";

interface BlogCardProps {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
}

export default function BlogCard({ 
  title, 
  slug, 
  excerpt, 
  author, 
  date, 
  category, 
  image,
  tags 
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article 
        className="glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group"
        data-testid={`blog-card-${slug}`}
      >
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs sm:text-sm font-semibold">
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-bold font-display mb-3 sm:mb-4 line-clamp-2 group-hover:gradient-text transition-all">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 sm:mb-6 line-clamp-3 text-sm sm:text-base">
            {excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs flex items-center gap-1"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
          
          <div className="mt-4 sm:mt-6">
            <span className="text-primary font-semibold text-sm sm:text-base group-hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
