import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShimmerTextProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

const ShimmerText = ({ children, className, as: Component = "span" }: ShimmerTextProps) => {
  return (
    <Component
      className={cn(
        "inline-block bg-clip-text text-transparent",
        "bg-[length:200%_auto]",
        "animate-text-shimmer",
        "bg-gradient-to-r from-primary via-secondary to-primary",
        className
      )}
    >
      {children}
    </Component>
  );
};

export default ShimmerText;
