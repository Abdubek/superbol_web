"use client"

import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/shared/ui/Select";
import * as React from "react";
import {TransitionStartFunction, useState} from "react";
import {City} from "@/shared/api/cities";
import {cn} from "@/shared/utils/common";
import {parseAsInteger, parseAsString, useQueryState} from 'nuqs'

type Props = {
  cities: City[]
  className?: string
  startTransition?: TransitionStartFunction
}

export const CastingCityFilter = ({ cities, className, startTransition }: Props) => {
  const [value, setValue] = useQueryState('city', parseAsString.withOptions({ startTransition }))
  const [, setPage] = useQueryState(
    "page",
    parseAsInteger
      .withDefault(1)
      .withOptions({ startTransition })
  );

  const handleChange = (value: string) => {
    setPage(1)
    setValue(value, {
      shallow: false
    })
  }

  return (
    <div className={cn("max-w-[320px]", className)}>
      <Select value={value || undefined} onValueChange={handleChange}>
        <SelectTrigger className="mb-1.5">
          <SelectValue placeholder={"Выберите город кастинга"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {cities.map((city, index) =>
              <SelectItem key={index} value={String(city.name)}>{city.name}</SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}