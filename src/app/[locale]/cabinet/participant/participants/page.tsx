import { participantApi } from "@/shared/api/participant";
import { Typography } from "@/shared/ui/Typography";
import DefaultAvatar from "@/shared/icons/default-avatar-36.svg";
import { GamePosition } from "@/entities/participant/ui/GamePosition";
import { getTranslations } from "next-intl/server";
import {PagePagination} from "@/features/PagePagination";
import {SearchParams} from "nuqs/parsers";
import {UserAvatar} from "@/features/Avatar";
import * as React from "react";
import {ParticipantsTable} from "@/entities/participant/ui/ParticipantsTable";

type Props = {
  searchParams: SearchParams;
}

export default async function CabinetParticipantsPage({ searchParams }: Props) {
  const page = (Number(searchParams?.page) || 1)
  const response = await participantApi.getParticipantsList({
    status: [
      "application_verified",
      "came_to_first_casting",
      "passed_first_casting",
      "came_to_second_casting"
    ],
    limit: 10,
    offset: page
  });
  const t = await getTranslations();

  const data = response?.participants || []

  return (
    <main className="whitespace-nowrap">
      <Typography size="h3" className="mb-10">
        {t("participants.title")}
      </Typography>
      <ParticipantsTable participants={data} page={page} totalSize={response?.total_count || 0} />
    </main>
  );
}
