import {request} from "@/shared/api/api";
import qs from 'qs'

type RegisterDTO = {
  email: string
}

const register = (data: RegisterDTO) => {
  return request('/participants/register', {
    method: "POST",
    body: JSON.stringify(data)
  })
}

type ActivateDTO = {
  password: string,
  token: string
}

const activate = (data: ActivateDTO) => {
  return request('/participants/activate', {
    method: "POST",
    body: JSON.stringify(data)
  })
}

const sendConfirmEmail = () => {
  return request('/participants/verification', {
    method: "POST",
  })
}

const confirmEmail = (token: string) => {
  return request('/participants/verification', {
    method: "PUT",
    body: JSON.stringify({ token })
  })
}

export type ApplicationDTO = {
  full_name?: string
  birth_date?: string
  height?: number
  weight?: number
  origin_city?: string
  main_leg?: string
  gaming_positions?: string[]
  experience_years?: number
  specified_skills?: string[]
  casting_city?: string
}

const application = (data: ApplicationDTO) => {
  return request('/participants/application', {
    method: "POST",
    body: JSON.stringify(data)
  })
}

export type ApplicationStatus = 'created' | 'activated' | 'application_submitted' | 'application_verified' | 'passed_first_casting' | 'came_to_second_casting'

export type Participant = {
  id: number,
  user_id: number,
  number: string,
  email: string
  full_name: string,
  status: ApplicationStatus,
  agreement_accepted: boolean,
  birth_date: string,
  height: number,
  weight: number,
  origin_city: string,
  casting_city: string,
  main_leg: string,
  gaming_positions: string[],
  experience_years: number,
  specified_skills: string[],
  rating: number,
  email_verified: boolean
  is_favorite: boolean
  image_url: string
}

type GetParticipantParams = {
  user_id?: number
  status?: ApplicationStatus
  casting_city?: string
  offset?: number
  limit?: number
}

type GetParticipantsListResponse = {
  participants: Participant[]
  total_count: number
}

const getParticipantsList = (params: GetParticipantParams = {}) => {
  return request<GetParticipantsListResponse>(`/participants?${qs.stringify(params)}`)
}

const deleteParticipant = (id: number) => {
  console.log("HEY")
  return request(`/participants/${id}`, {
    method: "DELETE"
  })
}

export const participantApi = {
  register,
  activate,
  application,
  getParticipantsList,
  sendConfirmEmail,
  confirmEmail,
  deleteParticipant
}