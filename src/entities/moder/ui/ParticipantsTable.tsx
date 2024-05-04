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
import {Typography} from "@/shared/ui/Typography";

type Props = {
  participants: Participant[]
  cities: City[]
  totalCount: number
}

export const ParticipantsTable = ({ cities, participants, totalCount }: Props) => {
  const [isLoading, startTransition] = useTransition()
  console.log(participants)
  return (
    <>
      <CastingCityFilter cities={cities} className="mb-10" startTransition={startTransition} />
      <div className="relative border border-border-lightgray rounded-md p-4 flex flex-col gap-2">
        {isLoading &&
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-bg-white/80 z-40 w-full h-full flex items-center justify-center">
            <Image
              className="animate-spin"
              alt="loader"
              src={"/loader.png"}
              width={32}
              height={32}
            />
          </div>
        }
        <div className="overflow-x-scroll">
          <table className="w-full whitespace-nowrap">
            <thead>
            <tr className="bg-bg-platinum font-semibold text-text-darkblue">
              <th className="px-6 py-4 text-left">Имя Фамилия</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Город</th>
              <th className="px-6 py-4 text-left">Номер телефона</th>
              <th className="px-6 py-4 text-left">Статус</th>
              <th className="px-6 py-4 text-left"></th>
            </tr>
            </thead>
            <tbody>
            {participants?.map((item, index) =>
              <tr key={index} className="border-b border-border-lightgray">
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
                <td>
                  {item.email}
                </td>
                <td className="px-6 py-4">{item.casting_city}</td>
                <td className="px-6 py-4">{item.phone_number}</td>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4 flex gap-2">
                  <ParticipantDrawer data={item}/>
                  <DeleteParticipantButton id={item.id}/>
                </td>
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