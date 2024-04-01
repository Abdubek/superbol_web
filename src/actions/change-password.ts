'use server'

import {userApi} from "@/shared/api/user";

export async function changePassword(email: string) {
  const res = await userApi.resetPassword({
    email
  })
  if (res === null) {
    return true
  }
  return false
}