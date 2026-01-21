import { 
  Globe, 
  GraduationCap, 
  TrendingUp, 
  Palette,
  Network,
  Shield,
  Megaphone,
  Award,
  Heart,
  HandHeart
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ShimmerText from "@/components/ShimmerText";

const InitiativesSection = () => {
  const strategicInitiatives = [
    {
      icon: Globe,
      title: "Global Branding Campaigns",
      description: "Organize and represent at international summits and conferences",
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Provide mentorship, training, and networking events",
    },
    {
      icon: TrendingUp,
      title: "Market Access & Support",
      description: "Facilitate access to global markets, business promotion, and incubation",
    },
    {
      icon: Palette,
      title: "Cultural Heritage Promotion",
      description: "Organize art and cultural festivals and diaspora-focused events",
    },
  ];

  const whyJoin = [
    {
      icon: Network,
      title: "Powerful Network",
      description: "Connect with the global community of Purvanchal entrepreneurs and professionals",
    },
    {
      icon: Shield,
      title: "Strategic Support",
      description: "Access key resources and partnerships with influential global bodies",
    },
    {
      icon: Megaphone,
      title: "Collective Voice",
      description: "Represent Purvanchal's interests globally and influence policy",
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Enhance skills through targeted mentorship and training programs",
    },
    {
      icon: Heart,
      title: "Cultural Pride",
      description: "Celebrate and leverage Purvanchal's heritage",
    },
    {
      icon: HandHeart,
      title: "Social Impact",
      description: "Give back through community service and philanthropic initiatives",
    },
  ];

  return (
    <section id="initiatives" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Strategic Initiatives */}
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <ShimmerText>Strategic Initiatives</ShimmerText>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive programs designed to uplift our community
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {strategicInitiatives.map((item, index) => (
              <AnimatedSection key={item.title} animation="reveal" delay={index * 100}>
                <div className="group relative overflow-hidden bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border h-full hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <item.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Why Join */}
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Join <ShimmerText>OPBPC</ShimmerText>?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyJoin.map((item, index) => (
              <AnimatedSection key={item.title} animation="scale" delay={index * 80}>
                <div className="group flex items-start gap-4 bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative overflow-hidden">
                    <item.icon className="h-6 w-6 text-primary-foreground relative z-10" />
                    <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
