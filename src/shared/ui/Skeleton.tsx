import {cn} from "@/shared/utils/common";
import {HTMLAttributes} from "react";


function Skeleton({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-bg-platinum", className)}
      {...props}
    />
  )
}

export { Skeleton }
