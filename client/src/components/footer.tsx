import { 
  SiFacebook, 
  SiInstagram, 
  SiYoutube 
} from "react-icons/si";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-foreground text-white py-8 sm:py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display gradient-text mb-3 sm:mb-4">Pixocraft Digital</h3>
            <p className="text-white/80 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              Jalandhar's premier digital marketing agency helping businesses grow their online presence.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a 
                href="https://facebook.com/pixocraftofficial" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center relative transform-gpu transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                data-testid="footer-facebook"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3), 0 2px 6px rgba(59, 130, 246, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                }}
              >
                <SiFacebook className="h-3 w-3 sm:h-4 sm:w-4 drop-shadow-sm relative z-10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/15"></div>
              </a>
              <a 
                href="https://instagram.com/pixocraftofficial" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-800 text-white rounded-full flex items-center justify-center relative transform-gpu transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                data-testid="footer-instagram"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3), 0 2px 6px rgba(236, 72, 153, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                }}
              >
                <SiInstagram className="h-3 w-3 sm:h-4 sm:w-4 drop-shadow-sm relative z-10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/15"></div>
              </a>
              <a 
                href="https://youtube.com/@pixocraftofficial" 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 via-red-600 to-red-800 text-white rounded-full flex items-center justify-center relative transform-gpu transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                data-testid="footer-youtube"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3), 0 2px 6px rgba(239, 68, 68, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                }}
              >
                <SiYoutube className="h-3 w-3 sm:h-4 sm:w-4 drop-shadow-sm relative z-10" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/15"></div>
              </a>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-white/80 text-sm sm:text-base">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors"
                  data-testid="footer-service-social"
                >
                  Social Media Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors"
                  data-testid="footer-service-video"
                >
                  Video Editing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors"
                  data-testid="footer-service-ads"
                >
                  Ad Campaigns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-primary transition-colors"
                  data-testid="footer-service-website"
                >
                  Website Development
                </button>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-white/80 text-sm sm:text-base">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('packages')}
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-pricing"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
            <ul className="space-y-1 sm:space-y-2 text-white/80 text-sm sm:text-base">
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="text-primary mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="text-primary mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">hello@pixocraft.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <MapPin className="text-primary mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Jalandhar, Punjab</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center text-white/80">
          <p className="text-xs sm:text-sm leading-relaxed px-2">
            &copy; 2024 Pixocraft Digital. All rights reserved. 
            <span className="block sm:inline sm:ml-1">Designed with ❤️ for local businesses in Jalandhar</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
