import Image from "next/image";
import PrimaryPattern from "@/shared/images/primary_pattern.svg";
import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import { Typography } from "@/shared/ui/Typography";
import Link from "next/link";
import { SignInForm } from "@/features/SignInForm";
import { Routes } from "@/routes";
import { useTranslations } from "next-intl";

export default function SignInPage() {
  const t = useTranslations("auth");

  return (
    <main className="container min-h-screen flex py-8 md:flex-row flex-col gap-6">
      <div className="flex-1 relative w-full rounded-3xl overflow-hidden min-h-[250px]">
        <Image
          src={"/players2.png"}
          alt={"Players"}
          fill
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />
        <PrimaryPattern
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            opacity: "0.2",
          }}
        />
      </div>
      <div className="flex-1 flex flex-col gap-5 justify-between items-center">
        <Link href={Routes.HOME} className="md:block hidden">
          <PrimaryLogo width={48} height={48} />
        </Link>

        <SignInForm />

        <div className="flex flex-col items-center text-center">
          <Image
            src="/partners/freedom.png"
            alt="Freedom"
            width={111}
            height={58}
          />
          <Typography variant="grey">
            {t.rich("signIn.routes.statements.title", {
              link: () => (
                <Typography variant="darkBlue" asChild>
                  <Link href="/">
                    {t.rich("signIn.routes.statements.cta", {
                      br: () => <br />,
                    })}
                  </Link>
                </Typography>
              ),
            })}
          </Typography>
        </div>
      </div>
    </main>
  );
}
