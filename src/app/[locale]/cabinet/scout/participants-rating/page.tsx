import { participantApi } from "@/shared/api/participant";
import { Typography } from "@/shared/ui/Typography";
import DefaultAvatar from "@/shared/icons/default-avatar-36.svg";
import { GamePosition } from "@/entities/participant/ui/GamePosition";
import { getTranslations } from "next-intl/server";
import {PagePagination} from "@/features/PagePagination";
import {SearchParams} from "nuqs/parsers";
import {UserAvatar} from "@/features/Avatar";
import * as React from "react";
import {ScoutParticipantsRatingTable} from "@/entities/scout/ui/ParticipantsRatingTable";
import {citiesApi} from "@/shared/api/cities";
import {scoutApi} from "@/shared/api/scout";

type Props = {
  searchParams: SearchParams;
}

export default async function CabinetParticipantsPage({ searchParams }: Props) {
  const top15 = searchParams?.rating === "top"
  const city = searchParams.city as string | undefined

  const [cities, data] = await Promise.all([
    citiesApi.getCitiesList(),
    participantApi.getParticipantsList({
      status: "application_verified",
      casting_city: city,
      limit: top15 ? 15 : 10,
      offset: top15 ? 0 : (Number(searchParams?.page) || 0),
      sort_by: "rating",
      sort_dir: "desc"
    })
  ])

  const t = await getTranslations();

  return (
    <main className="whitespace-nowrap">
      <Typography size="h3" className="mb-10">
        {t("rating.title")}
      </Typography>
      <ScoutParticipantsRatingTable
        isTop15={top15}
        cities={cities}
        participants={data?.participants || []}
        totalCount={data?.total_count || 0} />
    </main>
  );
}
