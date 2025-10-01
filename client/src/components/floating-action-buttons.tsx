import { MessageCircle, Phone, Mail, MessageSquare, X } from "lucide-react";
import { useState } from "react";

export default function FloatingActionButtons() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);

  const openWhatsApp = () => {
    setShowWhatsAppForm(true);
    setIsExpanded(false);
  };

  const makeCall = () => {
    window.open("tel:+917009340397", "_self");
    setIsExpanded(false);
  };

  const openEmail = () => {
    setShowEmailForm(true);
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col-reverse space-y-reverse space-y-3 sm:space-y-4 z-50" data-testid="floating-buttons">
        {/* Main Contact Button */}
        <button 
          onClick={toggleExpanded}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          data-testid="floating-main"
          aria-label="Contact Options"
        >
          {isExpanded ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>

        {/* Contact Options - shown when expanded */}
        {isExpanded && (
          <>
            <button 
              onClick={openEmail}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-in slide-in-from-bottom-2 fade-in duration-200"
              style={{ animationDelay: '0ms' }}
              data-testid="floating-email"
              aria-label="Contact via Email"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button 
              onClick={openWhatsApp}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-in slide-in-from-bottom-2 fade-in duration-200"
              style={{ animationDelay: '50ms' }}
              data-testid="floating-whatsapp"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button 
              onClick={makeCall}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-in slide-in-from-bottom-2 fade-in duration-200"
              style={{ animationDelay: '100ms' }}
              data-testid="floating-call"
              aria-label="Make a phone call"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </>
        )}
      </div>

      {/* Email Form Popup */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4 animate-in fade-in duration-200" data-testid="email-form-popup" role="dialog" aria-modal="true">
          <div className="bg-background border border-border rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Send Email</h2>
              <button 
                onClick={() => setShowEmailForm(false)}
                className="text-muted-foreground hover:text-foreground"
                data-testid="close-email-form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const name = formData.get('name') as string;
              const email = formData.get('email') as string;
              const message = formData.get('message') as string;
              
              const subject = encodeURIComponent(`Digital Marketing Inquiry from ${name}`);
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
              const mailtoUrl = `mailto:info@pixocraftdigital.com?subject=${subject}&body=${body}`;
              
              window.open(mailtoUrl, '_blank');
              setShowEmailForm(false);
            }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  placeholder="Hi! I'm interested in your digital marketing services."
                  data-testid="input-message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors"
                data-testid="button-send-email"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Form Popup */}
      {showWhatsAppForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4 animate-in fade-in duration-200" data-testid="whatsapp-form-popup" role="dialog" aria-modal="true">
          <div className="bg-background border border-border rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-semibold">Send WhatsApp Message</h2>
              <button 
                onClick={() => setShowWhatsAppForm(false)}
                className="text-muted-foreground hover:text-foreground"
                data-testid="close-whatsapp-form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const name = formData.get('whatsapp-name') as string;
              const message = formData.get('whatsapp-message') as string;
              
              const phoneNumber = "917009340397";
              const fullMessage = name 
                ? `Hi! My name is ${name}. ${message}` 
                : message;
              const encodedMessage = encodeURIComponent(fullMessage);
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
              
              window.open(whatsappUrl, '_blank');
              setShowWhatsAppForm(false);
            }}>
              <div>
                <label htmlFor="whatsapp-name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="whatsapp-name"
                  name="whatsapp-name"
                  className="w-full px-2 sm:px-3 py-2 text-sm sm:text-base border border-input rounded-md bg-background"
                  data-testid="input-whatsapp-name"
                />
              </div>
              <div>
                <label htmlFor="whatsapp-message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="whatsapp-message"
                  name="whatsapp-message"
                  rows={3}
                  required
                  className="w-full px-2 sm:px-3 py-2 text-sm sm:text-base border border-input rounded-md bg-background resize-none"
                  placeholder="Hi! I'm interested in your digital marketing services."
                  data-testid="input-whatsapp-message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 sm:py-2.5 rounded-md hover:bg-green-600 transition-colors text-sm sm:text-base"
                data-testid="button-send-whatsapp"
              >
                Send WhatsApp Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
