"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  onLabel?: React.ReactNode;
  offLabel?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      checked,
      defaultChecked,
      onCheckedChange,
      onLabel = "On",
      offLabel = "Off",
      onClick,
      ...props
    },
    ref
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState<boolean>(
      defaultChecked ?? false
    );
    const isControlled = checked !== undefined;
    const value = isControlled ? checked! : uncontrolled;

    const toggle = () => {
      const next = !value;
      if (!isControlled) {
        setUncontrolled(next);
      }
      onCheckedChange?.(next);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      toggle();
    };

    return (
      <button
        type="button"
        role="switch"
        aria-checked={value}
        data-state={value ? "checked" : "unchecked"}
        ref={ref}
        onClick={handleClick}
        className={cn(
          "inline-flex w-24 items-center justify-start rounded-3xl border-4 border-border bg-surface-muted p-1 transition-transform duration-150 ease-out hover:-translate-y-1 hover:shadow-brut-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
          value && "justify-end bg-accent text-accent-foreground hover:shadow-brut",
          className
        )}
        {...props}
      >
        <span
          aria-hidden
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-2xl border-4 border-border bg-surface-primary text-[0.65rem] font-black uppercase tracking-[0.2em] text-foreground shadow-brut-sm transition-colors duration-150 ease-out",
            value && "bg-surface-primary text-foreground"
          )}
        >
          {value ? onLabel : offLabel}
        </span>
        <span className="sr-only">{value ? "On" : "Off"}</span>
      </button>
    );
  }
);

Switch.displayName = "Switch";
