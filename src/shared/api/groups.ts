import {request} from "@/shared/api/api";

const getGroups = () => {
  return request('/groups')
}

export const groupsApi = {
  getGroups
}