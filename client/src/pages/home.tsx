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
import SEO from "@/components/seo/SEO";
import { getOrganizationSchema, getLocalBusinessSchema, getWebsiteSchema } from "@/lib/structured-data";

export default function Home() {
  const structuredData = [
    getOrganizationSchema(),
    getLocalBusinessSchema(),
    getWebsiteSchema()
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased relative">
      <SEO
        title="Best Digital Marketing Agency in Jalandhar"
        description="Pixocraft Digital offers affordable digital marketing services in Jalandhar including social media management, video editing, YouTube marketing, web development, and local SEO. Get FREE consultation today!"
        keywords="digital marketing agency Jalandhar, social media management Jalandhar, video editing services Jalandhar, YouTube marketing Jalandhar, web development Jalandhar, local SEO Jalandhar, Instagram marketing Punjab, Facebook marketing Jalandhar, digital marketing services Punjab"
        canonical="/"
        structuredData={structuredData}
      />
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
    </div>
  );
}
