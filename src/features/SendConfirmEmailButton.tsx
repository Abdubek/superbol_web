"use client"

import {Button} from "@/shared/ui/Button";
import {actions} from "@/actions";
import {toast} from "react-toastify";
import {useTranslations} from "next-intl";
import {useState} from "react";

type Props = {
  isVerified: boolean
}

export const SendConfirmEmailButton = ({ isVerified }: Props) => {
  const t = useTranslations("auth");
  const [isSent, setSentState] = useState(false)

  console.log("isVerified", isVerified)

  const handleClick = async () => {
    const res = await actions.sendConfirmEmail()
    console.log("actions.sendConfirmEmail, res", res)
    if (res) {
      setSentState(true)
      toast(t.rich("success.emailSent.signUp.subtitle", {
        br: () => <br />,
      }))
    } else {
      toast.error('')
    }
  }

  if (isVerified) {
    return (
      <div />
    )
  }

  return (
    <Button variant="primary" size="sm" onClick={handleClick} disabled={true}>{!isSent ? "Подтвердить" : "Письмо отправлено"}</Button>

  )
}