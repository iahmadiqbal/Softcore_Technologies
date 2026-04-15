import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a2e' }} className="text-slate-300">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <img 
              src="/softcoretechnology.png" 
              alt="Softcore Technologies" 
              className="h-40 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed">
            We deliver innovative digital solutions that empower businesses to grow and succeed in the modern world.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors" style={{ '&:hover': { color: '#5A2D82' } }} onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Get in Touch</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Join Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services#web-development" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Web Development</Link></li>
            <li><Link to="/services#graphic-design" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Graphic Designing</Link></li>
            <li><Link to="/services#mobile-app" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Mobile Apps</Link></li>
            <li><Link to="/services#digital-marketing" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Digital Marketing</Link></li>
            <li><Link to="/services#cloud-it" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Cloud & IT Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-white mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#F4B400' }} /> 
              Suite 200 - 1212 - 1st SE, Calgary AB T2G 2H8, 4629 3rd Avenue Edson, Calgary, Alberta T7E 1C2, Canada
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#F4B400' }} /> 
              +1 403-477-7967
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#F4B400' }} /> 
              info@softcoretechnologies.com
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#F4B400' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path strokeWidth="2" d="M12 6v6l4 2"/>
              </svg>
              Open today 09:00 a.m. – 05:00 p.m.
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/softechcore/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(244, 180, 0, 0.1)', color: '#F4B400' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F4B400'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(244, 180, 0, 0.1)'; e.currentTarget.style.color = '#F4B400'; }}>
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://x.com/technologi43645" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(244, 180, 0, 0.1)', color: '#F4B400' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F4B400'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(244, 180, 0, 0.1)'; e.currentTarget.style.color = '#F4B400'; }}>
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/soft_coretechnologies/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: 'rgba(244, 180, 0, 0.1)', color: '#F4B400' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#F4B400'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(244, 180, 0, 0.1)'; e.currentTarget.style.color = '#F4B400'; }}>
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs">
          <span>© {new Date().getFullYear()} Softcore Technologies. All rights reserved.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#F4B400'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
