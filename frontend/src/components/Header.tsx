import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const services = [
  { name: "Web Development", path: "/services#web-development" },
  { name: "Graphic Designing", path: "/services#graphic-design" },
  { name: "Mobile App Development", path: "/services#mobile-app" },
  { name: "Digital Marketing & SEO", path: "/services#digital-marketing" },
  { name: "Cloud & IT Support", path: "/services#cloud-it" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/softcoretechnology.png" 
            alt="Softcore Technologies" 
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive("/") ? "text-gray-700" : "text-gray-700"}`} style={isActive("/") ? { color: '#5A2D82' } : {}}>
            Home
          </Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-gray-700" : "text-gray-700"}`} style={isActive("/about") ? { color: '#5A2D82' } : {}}>
            About
          </Link>
          <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <Link to="/services" className={`text-sm font-medium transition-colors flex items-center gap-1 ${isActive("/services") ? "text-gray-700" : "text-gray-700"}`} style={isActive("/services") ? { color: '#5A2D82' } : {}}>
              Our Services <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </Link>
            <div className={`absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-xl border border-border overflow-hidden transition-all duration-200 ${dropdownOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}>
              {services.map((s) => (
                <Link key={s.name} to={s.path} className="block px-4 py-3 text-sm text-foreground transition-colors" style={{ '&:hover': { backgroundColor: '#5A2D82', color: 'white' } }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#5A2D82'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = ''; }}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <Link 
            to="/contact" 
            className="text-sm font-medium px-5 py-2 rounded-lg transition-all font-semibold"
            style={{ backgroundColor: '#F4B400', color: '#5A2D82' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#5A2D82'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#F4B400'; e.currentTarget.style.color = '#5A2D82'; }}
          >
            Get in Touch
          </Link>
          <Link to="/careers" className={`text-sm font-medium transition-colors ${isActive("/careers") ? "text-gray-700" : "text-gray-700"}`} style={isActive("/careers") ? { color: '#5A2D82' } : {}}>
            Join Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link to="/" className="text-gray-700 hover:text-primary py-2">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary py-2">About</Link>
            <div>
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-gray-700 hover:text-primary py-2 flex items-center gap-1 w-full">
                Our Services <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="pl-4 flex flex-col gap-2 mt-1">
                  {services.map((s) => (
                    <Link key={s.name} to={s.path} className="text-gray-600 hover:text-primary text-sm py-1">{s.name}</Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contact" className="text-gray-700 hover:text-primary py-2">Get in Touch</Link>
            <Link to="/careers" className="text-gray-700 hover:text-primary py-2">Join Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};
