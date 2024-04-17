import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import {ButtonHTMLAttributes, FC, forwardRef} from "react";
import {Slot} from "@radix-ui/react-slot";
import Image from "next/image";
import {cn} from "@/shared/utils/common";
import * as React from "react";
import {InputProps} from "@/shared/ui/Input";

export const buttonVariants = cva("flex items-center justify-center gap-2", {
  variants: {
    size: {
      sm: "p-2",
      md: "p-2.5",
      lg: "py-3 px-5"
    },
    radius: {
      sm: "rounded-lg",
      md: "rounded-2xl"
    },
    weight: {
      medium: "font-medium",
      bold: "font-bold"
    },
    variant: {
      primary: "border border-border-primary bg-button-primary text-text-white",
      secondary: "bg-button-secondary text-text-primary",
      ghost: "border border-border-primary bg-transparent",
      foreground: "border border-border-secondary text-text-white",
      danger: "bg-bg-red text-text-white"
    }
  },
  defaultVariants: {
    size: "md",
    radius: "sm",
    weight: "medium"
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    size,
    radius,
    weight,
    variant,
    asChild,
    children,
    className,
    isLoading = false,
    ...props
  }, ref) => {
  const Component = asChild ? Slot : "button"

  return (
    <Component ref={ref} className={cn(buttonVariants({ size, radius, weight, variant }), className)} {...props}>
      {isLoading ? (
        <div>
          <Image
            className="animate-spin"
            alt="loader"
            src={variant === "primary" ? "/loader-white.png" : "/loader.png"}
            width={32}
            height={32}
          />
        </div>
      ) : (
        children
      )}
    </Component>
  );
});

Button.displayName = "Button"
