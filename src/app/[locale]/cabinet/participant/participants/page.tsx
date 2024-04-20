import { participantApi } from "@/shared/api/participant";
import { Typography } from "@/shared/ui/Typography";
import DefaultAvatar from "@/shared/icons/default-avatar-36.svg";
import { GamePosition } from "@/entities/participant/ui/GamePosition";
import { getTranslations } from "next-intl/server";
import {PagePagination} from "@/features/PagePagination";
import {SearchParams} from "nuqs/parsers";
import {UserAvatar} from "@/features/Avatar";
import * as React from "react";

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
      <div className="overflow-x-scroll mb-5">
        <table className="w-full ">
          <thead>
          <tr className="bg-bg-platinum font-semibold text-text-darkblue">
            <th className="px-2 py-4">
              №
            </th>
            <th className="px-6 py-4">
              {t("application.inputs.full_name.label")}
            </th>
            <th className="px-6 py-4">
              {t("application.inputs.residence.label")}
            </th>
            <th className="px-6 py-4">
              {t("application.inputs.playing_position.1.label")}
            </th>
            <th className="px-6 py-4">
              {t("application.inputs.playing_position.2.label")}
            </th>
            <th className="px-6 py-4">
              {t("application.inputs.playing_position.3.label")}
            </th>
          </tr>
          </thead>
          <tbody>
          {data?.map((item, index) => (
            <tr key={index} className="border-b border-border-lightgray">
              <td className="px-2">{(index + 1) + ((page - 1) * 10)}</td>
                <td className="px-6 py-4 flex items-center gap-4">
                  <UserAvatar image_url={item?.image_url || ""} width={36}/>
                  {item.full_name}
                </td>
                <td className="px-6 py-4">{item.casting_city}</td>
                {item.gaming_positions?.map((pos, posInd) => (
                  <td key={posInd} className="px-6 py-4">
                    <GamePosition pos={pos} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PagePagination totalSize={response?.total_count || 0} />
    </main>
  );
}
