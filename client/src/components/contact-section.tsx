import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
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
// Removed 3D social icons for better compatibility

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactSection() {
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
    // Using a more reliable WhatsApp format
    const phoneNumber = "919501847843";
    const message = encodeURIComponent("Hi! I'm interested in your digital marketing services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const makeCall = () => {
    window.open("tel:+919501847843", "_self");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30" data-testid="contact-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display gradient-text mb-4 sm:mb-6 px-4">
            Let's Grow Together
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to take your business to the next level? Get in touch with us today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold font-display mb-4 sm:mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" data-testid="contact-form">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-1 sm:mb-2">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  data-testid="input-name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="block text-sm font-medium mb-1 sm:mb-2">
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  data-testid="input-phone"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-1 sm:mb-2">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  data-testid="input-email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-1 sm:mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Tell us about your business and goals..."
                  required
                  data-testid="textarea-message"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm sm:text-base resize-none"
                />
              </div>
              <Button 
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 sm:py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base"
                data-testid="button-submit"
              >
                <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold font-display mb-4 sm:mb-6">Get in Touch</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Phone className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Phone</p>
                    <p className="text-muted-foreground text-sm sm:text-base">+91 95018 47843</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-accent text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Email</p>
                    <p className="text-muted-foreground text-sm sm:text-base break-all">pixocraftoffical@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <MapPin className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Location</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Jalandhar, Punjab, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="space-y-4">
              <Button 
                onClick={openWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center text-sm sm:text-base"
                data-testid="button-whatsapp"
              >
                <SiWhatsapp className="text-lg sm:text-xl mr-2 sm:mr-3" />
                WhatsApp Us Now
              </Button>
              <Button 
                onClick={makeCall}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center text-sm sm:text-base"
                data-testid="button-call"
              >
                <Phone className="text-lg sm:text-xl mr-2 sm:mr-3" />
                <span className="text-center">Call Now for Free Consultation</span>
              </Button>
            </div>

            {/* Premium Social Media Links */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl">
              <h4 className="font-semibold mb-3 sm:mb-4 text-center text-sm sm:text-base">Follow Us</h4>
              <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
                <a 
                  href="https://www.facebook.com/share/1HR9eWsb6N/" 
                  className="social-icon-3d w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center relative transform-gpu transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:-translate-y-1 sm:hover:-translate-y-2"
                  data-testid="social-facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    boxShadow: '0 6px 20px rgba(59, 130, 246, 0.25), 0 4px 10px rgba(59, 130, 246, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                  }}
                >
                  <SiFacebook className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/20"></div>
                </a>
                <a 
                  href="https://www.instagram.com/pixocraft_official?igsh=MW93ZTdzNHp5bnpxag==" 
                  className="social-icon-3d w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-500 via-purple-600 to-pink-800 text-white rounded-full flex items-center justify-center relative transform-gpu transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:-translate-y-1 sm:hover:-translate-y-2"
                  data-testid="social-instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    boxShadow: '0 10px 25px rgba(236, 72, 153, 0.3), 0 6px 12px rgba(236, 72, 153, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                  }}
                >
                  <SiInstagram className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/20"></div>
                </a>
                <a 
                  href="https://snapchat.com/add/pixocraftofficial" 
                  className="social-icon-3d w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black rounded-full flex items-center justify-center relative transform-gpu transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:-translate-y-1 sm:hover:-translate-y-2"
                  data-testid="social-snapchat"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    boxShadow: '0 10px 25px rgba(251, 191, 36, 0.3), 0 6px 12px rgba(251, 191, 36, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                  }}
                >
                  <SiSnapchat className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/20"></div>
                </a>
                <a 
                  href="https://youtube.com/@pixocraft_official?si=NSc7_hj_7YBqVbG3" 
                  className="social-icon-3d w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 via-red-600 to-red-800 text-white rounded-full flex items-center justify-center relative transform-gpu transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:-translate-y-1 sm:hover:-translate-y-2"
                  data-testid="social-youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3), 0 6px 12px rgba(239, 68, 68, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                  }}
                >
                  <SiYoutube className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/20"></div>
                </a>
                <a 
                  href="https://linkedin.com/company/pixocraftofficial" 
                  className="social-icon-3d w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white rounded-full flex items-center justify-center relative transform-gpu transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:-translate-y-1 sm:hover:-translate-y-2"
                  data-testid="social-linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3), 0 6px 12px rgba(37, 99, 235, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
                  }}
                >
                  <SiLinkedin className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-sm relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/20"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
