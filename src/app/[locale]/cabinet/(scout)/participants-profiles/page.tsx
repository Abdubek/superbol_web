import {participantApi} from "@/shared/api/participant";
import {Typography} from "@/shared/ui/Typography";
import DefaultAvatar from "@/shared/icons/default-avatar-36.svg";
import {Input} from "@/shared/ui/Input";
import HeartIcon from "@/shared/icons/heart.svg"
import HeartPrimaryIcon from "@/shared/icons/heart-primary.svg"
import {actions} from "@/actions";
import {FavoriteButton} from "@/features/FavoriteButton";
import {RatingInput} from "@/features/RatingInput";
import {gamingPositionOptions} from "@/entities/participant/options";

export default async function CabinetParticipantProfilesPage() {
  const data = await participantApi.getParticipantsList({
    status: "application_verified"
  })

  return (
    <main>
      <Typography size="h3" className="mb-10">Список участников</Typography>
      <div className="overflow-x-scroll">
        <table className="w-full whitespace-nowrap">
          <thead>
          <tr className="bg-bg-platinum font-semibold text-text-darkblue">
            <th className="px-6 py-4"></th>
            <th className="px-6 py-4 text-left">Имя Фамилия</th>
            <th className="py-4 text-left">Оценка</th>
            <th className="px-6 py-4">Город</th>
            <th className="px-6 py-4">Игровая позиция 1</th>
            <th className="px-6 py-4">Игровая позиция 2</th>
            <th className="px-6 py-4">Игровая позиция 3</th>
          </tr>
          </thead>
          <tbody>
          {data?.map((item, index) =>
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
                <td key={posInd} className="px-6 py-4">{gamingPositionOptions.find(i => i.value === pos)?.label}</td>
              )}
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </main>
  )
}