import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import {FC, HTMLAttributes} from "react";
import {Slot} from "@radix-ui/react-slot";

const style = cva("", {
  variants: {
    variant: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      grey: "text-text-grey",
      darkBlue: "text-text-darkblue",
      red: "text-text-red"
    },
    size: {
      h1: "font-bold text-5xl leading-[133%]",
      h2: "font-bold text-[40px] leading-[133%]",
      h3: "font-bold text-[32px] leading-[133%]",
      h4: "font-semibold text-2xl leading-[133%]",
      body1: "font-medium text-lg leading-[133%]",
      body2: "font-normal text-sm leading-[133%]",
      body3: "font-normal text-xs leading-[133%]",
      button: "font-bold text-lg leading-[133%]",
      caption2: "font-bold text-sm leading-[133%]",
      caption1: "font-bold text-lg leading-[133%]",
    }
  }
});

export interface TypographyProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof style> {
  asChild?: boolean
}

export const Typography: FC<TypographyProps> = ({
  variant,
  size,
  asChild,
  children,
  className,
}) => {
  const Component = asChild ? Slot : "div"

  return (
    <Component className={clsx(className, style({ variant, size }))}>
      {children}
    </Component>
  );
};
