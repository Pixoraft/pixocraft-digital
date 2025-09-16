import { Gift } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display gradient-text mb-6">
            About Pixocraft Digital
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold font-display mb-6 text-foreground">
              Your Local Digital Marketing Experts
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Based in Jalandhar, we understand the local market dynamics and consumer behavior. Our creative team combines local expertise with global digital marketing strategies to deliver exceptional results for your business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We specialize in affordable, transparent pricing with no hidden costs. Our comprehensive solutions are designed to grow your brand across all major social media platforms.
            </p>
            <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white p-6 rounded-2xl">
              <div className="flex items-center">
                <Gift className="text-2xl mr-4 h-8 w-8" />
                <div>
                  <p className="font-semibold text-lg">Special Offer</p>
                  <p className="text-emerald-100">Premium Plan includes FREE Website worth ₹10,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Creative team working on digital marketing" 
              className="rounded-2xl shadow-2xl w-full h-auto"
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
  );
}
