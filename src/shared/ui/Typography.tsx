import { cva, type VariantProps } from "class-variance-authority";
import {FC, HTMLAttributes} from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "@/shared/utils/common";

const style = cva("", {
  variants: {
    variant: {
      primary: "text-text-primary",
      secondary: "text-text-secondary",
      grey: "text-text-grey",
      darkBlue: "text-text-darkblue",
      red: "text-text-red",
      white: "text-text-white"
    },
    size: {
      h1: "font-bold sm:text-5xl text-[32px] leading-[133%]",
      h2: "font-bold sm:text-[40px] text-[32px] leading-[133%]",
      h3: "font-bold sm:text-[32px] text-lg leading-[133%]",
      h4: "font-semibold sm:text-2xl text-lg leading-[133%]",
      h5: "font-bold text-xl leading-[133%]",
      body1: "font-medium sm:text-lg text-sm leading-[133%]",
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
    <Component className={cn(style({ variant, size }), className)}>
      {children}
    </Component>
  );
};
