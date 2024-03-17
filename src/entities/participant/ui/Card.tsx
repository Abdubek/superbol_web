import DefaultAvatar from "@/shared/icons/default-avatar.svg";
import {Typography} from "@/shared/ui/Typography";
import Image from "next/image";
import Link from "next/link";
import {Routes} from "@/routes";

export const ParticipantCard = () => {
  return (
    <Link href={Routes.CABINET} className="bg-gradient-to-tl from-bg-primary p-5 rounded-2xl py-8 flex flex-col items-center gap-2">
      <div className="w-[126px] h-[126px] rounded-full border-[3px] border-border-secondary flex items-center justify-center box-border">
        <DefaultAvatar width={120} height={120} />
      </div>

      <div className="flex flex-col items-center gap-1">
        <Typography size="h3" variant="white" className="text-center">
          Алимжан Касимов
        </Typography>
        <Typography size="body3" variant="grey">
          AS0025
        </Typography>
      </div>

      <Image src="/partners/freedom.png" alt="Freedom" width={95} height={90} />
    </Link>
  )
}
