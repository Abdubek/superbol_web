'use server'

import {ApplicationDTO, participantApi} from "@/shared/api/participant";

export async function application(data: ApplicationDTO) {
  console.log("ApplicationDTO", data)
  const res = await participantApi.application(data)
  return res === null
}