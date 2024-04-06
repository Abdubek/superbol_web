import {Typography} from "@/shared/ui/Typography";
import * as React from "react";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/shared/ui/Select";
import {Control, Controller, FieldValue, FieldValues} from "react-hook-form";

type Option = {
  label: string,
  value: string
}

export interface Props<T extends FieldValues> {
  name: FieldValue<T>
  placeholder: string
  options?: Option[]
  label?: string
  error?: string
  control: Control<T>
  required?: boolean
}

const FormSelect = <T extends FieldValues,>({
  label,
  name,
  error,
  placeholder,
  options = [],
  control,
  required = false
}: Props<T>) => {
  return (
    <div className="w-full text-left">
      {label ? <Typography asChild size="caption2" className="mb-2 block">
        <label htmlFor={name}>{label}</label>
      </Typography> : null}
      <Controller
        rules={{ required }}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="mb-1.5">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map((option, index) =>
                  <SelectItem key={index} value={option.value}>{option.label}</SelectItem>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
        control={control}
        name={name}
      />
      {error ? <Typography size="body3" variant="red">{error}</Typography> : null}
    </div>
  )
}

export { FormSelect }