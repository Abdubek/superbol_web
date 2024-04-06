'use server'

import {redirect} from "next/navigation";
import {Routes} from "@/routes";
import {cookies} from "next/headers";

export async function logout() {
  console.log("AAA")
  cookies().delete('access_token')
  console.log("BBB")
  redirect(Routes.HOME)
  return {}
}