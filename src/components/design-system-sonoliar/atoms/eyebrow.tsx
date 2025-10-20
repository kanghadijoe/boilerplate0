"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type EyebrowProps = React.HTMLAttributes<HTMLSpanElement>;

export const Eyebrow = ({ className, ...props }: EyebrowProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border-4 border-border bg-secondary px-5 py-2 text-xs font-black uppercase tracking-[0.35em] text-secondary-foreground shadow-brut-sm",
        className
      )}
      {...props}
    />
  );
};

Eyebrow.displayName = "Eyebrow";
