"use client"

import {Input} from "@/shared/ui/Input";
import {TransitionStartFunction, useEffect, useState} from "react";
import {actions} from "@/actions";
import {cn} from "@/shared/utils/common";
import {useRouter} from "next/navigation";

type Props = {
  participantId: number
  defaultValue: number[]
  disabled?: boolean
  startTransition: TransitionStartFunction
}

export const RatingInput = ({ participantId, defaultValue, disabled = false, startTransition }: Props) => {
  const router = useRouter()
  const [value, setValue] = useState(defaultValue ? [String(defaultValue)] : [""])

  useEffect(() => {
    setValue([String(defaultValue)])
  }, [defaultValue])

  const handleSetRating = () => {
    startTransition(async () => {
      await actions.addRating(participantId, Number(value[0]))
      router.refresh()
    })
  }

  return (
    <Input type="number"
           disabled={disabled}
           max={100}
           min={0}
           className={cn(
             "h-[29px] w-16 bg-bg-platinum pt-1 pr-0",
             value[0] && "border border-border-primary text-text-primary font-semibold",
             disabled && "disabled:opacity-100"
           )}
           value={value[0]}
           onChange={(e) => setValue([e.target.value])}
           onKeyDown={(e) => {
             if (e.key === "Enter") {
               handleSetRating()
             }
           }}
           onBlur={handleSetRating} />
  )
}