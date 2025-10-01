import { Facebook, Video, Image, Megaphone, Code, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function ServicesSection() {
  const services = [
    {
      icon: <Facebook className="h-8 w-8" />,
      title: "Social Media Handling",
      description: "Complete management of your Facebook, Instagram, Snapchat, YouTube, and LinkedIn profiles with engaging content and strategic posting.",
      color: "text-primary"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Editing & Reels",
      description: "Professional video editing and Instagram Reels creation to showcase your brand with compelling visual storytelling.",
      color: "text-accent"
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Thumbnail Design",
      description: "Eye-catching thumbnail designs for YouTube videos and social media posts that drive clicks and engagement.",
      color: "text-primary"
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Ad Campaign Management",
      description: "Strategic advertising campaigns across all platforms with targeted audience reach and optimized ROI.",
      color: "text-accent"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Website Development",
      description: "Modern, responsive websites that convert visitors into customers. Included FREE with Premium Plan.",
      color: "text-primary"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Analytics & Reports",
      description: "Detailed performance reports and analytics to track your social media growth and engagement metrics.",
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30" data-testid="services-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to boost your online presence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal 
              key={index}
              animation="slideInUp"
              delay={index * 0.1}
              className="h-full"
            >
              <div 
                className="glass-card p-8 rounded-2xl service-card transition-all duration-300 hover:shadow-2xl h-full flex flex-col"
                data-testid={`service-card-${index}`}
              >
                <div className={`text-4xl ${service.color} mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold font-display mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
