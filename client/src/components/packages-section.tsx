import { Check, Gift } from "lucide-react";
import { useLocation } from "wouter";
import { ScrollReveal } from "@/hooks/useScrollReveal";

export default function PackagesSection() {
  const [, setLocation] = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If contact section doesn't exist on current page, navigate to contact page
      setLocation('/contact');
    }
  };

  const packages = [
    {
      name: "Starter Plan",
      price: "₹9,999",
      period: "/month",
      subtitle: "Perfect for local shops & startups starting their digital presence",
      features: [
        "Facebook + Instagram Handling",
        "9 Creative Posts + 6 Engaging Reels per month",
        "Captions + Trending Hashtags",
        "Stories on FB, Instagram & Snapchat (3–4 per week)",
        "Basic Meta Ads (FB + Insta) + Snapchat Ads",
        "Monthly Growth Report",
        "Result-based ad pricing - Only pay extra if ads perform well"
      ],
      buttonText: "Start Growing",
      buttonClass: "w-full bg-green-500 text-white font-semibold py-3 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-green-600 transition-all duration-300 text-sm sm:text-base",
      isPopular: false,
      color: "green"
    },
    {
      name: "Growth Plan",
      price: "₹19 999",
      period: "/month",
      subtitle: "For small & medium businesses ready to grow their brand",
      features: [
        "FB + Insta Handling",
        "20 High-Quality Posts + 10 Reels",
        "Graphics + Stories (custom designed)",
        "Meta Ads (FB + Insta) + Snapchat Ads with basic targeting",
        "YouTube Handling → 4 Videos uploaded + SEO",
        "5 Stories on FB, Instagram & Snapchat /month",
        "Bi-weekly Growth Report + Strategy Call",
        "Multi-platform daily stories for real engagement"
      ],
      buttonText: "Accelerate Growth",
      buttonClass: "w-full bg-blue-500 text-white font-semibold py-3 sm:py-3 px-4 sm:px-6 rounded-full hover:bg-blue-600 transition-all duration-300 text-sm sm:text-base",
      isPopular: false,
      color: "blue"
    },
    {
      name: "Premium Plan",
      price: "₹39,999",
      period: "/month",
      subtitle: "For brands wanting full-service professional marketing",
      features: [
        "FB + Insta + Snapchat + YouTube Handling",
        "30 Posts + 15 Premium Reels + Daily Custom Stories",
        "Advanced Meta Ads (FB + Insta) + Snapchat Ads targeting leads & sales",
        "YouTube Handling → 7 Videos (upload, SEO, custom thumbnails)",
        "Weekly Reports + Engagement Replies (DMs & comments management)",
        { text: "🎁 Free Business Website worth ₹10,000", isGift: true },
        "Maximum engagement & sales across all platforms",
        "Full-service professional marketing experience"
      ],
      buttonText: "Go Premium",
      buttonClass: "w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold py-3 sm:py-3 px-4 sm:px-6 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base",
      isPopular: true,
      color: "premium"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-background" data-testid="packages-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display gradient-text mb-4 sm:mb-6 px-4">
            Choose Your Plan
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Affordable packages designed to grow your business on social media
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-sm md:max-w-none mx-auto">
          {packages.map((pkg, index) => (
            <ScrollReveal
              key={index}
              animation="slideInUp"
              delay={index * 0.15}
              className="h-full"
            >
              <div 
                className={`glass-card p-6 sm:p-8 rounded-2xl pricing-card transition-all duration-500 relative flex flex-col h-full ${
                  pkg.isPopular ? 'border-2 border-primary' : ''
                }`}
                data-testid={`package-card-${pkg.name.toLowerCase()}`}
              >
              {pkg.isPopular && (
                <div className="popular-badge text-white text-sm font-semibold px-4 py-2 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold font-display mb-3">{pkg.name}</h3>
                <div className="mb-4 sm:mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-base sm:text-lg text-muted-foreground">{pkg.period}</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 italic leading-relaxed px-2">{pkg.subtitle}</p>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-1">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {typeof feature === 'object' && feature.isGift ? (
                      <>
                        <Gift className="text-yellow-500 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                        <span className="font-semibold text-primary text-sm sm:text-base leading-relaxed">{feature.text}</span>
                      </>
                    ) : (
                      <>
                        <Check className="text-green-500 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base leading-relaxed">{typeof feature === 'string' ? feature : feature.text}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <button 
                className={pkg.buttonClass}
                onClick={() => scrollToSection('contact')}
                data-testid={`button-package-${pkg.name.toLowerCase()}`}
              >
                {pkg.buttonText}
              </button>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
