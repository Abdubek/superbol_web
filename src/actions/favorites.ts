'use server'

import {scoutApi} from "@/shared/api/scout";

export async function addFavorite(participantId: number) {
  const res = await scoutApi.addFavorite(participantId)
  console.log("addFavorite", participantId, ", res: ", res)
  return res === null
}

export async function deleteFavorite(participantId: number) {
  const res = await scoutApi.deleteFavorite(participantId)
  console.log("deleteFavorite", participantId, ", res: ", res)
  return res === null
}

