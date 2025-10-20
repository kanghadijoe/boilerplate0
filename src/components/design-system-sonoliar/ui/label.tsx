"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  optional?: boolean;
  size?: "sm" | "md" | "lg";
  inline?: boolean;
}

export function Label({ className, children, required, optional, size = "md", inline, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "font-medium",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg",
        inline ? "inline-flex items-center gap-1" : "block",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {required ? (
        <span aria-hidden className="ml-1">*</span>
      ) : optional ? (
        <span className="ml-2 text-xs text-muted-foreground">(opsional)</span>
      ) : null}
    </label>
  );
}
