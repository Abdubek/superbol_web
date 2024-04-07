"use client"

import {Input} from "@/shared/ui/Input";
import {useState} from "react";
import {actions} from "@/actions";
import {cn} from "@/shared/utils/common";
import {useRouter} from "next/navigation";

type Props = {
  participantId: number
  defaultValue: number
}

export const RatingInput = ({ participantId, defaultValue }: Props) => {
  const router = useRouter()
  const [value, setValue] = useState(defaultValue ? String(defaultValue) : "")

  const handleSetRating = async () => {
    await actions.addRating(participantId, Number(value))
    router.refresh()
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