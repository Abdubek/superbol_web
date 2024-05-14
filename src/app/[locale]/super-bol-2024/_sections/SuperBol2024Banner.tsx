"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import { Routes } from "@/routes";
import { useTranslations } from "next-intl";
import clsx from "clsx";

export const SuperBol2024Banner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const t = useTranslations("superbol2024.banner");

  return (
    <div className="container mb-20">
      <div className="flex-1 relative w-full rounded-3xl overflow-hidden md:min-h-[672px] min-h-[460px]">
        <div
          className="w-full h-full"
          style={{
            transition: "opacity 1s ease-out",
            opacity: imageLoaded ? 1 : 0,
          }}
        >
          <Image
            src={"/superbol2024banner.png"}
            alt={"Players"}
            fill
            quality={100}
            style={{
              objectFit: "cover",
            }}
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>

        <div className="absolute z-20 md:max-w-[630px] max-w-[320px] w-full flex items-center flex-col gap-3 left-1/2 -translate-x-1/2 md:bottom-[100px] bottom-10 text-center">
          <Typography
            size="h2"
            variant="white"
            className="sm:text-[40px] text-[18px]"
          >
            SUPER BOL 2024
          </Typography>
          <Typography size="body1" variant="white">
            {t("text")}
          </Typography>
          <Button
            asChild
            variant="primary"
            className={clsx(!imageLoaded && "hidden")}
          >
            <Link href={Routes.SIGN_IN}>{t("button")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
