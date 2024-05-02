import {Typography} from "@/shared/ui/Typography";
import * as React from "react";
import {participantApi} from "@/shared/api/participant";
import {SearchParams} from "nuqs/parsers";
import DefaultAvatar from "@/shared/icons/default-avatar-36.svg";
import {GamePosition} from "@/entities/participant/ui/GamePosition";
import {PagePagination} from "@/features/PagePagination";
import {getTranslations} from "next-intl/server";
import {useTranslations} from "next-intl";
import {UserAvatar} from "@/features/Avatar";
import {Skeleton} from "@/shared/ui/Skeleton";

type Props = {
  searchParams: SearchParams;
}

export const ParticipantsSkeleton = async ({ searchParams }: Props) => {
  const page = Number(searchParams?.page) || 1
  const t = await getTranslations();

  return (
    <div className="container mb-16">
      <Typography asChild size="h1" variant="primary" className="col-span-2 mb-7">
        <h1>{t('superbol2024.participants.title')}</h1>
      </Typography>

      <div className="overflow-x-scroll mb-5">
        <table className="w-full ">
          <thead>
          <tr className="bg-bg-platinum font-semibold text-text-darkblue">
            <th className="px-6 py-4 min-w-[80px]">№</th>
            <th className="px-6 py-4 text-left min-w-[280px]">
              {t.rich("application.inputs.full_name.label", {
                br: () => <br />,
              })}
            </th>
            <th className="px-6 py-4 min-w-[205px]">
              {t("application.inputs.residence.label")}
            </th>
            <th className="px-6 py-4 min-w-[250px]">
              {t("application.inputs.playing_position.1.label")}
            </th>
            <th className="px-6 py-4 min-w-[250px]">
              {t("application.inputs.playing_position.2.label")}
            </th>
            <th className="px-6 py-4 min-w-[250px]">
              {t("application.inputs.playing_position.3.label")}
            </th>
          </tr>
          </thead>
          <tbody>
          {new Array(10).fill(0)?.map((item, index) => (
            <tr key={index} className="border-b border-border-lightgray h-[80px]">
              <td className="px-6 py-4">
                <Skeleton className="w-[30px] h-[24px] rounded-full" />
              </td>
              <td className="px-6 py-4 flex items-center gap-4 h-[80px]">
                <div>
                  <Skeleton className="w-[36px] h-[36px] rounded-full" />
                </div>
                <div>
                  <div className="line-clamp-1 mb-1">
                    <Skeleton className="w-[140px] h-[24px] rounded-full" />
                  </div>
                  <Skeleton className="w-[40px] h-[16px] rounded-full" />
                </div>
              </td>
              <td className="px-6 py-4">
                <Skeleton className="w-[100px] h-[24px] rounded-full" />
              </td>
              <td className="px-6 py-4">
                <Skeleton className="w-full h-[24px] rounded-full" />
              </td>
              <td className="px-6 py-4">
                <Skeleton className="w-full h-[24px] rounded-full" />
              </td>
              <td className="px-6 py-4">
                <Skeleton className="w-full h-[24px] rounded-full" />
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <PagePagination totalSize={1000}/>
    </div>
  )
}