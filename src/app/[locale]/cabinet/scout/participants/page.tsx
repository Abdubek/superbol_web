import {Typography} from "@/shared/ui/Typography";
import {citiesApi} from "@/shared/api/cities";
import {SearchParams} from "nuqs/parsers";
import {scoutApi} from "@/shared/api/scout";
import {ScoutParticipantsTable} from "@/entities/scout/ui/ParticipantsTable";

type Props = {
  searchParams: SearchParams;
};

export default async function CabinetParticipantProfilesPage({ searchParams }: Props) {

  const city = searchParams.city as string | undefined
  const by = searchParams.by as string | undefined

  const [cities, data] = await Promise.all([
    citiesApi.getCitiesList(),
    scoutApi.getScoutParticipants({
      status: "application_verified",
      casting_city: city,
      only_faves: by === "favorite"
    })
  ])

  return (
    <main>
      <Typography size="h3" className="mb-10">Список участников</Typography>
      <ScoutParticipantsTable
        cities={cities}
        participants={data?.participants || []}
        totalCount={data?.total_count || 0} />

    </main>
  )
}
