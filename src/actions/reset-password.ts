'use server'

import {isEmpty} from "@/shared/utils/common";
import {redirect} from "next/navigation";
import {Routes} from "@/routes";

type ResetPasswordErrors = {
  password?: string
  repeatedPassword?: string
}

export async function resetPassword(formData: FormData) {
  const errors: ResetPasswordErrors = {}

  const rawFormData = {
    password: formData.get("password") as string,
  };



  if (isEmpty(errors)) {
    redirect(Routes.RESET_PASSWORD_SUCCESS)
  }

  return errors
}