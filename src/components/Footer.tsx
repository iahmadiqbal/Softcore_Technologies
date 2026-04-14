import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Contact Strip */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-primary-foreground">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <MapPin className="w-5 h-5 shrink-0" />
            <span className="text-sm">Softcore Technologies, Main Office</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Phone className="w-5 h-5 shrink-0" />
            <span className="text-sm">+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-end">
            <Mail className="w-5 h-5 shrink-0" />
            <span className="text-sm">info@softcoretechnologies.com</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold">S</span>
            </div>
            <span className="font-heading font-bold text-hero-foreground text-lg">Softcore</span>
          </div>
          <p className="text-sm leading-relaxed">
            We deliver innovative digital solutions that empower businesses to grow and succeed in the modern world.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-hero-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Get in Touch</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-colors">Join Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-hero-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services#web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
            <li><Link to="/services#graphic-design" className="hover:text-primary transition-colors">Graphic Designing</Link></li>
            <li><Link to="/services#mobile-app" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
            <li><Link to="/services#digital-marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
            <li><Link to="/services#cloud-it" className="hover:text-primary transition-colors">Cloud & IT Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-hero-foreground mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" /> Softcore Technologies, Main Office</li>
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" /> +92 300 1234567</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" /> info@softcoretechnologies.com</li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors text-primary">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-hero-muted/20">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs">
          <span>© {new Date().getFullYear()} Softcore Technologies. All rights reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
