import useScrollAnimation from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  effect?: "zoom" | "reveal" | "glow" | "parallax";
}

const AnimatedImage = ({
  src,
  alt,
  className,
  containerClassName,
  effect = "reveal",
}: AnimatedImageProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const containerEffects = {
    zoom: "overflow-hidden rounded-3xl",
    reveal: "overflow-hidden rounded-3xl",
    glow: "overflow-hidden rounded-3xl",
    parallax: "overflow-hidden rounded-3xl",
  };

  const imageEffects = {
    zoom: cn(
      "transition-all duration-1000 ease-out",
      isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"
    ),
    reveal: cn(
      "transition-all duration-1000 ease-out",
      isVisible
        ? "translate-y-0 opacity-100 blur-0"
        : "translate-y-8 opacity-0 blur-sm"
    ),
    glow: cn(
      "transition-all duration-700 ease-out",
      isVisible
        ? "opacity-100 saturate-100"
        : "opacity-0 saturate-0"
    ),
    parallax: cn(
      "transition-all duration-1000 ease-out",
      isVisible
        ? "scale-100 opacity-100"
        : "scale-105 opacity-0"
    ),
  };

  return (
    <div
      ref={ref}
      className={cn(
        containerEffects[effect],
        "relative group",
        containerClassName
      )}
    >
      {/* Glow overlay for glow effect */}
      {effect === "glow" && isVisible && (
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      )}
      
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover",
          imageEffects[effect],
          "group-hover:scale-105 transition-transform duration-700",
          className
        )}
      />
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      </div>
    </div>
  );
};

export default AnimatedImage;
