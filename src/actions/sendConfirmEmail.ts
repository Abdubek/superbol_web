'use server'

import {participantApi} from "@/shared/api/participant";

export async function sendConfirmEmail() {
  const res = await participantApi.sendConfirmEmail()
  console.log("sendConfirmEMail", res)
  return res === null
}
