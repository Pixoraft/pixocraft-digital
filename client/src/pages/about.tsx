import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo/SEO";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/structured-data";
import { useLocation } from "wouter";
import { Gift, Users, Target, Award, Heart, CheckCircle } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();
  
  const structuredData = [
    getOrganizationSchema(),
    getLocalBusinessSchema()
  ];

  const goToContact = () => {
    setLocation('/contact');
  };

  const stats = [
    { number: "50+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "100+", label: "Projects Completed", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "3+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Heart className="h-6 w-6" /> }
  ];

  const values = [
    {
      title: "Local Expertise",
      description: "Based in Jalandhar, we understand the local market dynamics and consumer behavior that drives results.",
      icon: <Target className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs, no surprises. Our pricing is upfront and affordable for businesses of all sizes.",
      icon: <Gift className="h-8 w-8 text-green-500" />
    },
    {
      title: "Global Standards",
      description: "We combine local expertise with global digital marketing strategies to deliver exceptional results.",
      icon: <Award className="h-8 w-8 text-purple-500" />
    },
    {
      title: "Comprehensive Solutions",
      description: "From social media management to web development, we provide end-to-end digital marketing solutions.",
      icon: <Users className="h-8 w-8 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <SEO
        title="About Us - Local Digital Marketing Experts in Jalandhar"
        description="Pixocraft Digital is a leading digital marketing agency in Jalandhar with 3+ years of experience. We've helped 50+ businesses grow their online presence with transparent pricing and proven results."
        keywords="digital marketing agency Jalandhar, about Pixocraft Digital, best marketing agency Punjab, local digital marketing experts, social media agency Jalandhar, digital marketing company Punjab"
        canonical="/about"
        structuredData={structuredData}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
            About Pixocraft Digital
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your local digital marketing experts combining creativity, strategy, and results to grow your business.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-background" data-testid="about-main">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-foreground">
                Your Local Digital Marketing Experts
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Based in Jalandhar, we understand the local market dynamics and consumer behavior. Our creative team combines local expertise with global digital marketing strategies to deliver exceptional results for your business.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We specialize in affordable, transparent pricing with no hidden costs. Our comprehensive solutions are designed to grow your brand across all major social media platforms.
              </p>
              
              {/* Special Offer Box */}
              <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white p-6 rounded-2xl mb-8">
                <div className="flex items-center">
                  <Gift className="text-2xl mr-4 h-8 w-8" />
                  <div>
                    <p className="font-semibold text-lg">Special Offer</p>
                    <p className="text-emerald-100">Premium Plan includes FREE Website worth ₹10,000</p>
                  </div>
                </div>
              </div>

              <button 
                className="bg-primary text-primary-foreground font-semibold py-4 px-8 rounded-full hover:bg-primary/90 transition-all duration-300"
                onClick={goToContact}
                data-testid="button-about-contact"
              >
                Work With Us
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Digital marketing experts at Pixocraft Digital agency in Jalandhar Punjab" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                loading="lazy"
                data-testid="about-image"
              />
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary" data-testid="clients-count">50+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30" data-testid="stats-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300"
                data-testid={`stat-${index}`}
              >
                <div className="flex justify-center mb-4 text-primary">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2" data-testid={`stat-number-${index}`}>
                  {stat.number}
                </h3>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background" data-testid="values-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display gradient-text mb-6">
              Why Choose Pixocraft Digital?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're not just another digital marketing agency. Here's what makes us different.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                data-testid={`value-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3" data-testid={`value-title-${index}`}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/30" data-testid="story-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
            Our Story
          </h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Founded with a mission to help local businesses in Jalandhar and beyond succeed in the digital world, 
              Pixocraft Digital has grown from a small team of passionate marketers to a trusted partner for businesses 
              looking to expand their online presence.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We believe that every business, regardless of size, deserves access to professional digital marketing 
              services that actually deliver results. That's why we've built our entire approach around transparency, 
              affordability, and measurable outcomes.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we're proud to have helped over 50 businesses grow their brands, increase their online visibility, 
              and achieve their digital marketing goals through our comprehensive suite of services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help grow your business with our expert digital marketing services.
          </p>
          <button 
            className="bg-white text-primary font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg"
            onClick={goToContact}
            data-testid="button-cta-about"
          >
            Get in Touch
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}