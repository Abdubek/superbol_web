'use server'

import {participantApi} from "@/shared/api/participant";
import {redirect} from "next/navigation";
import {Routes} from "@/routes";

export async function confirmEmail(token: string) {
  const res = await participantApi.confirmEmail(token)
  console.log("confirmEmail", res)
  if (res === null) {
    redirect(Routes.CABINET)
  } else {
    redirect(Routes.HOME)
  }
}
