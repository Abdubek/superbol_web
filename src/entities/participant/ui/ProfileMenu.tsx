import Link from "next/link";
import ProfileIcon from "@/shared/icons/profile.svg";
import StarIcon from "@/shared/icons/star.svg";
import PeopleIcon from "@/shared/icons/people.svg";
import NotificationIcon from "@/shared/icons/notification.svg";
import InformationIcon from "@/shared/icons/information.svg";
import {Typography} from "@/shared/ui/Typography";
import {Routes} from "@/routes";
import {userApi} from "@/shared/api/user";

export const ProfileMenu = async () => {
  const profileData = await userApi.profile()

  return (
    <div className="flex flex-col gap-3">
      {profileData?.role === "participant" &&
        <Typography size="body3" className="flex items-center gap-3 p-2 rounded-lg bg-bg-red/5">
          <div>
            <InformationIcon />
          </div>
          Не забудьте заполнить анкету
          для участия в кастинге
        </Typography>
      }
      <Typography asChild size="caption1" className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg">
        <Link href={Routes.PROFILE}>
          <ProfileIcon />
          Профиль
        </Link>
      </Typography>
      {profileData?.role === "participant" &&
        <Typography asChild size="caption1" className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg">
          <Link href={Routes.PROFILE_APPLICATION}>
            <StarIcon />
            Анкета
          </Link>
        </Typography>
      }
      {profileData?.role === "participant" &&
        <Typography asChild size="caption1" className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg">
          <Link href={Routes.PROFILE_PARTICIPANTS}>
            <PeopleIcon />
            Список участников
          </Link>
        </Typography>
      }
      {profileData?.role === "participant" &&
        <Typography asChild size="caption1" className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg">
          <Link href={Routes.PROFILE_NOTIFICATIONS}>
            <NotificationIcon />
            Уведомления
          </Link>
        </Typography>
      }
    </div>
  )
}