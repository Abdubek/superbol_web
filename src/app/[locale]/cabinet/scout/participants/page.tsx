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

type Props = {
  searchParams: SearchParams;
};

export default async function CabinetParticipantProfilesPage({ searchParams }: Props) {

  const city = searchParams.city as string | undefined
  const by = searchParams.by as string | undefined

  const [cities, data] = await Promise.all([
    citiesApi.getCitiesList(),
    participantApi.getParticipantsList({
      status: "application_verified",
      casting_city: city,
    })
  ])

  return (
    <main>
      <Typography size="h3" className="mb-10">Список участников</Typography>
      <CastingCityFilter cities={cities} className="mb-10" />
      <div className="border border-border-lightgray rounded-md p-4 flex flex-col gap-2">
        <div>
          <FavoriteFilter />
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
            {data?.participants.map((item, index) =>
              <tr key={index} className="border-b border-border-lightgray">
                <td className="px-6 py-4">
                  <FavoriteButton isFavorite={item.is_favorite} participantId={item.id} />
                </td>
                <td className="px-6 py-4 flex items-center gap-4">
                  <div>
                    <DefaultAvatar />
                  </div>
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
      </div>
    </main>
  )
}
