"use client"

import {useTransition} from "react";
import {UserAvatar} from "@/features/Avatar";
import {Typography} from "@/shared/ui/Typography";
import {GamePosition} from "@/entities/participant/ui/GamePosition";
import {PagePagination} from "@/features/PagePagination";
import * as React from "react";
import {Participant} from "@/shared/api/participant";
import {useTranslations} from "next-intl";
import Image from "next/image";

type Props = {
  participants: Participant[]
  page: number
  totalSize: number
}

export const ParticipantsTable = ({ participants, totalSize, page }: Props) => {
  const t = useTranslations();
  const [isLoading, startTransition] = useTransition()

  return (
    <div className="relative border border-border-lightgray rounded-md p-4 flex flex-col gap-2">
      {isLoading &&
        <div
          className="absolute left-0 top-0 right-0 bottom-0 bg-bg-white/80 z-40 w-full h-full flex items-center justify-center">
          <Image
            className="animate-spin"
            alt="loader"
            src={"/loader.png"}
            width={32}
            height={32}
          />
        </div>
      }
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
          {participants?.map((item, index) => (
            <tr key={index} className="border-b border-border-lightgray">
              <td className="px-2">{(index + 1) + ((page - 1) * 10)}</td>
              <td className="px-6 py-4 flex items-center gap-4 h-[80px]">
                <div>
                  <UserAvatar image_url={item?.image_url || ""} width={36}/>
                </div>
                <div>
                  <div className="line-clamp-1 mb-1">
                    {item.full_name}
                  </div>
                  <Typography size="body3" variant="grey">
                    {item.number}
                  </Typography>
                </div>
              </td>
              <td className="px-6 py-4">{item.casting_city}</td>
              {item.gaming_positions?.map((pos, posInd) => (
                <td key={posInd} className="px-6 py-4">
                  <GamePosition pos={pos}/>
                </td>
              ))}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <PagePagination totalSize={totalSize} startTransition={startTransition}/>
    </div>
  )
}