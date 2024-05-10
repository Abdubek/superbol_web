import {participantApi} from "@/shared/api/participant";
import {Typography} from "@/shared/ui/Typography";
import {citiesApi} from "@/shared/api/cities";
import {CastingCityFilter} from "@/features/CastingCityFilter";
import {SearchParams} from "nuqs/parsers";
import {UserAvatar} from "@/features/Avatar";
import {DeleteParticipantButton} from "@/features/DeleteParticipantButton";
import {ParticipantDrawer} from "@/features/ParticipantDrawer";
import {PagePagination} from "@/features/PagePagination";
import {ParticipantsTable} from "@/entities/moder/ui/ParticipantsTable";

type Props = {
  searchParams: SearchParams;
};

export default async function CabinetParticipantProfilesPage({ searchParams }: Props) {

  const city = searchParams.city as string | undefined
  const search = searchParams.search as string | undefined

  const [cities, data] = await Promise.all([
    citiesApi.getCitiesList(),
    participantApi.getParticipantsList({
      status: [
        "application_verified",
        "came_to_first_casting",
        "passed_first_casting",
        "came_to_second_casting"
      ],
      casting_city: city,
      limit: 10,
      offset: (Number(searchParams?.page) || 0),
      numbers: search || undefined
    })
  ])

  return (
    <main>
      <Typography size="h3" className="mb-10">Список участников</Typography>
      <ParticipantsTable cities={cities} participants={data?.participants || []} totalCount={data?.total_count || 0} />
    </main>
  )
}
