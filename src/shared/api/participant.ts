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
  phone_number?: string
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

export type ApplicationStatus =
  'created' |
  'activated' |
  'application_submitted' |
  'application_verified' |
  'passed_first_casting' |
  'came_to_second_casting' |
  'came_to_first_casting'

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
  phone_number: string,
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
  status?: ApplicationStatus | ApplicationStatus[]
  casting_city?: string
  offset?: number
  limit?: number
  sort_by?: "created_at" | "rating"
  sort_dir?: "asc" | "desc"
  numbers?: string
}

type GetParticipantsListResponse = {
  participants: Participant[]
  total_count: number
}

const getParticipantsList = (params: GetParticipantParams = {}) => {
  return request<GetParticipantsListResponse>(`/participants?${qs.stringify(params, { indices: false })}`)
}

const deleteParticipant = (id: number) => {
  return request(`/participants/${id}`, {
    method: "DELETE"
  })
}

const numberPdf = () => {
  return request<Blob>('/participants/number')
}

const scan = (id: string) => {
  return request(`/participants/${id}/scan`, {
    method: "POST"
  })
}

const setPhone = (phone: string) => {
  return request(`/participants/phone-number`, {
    method: "PUT",
    body: JSON.stringify({
      number: phone
    })
  })
}

export const participantApi = {
  register,
  activate,
  application,
  getParticipantsList,
  sendConfirmEmail,
  confirmEmail,
  deleteParticipant,
  numberPdf,
  scan,
  setPhone
}