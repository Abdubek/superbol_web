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

export const participantApi = {
  register,
  activate
}