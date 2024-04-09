"use client"

import {Button} from "@/shared/ui/Button";
import {actions} from "@/actions";
import {useTranslations} from "next-intl";

type Props = {
  token: string
}

export const ConfirmEmailButton = ({ token }: Props) => {
  const t = useTranslations("auth");

  return (
    <Button variant="primary" className="mb-5" onClick={() => actions.confirmEmail(token)}>Подтвердить</Button>
  )
}