import Link from "next/link";
import ProfileIcon from "@/shared/icons/profile.svg";
import StarIcon from "@/shared/icons/star.svg";
import PeopleIcon from "@/shared/icons/people.svg";
import NotificationIcon from "@/shared/icons/notification.svg";
import InformationIcon from "@/shared/icons/information.svg";
import {Typography} from "@/shared/ui/Typography";
import {Routes} from "@/routes";

export const ProfileMenu = () => {
  return (
    <div className="flex flex-col gap-3">
      <Typography size="body3" className="flex items-center gap-3 p-2 rounded-lg bg-bg-red/5">
        <div>
          <InformationIcon />
        </div>
        Не забудьте заполнить анкету
        для участия в кастинге
      </Typography>
      <Typography asChild size="caption1" className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg">
        <Link href={Routes.PROFILE}>
          <ProfileIcon />
          Профиль
        </Link>
      </Typography>
      <Typography asChild size="caption1" className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg">
        <Link href={Routes.PROFILE_APPLICATION}>
          <StarIcon />
          Анкета
        </Link>
      </Typography>
      <Typography asChild size="caption1" className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg">
        <Link href={Routes.PROFILE_PARTICIPANTS}>
          <PeopleIcon />
          Список участников
        </Link>
      </Typography>
      <Typography asChild size="caption1" className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg">
        <Link href={Routes.PROFILE_NOTIFICATIONS}>
          <NotificationIcon />
          Уведомления
        </Link>
      </Typography>
    </div>
  )
}