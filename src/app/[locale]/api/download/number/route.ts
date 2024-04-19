import {participantApi} from "@/shared/api/participant";
import {NextResponse} from "next/server";

export async function GET() {
  const res = await participantApi.numberPdf()

  const headers = new Headers()
  headers.set('Content-Type', 'application/pdf')
  return new NextResponse(res, {
    status: 200,
    statusText: "OK",
    headers
  })
}