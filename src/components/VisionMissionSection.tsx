import { Target, Eye } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ShimmerText from "@/components/ShimmerText";

const VisionMissionSection = () => {
  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Direction
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <ShimmerText>Vision</ShimmerText> & <ShimmerText>Mission</ShimmerText>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <AnimatedSection animation="fade-left" delay={100}>
              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-10 text-primary-foreground h-full hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Eye className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
                  
                  <p className="text-xl text-primary-foreground/90 leading-relaxed">
                    To be the world's leading council that empowers entrepreneurs and professionals from Purvanchal and celebrates its rich culture.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Mission Card */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="group relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-10 h-full hover:-translate-y-2 transition-all duration-500 hover:shadow-xl">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                    <Target className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h3>
                  
                  <ul className="space-y-4">
                    {[
                      "Elevate Purvanchal's brand and influence globally",
                      "Enhance the global competitiveness of Purvanchal's entrepreneurs and professionals",
                      "Promote and integrate Purvanchal's rich cultural heritage",
                    ].map((item, index) => (
                      <li 
                        key={index} 
                        className="flex items-start gap-3 group/item"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <span className="w-2 h-2 mt-2 bg-secondary rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                        <span className="text-muted-foreground text-lg group-hover/item:text-foreground transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
