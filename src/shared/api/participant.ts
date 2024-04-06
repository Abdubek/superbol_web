import {request} from "@/shared/api/api";

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

type Participant = {
  id: number,
  user_id: number,
  number: string,
  full_name: string,
  status: string,
  agreement_accepted: boolean,
  birth_date: Date,
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

const getParticipantsList = (): Promise<Participant[]> => {
  return request('/participants')
}

export const participantApi = {
  register,
  activate,
  application,
  getParticipantsList
}