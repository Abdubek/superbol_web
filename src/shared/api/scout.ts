import {request} from "@/shared/api/api";

const addRating = (participantId: number, rating: number): Promise<any> => {
  return request('/scouts/ratings', {
    method: "POST",
    body: JSON.stringify({
      id: participantId,
      rating
    })
  })
}

const addFavorite = (participantId: number): Promise<any> => {
  return request('/scouts/favorites', {
    method: "POST",
    body: JSON.stringify({
      id: participantId
    })
  })
}

const deleteFavorite = (participantId: number): Promise<any> => {
  return request('/scouts/favorites', {
    method: "DELETE",
    body: JSON.stringify({
      id: participantId
    })
  })
}

export const scoutApi = {
  addFavorite,
  deleteFavorite,
  addRating
}