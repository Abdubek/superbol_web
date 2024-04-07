"use client"

import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/shared/ui/Select";
import * as React from "react";
import {useState} from "react";
import {City} from "@/shared/api/cities";
import {cn} from "@/shared/utils/common";
import { useQueryState } from 'nuqs'

type Props = {
  cities: City[]
  className?: string
}

export const CastingCityFilter = ({ cities, className }: Props) => {
  const [value, setValue] = useQueryState('city')

  return (
    <div className={cn("max-w-[320px]", className)}>
      <Select value={value || undefined} onValueChange={(value) => setValue(value, {
        shallow: false
      })}>
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