import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import WebDevSection from "@/components/web-dev-section";
import PackagesSection from "@/components/packages-section";
import PortfolioSection from "@/components/portfolio-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingActionButtons from "@/components/floating-action-buttons";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WebDevSection />
      <PackagesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}
