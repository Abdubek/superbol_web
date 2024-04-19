'use server'

import {participantApi} from "@/shared/api/participant";

export async function scan(id: string) {
  const res = await participantApi.scan(id)
  console.log("scan", id, ", res: ", res)
  return res === null
}
