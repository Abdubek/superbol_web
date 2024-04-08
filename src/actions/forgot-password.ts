'use server'

import {isEmpty} from "@/shared/utils/common";
import {redirect} from "next/navigation";
import {Routes} from "@/routes";
import {userApi} from "@/shared/api/user";
import { useTranslations } from "next-intl";

type ForgotPasswordErrors = {
  email?: string
}

export async function forgotPassword(prevState: any, formData: FormData) {
  const errors: ForgotPasswordErrors = {};

  const rawFormData = {
    email: formData.get("email") as string,
  };

  if (!rawFormData.email) {
    errors.email = 'Введите почту'
  }

  if (!isEmpty(errors)) {
    return errors
  }

  const res = await userApi.resetPassword(rawFormData)
  if (res === null) {
    redirect(Routes.FORGOT_PASSWORD_SUCCESS)
  }
}