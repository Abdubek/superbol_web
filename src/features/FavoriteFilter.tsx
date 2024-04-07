"use client"

import {Button} from "@/shared/ui/Button";
import {useQueryState} from "nuqs";

export const FavoriteFilter = () => {
  const [value, setValue] = useQueryState('by', {
    defaultValue: "all"
  })

  return (
    <div className="flex gap-1 items-center">
      <Button size="sm" variant={value === "all" ? "primary" : "secondary"} onClick={() => setValue("all", { shallow: false })}>Все участники</Button>
      <Button size="sm" variant={value === "favorite" ? "primary" : "secondary"} onClick={() => setValue("favorite", { shallow: false })}>Избранные</Button>
    </div>
  )
}