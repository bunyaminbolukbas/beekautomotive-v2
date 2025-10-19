// Simple Card component (not available in Relume UI)
import React from "react";
import { cn } from "@relume_io/relume-ui";

export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-border bg-background-primary shadow-sm",
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";
