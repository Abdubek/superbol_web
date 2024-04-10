import {redirect} from "next/navigation";
import {cookies} from "next/headers";

// const API_URL = 'http://46.101.124.209:8082/api/v1'
// const API_URL = 'https://super-bol.kz/api/v1'
const API_URL = 'http://super-bol.kz:9090/api/v1'

type BaseResponse<T> = {
  data: T
  errorMsg: {
    ru: string
    kz: string
    en: string
  }
  success: boolean
}

export const request = <T>(module: string, init?: RequestInit) => {
  const token = cookies().get('access_token')
  if (token) {
    init = {
      method: "GET",
      ...init,
      headers: {
        ...init?.headers,
        Authorization: 'Bearer ' + token.value
      }
    }
  }

  return fetch(API_URL + module, init).then(
    async (res) => {
      console.log("request", init?.method, module, res.status)
      if (res.status === 401) {
        redirect('/sign-in')
      }

      const isJson = res.headers
        .get("content-type")
        ?.includes("application/json");
      const responseData: BaseResponse<T> | null = isJson ? await res.json() : null;

      // if (!responseData?.hasOwnProperty('success')) {
      //   return responseData
      // }

      if (!responseData?.success) {
        return Promise.reject(responseData?.errorMsg);
      }

      return responseData.data;
    },
  )
}
