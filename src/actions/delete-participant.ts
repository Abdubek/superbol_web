'use server'

import {participantApi} from "@/shared/api/participant";

export async function deleteParticipant(id: number) {
  const res = await participantApi.deleteParticipant(id)
  return res === null
}