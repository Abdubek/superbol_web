'use server'

import {userApi} from "@/shared/api/user";

export async function uploadAvatar(data: FormData, locale: string) {
  const res = await userApi.uploadAvatar(data)
  console.log("uploadAvatar", res)
  if (res?.key) {
    const response = await userApi.updateUser(res.key, locale)
    console.log("updateUser", response)
  }
}