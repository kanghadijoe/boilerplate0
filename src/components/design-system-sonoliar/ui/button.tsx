"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors border-2 border-border focus:outline-none focus-visible:ring-2 ring-ring disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:opacity-90",
        secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
        ghost: "bg-transparent text-foreground border-transparent hover:bg-muted",
        outline: "bg-transparent text-foreground hover:bg-muted",
        destructive: "bg-destructive text-foreground hover:opacity-90",
        inverse: "bg-foreground text-background border-foreground hover:opacity-90",
        link: "bg-transparent border-transparent underline underline-offset-4 hover:no-underline",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-11 px-4 text-base",
        lg: "h-12 px-5 text-base",
      },
      shadow: {
        none: "",
        sm: "shadow-brut-sm",
        md: "shadow-brut",
        lg: "shadow-brut-lg",
      },
      rounded: {
        sm: "rounded-[var(--radius-sm)]",
        md: "rounded-[var(--radius-md)]",
        lg: "rounded-[var(--radius-lg)]",
      },
      block: {
        true: "w-full",
      },
      iconOnly: {
        true: "aspect-square p-0",
      },
      loading: {
        true: "pointer-events-none opacity-80",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shadow: "md",
      rounded: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconPosition?: "start" | "end" | "only";
  isPressed?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      iconPosition,
      isPressed,
      loading,
      disabled,
      children,
      asChild = false,
      variant,
      size,
      shadow,
      rounded,
      block,
      iconOnly,
      ...props
    },
    ref
  ) => {
    const mergedDisabled = disabled || !!loading;
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref as React.Ref<HTMLButtonElement>}
        aria-pressed={isPressed}
        aria-busy={loading}
        className={cn(
          buttonVariants({
            variant,
            size,
            shadow,
            rounded,
            block,
            iconOnly: iconOnly ?? iconPosition === "only",
            loading,
          }),
          className
        )}
        {...(!asChild && { disabled: mergedDisabled })}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
