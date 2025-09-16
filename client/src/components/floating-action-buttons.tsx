import { MessageCircle, Phone } from "lucide-react";

export default function FloatingActionButtons() {
  const openWhatsApp = () => {
    // Using a more reliable WhatsApp format
    const phoneNumber = "919876543210";
    const message = encodeURIComponent("Hi! I'm interested in your digital marketing services.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const makeCall = () => {
    window.open("tel:+919876543210", "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50" data-testid="floating-buttons">
      <button 
        onClick={openWhatsApp}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        data-testid="floating-whatsapp"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
      <button 
        onClick={makeCall}
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        data-testid="floating-call"
        aria-label="Make a phone call"
      >
        <Phone className="h-6 w-6" />
      </button>
    </div>
  );
}
