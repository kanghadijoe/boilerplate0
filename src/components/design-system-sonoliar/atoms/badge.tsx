"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border-4 border-border px-5 py-2 text-xs font-black uppercase tracking-[0.35em] shadow-brut-sm",
  {
    variants: {
      variant: {
        primary: "bg-secondary text-secondary-foreground",
        accent: "bg-accent text-accent-foreground",
        muted: "bg-surface-muted text-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        "select-none transition-transform duration-150 ease-out hover:-translate-y-1 hover:shadow-brut",
        badgeVariants({ variant }),
        className
      )}
      {...props}
    />
  );
};

Badge.displayName = "Badge";

export { badgeVariants };
