import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import Link from "next/link";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import { Routes } from "@/routes";
import { LocaleSwitcherButton } from "@/features/LocaleSwitcher/LocaleSwitcherButton";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Header = () => {
  const t = useTranslations("landing.header");
  return (
    <header className="container py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <PrimaryLogo width={48} height={48} />
        <a href="https://www.freedomholdingcorp.com" target="_blank" rel="noreferrer noopener">
          <Image
            src="/partners/freedom.png"
            alt="Freedom"
            width={137}
            height={72}
          />
        </a>
      </div>
      <Link href={"/#"}>
        <Typography
          size="caption2"
          className="hover:text-text-primary sm:block hidden"
        >
          {t("mainPage")}
        </Typography>
      </Link>
      <Link href={"/super-bol-2024"}>
        <Typography
          size="caption2"
          className="hover:text-text-primary sm:block hidden"
        >
          SuperBol 2024
        </Typography>
      </Link>
      <Link href={"/sign-up"}>
        <Typography
          size="caption2"
          className="hover:text-text-primary sm:block hidden"
        >
          {t("cta")}
        </Typography>
      </Link>
      <div className="flex sm:gap-10 gap-4 whitespace-nowrap">
        <LocaleSwitcherButton />
        <Button asChild size="sm" radius="md" weight="bold" variant="ghost">
          <Link href={Routes.SIGN_IN}>{t("login")}</Link>
        </Button>
      </div>
    </header>
  );
};
