export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pixocraft Digital",
  "url": "https://pixocraft.in",
  "logo": "https://pixocraft.in/attached_assets/image_1759294456378.png",
  "description": "Leading digital marketing agency in Jalandhar specializing in social media management, video editing, YouTube marketing, web development, and local SEO services.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jalandhar",
    "addressRegion": "Punjab",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-95018-47843",
    "contactType": "customer service",
    "email": "pixocraftoffical@gmail.com",
    "availableLanguage": ["English", "Hindi", "Punjabi"]
  },
  "sameAs": [
    "https://www.instagram.com/pixocraft_official",
    "https://linkedin.com/company/pixocraftdigital",
    "https://youtube.com/@pixocraft_official"
  ]
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pixocraft.in/#localbusiness",
  "name": "Pixocraft Digital",
  "image": "https://pixocraft.in/attached_assets/image_1759294456378.png",
  "url": "https://pixocraft.in",
  "telephone": "+91-95018-47843",
  "email": "pixocraftoffical@gmail.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jalandhar",
    "addressRegion": "Punjab",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.3260,
    "longitude": 75.5762
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 31.3260,
      "longitude": 75.5762
    },
    "geoRadius": 100000
  }
});

export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Pixocraft Digital",
  "url": "https://pixocraft.in",
  "description": "Professional digital marketing services in Jalandhar - Social media management, video editing, YouTube marketing, and web development",
  "publisher": {
    "@type": "Organization",
    "name": "Pixocraft Digital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pixocraft.in/attached_assets/image_1759294456378.png"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pixocraft.in/blogs?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});

export const getServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Pixocraft Digital",
    "url": "https://pixocraft.in"
  },
  "areaServed": {
    "@type": "City",
    "name": "Jalandhar"
  },
  "description": description,
  ...(price && {
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "INR"
    }
  })
});

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const getArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": article.title,
  "description": article.description,
  "image": [article.image],
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Pixocraft Digital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pixocraft.in/attached_assets/image_1759294456378.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
