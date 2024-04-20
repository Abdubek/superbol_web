"use client"

import {UserAvatar} from "@/features/Avatar";
import {PagePagination} from "@/features/PagePagination";
import {Participant} from "@/shared/api/participant";
import GoldCupIcon from "@/shared/icons/gold-cup.svg";
import SilverCupIcon from "@/shared/icons/silver-cup.svg";
import BronzeCupIcon from "@/shared/icons/bronze-cup.svg";
import {useTransition} from "react";
import Image from "next/image";
import * as React from "react";
import {CastingCityFilter} from "@/features/CastingCityFilter";
import {City} from "@/shared/api/cities";
import {RatingInput} from "@/features/RatingInput";
import {TopFilter} from "@/features/TopFilter";
import {Typography} from "@/shared/ui/Typography";
import {clsx} from "clsx";
import {useLocale} from "next-intl";
import {gamingPositionOptions} from "@/entities/participant/options";
import {GamePosition} from "@/entities/participant/ui/GamePosition";

type Props = {
  participants: Participant[]
  cities: City[]
  totalCount: number
  isTop15?: boolean
  page: number
}

export const ScoutParticipantsRatingTable = ({ cities, participants, totalCount, isTop15, page }: Props) => {
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
          <TopFilter startTransition={startTransition} />
        </div>
        {isTop15 ? (
          <div className="overflow-x-scroll">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4">
              {participants?.map((item, index) =>
                <div key={index} style={{ flex: "0 0 33.3333%" }} className={clsx(
                  "flex items-center gap-4 p-4 box-border rounded-md",
                  index < 3 && "bg-bg-platinum border-b border-border-lightgray"
                )}>
                  <div>
                    {index === 0 && <GoldCupIcon />}
                    {index === 1 && <SilverCupIcon />}
                    {index === 2 && <BronzeCupIcon />}
                  </div>
                  <div>
                    <UserAvatar image_url={item?.image_url || ""} width={36}/>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <Typography size="body2">
                      {item.full_name}
                    </Typography>
                    <Typography size="body3" variant="grey">
                      {item.gaming_positions?.length >= 1 && <Position pos={item.gaming_positions[0]} />}
                    </Typography>
                  </div>
                  <div>{index + 1}</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="overflow-x-scroll">
              <table className="w-full whitespace-nowrap">
                <thead>
                <tr className="bg-bg-platinum font-semibold text-text-darkblue">
                  <th className="px-2 py-4">№</th>
                  <th className="px-6 py-4 text-left">Имя Фамилия</th>
                  <th className="py-4 text-left">Оценка</th>
                  <th className="px-6 py-4 text-left">Город</th>
                  <th className="px-6 py-4 text-left">Игровая позиция</th>
                </tr>
                </thead>
                <tbody>
                {participants?.map((item, index) =>
                  <tr key={index} className="border-b border-border-lightgray">
                    <td className="px-2">{(index + 1) + ((page - 1) * 10)}</td>
                    <td className="px-6 py-4 flex items-center gap-4">
                      <UserAvatar image_url={item?.image_url || ""} width={36}/>
                      {item.full_name}
                    </td>
                    <td>
                      <RatingInput defaultValue={[item.rating]} participantId={item.id} disabled={true}/>
                    </td>
                    <td className="px-6 py-4">{item.casting_city}</td>
                    <td className="px-6 py-4">
                      {item?.gaming_positions?.length >= 1 && <GamePosition pos={item.gaming_positions[0]}/>}
                    </td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
            <PagePagination totalSize={totalCount || 0} startTransition={startTransition}/>
          </>
        )}
      </div>
    </>
  )
}

const Position = ({ pos }: { pos: string }) => {
  const locale = useLocale()
  const item = gamingPositionOptions.find(i => i.value === pos)
  return (
    <div className="line-clamp-1 w-full">
      {locale === "ru" ? item?.label : null}
      {locale === "kz" ? item?.label_kz : null}
      {locale === "en" ? item?.label_en : null}
    </div>
  )
}