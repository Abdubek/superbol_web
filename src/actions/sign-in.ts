'use server'

import {userApi} from "@/shared/api/user";

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

  const res = await userApi.authenticate(rawFormData)
  console.log("authenticate res", res)

  return errors
}