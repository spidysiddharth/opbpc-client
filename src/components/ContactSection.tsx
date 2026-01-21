import { Phone, Mail, Globe, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import ShimmerText from "@/components/ShimmerText";

const ContactSection = () => {
  const socialLinks = [
    { label: "Facebook", url: "https://facebook.com/OPBPC" },
    { label: "Instagram", url: "https://instagram.com/OPBPC" },
    { label: "LinkedIn", url: "https://linkedin.com/company/OPBPC" },
    { label: "X (Twitter)", url: "https://x.com/OPBPC" },
  ];

  const contactItems = [
    { icon: Phone, label: "Phone", value: "+971 50 671 9358", href: "tel:+971506719358" },
    { icon: Mail, label: "Email", value: "connect@opbpc.com", href: "mailto:connect@opbpc.com" },
    { icon: Globe, label: "Website", value: "www.opbpc.com", href: "https://opbpc.com" },
    { icon: MapPin, label: "Location", value: "Dubai, UAE", href: null },
  ];

  const benefits = [
    "Access to exclusive events",
    "Business networking opportunities",
    "Mentorship and skill development",
    "Cultural celebrations & heritage events",
  ];

  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <AnimatedSection animation="fade-left">
                <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                  Get in Touch
                </span>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-left" delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Join the <ShimmerText className="text-secondary">OPBPC</ShimmerText> Family Today
                </h2>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  For membership registration, partnership inquiries, or any questions, we'd love to hear from you. Connect with us and become part of our growing community.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <div className="space-y-4 mb-8">
                  {contactItems.map((item, index) => {
                    const content = (
                      <div className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 overflow-hidden relative">
                          <item.icon className="h-5 w-5 relative z-10 group-hover:text-secondary-foreground transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm text-primary-foreground/60">{item.label}</p>
                          <p className="font-semibold text-lg group-hover:text-secondary transition-colors">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </AnimatedSection>

              {/* Social Links */}
              <AnimatedSection animation="fade-up" delay={400}>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* CTA Card */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="bg-background text-foreground rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Become a <ShimmerText>Member</ShimmerText>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join the first and only government-registered Purvanchal community in the UAE. Access exclusive benefits, networking opportunities, and be part of a global movement.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={benefit} 
                      className="flex items-center gap-3 group/item"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover/item:bg-primary group-hover/item:scale-110 transition-all">
                        <span className="w-2 h-2 bg-primary rounded-full group-hover/item:bg-primary-foreground transition-colors" />
                      </span>
                      <span className="text-foreground group-hover/item:text-primary transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button variant="hero" size="xl" className="w-full group/btn relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Register for Membership
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
