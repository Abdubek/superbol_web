import {request} from "@/shared/api/api";
import {Participant} from "@/shared/api/participant";

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

type LoginOrRegisterDTO = {
  email: string,
  password: string
}

const loginOrRegister = (data: LoginOrRegisterDTO) => {
  return request<{ token: string }>('/users/login-or-register', {
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

type ProfileResponse = {
  id: number
  email: string
  full_name: string
  image_key: string
  locale: string
  participant: Participant
  email_verified: boolean
  role: "participant" | "scout" | "moderator" | "volunteer"
}

const profile = () => {
  return request<ProfileResponse>('/users/profile', {
    next: {
      revalidate: 5
    }
  })
}

const uploadAvatar = (data: FormData) => {
  return request<{ key: string }>('/images', {
    method: "POST",
    body: data
  })
}

const updateUser = (image_key: string, locale: string) => {
  return request("/users", {
    method: "PUT",
    body: JSON.stringify({
      image_key,
      locale
    })
  })
}

export const userApi = {
  authenticate,
  loginOrRegister,
  resetPassword,
  updatePassword,
  profile,
  uploadAvatar,
  updateUser
}