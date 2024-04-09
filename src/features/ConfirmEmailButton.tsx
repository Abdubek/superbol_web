"use client"

import {Button} from "@/shared/ui/Button";
import {actions} from "@/actions";
import {toast} from "react-toastify";
import {useTranslations} from "next-intl";

type Props = {
  isVerified: boolean
}

export const ConfirmEmailButton = ({ isVerified }: Props) => {
  const t = useTranslations("auth");

  const handleClick = async () => {
    const res = await actions.sendConfirmEmail()
    console.log("actions.sendConfirmEmail, res", res)
    if (res) {
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
    <Button variant="primary" size="sm" onClick={handleClick}>Подтвердить</Button>
  )
}