import {participantApi} from "@/shared/api/participant";

export async function GET() {
  const res = await participantApi.numberPdf()
  return new Response(res)
}