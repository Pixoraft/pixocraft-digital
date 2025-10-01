import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PackagesSection from "@/components/packages-section";
import SEO from "@/components/seo/SEO";
import { getOrganizationSchema, getServiceSchema } from "@/lib/structured-data";
import { Smartphone, Palette, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";

export default function Pricing() {
  const [, setLocation] = useLocation();
  
  const structuredData = [
    getOrganizationSchema(),
    getServiceSchema(
      "Social Media Management",
      "Professional social media management services for Instagram, Facebook, LinkedIn, and YouTube. Monthly plans starting from ₹1,500.",
      "1500"
    ),
    getServiceSchema(
      "Video Editing Services",
      "High-quality video editing and reel creation for social media platforms. Prices from ₹500 per video.",
      "500"
    ),
    getServiceSchema(
      "Digital Marketing Services",
      "Complete digital marketing solutions including SEO, Google My Business optimization, and social media advertising setup.",
      "1000"
    )
  ];

  const goToContact = () => {
    setLocation('/contact');
  };

  const socialMediaPlans = [
    {
      title: "Instagram Handle Only",
      price: "₹2,000",
      period: "/month",
      icon: <Smartphone className="h-8 w-8 text-pink-500" />,
      color: "pink"
    },
    {
      title: "Facebook Page Only", 
      price: "₹1,500",
      period: "/month",
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      color: "blue"
    },
    {
      title: "Instagram + Facebook Combo",
      price: "₹3,000", 
      period: "/month",
      icon: <Smartphone className="h-8 w-8 text-purple-500" />,
      color: "purple",
      popular: true
    },
    {
      title: "All Platforms",
      subtitle: "Instagram, Facebook, LinkedIn, YouTube basic",
      price: "₹5,000",
      period: "/month", 
      icon: <Smartphone className="h-8 w-8 text-green-500" />,
      color: "green"
    }
  ];

  const creativeServices = [
    {
      title: "Logo Design",
      priceRange: "₹1,000 – ₹1,500",
      icon: <Palette className="h-6 w-6 text-orange-500" />
    },
    {
      title: "Poster/Banner Design",
      subtitle: "Digital use",
      priceRange: "₹300 – ₹500",
      unit: "each",
      icon: <Palette className="h-6 w-6 text-red-500" />
    },
    {
      title: "Reel/Video Editing", 
      subtitle: "30–60 sec",
      priceRange: "₹500 – ₹700",
      icon: <Palette className="h-6 w-6 text-indigo-500" />
    },
    {
      title: "Business Card Design",
      priceRange: "₹300",
      icon: <Palette className="h-6 w-6 text-teal-500" />
    },
    {
      title: "Flyer/Brochure",
      subtitle: "2–3 pages", 
      priceRange: "₹1,000",
      icon: <Palette className="h-6 w-6 text-cyan-500" />
    }
  ];

  const digitalMarketingAddons = [
    {
      title: "Google My Business Setup/Optimization",
      price: "₹1,000",
      type: "one-time",
      icon: <TrendingUp className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "SEO Audit + Basic Setup",
      price: "₹1,500", 
      type: "one-time",
      icon: <TrendingUp className="h-6 w-6 text-emerald-500" />
    },
    {
      title: "Facebook Ads Setup",
      subtitle: "campaign setup only, ad budget extra",
      price: "₹1,000",
      type: "one-time",
      icon: <TrendingUp className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Instagram Ads Setup", 
      subtitle: "campaign setup only, ad budget extra",
      price: "₹1,000",
      type: "one-time",
      icon: <TrendingUp className="h-6 w-6 text-pink-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <SEO
        title="Pricing & Packages - Affordable Digital Marketing Services"
        description="Transparent and affordable pricing for social media management, video editing, graphic design, and digital marketing services in Jalandhar. Starting from ₹1,500/month. No hidden costs!"
        keywords="digital marketing pricing Jalandhar, social media management cost, video editing prices Punjab, affordable marketing packages, Instagram management pricing, Facebook ads cost, YouTube marketing rates"
        canonical="/pricing"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
            Our Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent, affordable pricing with no hidden costs. Choose the perfect plan for your business growth.
          </p>
        </div>
      </section>

      {/* Main Packages Section */}
      <PackagesSection />

      {/* Social Media Management Section */}
      <section className="py-20 bg-background" data-testid="social-media-pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Smartphone className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Social Media Management
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">Monthly subscription plans</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialMediaPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                  plan.popular 
                    ? 'border-primary bg-primary/5 shadow-lg scale-105' 
                    : 'border-border bg-card hover:border-primary/50'
                }`}
                data-testid={`social-plan-${index}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`plan-title-${index}`}>
                    {plan.title}
                  </h3>
                  {plan.subtitle && (
                    <p className="text-sm text-muted-foreground mb-4">
                      {plan.subtitle}
                    </p>
                  )}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-primary" data-testid={`plan-price-${index}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <button 
                    className="w-full bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-all duration-300"
                    onClick={goToContact}
                    data-testid={`button-plan-${index}`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative & Design Services Section */}
      <section className="py-20 bg-muted/30" data-testid="creative-services-pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Palette className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Creative & Design Services
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">One-time design services</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeServices.map((service, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                data-testid={`creative-service-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2" data-testid={`service-title-${index}`}>
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.subtitle}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary" data-testid={`service-price-${index}`}>
                        {service.priceRange}
                      </span>
                      {service.unit && (
                        <span className="text-sm text-muted-foreground">
                          {service.unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Add-ons Section */}
      <section className="py-20 bg-background" data-testid="digital-marketing-addons">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                Digital Marketing Add-ons
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">One-time setup services</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {digitalMarketingAddons.map((addon, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                data-testid={`addon-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {addon.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2" data-testid={`addon-title-${index}`}>
                      {addon.title}
                    </h3>
                    {addon.subtitle && (
                      <p className="text-sm text-muted-foreground mb-3">
                        {addon.subtitle}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary" data-testid={`addon-price-${index}`}>
                        {addon.price}
                      </span>
                      <span className="text-sm bg-muted px-3 py-1 rounded-full">
                        {addon.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with our affordable, transparent pricing. No hidden costs, just results.
          </p>
          <button 
            className="bg-white text-primary font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg"
            onClick={goToContact}
            data-testid="button-cta-contact"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}