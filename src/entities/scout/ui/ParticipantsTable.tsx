"use client"

import {UserAvatar} from "@/features/Avatar";
import {ParticipantDrawer} from "@/features/ParticipantDrawer";
import {DeleteParticipantButton} from "@/features/DeleteParticipantButton";
import {PagePagination} from "@/features/PagePagination";
import {Participant} from "@/shared/api/participant";
import {useTransition} from "react";
import Image from "next/image";
import * as React from "react";
import {CastingCityFilter} from "@/features/CastingCityFilter";
import {City} from "@/shared/api/cities";
import {FavoriteFilter} from "@/features/FavoriteFilter";
import {GamePosition} from "@/entities/participant/ui/GamePosition";
import {RatingInput} from "@/features/RatingInput";
import {FavoriteButton} from "@/features/FavoriteButton";

type Props = {
  participants: Participant[]
  cities: City[]
  totalCount: number
}

export const ScoutParticipantsTable = ({ cities, participants, totalCount }: Props) => {
  const [isLoading, startTransition] = useTransition()

  return (
    <>
      <CastingCityFilter cities={cities} className="mb-10" startTransition={startTransition} />
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
        <div>
          <FavoriteFilter startTransition={startTransition} />
        </div>
        <div className="overflow-x-scroll">
          <table className="w-full whitespace-nowrap">
            <thead>
            <tr className="bg-bg-platinum font-semibold text-text-darkblue">
              <th className="px-6 py-4"></th>
              <th className="px-6 py-4 text-left">Имя Фамилия</th>
              <th className="py-4 text-left">Оценка</th>
              <th className="px-6 py-4 text-left">Город</th>
              <th className="px-6 py-4 text-left">Игровая позиция 1</th>
              <th className="px-6 py-4 text-left">Игровая позиция 2</th>
              <th className="px-6 py-4 text-left">Игровая позиция 3</th>
            </tr>
            </thead>
            <tbody>
            {participants?.map((item, index) =>
              <tr key={index} className="border-b border-border-lightgray">
                <td className="px-6 py-4">
                  <FavoriteButton isFavorite={item.is_favorite} participantId={item.id} />
                </td>
                <td className="px-6 py-4 flex items-center gap-4">
                  <UserAvatar image_url={item?.image_url || ""} width={36}/>
                  {item.full_name}
                </td>
                <td>
                  <RatingInput defaultValue={item.rating} participantId={item.id} />
                </td>
                <td className="px-6 py-4">{item.casting_city}</td>
                {item.gaming_positions?.map((pos, posInd) =>
                  <td key={posInd} className="px-6 py-4">
                    <GamePosition pos={pos} />
                  </td>
                )}
              </tr>
            )}
            </tbody>
          </table>
        </div>
        <PagePagination totalSize={totalCount || 0} startTransition={startTransition}/>
      </div>
    </>
  )
}