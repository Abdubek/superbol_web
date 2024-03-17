import DefaultAvatar from "@/shared/icons/default-avatar.svg";
import {Typography} from "@/shared/ui/Typography";
import Image from "next/image";
import Link from "next/link";
import {Routes} from "@/routes";
import PrimaryPattern from "@/shared/images/pattern.svg";

export const ParticipantCard = () => {
  return (
    <Link href={Routes.CABINET} className="relative bg-gradient-to-tl from-bg-primary p-5 rounded-2xl py-8 flex flex-col items-center gap-2">
      <PrimaryPattern
        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
        style={{
          opacity: "1",
        }}
      />

      <div className="w-[126px] h-[126px] rounded-full border-[3px] border-border-secondary flex items-center justify-center box-border z-10">
        <DefaultAvatar width={120} height={120} />
      </div>

      <div className="flex flex-col items-center gap-1 z-10">
        <Typography size="h3" variant="white" className="text-center">
          Алимжан Касимов
        </Typography>
        <Typography size="body3" variant="grey">
          AS0025
        </Typography>
      </div>

      <Image src="/partners/freedom.png" alt="Freedom" width={95} height={90} className="z-10" />
    </Link>
  )
}
