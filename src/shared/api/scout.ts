import {request} from "@/shared/api/api";
import qs from "qs";
import {ApplicationStatus, Participant} from "@/shared/api/participant";

const addRating = (participantId: number, rating: number | null): Promise<any> => {
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

type GetParticipantParams = {
  user_id?: number
  status?: ApplicationStatus
  casting_city?: string
  offset?: number
  limit?: number
  only_faves?: boolean
  numbers?: string
}

type GetParticipantsListResponse = {
  participants: Participant[]
  total_count: number
}

const getScoutParticipants = (params: GetParticipantParams = {}) => {
  return request<GetParticipantsListResponse>(`/scouts/participants?${qs.stringify(params)}`)

}

export const scoutApi = {
  addFavorite,
  deleteFavorite,
  addRating,
  getScoutParticipants
}