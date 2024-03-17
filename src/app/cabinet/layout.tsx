import {ReactNode} from "react";
import ForegroundLogo from "@/shared/icons/foreground_logo.svg";
import {Button} from "@/shared/ui/Button";
import Link from "next/link";
import {Routes} from "@/routes";
import {ParticipantCard} from "@/entities/participant/ui/Card";
import {ProfileMenu} from "@/entities/participant/ui/ProfileMenu";


export default function CabinetLayout({
 children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <header className="bg-bg-primary">
        <div className="container py-2.5 flex justify-between items-center">
          <ForegroundLogo width={48} height={48} />

          <Button asChild size="sm" radius="md" weight="bold" variant="foreground">
            <Link href={Routes.HOME}>
              Выйти
            </Link>
          </Button>
        </div>
      </header>

      <div className="container grid grid-cols-4 gap-15 pt-15">
        <div className="col-span-1 flex flex-col gap-6">
          <ParticipantCard />
          <ProfileMenu />
        </div>
        <div className="col-span-3">
          {children}
        </div>
      </div>
    </div>
  );
}