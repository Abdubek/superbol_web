import {redirect} from "next/navigation";
import {cookies, headers} from "next/headers";
import {setFlash} from "@/features/FlashToaster/FlashToaster";
import {getLocale} from "next-intl/server";
import {Routes} from "@/routes";

// const API_URL = process.env.API_URL
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
      ...init,
      headers: {
        ...init?.headers,
        Authorization: 'Bearer ' + token.value
      }
    }
  }

  const startTime = new Date().getTime()
  return fetch(API_URL + module, init).then(
    async (res) => {
      const endTime = new Date().getTime()
      console.log("request", (endTime - startTime) + "ms", init?.method || "GET", API_URL + module, res.status)
      if (res.status === 401) {
        redirect(Routes.SIGN_IN)
      }

      const isJson = res.headers
        .get("content-type")
        ?.includes("application/json");
      let responseData: BaseResponse<T> | null = isJson ? await res.json() : null;

      if (!isJson) {
        const isPdf = res.headers
          .get("content-type")
          ?.includes("application/pdf");
        if (isPdf) {
          responseData = {
            success: true,
            data: await res.blob() as T,
            errorMsg: {
              ru: '',
              kz: '',
              en: ''
            }
          }
        }
      }

      if (res.status >= 300) {
        responseData = await res.json()
        console.log("responseData", responseData)
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
