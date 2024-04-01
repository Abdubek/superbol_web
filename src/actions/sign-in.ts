'use server'

import {userApi} from "@/shared/api/user";
import {isEmpty} from "@/shared/utils/common";
import {redirect} from "next/navigation";
import {Routes} from "@/routes";
import {cookies} from "next/headers";

type SignInErrors = {
  email?: string
  password?: string
}

export async function signIn(prevState: any, formData: FormData) {
  const errors: SignInErrors = {}

  const rawFormData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!rawFormData.email) {
    errors.email = 'Введите почту'
  }
  if (!rawFormData.password) {
    errors.password = 'Введите пароль'
  }

  if (!isEmpty(errors)) {
    return errors
  }

  const res = await userApi.authenticate(rawFormData)
  if (res.token) {
    cookies().set('access_token', res.token.toString())
    redirect(Routes.CABINET)
  }
}