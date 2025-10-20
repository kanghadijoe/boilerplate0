"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-3xl border-4 border-border transition-transform duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-accent-foreground shadow-brut hover:-translate-y-1 hover:shadow-brut-lg focus-visible:outline-accent",
        muted:
          "bg-surface-muted text-foreground shadow-brut-sm hover:-translate-y-1 hover:bg-surface-strong hover:shadow-brut focus-visible:outline-ring",
        ghost:
          "bg-transparent text-foreground shadow-none hover:-translate-y-1 hover:bg-surface-muted/60 focus-visible:outline-ring",
      },
      size: {
        sm: "h-10 w-10 text-sm",
        md: "h-12 w-12 text-base",
        lg: "h-14 w-14 text-lg",
      },
    },
    defaultVariants: {
      variant: "muted",
      size: "md",
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(iconButtonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

IconButton.displayName = "IconButton";

export { iconButtonVariants };
