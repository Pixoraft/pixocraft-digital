import { ArrowRight, Globe, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WebDevSection() {
  const redirectToPixoCraft = () => {
    window.open('https://pixocraft.in', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden" data-testid="webdev-section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '-2s'}}></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-white font-medium">Premium Web Development</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
            Need a Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-200">
              Website?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get a stunning, conversion-focused website that drives results for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Custom Web Design</h3>
                  <p className="text-white/80">Professional, mobile-responsive websites tailored to your brand</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">E-commerce Solutions</h3>
                  <p className="text-white/80">Full-featured online stores with payment integration</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">SEO Optimized</h3>
                  <p className="text-white/80">Built for search engines and conversion optimization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="text-center lg:text-left">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Online Presence?
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                Visit our dedicated web development platform for premium websites and e-commerce solutions.
              </p>
              
              <Button 
                onClick={redirectToPixoCraft}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                data-testid="button-pixocraft-redirect"
              >
                <Globe className="mr-3 h-6 w-6" />
                Visit PixoCraft.in
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <p className="text-white/60 text-sm mt-4">
                Redirects to pixocraft.in for professional web development services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}