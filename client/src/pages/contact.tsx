import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  SiFacebook, 
  SiInstagram, 
  SiSnapchat, 
  SiYoutube, 
  SiLinkedin,
  SiWhatsapp
} from "react-icons/si";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openWhatsApp = () => {
    const phoneNumber = "919501847843";
    const message = encodeURIComponent("Hi! I'm interested in your digital marketing services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 95018 47843",
      action: () => window.open("tel:+919501847843", "_blank")
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "pixocraftoffical@gmail.com",
      action: () => window.open("mailto:pixocraftoffical@gmail.com", "_blank")
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Jalandhar, Punjab, India",
      action: () => {}
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      action: () => {}
    }
  ];

  const socialLinks = [
    {
      icon: <SiFacebook className="text-blue-600" />,
      name: "Facebook",
      url: "https://www.facebook.com/share/1HR9eWsb6N/"
    },
    {
      icon: <SiInstagram className="text-pink-500" />,
      name: "Instagram", 
      url: "https://www.instagram.com/pixocraft_official?igsh=MW93ZTdzNHp5bnpxag=="
    },
    {
      icon: <SiLinkedin className="text-blue-700" />,
      name: "LinkedIn",
      url: "https://linkedin.com/company/pixocraftdigital"
    },
    {
      icon: <SiYoutube className="text-red-600" />,
      name: "YouTube",
      url: "https://youtube.com/@pixocraft_official?si=NSc7_hj_7YBqVbG3"
    },
    {
      icon: <SiSnapchat className="text-yellow-400" />,
      name: "Snapchat",
      url: "https://snapchat.com/add/pixocraftdigital"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to grow your business? Let's discuss how we can help you achieve your digital marketing goals.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-background" data-testid="contact-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-display mb-4">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or questions..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full text-lg py-6"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-display mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 ${
                      info.title !== "Location" && info.title !== "Business Hours" 
                        ? "cursor-pointer hover:shadow-lg" 
                        : ""
                    }`}
                    onClick={info.action}
                    data-testid={`contact-info-${index}`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Quick Contact */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <SiWhatsapp className="h-8 w-8" />
                    <div>
                      <h3 className="font-semibold text-lg">Quick WhatsApp</h3>
                      <p className="text-green-100">Get instant responses</p>
                    </div>
                  </div>
                  <Button 
                    onClick={openWhatsApp}
                    className="bg-white text-green-600 hover:bg-green-50"
                    data-testid="button-whatsapp"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat Now
                  </Button>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center"
                      data-testid={`social-link-${index}`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <div className="text-2xl">
                          {social.icon}
                        </div>
                        <span className="text-sm font-medium text-muted-foreground">
                          {social.name}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold mb-3">How quickly can you start working on my project?</h3>
              <p className="text-muted-foreground">
                We can typically start within 24-48 hours after our initial consultation and agreement on project scope.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold mb-3">Do you provide reports on the work you do?</h3>
              <p className="text-muted-foreground">
                Yes! We provide regular reports (weekly, bi-weekly, or monthly) depending on your plan, showing growth metrics and engagement analytics.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold mb-3">Can I cancel or change my plan anytime?</h3>
              <p className="text-muted-foreground">
                Absolutely! We offer flexible plans that can be modified or cancelled with 30 days notice. No long-term contracts required.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold mb-3">Do you work with businesses outside Jalandhar?</h3>
              <p className="text-muted-foreground">
                Yes! While we're based in Jalandhar, we work with clients across India and internationally through digital collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}