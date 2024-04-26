import Link from "next/link";
import ProfileIcon from "@/shared/icons/profile.svg";
import StarIcon from "@/shared/icons/star.svg";
import PeopleIcon from "@/shared/icons/people.svg";
import NotificationIcon from "@/shared/icons/notification.svg";
import InformationIcon from "@/shared/icons/information.svg";
import InformationYellowIcon from "@/shared/icons/information-yellow.svg";
import ChartIcon from "@/shared/icons/chart.svg";
import DocIcon from "@/shared/icons/doc.svg";
import { Typography } from "@/shared/ui/Typography";
import { Routes } from "@/routes";
import { userApi } from "@/shared/api/user";
import { getTranslations } from "next-intl/server";
import { Button } from "@/shared/ui/Button";
import {ContactToWhatsapp} from "@/features/ContactToWhatsapp";

const menu = {
  participant: [
    Routes.PROFILE_PARTICIPANTS_PHONE,
    Routes.PROFILE,
    Routes.PROFILE_APPLICATION,
    Routes.PROFILE_PARTICIPANTS,
    Routes.PROFILE_NOTIFICATIONS,
    Routes.PROFILE_DOCUMENTS
  ],
  scout: [
    Routes.PROFILE,
    Routes.PROFILE_PARTICIPANTS_PROFILES,
    Routes.PROFILE_PARTICIPANTS_RATING,
    // Routes.PROFILE_PARTICIPANTS_GROUPS,
  ],
  moderator: [
    Routes.PROFILE_MODERATOR_PARTICIPANTS,
    Routes.PROFILE_MODERATOR_STATS,
  ],
  volunteer: [
    Routes.PROFILE_VOLUNTEER_SCANNER
  ]
}

const menuItems = {
  [Routes.PROFILE]: async () => {
    const t = await getTranslations("welcome");
    return (
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
    )},
  [Routes.PROFILE_APPLICATION]: async () => {
    const t = await getTranslations("welcome");
    return (
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
    )
  },
  [Routes.PROFILE_PARTICIPANTS]: async () => {
    const t = await getTranslations("welcome");
    return (
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
    )
  },
  [Routes.PROFILE_NOTIFICATIONS]: async () => {
    const t = await getTranslations("welcome");
    return (
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
    )
  },
  [Routes.PROFILE_DOCUMENTS]: async () => {
    const t = await getTranslations("welcome");
    return (
      <Typography
        asChild
        size="caption1"
        className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
      >
        <Link href={Routes.PROFILE_DOCUMENTS}>
          <div>
            <DocIcon/>
          </div>
          {t("menu.documents")}
        </Link>
      </Typography>
    )
  },
  [Routes.PROFILE_PARTICIPANTS_PROFILES]: async () => {
    const t = await getTranslations("welcome");
    return (
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
    )
  },
  [Routes.PROFILE_MODERATOR_PARTICIPANTS]: async () => {
    const t = await getTranslations("welcome");
    return (
      <Typography
        asChild
        size="caption1"
        className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
      >
        <Link href={Routes.PROFILE_MODERATOR_PARTICIPANTS}>
          <div>
            <NotificationIcon />
          </div>
          {t("menu.participants_profiles")}
        </Link>
      </Typography>
    )
  },
  [Routes.PROFILE_MODERATOR_STATS]: async () => {
    const t = await getTranslations("welcome");
    return (
      <Typography
        asChild
        size="caption1"
        className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
      >
        <Link href={Routes.PROFILE_MODERATOR_STATS}>
          <div>
            <NotificationIcon />
          </div>
          {t("menu.stats")}
        </Link>
      </Typography>
    )
  },
  [Routes.PROFILE_PARTICIPANTS_RATING]: async () => {
    const t = await getTranslations("welcome");
    return (
      <Typography
        asChild
        size="caption1"
        className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
      >
        <Link href={Routes.PROFILE_PARTICIPANTS_RATING}>
          <div>
            <ChartIcon />
          </div>
          {t("menu.rating")}
        </Link>
      </Typography>
    )
  },
  [Routes.PROFILE_PARTICIPANTS_GROUPS]: async () => {
    const t = await getTranslations("welcome");
    return (
      <Typography
        asChild
        size="caption1"
        className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
      >
        <Link href={Routes.PROFILE_PARTICIPANTS_GROUPS}>
          <div>
            <PeopleIcon />
          </div>
          {t("menu.casting")}
        </Link>
      </Typography>
    )
  },
  [Routes.PROFILE_VOLUNTEER_SCANNER]: async () => {
    const t = await getTranslations("welcome");
    return (
      <Typography
        asChild
        size="caption1"
        className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
      >
        <Link href={Routes.PROFILE_VOLUNTEER_SCANNER}>
          <div>
            <PeopleIcon />
          </div>
          Сканнер
        </Link>
      </Typography>
    )
  },
  [Routes.PROFILE_PARTICIPANTS_PHONE]: async () => {
    const profileData = await userApi.profile();
    const t = await getTranslations("welcome");
    const needApplication = profileData?.role === "participant" && profileData.participant?.status === "activated"
    const needPhone = !needApplication && profileData?.role === "participant" && !profileData.participant?.phone_number

    if (true) {
      return (
        <Typography
          asChild
          size="caption1"
          className="flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs"
        >
          <Link href={Routes.PROFILE_PARTICIPANTS_PHONE}>
            <div>
              <DocIcon/>
            </div>
            Номер телефона
          </Link>
        </Typography>
      )
    }
    return null
  }
}

const downloadNumberStatuses = ['application_submitted', 'application_verified', 'passed_first_casting', 'came_to_second_casting', 'came_to_first_casting']

export const ProfileMenu = async () => {
  const profileData = await userApi.profile();

  const t = await getTranslations("welcome");

  const needApplication = profileData?.role === "participant" && profileData.participant?.status === "activated"
  const needPhone = !needApplication && profileData?.role === "participant" && !profileData.participant?.phone_number
  return (
    <div className="flex flex-col gap-3">
      {downloadNumberStatuses.includes(profileData?.participant?.status || "") &&
        <Button asChild variant="primary">
          <a href="/ru/api/download/number" download>
            {t('download.number')} - {profileData?.participant?.number}
          </a>
        </Button>}

      {needApplication && (
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

      {needPhone && (
        <Typography
          size="body3"
          className="flex items-center gap-3 p-2 rounded-lg bg-bg-yellow/10"
        >
          <div>
            <InformationYellowIcon />
          </div>
          {t("enter_phone")}
        </Typography>
      )}

      {profileData?.role && menu[profileData?.role].map(item => menuItems[item]?.())}

      <ContactToWhatsapp />
    </div>
  );
};
