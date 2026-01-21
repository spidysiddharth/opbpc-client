import logo from "@/assets/opbpc-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Vision & Mission", href: "#vision" },
    { label: "Initiatives", href: "#initiatives" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="OPBPC Logo" className="h-16 w-16 object-contain" />
                <div>
                  <h3 className="text-xl font-bold">OPBPC</h3>
                  <p className="text-sm text-primary-foreground/70">Business & Professionals Council</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 mb-4 max-w-md">
                First and only government-registered Purvanchal community in UAE. United by origin, connected by purpose.
              </p>
              <p className="text-secondary font-semibold text-sm">
                Overseas Purvanchal Business & Professionals Council
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/70 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3 text-primary-foreground/70">
                <li>
                  <a href="tel:+971506719358" className="hover:text-secondary transition-colors">
                    +971 50 671 9358
                  </a>
                </li>
                <li>
                  <a href="mailto:connect@opbpc.com" className="hover:text-secondary transition-colors">
                    connect@opbpc.com
                  </a>
                </li>
                <li>
                  <a href="https://opbpc.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                    www.opbpc.com
                  </a>
                </li>
                <li>Dubai, UAE</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} OPBPC. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="https://facebook.com/OPBPC" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                  Facebook
                </a>
                <a href="https://instagram.com/OPBPC" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                  Instagram
                </a>
                <a href="https://linkedin.com/company/OPBPC" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                  LinkedIn
                </a>
                <a href="https://x.com/OPBPC" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
