import {ReactNode} from "react";
import ForegroundLogo from "@/shared/icons/foreground_logo.svg";
import {Routes} from "@/routes";
import {ParticipantCard} from "@/entities/participant/ui/Card";
import {ProfileMenu} from "@/entities/participant/ui/ProfileMenu";
import {Footer} from "../_sections/Footer";
import {LogoutButton} from "@/features/Logout";
import {ScoutCard} from "@/entities/scout/ui/Card";
import {LocaleSwitcherButton} from "@/features/LocaleSwitcher/LocaleSwitcherButton";
import Link from "next/link";
import {userApi} from "@/shared/api/user";


export default async function CabinetLayout({
 children,
 params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const profileData = await userApi.profile();

  const needApplication = profileData?.role === "participant" && profileData.participant?.status === "activated"
  const needPhone = !needApplication && profileData?.role === "participant" && !profileData.participant?.phone_number

  return (
    <div>
      <header className="bg-bg-primary">
        <div className="container py-2.5 flex justify-between items-center">
          <Link href={Routes.CABINET}>
            <ForegroundLogo width={48} height={48} />
          </Link>

          <div className="flex items-center gap-10 text-text-white">
            <LocaleSwitcherButton />
            <LogoutButton />
          </div>
        </div>
      </header>

      <div className="container grid xl:grid-cols-4 grid-cols-6 lg:gap-15 gap-4 pt-15 mb-48">
        <div className="xl:col-span-1 lg:col-span-2 md:col-span-3 col-span-6 flex flex-col gap-6">
          <ParticipantCard />
          <ScoutCard />
          {profileData &&
            <ProfileMenu
              status={profileData?.participant?.status}
              needPhone={needPhone}
              needApplication={needApplication}
              number={profileData?.participant?.number}
              role={profileData?.role}
            />}
        </div>
        <div className="xl:col-span-3 lg:col-span-4 md:col-span-3 col-span-6">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}