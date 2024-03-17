import {Typography} from "@/shared/ui/Typography";
import {Input} from "@/shared/ui/Input";
import {HTMLInputTypeAttribute} from "react";

type Props = {
  label?: string
  name: string
  error?: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export const FormInput = ({ label, name, type = "text", error, placeholder, value, onChange }: Props) => {
  return (
    <div className="w-full text-left">
      {label ? <Typography asChild size="caption2" className="mb-2 block">
        <label htmlFor={name}>{label}</label>
      </Typography> : null}
      <Input id={name}
             type={type}
             name={name}
             value={value}
             onChange={e => onChange?.(e.target.value)}
             className="mb-1.5"
             placeholder={placeholder}/>
      {error ? <Typography size="body3" variant="red">{error}</Typography> : null}
    </div>
  )
}