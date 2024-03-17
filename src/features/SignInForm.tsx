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
  password: ''
}

export const SignInForm = () => {
  const [state, formAction] = useFormState(actions.signIn, initialState)

  return (
    <form className='flex flex-col items-center text-center gap-5 max-w-[350px]'
          action={formAction}>

      <Typography size="h3" variant="primary">
        Войти <br/> в личный кабинет
      </Typography>

      <FormInput
        label="Почта"
        name="email"
        type="email"
        placeholder="Введите почту"
        error={state.email}
      />

      <FormInput
        label="Пароль"
        name="password"
        type="password"
        placeholder="Введите пароль"
        error={state.password}
      />

      <Button type="submit" variant="primary" className="w-full">Войти</Button>

      <div className="flex flex-col gap-2">
        <Typography size="body3">
          Нет аккаунта? <Typography asChild variant="primary">
          <Link href={Routes.SIGN_UP}>Зарегистрируйтесь</Link>
        </Typography>
        </Typography>
        <Typography size="body3">
          Забыли пароль? <Typography asChild variant="primary">
          <Link href={Routes.FORGOT_PASSWORD}>Восстановить</Link>
        </Typography>
        </Typography>
      </div>
    </form>
  )
}