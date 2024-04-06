'use server'

import {redirect} from "next/navigation";
import {Routes} from "@/routes";
import {cookies} from "next/headers";

export async function logout() {
  cookies().delete('access_token')
  redirect(Routes.HOME)
  return {}
}