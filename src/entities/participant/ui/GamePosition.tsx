import {gamingPositionOptions} from "@/entities/participant/options";
import {cn} from "@/shared/utils/common";

export const GamePosition = ({ pos }: { pos: string }) => {
  const item = gamingPositionOptions.find(i => i.value === pos)
  return (
    <div className={cn(
      "py-1 text-center min-w-[200px] whitespace-normal text-sm rounded-md",
      item?.color === "blue" && "bg-bg-primary/15",
      item?.color === "red" && "bg-bg-red/15",
      item?.color === "yellow" && "bg-bg-yellow/25",
      item?.color === "green" && "bg-bg-success",
    )}>
      {item?.label}
    </div>
  )
}