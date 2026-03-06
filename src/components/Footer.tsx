import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Ajanta Exotica" className="h-12 mb-4 brightness-0 invert" />
            <p className="font-body text-sm leading-relaxed text-primary-foreground/60">
              Transforming spaces into vibrant, living environments. Your trusted partner for landscaping, nursery, and green solutions in Pune.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-primary-foreground transition-colors">Portfolio</a></li>
              <li>
                <a href="https://ajantaexotica.gallery" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary-foreground transition-colors">
                  Our Store <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/917499297249" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary-foreground transition-colors">
                  Chat with Us <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3 font-body text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-primary-foreground text-xs uppercase tracking-wide mb-0.5">Regd Office</p>
                  <p>C 704, Costa Blanca, Pan Card Club Road, Baner, Pune</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-primary-foreground text-xs uppercase tracking-wide mb-0.5">Nursery</p>
                  <p>Gut No. 62, At Post Urawade, Tal. Mulshi, Dist. Pune</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:info@ajantaexotica.com" className="hover:text-primary-foreground transition-colors">info@ajantaexotica.com</a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <div className="space-y-0.5">
                  <a href="tel:+917499297249" className="block hover:text-primary-foreground transition-colors">+91 7499297249</a>
                  <a href="tel:+919766422459" className="block hover:text-primary-foreground transition-colors">+91 9766422459</a>
                  <a href="tel:+919405455599" className="block hover:text-primary-foreground transition-colors">+91 9405455599</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2025 Ajanta Exotica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
