'use server'

import {participantApi} from "@/shared/api/participant";
import {redirect} from "next/navigation";
import {Routes} from "@/routes";
import {isEmpty} from "@/shared/utils/common";

type SignUpErrors = {
  email?: string
  api?: string
}

export async function signUp(prevState: any, formData: FormData) {
  const errors: SignUpErrors = {}
  const rawFormData = {
    email: formData.get("email") as string,
  };

  if (!rawFormData.email) {
    errors.email = 'Введите почту';
  }

  if (!isEmpty(errors)) {
    return errors
  }

  const res = await participantApi.register(rawFormData)
  if (res === null) {
    redirect(Routes.SIGN_UP_SUCCESS)
  }
}