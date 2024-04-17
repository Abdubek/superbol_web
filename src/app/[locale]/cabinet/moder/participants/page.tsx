import {participantApi} from "@/shared/api/participant";
import {Typography} from "@/shared/ui/Typography";
import {citiesApi} from "@/shared/api/cities";
import {CastingCityFilter} from "@/features/CastingCityFilter";
import {SearchParams} from "nuqs/parsers";
import {UserAvatar} from "@/features/Avatar";
import {Button} from "@/shared/ui/Button";
import {Popover, PopoverContent, PopoverTrigger} from "@/shared/ui/Popover";
import {DeleteParticipantButton} from "@/features/DeleteParticipantButton";

type Props = {
  searchParams: SearchParams;
};

export default async function CabinetParticipantProfilesPage({ searchParams }: Props) {

  const city = searchParams.city as string | undefined

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
        <div className="overflow-x-scroll">
          <table className="w-full whitespace-nowrap">
            <thead>
            <tr className="bg-bg-platinum font-semibold text-text-darkblue">
              <th className="px-6 py-4 text-left">Имя Фамилия</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Город</th>
              <th className="px-6 py-4 text-left">Статус</th>
              <th className="px-6 py-4 text-left"></th>
            </tr>
            </thead>
            <tbody>
            {data?.participants.map((item, index) =>
              <tr key={index} className="border-b border-border-lightgray">
                <td className="px-6 py-4 flex items-center gap-4">
                  <UserAvatar image_url={item?.image_url || ""} width={36} />
                  {item.full_name}
                </td>
                <td>
                  {item.email}
                </td>
                <td className="px-6 py-4">{item.casting_city}</td>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4">
                  <DeleteParticipantButton id={item.id} />
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
