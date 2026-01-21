import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedImage from "@/components/AnimatedImage";
import ShimmerText from "@/components/ShimmerText";
import udaanEvent from "@/assets/udaan-event.jpg";
import diwaliEvent from "@/assets/diwali-event.jpg";

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "UDAAN - Women Empowerment",
      subtitle: "Empower Her, Empower the Future",
      image: udaanEvent,
      date: "7th September 2025",
      time: "3:30 PM to 7:30 PM",
      location: "Al Thuraya Ballroom, Grand Millennium Hotel, Barsha Heights, SZR, Dubai",
      highlights: [
        "Inspirational keynote speeches from women leaders",
        "Panel discussion on breaking barriers",
        "Networking opportunities",
        "Cultural performances",
      ],
    },
    {
      title: "Diwali Grand Celebration",
      subtitle: "Festival of Lights",
      image: diwaliEvent,
      date: "Coming Soon",
      time: "TBA",
      location: "Dubai, UAE",
      highlights: [
        "Dazzling decorations",
        "Cultural performances",
        "Festive cuisine",
        "Family celebrations",
      ],
    },
  ];

  const pastEvents = [
    "OPBPC Launch by H.E. Satish Kumar Sivan, Consul General of India to Dubai",
    "Formal request to Consulate General of India for direct flights to Patna",
    "OPBPC Core Team meeting with Indian Consulate",
    "Strategic collaboration between OPBPC and RAK Animal Welfare Center",
    "International Yoga Day Celebration",
    "OPBPC Business Breakfast Meeting",
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Upcoming Events */}
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Mark Your Calendar
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              <ShimmerText>Upcoming Events</ShimmerText>
            </h2>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection 
                key={event.title} 
                animation={index === 0 ? "fade-left" : "fade-right"} 
                delay={index * 150}
              >
                <div className="group relative overflow-hidden bg-card rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-border hover:-translate-y-2">
                  <div className="relative h-72 overflow-hidden">
                    <AnimatedImage
                      src={event.image}
                      alt={event.title}
                      effect="glow"
                      containerClassName="h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-3 group-hover:scale-105 transition-transform">
                      {event.subtitle}
                    </span>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {event.highlights.map((highlight, i) => (
                        <li 
                          key={highlight} 
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 group-hover:scale-150 transition-transform" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="hero" className="w-full group/btn overflow-hidden relative">
                      <span className="relative z-10 flex items-center justify-center w-full">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Past Events */}
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Past Events & <ShimmerText>Milestones</ShimmerText>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastEvents.map((event, index) => (
              <AnimatedSection key={event} animation="scale" delay={index * 80}>
                <div className="group bg-card hover:bg-primary rounded-xl p-5 transition-all duration-300 border border-border hover:border-primary cursor-pointer hover:-translate-y-1 hover:shadow-lg overflow-hidden relative">
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                  </div>
                  
                  <div className="flex items-start gap-3 relative z-10">
                    <div className="w-8 h-8 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                      <span className="text-primary group-hover:text-primary-foreground font-bold text-sm transition-colors duration-300">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-300">
                      {event}
                    </p>
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

export default EventsSection;
