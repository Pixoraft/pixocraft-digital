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
    <footer className="bg-foreground text-white py-12" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-display gradient-text mb-4">Pixocraft Digital</h3>
            <p className="text-white/80 mb-4">
              Jalandhar's premier digital marketing agency helping businesses grow their online presence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                data-testid="footer-facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                data-testid="footer-instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                data-testid="footer-youtube"
              >
                <SiYoutube className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
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
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
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
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center">
                <Phone className="text-primary mr-2 h-4 w-4" />
                +91 98765 43210
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-2 h-4 w-4" />
                hello@pixocraft.com
              </li>
              <li className="flex items-center">
                <MapPin className="text-primary mr-2 h-4 w-4" />
                Jalandhar, Punjab
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>&copy; 2024 Pixocraft Digital. All rights reserved. | Designed with ❤️ for local businesses in Jalandhar</p>
        </div>
      </div>
    </footer>
  );
}
