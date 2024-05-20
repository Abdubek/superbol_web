"use client";

import { Link } from "@/navigation";
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
import { Button } from "@/shared/ui/Button";
import { ContactToWhatsapp } from "@/features/ContactToWhatsapp";
import { ApplicationStatus } from "@/shared/api/participant";
import { useTranslations } from "next-intl";
import { usePathname } from "@/navigation";
import { clsx } from "clsx";

const menu = {
  participant: [
    Routes.PROFILE_PARTICIPANTS_PHONE,
    Routes.PROFILE,
    Routes.PROFILE_APPLICATION,
    Routes.PROFILE_PARTICIPANTS,
    Routes.PROFILE_NOTIFICATIONS,
    Routes.PROFILE_DOCUMENTS,
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
  volunteer: [Routes.PROFILE_VOLUNTEER_SCANNER],
};

const menuItems = {
  [Routes.PROFILE]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE as any}>
          <div>
            <ProfileIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          {t("menu.profile")}
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_APPLICATION]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_APPLICATION;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE_APPLICATION as any}>
          <div>
            <StarIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          {t("menu.application")}
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_PARTICIPANTS]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_PARTICIPANTS;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE_PARTICIPANTS as any}>
          <div>
            <PeopleIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          {t("menu.participants")}
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_NOTIFICATIONS]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_NOTIFICATIONS;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE_NOTIFICATIONS as any}>
          <div>
            <NotificationIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          {t("menu.notifications")}
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_DOCUMENTS]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_DOCUMENTS;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE_DOCUMENTS as any}>
          <div>
            <DocIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          {t("menu.documents")}
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_PARTICIPANTS_PROFILES]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_PARTICIPANTS_PROFILES;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE_PARTICIPANTS_PROFILES as any}>
          <div>
            <NotificationIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          {t("menu.participants_profiles")}
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_MODERATOR_PARTICIPANTS]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_MODERATOR_PARTICIPANTS;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE_MODERATOR_PARTICIPANTS as any}>
          <div>
            <NotificationIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          {t("menu.participants_profiles")}
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_MODERATOR_STATS]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_MODERATOR_STATS;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE_MODERATOR_STATS as any}>
          <div>
            <NotificationIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          {t("menu.stats")}
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_PARTICIPANTS_RATING]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_PARTICIPANTS_RATING;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE_PARTICIPANTS_RATING as any}>
          <div>
            <ChartIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          {t("menu.rating")}
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_PARTICIPANTS_GROUPS]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_PARTICIPANTS_GROUPS;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE_PARTICIPANTS_GROUPS as any}>
          <div>
            <PeopleIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          {t("menu.casting")}
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_VOLUNTEER_SCANNER]: () => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_VOLUNTEER_SCANNER;
    return (
      <Typography
        asChild
        size="caption1"
        className={clsx(
          "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
          isActive && "bg-bg-primary text-text-white"
        )}
      >
        <Link href={Routes.PROFILE_VOLUNTEER_SCANNER as any}>
          <div>
            <PeopleIcon
              className={isActive ? "text-text-white" : "text-text-primary"}
            />
          </div>
          Сканнер
        </Link>
      </Typography>
    );
  },
  [Routes.PROFILE_PARTICIPANTS_PHONE]: (needPhone: boolean) => {
    const t = useTranslations("welcome");
    const pathname = usePathname();
    const isActive = pathname === Routes.PROFILE_PARTICIPANTS_PHONE;

    if (needPhone) {
      return (
        <Typography
          asChild
          size="caption1"
          className={clsx(
            "flex items-center gap-3 p-4 bg-bg-platinum rounded-lg sm:text-lg text-xs",
            isActive && "bg-bg-primary text-text-white"
          )}
        >
          <Link href={Routes.PROFILE_PARTICIPANTS_PHONE as any}>
            <div>
              <DocIcon
                className={isActive ? "text-text-white" : "text-text-primary"}
              />
            </div>
            Номер телефона
          </Link>
        </Typography>
      );
    }
    return null;
  },
};

const downloadNumberStatuses = [
  "application_submitted",
  "application_verified",
  "passed_first_casting",
  "came_to_second_casting",
  "came_to_first_casting",
];

type Props = {
  status: ApplicationStatus;
  number: string;
  needApplication: boolean;
  needPhone: boolean;
  role: "participant" | "scout" | "moderator" | "volunteer";
};

export const ProfileMenu = ({
  status,
  number,
  needApplication,
  needPhone,
  role,
}: Props) => {
  const t = useTranslations("welcome");
  return (
    <div className="flex flex-col gap-3">
      {downloadNumberStatuses.includes(status || "") && (
        <Button asChild variant="primary">
          <a href="/ru/api/download/number" download>
            {t("download.number")} - {number}
          </a>
        </Button>
      )}

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

      {role && menu[role].map((item) => menuItems[item]?.(needPhone))}

      <ContactToWhatsapp />
    </div>
  );
};
