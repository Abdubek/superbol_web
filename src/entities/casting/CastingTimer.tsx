"use client";

import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { useTimer } from "react-timer-hook";

type Props = {
  city: string;
  date: Date;
};

export const CastingTimer = ({ city, date }: Props) => {
  const { minutes, hours, days } = useTimer({
    expiryTimestamp: date,
    onExpire: () => console.warn("onExpire called"),
  });

  const t = useTranslations("welcome");

  return (
    <div className="flex flex-col items-center bg-bg-white/75 rounded-lg px-4 py-2 shadow gap-3 z-10">
      <Typography size="h5" variant="primary" className="lg:text-xl text-sm">
        {city}
      </Typography>
      <div className="flex gap-6">
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 rounded-full lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] flex items-center justify-center lg:text-[28px] text-xl font-bold pt-1">
            {days}
          </div>
          <Typography
            size="body3"
            variant="grey"
            className="lg:text-xs text-[10px]"
          >
            {t("time.days")}
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 rounded-full lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] flex items-center justify-center lg:text-[28px] text-xl font-bold pt-1">
            {hours}
          </div>
          <Typography
            size="body3"
            variant="grey"
            className="lg:text-xs text-[10px]"
          >
            {t("time.hours")}
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="border-2 rounded-full lg:w-[60px] lg:h-[60px] w-[30px] h-[30px] flex items-center justify-center lg:text-[28px] text-xl font-bold pt-1">
            {minutes}
          </div>
          <Typography
            size="body3"
            variant="grey"
            className="lg:text-xs text-[10px]"
          >
            {t("time.minutes")}
          </Typography>
        </div>
      </div>
    </div>
  );
};
