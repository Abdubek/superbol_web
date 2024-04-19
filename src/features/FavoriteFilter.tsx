"use client"

import {Button} from "@/shared/ui/Button";
import {parseAsString, useQueryState} from "nuqs";
import {TransitionStartFunction} from "react";

type Props = {
  startTransition?: TransitionStartFunction
}

export const FavoriteFilter = ({ startTransition }: Props) => {
  const [value, setValue] = useQueryState(
    'by',
    parseAsString
      .withDefault("all")
      .withOptions({ startTransition }))

  return (
    <div className="flex gap-1 items-center mb-4">
      <Button size="sm" variant={value === "all" ? "primary" : "secondary"} onClick={() => setValue("all", { shallow: false })}>Все участники</Button>
      <Button size="sm" variant={value === "favorite" ? "primary" : "secondary"} onClick={() => setValue("favorite", { shallow: false })}>Избранные</Button>
    </div>
  )
}