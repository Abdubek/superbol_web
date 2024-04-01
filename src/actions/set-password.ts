'use server'

import {isEmpty} from "@/shared/utils/common";
import {redirect} from "next/navigation";
import {Routes} from "@/routes";
import {participantApi} from "@/shared/api/participant";

type SetPasswordErrors = {
  password?: string
  repeatedPassword?: string
  api?: string
}

export async function setPassword(formData: FormData) {
  const errors: SetPasswordErrors = {}

  const rawFormData = {
    password: formData.get("password") as string,
    token: formData.get("token") as string,
  };

  if (!isEmpty(errors)) {
    return errors
  }

  const res = await participantApi.activate(rawFormData)
  if (res === null) {
    redirect(Routes.SET_PASSWORD_SUCCESS)
  }
}