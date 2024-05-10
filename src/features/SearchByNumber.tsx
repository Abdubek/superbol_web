"use client"

import {Input} from "@/shared/ui/Input";
import {parseAsString, useQueryState} from "nuqs";
import {ChangeEvent, TransitionStartFunction} from "react";

type Props = {
  startTransition: TransitionStartFunction
}

export const SearchByNumber = ({ startTransition }: Props) => {
  const [, setValue] = useQueryState(
    'search',
    parseAsString
      .withDefault("")
      .withOptions({ startTransition, throttleMs: 1000 })
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value, {
      shallow: false,
      throttleMs: 1000
    })
  }

  return (
    <Input placeholder="Введите имя или номер участника"
           onChange={handleChange} />
  )
}