'use server'

import {scoutApi} from "@/shared/api/scout";

export async function addRating(participantId: number, rating: number | null) {
  const res = await scoutApi.addRating(participantId, rating)
  return res === null
}
