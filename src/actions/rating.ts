'use server'

import {scoutApi} from "@/shared/api/scout";

export async function addRating(participantId: number, rating: number) {
  const res = await scoutApi.addRating(participantId, rating)
  console.log("addRating", participantId, rating, ", res: ", res)
  return res === null
}
