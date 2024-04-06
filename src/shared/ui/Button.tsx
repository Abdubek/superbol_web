import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import {ButtonHTMLAttributes, FC} from "react";
import {Slot} from "@radix-ui/react-slot";

const style = cva("flex items-center justify-center gap-2", {
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
      foreground: "border border-border-secondary text-text-white"
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
    VariantProps<typeof style> {
  asChild?: boolean
}

export const Button: FC<ButtonProps> = ({
  size,
  radius,
  weight,
  variant,
  asChild,
  children,
  className,
  ...props
}) => {
  const Component = asChild ? Slot : "button"

  return (
    <Component className={clsx(className, style({ size, radius, weight, variant }))} {...props}>
      {children}
    </Component>
  );
};
