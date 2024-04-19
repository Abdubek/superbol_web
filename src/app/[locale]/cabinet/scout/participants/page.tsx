import {participantApi} from "@/shared/api/participant";
import {Typography} from "@/shared/ui/Typography";
import DefaultAvatar from "@/shared/icons/default-avatar-36.svg";
import {FavoriteButton} from "@/features/FavoriteButton";
import {RatingInput} from "@/features/RatingInput";
import {gamingPositionOptions} from "@/entities/participant/options";
import {cn} from "@/shared/utils/common";
import {citiesApi} from "@/shared/api/cities";
import {CastingCityFilter} from "@/features/CastingCityFilter";
import {SearchParams} from "nuqs/parsers";
import {FavoriteFilter} from "@/features/FavoriteFilter";
import {GamePosition} from "@/entities/participant/ui/GamePosition";
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
