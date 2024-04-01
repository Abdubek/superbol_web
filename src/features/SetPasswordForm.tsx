'use client'

import {actions} from "@/actions";
import {Typography} from "@/shared/ui/Typography";
import {Button} from "@/shared/ui/Button";
import {FormInput} from "@/shared/ui/FormInput";
import {useState} from "react";
import CheckSmallIcon from '@/shared/icons/check-small.svg'
import CrossIcon from '@/shared/icons/cross.svg'

const passwordSymbolsRegex = /^(?=.*(\d|[^\w\s])).+$/

type Props = {
  email?: string
  token?: string
}

export const SetPasswordForm = ({ email, token }: Props) => {
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const [isMinimumSymbolValid, setMinimumSymbolValid] = useState(password.length >= 8)
  const [isPasswordSymbolsValid, setPasswordSymbolsValid] = useState(false)
  const [isPasswordEqual, setPasswordEqual] = useState(password === repeatedPassword && password.length > 0)

  const onPasswordChange = (value: string) => {
    setPassword(value)
    setMinimumSymbolValid(value.length >= 8)
    setPasswordSymbolsValid(passwordSymbolsRegex.test(value))
  }

  const onRepeatedPasswordChange = (value: string) => {
    setRepeatedPassword(value)
    setPasswordEqual(value === password)
  }

  const isFormValid = isMinimumSymbolValid && isPasswordSymbolsValid && isPasswordEqual

  return (
    <form className='flex flex-col items-start text-left gap-5 max-w-[350px]'
          action={actions.setPassword}>

      <Typography size="h3" variant="primary">
        Придумайте пароль
      </Typography>

      <Typography size="body2" variant="grey">
        Для аккаунта <Typography asChild variant="primary"><span>{email}</span></Typography>
      </Typography>

      <FormInput
        value={token}
        name="token"
        type="hidden"
      />

      <FormInput
        value={password}
        onChange={onPasswordChange}
        name="password"
        type="password"
        placeholder="Введите новый пароль"
      />

      <FormInput
        value={repeatedPassword}
        onChange={onRepeatedPasswordChange}
        name="repeatedPassword"
        type="password"
        placeholder="Повторите новый пароль"
      />

      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          {isMinimumSymbolValid ? <CheckSmallIcon /> : <CrossIcon width={16} />}
          <Typography size="body3">
            Укажите как минимум 8 символов
          </Typography>
        </div>

        <div className="flex gap-2">
          {isPasswordSymbolsValid ? <CheckSmallIcon /> : <CrossIcon width={16} />}
          <Typography size="body3">Пароль должен содержать число или символ</Typography>
        </div>

        <div className="flex gap-2">
          {isPasswordEqual ? <CheckSmallIcon /> : <CrossIcon width={16} />}
          <Typography size="body3">Введенные пароли совпадают</Typography>
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full" disabled={!isFormValid}>Сохранить пароль</Button>
    </form>
  )
}