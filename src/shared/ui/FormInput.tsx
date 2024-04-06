import {Typography} from "@/shared/ui/Typography";
import {Input} from "@/shared/ui/Input";
import {forwardRef} from "react";
import * as React from "react";

export interface Props
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const FormInput = forwardRef<HTMLInputElement, Props>(
  ({
     label,
     name,
     type = "text",
     error,
     ...props
   }, ref) => {
  return (
    <div className="w-full text-left">
      {label ? <Typography asChild size="caption2" className="mb-2 block">
        <label htmlFor={name}>{label}</label>
      </Typography> : null}
      <Input id={name}
             type={type}
             name={name}
             ref={ref}
             className="mb-1.5"
             {...props} />
      {error ? <Typography size="body3" variant="red">{error}</Typography> : null}
    </div>
  )
})

FormInput.displayName = "FormInput"

export { FormInput }