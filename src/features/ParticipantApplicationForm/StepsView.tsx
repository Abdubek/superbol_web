import {Typography} from "@/shared/ui/Typography";
import clsx from "clsx";

type Props = {
  step: number
}

export const StepsView = ({ step = 1 }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <div className={clsx(
        "h-12 w-12 rounded-full flex items-center justify-center pt-1",
        step >= 1 && "bg-bg-primary text-text-white",
        step < 1 && "bg-bg-primary/25 text-text-grey"
      )}>
        <Typography size="h3">1</Typography>
      </div>
      <div className="flex-1 border-b border-border-grey"/>
      <div className={clsx(
        "h-12 w-12 rounded-full flex items-center justify-center pt-1",
        step >= 2 && "bg-bg-primary text-text-white",
        step < 2 && "bg-bg-primary/25 text-text-grey"
      )}>
        <Typography size="h3">2</Typography>
      </div>
      <div className="flex-1 border-b border-border-grey"/>
      <div className={clsx(
        "h-12 w-12 rounded-full flex items-center justify-center pt-1",
        step >= 3 && "bg-bg-primary text-text-white",
        step < 3 && "bg-bg-primary/25 text-text-grey"
      )}>
        <Typography size="h3">3</Typography>
      </div>
    </div>
  )
}