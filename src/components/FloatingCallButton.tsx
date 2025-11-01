import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCallButton = () => {
  const handleCallNow = () => {
    window.location.href = "tel:+919818931148";
  };

  return (
    <Button
      onClick={handleCallNow}
      size="lg"
      className="fixed bottom-8 right-8 z-50 rounded-full w-16 h-16 shadow-gold bg-gradient-to-r from-gold to-gold-light hover:opacity-90 text-spa-dark transition-smooth animate-pulse hover:animate-none"
      aria-label="Call Now"
    >
      <Phone className="h-6 w-6" />
    </Button>
  );
};

export default FloatingCallButton;
