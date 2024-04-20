'use server'

import {scoutApi} from "@/shared/api/scout";

export async function addFavorite(participantId: number) {
  const res = await scoutApi.addFavorite(participantId)
  return res === null
}

export async function deleteFavorite(participantId: number) {
  const res = await scoutApi.deleteFavorite(participantId)
  return res === null
}

