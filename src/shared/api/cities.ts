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

const getCitiesList = async (): Promise<City[]> => {
  const response: City[] = await request(`/cities`)
  // @ts-ignore
  return response.sort((a, b) => new Date(a.start_at) - new Date(b.start_at))
}

export const citiesApi = {
  getCitiesList
}