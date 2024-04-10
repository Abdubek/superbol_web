import {redirect} from "next/navigation";
import {cookies} from "next/headers";

// const API_URL = 'http://46.101.124.209:8082/api/v1'
// const API_URL = 'https://super-bol.kz/api/v1'
const API_URL = 'http://super-bol.kz:9090/api/v1'

export const request = (module: string, init?: RequestInit) => {
  const token = cookies().get('access_token')
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
      console.log("request", module, res.status)
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
