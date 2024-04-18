import {Typography} from "@/shared/ui/Typography";
import {statsApi} from "@/shared/api/stats";

type Props = {
};

export default async function CabinetStatsPage({}: Props) {
  const data = await statsApi.statuses()

  console.log(data)

  return (
    <main>
      <Typography size="h3" className="mb-10">Список участников</Typography>
      <div className="border border-border-lightgray rounded-md p-4 flex flex-col gap-2">
        <div className="overflow-x-scroll">
          <table className="w-full whitespace-nowrap">
            <thead>
            <tr className="bg-bg-platinum font-semibold text-text-darkblue">
              <th className="px-6 py-4 text-left">Город</th>
              <th className="px-6 py-4 text-left">Количество</th>
            </tr>
            </thead>
            <tbody>
            {data?.map((item, index) =>
              <tr key={index}>
                <td className="px-6 py-4">{item.city}</td>
                <td className="px-6 py-4">{item.count}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
