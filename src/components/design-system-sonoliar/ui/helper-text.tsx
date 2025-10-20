"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface HelperTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  tone?: "muted" | "error" | "warning" | "success" | "inverse";
  id?: string;
}

export function HelperText({ className, tone = "muted", ...props }: HelperTextProps) {
  const toneClass =
    tone === "error" ? "text-destructive" :
    tone === "warning" ? "text-chart-4" :
    tone === "success" ? "text-chart-5" :
    tone === "inverse" ? "text-background" :
    "text-muted-foreground";

  return (
    <p className={cn("mt-1 text-xs", toneClass, className)} {...props} />
  );
}
