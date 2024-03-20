import {redirect} from "next/navigation";
import {cookies} from "next/headers";

const API_URL = 'http://46.101.124.209:8082/api/v1'

export const request = (module: string, init?: RequestInit) => {
  const token = cookies().get('access_token')
  console.log("request token", token)
  if (token) {
    init = {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: 'Bearer ' + token.value
      }
    }
  }

  return fetch(API_URL + module, init).then(
    async (res) => {
      if (res.status === 401) {
        redirect('/sign-in')
        // window.location.href = '/sign-in'
      }

      const isJson = res.headers
        .get("content-type")
        ?.includes("application/json");
      const data = isJson ? await res.json() : null;

      if (data?.error) {
        return Promise.reject(data);
      }

      return data;
    },
  )
}
