"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "inline-flex h-12 w-full rounded-2xl border-4 border-border bg-surface-primary px-5 py-3 text-sm font-semibold text-foreground shadow-brut-sm transition-colors placeholder:text-foreground/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-70",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
