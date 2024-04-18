import {request} from "@/shared/api/api";

type StatusesResponse = {
  city: string
  status: string
  count: number
}

const statuses = () => {
  return request<StatusesResponse[]>(`/stats/statuses`)
}

export const statsApi = {
  statuses
}