import {request} from "@/shared/api/api";

export type City = {
  id: number
  name: string
  name_kz: string
  name_ru: string
  start_at: string
  end_at: string
  country: "KZ" | "KG" | "UZ"
}

const getCitiesList = (): Promise<City[]> => {
  return request(`/cities`)
}

export const citiesApi = {
  getCitiesList
}