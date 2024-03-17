import {Typography} from "@/shared/ui/Typography";

type Props = {
  city: string
  date: Date
}

export const CastingTimer = ({ city, date }: Props) => {
  return (
    <div className="flex flex-col items-center bg-bg-white/75 rounded-lg px-4 py-2 shadow gap-3 z-10">
      <Typography size="h5" variant="primary">{city}</Typography>
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 rounded-full w-[60px] h-[60px] flex items-center justify-center text-[28px] font-bold pt-1">
            12
          </div>
          <Typography size="body3" variant="grey">дней</Typography>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 rounded-full w-[60px] h-[60px] flex items-center justify-center text-[28px] font-bold pt-1">
            5
          </div>
          <Typography size="body3" variant="grey">часов</Typography>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 rounded-full w-[60px] h-[60px] flex items-center justify-center text-[28px] font-bold pt-1">
            25
          </div>
          <Typography size="body3" variant="grey">минут</Typography>
        </div>
      </div>
    </div>
  )
}