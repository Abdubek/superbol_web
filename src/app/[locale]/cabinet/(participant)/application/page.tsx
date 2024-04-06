import {ParticipantApplicationForm} from "@/features/ParticipantApplicationForm";
import {Typography} from "@/shared/ui/Typography";
import {citiesApi} from "@/shared/api/cities";

export default async function CabinetApplicationPage() {
  const cities = await citiesApi.getCitiesList()
  return (
    <main>
      <Typography size="h3" className="mb-10">Анкета участника</Typography>
      <ParticipantApplicationForm cities={cities} />
    </main>
  )
}