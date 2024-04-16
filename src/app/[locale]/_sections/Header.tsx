"use client"

import PrimaryLogo from "@/shared/icons/primary_logo.svg";
import ForegroundLogo from "@/shared/icons/foreground_logo.svg";
import Link from "next/link";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import { Routes } from "@/routes";
import { LocaleSwitcherButton } from "@/features/LocaleSwitcher/LocaleSwitcherButton";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {useState} from "react";
import CrossIcon from "@/shared/icons/cross.svg";
import BurgerIcon from "@/shared/icons/burger.svg";
import {cn} from "@/shared/utils/common";

export const Header = () => {
  const t = useTranslations("landing.header");
  const [isOpen, setOpen] = useState(false)

  return (
    <div className={cn(isOpen ? "bg-bg-primary" : "bg-bg-white")}>
      <header className="container md:py-2.5 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={Routes.HOME} className="md:block hidden">
            {isOpen ? <ForegroundLogo width={48} height={48} /> : <PrimaryLogo width={48} height={48} />}
          </Link>
          <Link href={Routes.HOME} className="md:hidden block">
            {isOpen ? <ForegroundLogo width={28} height={28} viewBox="0 0 48 48" /> : <PrimaryLogo width={28} height={28} />}
          </Link>
          <a href="https://www.freedomholdingcorp.com" target="_blank" rel="noreferrer noopener"
             className="md:block hidden">
            <Image
              src="/partners/freedom.png"
              alt="Freedom"
              width={137}
              height={72}
            />
          </a>
          <a href="https://www.freedomholdingcorp.com" target="_blank" rel="noreferrer noopener"
             className="md:hidden block">
            <Image
              src="/partners/freedom.png"
              alt="Freedom"
              width={69}
              height={36}
            />
          </a>
        </div>
        <Link href={"/#"}>
          <Typography
            size="caption2"
            className="hover:text-text-primary md:block hidden"
          >
            {t("mainPage")}
          </Typography>
        </Link>
        <Link href={"/super-bol-2024"}>
          <Typography
            size="caption2"
            className="hover:text-text-primary md:block hidden"
          >
            SuperBol 2024
          </Typography>
        </Link>
        <Link href={"/sign-up"}>
          <Typography
            size="caption2"
            className="hover:text-text-primary md:block hidden"
          >
            {t("cta")}
          </Typography>
        </Link>
        <div className="flex items-center sm:gap-10 gap-4 whitespace-nowrap">
          <LocaleSwitcherButton />
          <Button asChild size="sm" radius="md" weight="bold" variant="ghost" className="md:block hidden">
            <Link href={Routes.SIGN_IN}>{t("login")}</Link>
          </Button>
          {isOpen
            ? <Button className="text-text-white md:hidden block" onClick={() => setOpen(false)}>
              <CrossIcon />
            </Button>
            : <Button className=" md:hidden block" onClick={() => setOpen(true)}>
              <BurgerIcon />
            </Button>
          }
        </div>
        {isOpen && <div className="absolute bg-bg-white top-[54px] right-0 bottom-0 left-0 z-50 md:hidden block">
          <div className="bg-bg-primary/35 h-full py-6 px-4 flex flex-col gap-2 text-text-white">
            <Link href={"/#"}>
              <Typography
                size="caption1"
                className="hover:text-text-primary"
              >
                {t("mainPage")}
              </Typography>
            </Link>
            <Link href={"/super-bol-2024"}>
              <Typography
                size="caption1"
                className="hover:text-text-primary"
              >
                SuperBol 2024
              </Typography>
            </Link>
            <Link href={"/sign-in"}>
              <Typography
                size="caption1"
                className="hover:text-text-primary"
              >
                {t("loginToCabinet")}
              </Typography>
            </Link>
          </div>
        </div>}
      </header>
    </div>
  );
};
