import { NextRequest } from "next/server";
import {participantApi} from "@/shared/api/participant";
import {Routes} from "@/routes";
import {redirect} from "next/navigation";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")
  if (token) {
    await participantApi.confirmEmail(token)
    redirect(Routes.CABINET)
  } else {
    redirect(Routes.HOME)
  }
}