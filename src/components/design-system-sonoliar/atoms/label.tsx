"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  requiredIndicator?: string;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, requiredIndicator = "*", ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.32em] text-foreground",
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {required ? (
          <span aria-hidden className="text-accent">
            {requiredIndicator}
          </span>
        ) : null}
      </label>
    );
  }
);

Label.displayName = "Label";
