import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Vision", href: "#vision" },
    { label: "Why Landora", href: "#why-landora" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Disclaimer", href: "#" },
    { label: "Careers", href: "#" }
  ];

  const services = [
    { label: "Open Plot Ventures", href: "#services" },
    { label: "Vastu Layouts", href: "#services" },
    { label: "Clear Documentation", href: "#services" },
    { label: "Investment Support", href: "#services" }
  ];

  const locations = [
    "Hyderabad",
    "Visakhapatnam", 
    "Amaravati",
    "Kurnool",
    "Tirupati",
    "Warangal"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-landora-blue text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/Uploads/81691393-e7a7-4826-a3a2-e6523e9a48d2.png" 
                alt="Landora Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-2xl font-bold">LANDORA</h3>
                <p className="text-sm text-white/80">Smart land investments</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Transforming land into landmarks. Trusted real estate solutions built on ethics, 
              transparency & vision for your stronger tomorrow.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-landora-orange" />
                <span className="text-sm">+91 99999 99999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-landora-orange" />
                <span className="text-sm">info@landora.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-landora-orange mt-1" />
                <span className="text-sm">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white hover:text-landora-orange transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-white/80 hover:text-white hover:text-landora-orange transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4 mt-8">Locations</h4>
            <div className="grid grid-cols-2 gap-2">
              {locations.map((location, index) => (
                <span key={index} className="text-white/80 text-sm">
                  {location}
                </span>
              ))}
            </div>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white hover:text-landora-orange transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <h4 className="text-lg font-bold mb-6 mt-8">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-landora-orange transition-colors duration-200 group"
                >
                  <social.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © {new Date().getFullYear()} Landora Projects & Developers Pvt Ltd. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <span>RERA Registration: Available</span>
              <span>•</span>
              <span>GST: 36XXXXX1234Z1Z5</span>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-white/60 text-center max-w-4xl mx-auto">
              Disclaimer: All information provided is for general guidance only. Please verify all details, 
              legal documents, and approvals before making any investment decisions. Past performance and 
              projections do not guarantee future results. Consult our legal team for complete documentation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;