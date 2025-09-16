import { Phone, Package } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-gradient animate-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      data-testid="hero-section"
    >
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-element">
        <div className="w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-40 right-20 floating-element" style={{animationDelay: '-2s'}}>
        <div className="w-12 h-12 bg-white/15 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-20 left-20 floating-element" style={{animationDelay: '-4s'}}>
        <div className="w-20 h-20 bg-white/10 rounded-full blur-sm"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
          Jalandhar's Best
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
            Digital Marketing
          </span>
          <span className="block">& Social Media Agency</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Grow your brand with Pixocraft Digital – Affordable, Creative & Result-Oriented.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center"
            data-testid="button-consultation"
          >
            <Phone className="mr-2 h-5 w-5" />
            Get Free Consultation
          </button>
          <button 
            onClick={() => scrollToSection('packages')}
            className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 flex items-center"
            data-testid="button-packages"
          >
            <Package className="mr-2 h-5 w-5" />
            View Packages
          </button>
        </div>
      </div>
    </section>
  );
}
