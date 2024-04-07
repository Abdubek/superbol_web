"use client"

import {Input} from "@/shared/ui/Input";
import {useState} from "react";
import {actions} from "@/actions";
import {cn} from "@/shared/utils/common";

type Props = {
  participantId: number
  defaultValue: number
}

export const RatingInput = ({ participantId, defaultValue }: Props) => {
  const [value, setValue] = useState(defaultValue ? String(defaultValue) : "")

  const handleSetRating = () => {
    actions.addRating(participantId, Number(value))
  }

  return (
    <Input type="number"
           max={100}
           min={0}
           className={cn("h-[29px] w-16 bg-bg-platinum pt-1 pr-0", value && "border border-border-primary text-text-primary font-semibold")}
           value={value}
           onChange={(e) => setValue(e.target.value)}
           onKeyDown={(e) => {
             if (e.key === "Enter") {
               handleSetRating()
             }
           }}
           onBlur={handleSetRating} />
  )
}