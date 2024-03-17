'use server'

import {isEmpty} from "@/shared/utils/common";
import {redirect} from "next/navigation";
import {Routes} from "@/routes";

type SetPasswordErrors = {
  password?: string
  repeatedPassword?: string
}

export async function setPassword(formData: FormData) {
  const errors: SetPasswordErrors = {}

  const rawFormData = {
    password: formData.get("password") as string,
  };



  if (isEmpty(errors)) {
    redirect(Routes.SET_PASSWORD_SUCCESS)
  }

  return errors
}