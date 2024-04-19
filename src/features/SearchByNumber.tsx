"use client"

import {Input} from "@/shared/ui/Input";
import {parseAsString, useQueryState} from "nuqs";
import {ChangeEvent, TransitionStartFunction} from "react";

type Props = {
  startTransition: TransitionStartFunction
}

export const SearchByNumber = ({ startTransition }: Props) => {
  const [, setValue] = useQueryState(
    'byNumber',
    parseAsString
      .withDefault("")
      .withOptions({ startTransition })
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value, {
      shallow: false,
      throttleMs: 1000
    })
  }

  return (
    <Input placeholder="Поиск по номеру"
           onChange={handleChange} />
  )
}