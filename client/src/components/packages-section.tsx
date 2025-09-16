import { Check, Gift } from "lucide-react";

export default function PackagesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const packages = [
    {
      name: "Starter",
      price: "₹4,999",
      period: "/month",
      features: [
        "FB + Insta (8 posts + 2 reels)",
        "Basic Snapchat story posting",
        "Monthly growth report",
        "Email support"
      ],
      buttonText: "Get Started",
      buttonClass: "w-full bg-primary text-primary-foreground font-semibold py-3 rounded-full hover:bg-primary/90 transition-all duration-300",
      isPopular: false
    },
    {
      name: "Growth",
      price: "₹9,999",
      period: "/month",
      features: [
        "FB + Insta (15 posts + 4 reels)",
        "Snapchat ads (basic)",
        "YouTube 2 videos (upload + SEO)",
        "Bi-weekly reports",
        "Phone support"
      ],
      buttonText: "Get Started",
      buttonClass: "w-full bg-accent text-accent-foreground font-semibold py-3 rounded-full hover:bg-accent/90 transition-all duration-300",
      isPopular: false
    },
    {
      name: "Premium",
      price: "₹19,999",
      period: "/month",
      features: [
        "FB + Insta + Snapchat + YouTube handling",
        "25+ posts + 8 reels + daily stories",
        "Advanced Snapchat ads",
        "YouTube 6 videos (SEO + thumbnails)",
        "Weekly reports + engagement replies",
        { text: "🎁 Free Business Website (₹10,000 value)", isGift: true }
      ],
      buttonText: "Get Started",
      buttonClass: "w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105",
      isPopular: true
    }
  ];

  return (
    <section id="packages" className="py-20 bg-background" data-testid="packages-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
            Choose Your Plan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Affordable packages designed to grow your business on social media
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`glass-card p-8 rounded-2xl pricing-card transition-all duration-500 relative ${
                pkg.isPopular ? 'border-2 border-primary' : ''
              }`}
              data-testid={`package-card-${pkg.name.toLowerCase()}`}
            >
              {pkg.isPopular && (
                <div className="popular-badge text-white text-sm font-semibold px-4 py-2 rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-display mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    {typeof feature === 'object' && feature.isGift ? (
                      <>
                        <Gift className="text-yellow-500 mr-3 h-5 w-5" />
                        <span className="font-semibold text-primary">{feature.text}</span>
                      </>
                    ) : (
                      <>
                        <Check className="text-green-500 mr-3 h-5 w-5" />
                        <span>{typeof feature === 'string' ? feature : feature.text}</span>
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
          ))}
        </div>
      </div>
    </section>
  );
}
