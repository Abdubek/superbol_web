"use client"

import {Typography} from "@/shared/ui/Typography";
import {useTimer} from "react-timer-hook";

type Props = {
  city: string
  date: Date
}

export const CastingTimer = ({ city, date }: Props) => {
  const {
    minutes,
    hours,
    days,
  } = useTimer({ expiryTimestamp: date, onExpire: () => console.warn('onExpire called') });

  return (
    <div className="flex flex-col items-center bg-bg-white/75 rounded-lg px-4 py-2 shadow gap-3 z-10">
      <Typography size="h5" variant="primary">{city}</Typography>
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 rounded-full w-[60px] h-[60px] flex items-center justify-center text-[28px] font-bold pt-1">
            {days}
          </div>
          <Typography size="body3" variant="grey">дней</Typography>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 rounded-full w-[60px] h-[60px] flex items-center justify-center text-[28px] font-bold pt-1">
            {hours}
          </div>
          <Typography size="body3" variant="grey">часов</Typography>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 rounded-full w-[60px] h-[60px] flex items-center justify-center text-[28px] font-bold pt-1">
            {minutes}
          </div>
          <Typography size="body3" variant="grey">минут</Typography>
        </div>
      </div>
    </div>
  )
}