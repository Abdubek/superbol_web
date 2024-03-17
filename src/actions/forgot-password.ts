'use server'

import {isEmpty} from "@/shared/utils/common";
import {redirect} from "next/navigation";
import {Routes} from "@/routes";

type ForgotPasswordErrors = {
  email?: string
  password?: string
}

export async function forgotPassword(prevState: any, formData: FormData) {
  const errors: ForgotPasswordErrors = {}

  const rawFormData = {
    email: formData.get("email") as string,
  };

  if (!rawFormData.email) {
    errors.email = 'Введите почту'
  }

  if (isEmpty(errors)) {
    redirect(Routes.FORGOT_PASSWORD_SUCCESS)
  }

  return errors
}