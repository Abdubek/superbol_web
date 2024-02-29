import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import {FC, HTMLAttributes} from "react";

const style = cva("flex items-center gap-2 border border-border-primary", {
  variants: {
    size: {
      sm: "p-2",
      md: "p-2.5"
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
      primary: "bg-button-primary text-text-white",
      ghost: "bg-transparent"
    }
  },
  defaultVariants: {
    size: "md",
    radius: "sm",
    weight: "medium"
  },
});

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof style> {
  as?: keyof JSX.IntrinsicElements;
}

export const Button: FC<ButtonProps> = ({
  size,
  radius,
  weight,
  variant,
  as,
  children,
  className,
}) => {
  const Component = as || "button";

  return (
    <Component className={clsx(className, style({ size, radius, weight, variant }))}>
      {children}
    </Component>
  );
};
