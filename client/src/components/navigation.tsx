import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import navLogo from "@assets/image_1759294444044.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 nav-glass" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer" data-testid="logo">
                <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center">
                  <img 
                    src={navLogo} 
                    alt="Pixocraft Digital - Digital Marketing Agency Jalandhar Logo" 
                    className="w-full h-full object-contain"
                    width="40"
                    height="40"
                  />
                </div>
                <span className="text-2xl font-bold font-display gradient-text">
                  Pixocraft Digital
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/">
                <span 
                  className={`transition-colors duration-200 font-medium ${
                    location === '/' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="nav-home"
                >
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span 
                  className={`transition-colors duration-200 font-medium ${
                    location === '/about' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="nav-about"
                >
                  About
                </span>
              </Link>
              <Link href="/pricing">
                <span 
                  className={`transition-colors duration-200 font-medium ${
                    location === '/pricing' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="nav-pricing"
                >
                  Pricing
                </span>
              </Link>
              <Link href="/blogs">
                <span 
                  className={`transition-colors duration-200 font-medium ${
                    location === '/blogs' || location.startsWith('/blog/') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="nav-blogs"
                >
                  Blogs
                </span>
              </Link>
              <Link href="/contact">
                <span 
                  className={`transition-colors duration-200 font-medium ${
                    location === '/contact' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="nav-contact"
                >
                  Contact
                </span>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden" data-testid="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2">
              <Link href="/" onClick={closeMenu}>
                <span 
                  className={`block px-3 py-2 transition-colors duration-200 font-medium w-full text-left ${
                    location === '/' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="mobile-nav-home"
                >
                  Home
                </span>
              </Link>
              <Link href="/about" onClick={closeMenu}>
                <span 
                  className={`block px-3 py-2 transition-colors duration-200 font-medium w-full text-left ${
                    location === '/about' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="mobile-nav-about"
                >
                  About
                </span>
              </Link>
              <Link href="/pricing" onClick={closeMenu}>
                <span 
                  className={`block px-3 py-2 transition-colors duration-200 font-medium w-full text-left ${
                    location === '/pricing' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="mobile-nav-pricing"
                >
                  Pricing
                </span>
              </Link>
              <Link href="/blogs" onClick={closeMenu}>
                <span 
                  className={`block px-3 py-2 transition-colors duration-200 font-medium w-full text-left ${
                    location === '/blogs' || location.startsWith('/blog/') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="mobile-nav-blogs"
                >
                  Blogs
                </span>
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                <span 
                  className={`block px-3 py-2 transition-colors duration-200 font-medium w-full text-left ${
                    location === '/contact' ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
                  data-testid="mobile-nav-contact"
                >
                  Contact
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
