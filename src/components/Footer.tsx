import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spa-dark border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-gold text-xl font-bold mb-4">Russian Spa Centre</h3>
            <p className="text-muted-foreground">
              Experience authentic Russian Banya traditions in the heart of New Delhi
            </p>
          </div>

          <div>
            <h3 className="text-gold text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                <span>Mahipalpur, New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <a href="tel:+911234567890" className="hover:text-gold transition-smooth">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a href="mailto:info@russianspacentre.com" className="hover:text-gold transition-smooth">
                  info@russianspacentre.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-gold text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold shrink-0" />
                <span>Monday - Sunday</span>
              </div>
              <p className="ml-7">10:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Russian Spa Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
