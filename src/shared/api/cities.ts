import {request} from "@/shared/api/api";

export type City = {
  id: number
  name: string
  start_at: string
}

const getCitiesList = (): Promise<City[]> => {
  return request(`/cities`)
}

export const citiesApi = {
  getCitiesList
}