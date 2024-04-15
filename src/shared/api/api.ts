import {redirect} from "next/navigation";
import {cookies, headers} from "next/headers";
import {setFlash} from "@/features/FlashToaster/FlashToaster";
import {getLocale} from "next-intl/server";

const API_URL = process.env.API_URL

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
      let responseData: BaseResponse<T> | null = isJson ? await res.json() : null;

      if (res.status >= 300) {
        responseData = await res.json()
      }

      const headersList = headers();
      const locale = await getLocale();
      const fullUrl = headersList.get('referer') || "";

      if (!responseData?.success) {
        // @ts-ignore
        if (responseData?.errorMsg?.[locale]) {
          // @ts-ignore
          setFlash({type: 'error', message: responseData.errorMsg[locale]});
          redirect(fullUrl)
        }
        return Promise.resolve(null);
      }

      return responseData?.data;
    },
  )
}
