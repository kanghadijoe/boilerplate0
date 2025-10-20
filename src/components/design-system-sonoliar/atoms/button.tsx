"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-3xl border-4 border-border font-black uppercase tracking-[0.28em] transition-transform duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground shadow-brut hover:-translate-y-1 hover:shadow-brut-lg focus-visible:outline-accent",
        secondary:
          "bg-surface-muted text-foreground shadow-brut-sm hover:-translate-y-1 hover:bg-surface-strong hover:shadow-brut focus-visible:outline-ring",
        ghost:
          "bg-transparent text-foreground shadow-none hover:-translate-y-1 hover:bg-surface-muted/60 focus-visible:outline-ring",
        link:
          "border-none bg-transparent p-0 text-sm tracking-[0.2em] text-foreground underline-offset-4 hover:underline focus-visible:outline-ring",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
