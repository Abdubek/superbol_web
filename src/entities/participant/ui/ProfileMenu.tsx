import Link from "next/link";
import ProfileIcon from "@/shared/icons/profile.svg";
import StarIcon from "@/shared/icons/star.svg";
import PeopleIcon from "@/shared/icons/people.svg";
import NotificationIcon from "@/shared/icons/notification.svg";
import InformationIcon from "@/shared/icons/information.svg";
import { Typography } from "@/shared/ui/Typography";
import { Routes } from "@/routes";
import { userApi } from "@/shared/api/user";
import { participantApi } from "@/shared/api/participant";
import { getTranslations } from "next-intl/server";

export const ProfileMenu = async () => {
  const profileData = await userApi.profile();

  const t = await getTranslations("welcome");

  return (
    <div className="flex flex-col gap-3">
      {profileData?.role === "participant" &&
        profileData.participant?.status === "activated" && (
          <Typography
            size="body3"
            className="flex items-center gap-3 p-2 rounded-lg bg-bg-red/5"
          >
            <div>
              <InformationIcon />
            </div>
            {t("warning")}
          </Typography>
        )}
      <Typography
        asChild
        size="caption1"
        className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
      >
        <Link href={Routes.PROFILE}>
          <div>
            <ProfileIcon />
          </div>
          {t("menu.profile")}
        </Link>
      </Typography>
      {profileData?.role === "participant" && (
        <Typography
          asChild
          size="caption1"
          className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
        >
          <Link href={Routes.PROFILE_APPLICATION}>
            <div>
              <StarIcon />
            </div>
            {t("menu.application")}
          </Link>
        </Typography>
      )}
      {profileData?.role === "participant" && (
        <Typography
          asChild
          size="caption1"
          className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
        >
          <Link href={Routes.PROFILE_PARTICIPANTS}>
            <div>
              <PeopleIcon/>
            </div>
            {t("menu.participants")}
          </Link>
        </Typography>
      )}
      {profileData?.role === "participant" && (
        <Typography
          asChild
          size="caption1"
          className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
        >
          <Link href={Routes.PROFILE_NOTIFICATIONS}>
            <div>
              <NotificationIcon/>
            </div>
            {t("menu.notifications")}
          </Link>
        </Typography>
      )}
      {profileData?.role === "scout" && (
        <Typography
          asChild
          size="caption1"
          className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
        >
          <Link href={Routes.PROFILE_PARTICIPANTS_PROFILES}>
            <div>
              <NotificationIcon />
            </div>
            {t("menu.participants_profiles")}
          </Link>
        </Typography>
      )}
    </div>
  );
};
