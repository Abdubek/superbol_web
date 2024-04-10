"use client"

import {Button, ButtonProps} from "@/shared/ui/Button";
import {PropsWithChildren} from "react";
import {useFormStatus} from "react-dom";


export const SubmitButton = ({ children, ...props }: PropsWithChildren & ButtonProps) => {
  const { pending } = useFormStatus()
  return (
    <Button {...props} isLoading={pending} disabled={pending}>
      {children}
    </Button>
  )
}