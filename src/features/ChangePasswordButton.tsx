'use client'

import {actions} from "@/actions";
import {Button} from "@/shared/ui/Button";
import WarningIcon from "@/shared/icons/warning.svg";
import {Typography} from "@/shared/ui/Typography";
import {useState} from "react";

type Props = {
  email: string
}

export const ChangePasswordButton = ({ email }: Props) => {
  const [isSuccessful, setSuccessfulResult] = useState(false)

  const handleChangePassword = async () => {
    const res = await actions.changePassword(email)
    setSuccessfulResult(res)
  }

  return (
    <>
      <Button variant="primary" onClick={handleChangePassword} className="mb-4">Сменить пароль</Button>
      {isSuccessful ? <div className="bg-bg-lightblue/25 p-4 rounded-lg flex items-center gap-6">
        <WarningIcon />
        <div>
          <Typography size="h5" className="mb-3">Мы отправили письмо на почту</Typography>
          <Typography size="body2">
            Проверь почтовый ящик и перейди по отправленной ссылке, чтобы изменить пароль.
          </Typography>
        </div>
      </div> : null}
    </>
  )
}