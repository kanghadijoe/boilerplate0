"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full transition-colors border-2 border-border placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 ring-ring disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        boxed: "bg-card",
        filled: "bg-muted",
        underlined: "bg-transparent border-0 border-b-2 rounded-none",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-4",
        lg: "h-12 px-5 text-lg",
      },
      status: {
        default: "",
        error: "border-destructive focus-visible:ring-destructive",
        warning: "border-chart-4 focus-visible:ring-chart-4",
        success: "border-chart-5 focus-visible:ring-chart-5",
        loading: "opacity-80",
      },
      rounded: {
        sm: "rounded-[var(--radius-sm)]",
        md: "rounded-[var(--radius-md)]",
        lg: "rounded-[var(--radius-lg)]",
      },
    },
    defaultVariants: {
      variant: "boxed",
      size: "md",
      status: "default",
      rounded: "md",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, status, rounded, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ variant, size, status, rounded }), className)}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { inputVariants };
