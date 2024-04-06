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

export type Participant = {
  id: number,
  user_id: number,
  number: string,
  full_name: string,
  status: 'created' | 'activated' | 'application_submitted' | 'application_verified' | 'passed_first_casting' | 'came_to_second_casting',
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
  is_favorite: boolean
}

type GetParticipantParams = {
  user_id?: number
}

const getParticipantsList = (params: GetParticipantParams = {}): Promise<Participant[]> => {
  return request(`/participants?${qs.stringify(params)}`)
}

export const participantApi = {
  register,
  activate,
  application,
  getParticipantsList
}