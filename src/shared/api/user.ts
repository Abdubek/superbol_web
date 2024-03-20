import {request} from "@/shared/api/api";

type AuthenticateDTO = {
  email: string,
  password: string
}

const authenticate = (data: AuthenticateDTO) => {
  return request('/users/authenticate', {
    method: "POST",
    body: JSON.stringify(data)
  })
}

export const userApi = {
  authenticate
}