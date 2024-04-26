'use server'

import {participantApi} from "@/shared/api/participant";

export async function setPhone(phone: string) {
  const res = await participantApi.setPhone(phone)
  return res === null
}
