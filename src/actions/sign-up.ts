'use server'

import {participantApi} from "@/shared/api/participant";
import {redirect} from "next/navigation";
import {Routes} from "@/routes";

type SignUpErrors = {
  email?: string
}

export async function signUp(prevState: any, formData: FormData) {
  const errors: SignUpErrors = {}

  const rawFormData = {
    email: formData.get("email") as string,
  };

  if (!rawFormData.email) {
    errors.email = 'Введите почту'
  }

  const res = await participantApi.register(rawFormData)
  console.log("register res", res)
  // TODO: redirect to success page
  // redirect(Routes.SIGN_UP_SUCCESS)

  return errors
}