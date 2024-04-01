'use server'

import {isEmpty} from "@/shared/utils/common";
import {redirect} from "next/navigation";
import {Routes} from "@/routes";
import {participantApi} from "@/shared/api/participant";
import {userApi} from "@/shared/api/user";

type ResetPasswordErrors = {
  password?: string
  repeatedPassword?: string
}

export async function resetPassword(formData: FormData) {
  const errors: ResetPasswordErrors = {}

  const rawFormData = {
    password: formData.get("password") as string,
    token: formData.get("token") as string,
  };

  if (!isEmpty(errors)) {
    return errors
  }

  const res = await userApi.updatePassword(rawFormData)
  if (res === null) {
    redirect(Routes.RESET_PASSWORD_SUCCESS)
  }

  return errors
}