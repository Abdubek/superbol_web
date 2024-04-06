import {ReactNode} from "react";
import ForegroundLogo from "@/shared/icons/foreground_logo.svg";
import Link from "next/link";
import {Routes} from "@/routes";
import {ParticipantCard} from "@/entities/participant/ui/Card";
import {ProfileMenu} from "@/entities/participant/ui/ProfileMenu";
import {Footer} from "@/app/_sections/Footer";
import {LogoutButton} from "@/features/Logout";
import {ScoutCard} from "@/entities/scout/ui/Card";
import {userApi} from "@/shared/api/user";


export default async function CabinetLayout({
 children,
}: Readonly<{
  children: ReactNode;
}>) {
  const profileData = await userApi.profile()

  return (
    <div>
      <header className="bg-bg-primary">
        <div className="container py-2.5 flex justify-between items-center">
          <Link href={Routes.CABINET}>
            <ForegroundLogo width={48} height={48} />
          </Link>

          <LogoutButton />
        </div>
      </header>

      <div className="container grid grid-cols-4 gap-15 pt-15 mb-48">
        <div className="col-span-1 flex flex-col gap-6">
          {profileData?.role === "participant" && <ParticipantCard />}
          {profileData?.role === "scout" && <ScoutCard />}
          <ProfileMenu />
        </div>
        <div className="col-span-3">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}