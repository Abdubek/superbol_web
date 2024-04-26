import {Typography} from "@/shared/ui/Typography";
import * as React from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import {Control, Controller, FieldValue, FieldValues} from "react-hook-form";

type Option = {
  label: string,
  value: string
}

export interface Props<T extends FieldValues> {
  name: FieldValue<T>
  placeholder: string
  label?: string
  error?: string
  control: Control<T>
  required?: boolean
}

const FormPhoneInput = <T extends FieldValues,>({
  label,
  name,
  error,
  placeholder,
  control,
  required = false
}: Props<T>) => {
  return (
    <div className="w-full text-left">
      {label ? <Typography asChild size="caption2" className="mb-2 block">
        <label htmlFor={name}>{label}</label>
      </Typography> : null}
      <Controller
        rules={{ required, minLength: { value: 12, message: "Заполните поле" } }}
        render={({ field }) => (
          <PhoneInput
            defaultCountry="kz"
            value={field.value}
            onChange={(phone) => field.onChange(phone)}
          />
        )}
        control={control}
        name={name}
      />
      {error ? <Typography size="body3" variant="red" className="mt-2">{error}</Typography> : null}
    </div>
  )
}

export { FormPhoneInput }