'use server'

import {ApplicationDTO, participantApi} from "@/shared/api/participant";

export async function application(data: ApplicationDTO) {
  console.log("application", data)
  const res = await participantApi.application(data)
  console.log("application ", res)
  if (res === null) {
    return true
  }
  return false
}