import DefaultAvatar from "@/shared/icons/default-avatar.svg";
import {Typography} from "@/shared/ui/Typography";
import Image from "next/image";
import Link from "next/link";
import {Routes} from "@/routes";
import Pattern from "@/shared/images/pattern.svg";
import {userApi} from "@/shared/api/user";
import {UserAvatar} from "@/features/Avatar";

export const ScoutCard = async () => {
  const profileData = await userApi.profile()

  return (
    <Link href={Routes.CABINET} className="relative scout-card-gradient p-5 rounded-2xl sm:py-8 py-6 flex flex-col items-center gap-2">
      <Pattern
        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
        style={{
          opacity: "1",
        }}
      />

      <div className="w-[126px] h-[126px] rounded-full border-[3px] border-border-secondary flex items-center justify-center box-border z-10">
        <UserAvatar image={profileData?.image_key} width={120} />
      </div>

      <div className="flex flex-col items-center gap-1 z-10 w-full">
        <Typography size="h3" variant="white" className="text-center w-full line-clamp-2">
          {profileData.full_name || profileData.email}
        </Typography>
        <Typography size="body3" variant="grey">
          ID{profileData.id}
        </Typography>
      </div>

      <div className="bg-bg-primary text-text-white w-full py-2.5 rounded-md text-center font-bold">
        Скаут
      </div>
    </Link>
  )
}
