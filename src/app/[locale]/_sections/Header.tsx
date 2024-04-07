import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import ChevronDownIcon from "@/shared/icons/chevron-down.svg";
import Link from "next/link";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import { Routes } from "@/routes";
import { LocaleSwitcherButton } from "@/features/LocaleSwitcher/LocaleSwitcherButton";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("landing.header");
  return (
    <header className="container py-2.5 flex items-center justify-between">
      <PrimaryLogo width={48} height={48} />
      <Link href={"/#"}>
        <Typography
          size="caption2"
          className="hover:text-text-primary sm:block hidden"
        >
          {t("mainPage")}
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
      <div className="flex gap-10">
        <LocaleSwitcherButton />
        <Button asChild size="sm" radius="md" weight="bold" variant="ghost">
          <Link href={Routes.SIGN_IN}>{t("login")}</Link>
        </Button>
      </div>
    </header>
  );
};
