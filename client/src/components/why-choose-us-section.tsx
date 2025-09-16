import { MapPin, DollarSign, Share2, Gift } from "lucide-react";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Local Jalandhar Expertise",
      description: "Deep understanding of local market trends and consumer behavior in Punjab",
      gradient: "from-primary to-accent"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Affordable & Transparent Pricing",
      description: "Clear pricing with no hidden costs. Get maximum value for your investment",
      gradient: "from-emerald-400 to-emerald-600"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      title: "Multi-Platform Coverage",
      description: "Complete coverage including Snapchat and YouTube, not just Facebook and Instagram",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Free Website Bonus",
      description: "Get a professional business website absolutely FREE with our Premium Plan",
      gradient: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-background" data-testid="why-choose-us-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
            Why Choose Pixocraft?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another agency - we're your growth partners
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group" data-testid={`feature-${index}`}>
              <div className={`bg-gradient-to-br ${feature.gradient} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold font-display mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
