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

type ResetPasswordDTO = {
  email: string
}

const resetPassword = (data: ResetPasswordDTO) => {
  return request('/users/password-reset', {
      method: "POST",
      body: JSON.stringify(data)
    })
}

type UpdatePasswordDTO = {
  password: string
  token: string
}

const updatePassword = (data: UpdatePasswordDTO) => {
  return request('/users/password', {
      method: "PUT",
      body: JSON.stringify(data)
    })
}

export const userApi = {
  authenticate,
  resetPassword,
  updatePassword
}