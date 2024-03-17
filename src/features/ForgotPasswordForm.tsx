'use client'

import { useFormState } from 'react-dom'
import {actions} from "@/actions";
import {Typography} from "@/shared/ui/Typography";
import {Button} from "@/shared/ui/Button";
import Link from "next/link";
import {Routes} from "@/routes";
import {FormInput} from "@/shared/ui/FormInput";

const initialState = {
  email: '',
}

export const ForgotPasswordForm = () => {
  const [state, formAction] = useFormState(actions.forgotPassword, initialState)

  return (
    <form className='flex flex-col items-start text-left gap-5 max-w-[350px]'
          action={formAction}>

      <Typography size="h3" variant="primary">
        Забыли пароль?
      </Typography>

      <Typography size="body2" variant="grey">
        Мы отправим письмо для восстановления пароля на вашу почту, которая была использована для создания аккаунта
      </Typography>

      <FormInput
        name="email"
        type="email"
        placeholder="Введите почту"
        error={state.email}
      />

      <Button type="submit" variant="primary" className="w-full">Далее</Button>
    </form>
  )
}