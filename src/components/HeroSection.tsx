import { ArrowRight, Users, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShimmerText from "@/components/ShimmerText";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Active Members" },
    { icon: Globe, value: "3", label: "States Represented" },
    { icon: Award, value: "1st", label: "Govt Registered" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30 animate-image-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-muted/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              First & Only Govt Registered Purvanchal Community in UAE
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Overseas Purvanchal{" "}
              <ShimmerText className="font-bold">
                Business & Professionals
              </ShimmerText>{" "}
              Council
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              United by origin, connected by purpose. Empowering entrepreneurs and professionals from Purvanchal while celebrating our rich cultural heritage.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button variant="hero" size="xl" className="group animate-pulse-glow">
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="hover:scale-105 transition-transform">
                Learn More
              </Button>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="reveal" delay={500 + index * 100}>
                <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-border group hover:-translate-y-2">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-muted-foreground">{stat.label}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
