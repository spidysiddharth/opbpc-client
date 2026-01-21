import { MapPin, Heart, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ShimmerText from "@/components/ShimmerText";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <AnimatedSection animation="fade-left">
                <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                  About OPBPC
                </span>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-left" delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Your Extended Family in the{" "}
                  <ShimmerText>UAE</ShimmerText>
                </h2>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={200}>
                <p className="text-muted-foreground text-lg mb-6">
                  Purvanchal, located in the eastern part of Uttar Pradesh and parts of western Bihar, is a land rich in culture, resilience, and tradition. Known for its vibrant festivals, strong family values, and hardworking people, Purvanchal has produced countless professionals, entrepreneurs, and artisans who carry their heritage with pride across the globe.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-up" delay={300}>
                <p className="text-muted-foreground text-lg mb-8">
                  For many living in the UAE, Purvanchal is not just a place — it's an emotion. It's the taste of home-cooked food, the sound of Bhojpuri and Awadhi, and the memories of simplicity and strength.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: MapPin, title: "UP", subtitle: "Uttar Pradesh" },
                    { icon: Heart, title: "Bihar", subtitle: "Rich Heritage" },
                    { icon: Users, title: "Jharkhand", subtitle: "United Community" },
                  ].map((item, index) => (
                    <div 
                      key={item.title}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{item.title}</span>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Visual */}
            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-primary-foreground overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-2xl rotate-12 opacity-80 group-hover:rotate-[20deg] transition-transform duration-500" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
                    <p className="text-primary-foreground/90 mb-6">
                      At the Overseas Purvanchal Business and Professional Council, we celebrate this deep-rooted identity while building a progressive community abroad.
                    </p>
                    <p className="text-primary-foreground/90 font-medium">
                      Whether you're from UP, Bihar or Jharkhand, OPBPC is your extended family in the UAE — united by origin, connected by purpose.
                    </p>
                  </div>
                </div>
                
                {/* Decorative circles */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -top-8 -left-8 w-20 h-20 bg-primary/20 rounded-full animate-float" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
