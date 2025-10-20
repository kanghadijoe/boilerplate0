"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonIconVariants = cva(
  "inline-flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 ring-ring border-2 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      type: {
        standard: "",
        stateful: "",
        menu: "",
      },
      variant: {
        bare: "bg-transparent border-transparent text-foreground hover:bg-muted",
        "container-base": "bg-card border-border text-foreground",
        "container-border": "bg-card border-border text-foreground",
        "container-filled": "bg-primary text-primary-foreground border-border",
        inverse: "bg-foreground text-background border-foreground",
        brand: "bg-accent text-foreground border-foreground",
      },
      size: {
        xxs: "h-7 w-7 text-xs",
        xs: "h-8 w-8 text-sm",
        sm: "h-9 w-9 text-sm",
        md: "h-11 w-11 text-base",
        lg: "h-12 w-12 text-base",
      },
      rounded: {
        sm: "rounded-[var(--radius-sm)]",
        md: "rounded-[var(--radius-md)]",
        lg: "rounded-[var(--radius-lg)]",
      },
      shadow: {
        none: "",
        sm: "shadow-brut-sm",
        md: "shadow-brut",
        lg: "shadow-brut-lg",
      },
      pressed: {
        true: "aria-pressed:[&]:opacity-90",
      },
    },
    defaultVariants: {
      type: "standard",
      variant: "bare",
      size: "md",
      rounded: "sm",
      shadow: "md",
    },
  }
);

export interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonIconVariants> {
  "aria-label": string; // required for icon-only
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ className, pressed, ...props }, ref) => {
    return (
      <button
        ref={ref}
        aria-pressed={pressed}
        className={cn(buttonIconVariants({ pressed, ...props }), className)}
        {...props}
      />
    );
  }
);
ButtonIcon.displayName = "ButtonIcon";

export { buttonIconVariants };
