import { Phone, Package } from "lucide-react";
import FluidGlassHero from "./fluid-glass-hero";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      data-testid="hero-section"
    >
      {/* Gradient Background (WebGL Iridescence disabled for compatibility) */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10"></div>

      {/* Fluid Glass 3D Effect */}
      <FluidGlassHero text="Pixocraft Digital" colorHex="#667eea" />
      
      {/* Enhanced Floating Elements - Mobile Optimized */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 floating-element pointer-events-none">
        <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-400/20 sm:from-purple-400/30 to-pink-400/20 sm:to-pink-400/30 rounded-full blur-sm animate-pulse"></div>
      </div>
      <div className="absolute top-32 sm:top-40 right-4 sm:right-20 floating-element pointer-events-none" style={{animationDelay: '-2s'}}>
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400/20 sm:from-blue-400/25 to-cyan-400/20 sm:to-cyan-400/25 rounded-full blur-sm animate-pulse"></div>
      </div>
      <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-20 floating-element pointer-events-none" style={{animationDelay: '-4s'}}>
        <div className="w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-green-400/15 sm:from-green-400/20 to-teal-400/15 sm:to-teal-400/20 rounded-full blur-sm animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-4 sm:mb-6 leading-tight">
          Jalandhar's Best
          <span className="block bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200 text-white">
            Digital Marketing
          </span>
          <span className="block">
            & Social Media Agency
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          Grow your brand with Pixocraft Digital – Affordable, Creative & Result-Oriented.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-primary font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center w-full sm:w-auto min-w-[200px]"
            data-testid="button-consultation"
          >
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">Get Free Consultation</span>
          </button>
          <button 
            onClick={() => scrollToSection('packages')}
            className="border-2 border-white text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 flex items-center justify-center w-full sm:w-auto min-w-[200px]"
            data-testid="button-packages"
          >
            <Package className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm sm:text-base">View Packages</span>
          </button>
        </div>
      </div>
    </section>
  );
}
