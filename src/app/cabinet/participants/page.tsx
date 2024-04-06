import {participantApi} from "@/shared/api/participant";
import {Typography} from "@/shared/ui/Typography";
import DefaultAvatar from "@/shared/icons/default-avatar-36.svg";

export default async function CabinetParticipantsPage() {
  const data = await participantApi.getParticipantsList()
  console.log("getParticipantsList", data)

  return (
    <main>
      <Typography size="h3" className="mb-10">Список участников</Typography>
      <table className="w-full">
        <thead>
          <tr className="bg-bg-platinum font-semibold text-text-darkblue">
            <th className="px-6 py-4">Имя Фамилия</th>
            <th className="px-6 py-4">Город</th>
            <th className="px-6 py-4">Игровая позиция 1</th>
            <th className="px-6 py-4">Игровая позиция 2</th>
            <th className="px-6 py-4">Игровая позиция 3</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) =>
            <tr key={index} className="border-b border-border-lightgray">
              <td className="px-6 py-4 flex items-center gap-4">
                <DefaultAvatar />
                {item.full_name}
              </td>
              <td className="px-6 py-4">{item.casting_city}</td>
              {item.gaming_positions?.map((pos, posInd) =>
                <td key={posInd} className="px-6 py-4">{pos}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </main>
  )
}