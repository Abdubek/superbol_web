import {ParticipantApplicationForm} from "@/features/ParticipantApplicationForm";
import {Typography} from "@/shared/ui/Typography";
import {citiesApi} from "@/shared/api/cities";
import {userApi} from "@/shared/api/user";
import {participantApi} from "@/shared/api/participant";

export default async function CabinetApplicationPage() {
  const [cities, profileData] = await Promise.all([citiesApi.getCitiesList(), userApi.profile()])
  const applications = await participantApi.getParticipantsList({ user_id: profileData.id })

  const myApplication = applications?.length ? applications[0] : undefined

  return (
    <main>
      <Typography size="h3" className="mb-10">Анкета участника</Typography>
      <ParticipantApplicationForm cities={cities} initialData={myApplication} />
    </main>
  )
}