"use client";

import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import { TikTokEmbed } from "react-social-media-embed";
import { useWindowSize } from "usehooks-ts";

const ttlinks = [
  "7272981798030675205",
  "7268867928467000582",
  "7261657002491858181",
  "7254856341993393413",
];

export const TiktokVideos = () => {
  const t = useTranslations("landing.tiktokVideos");
  return (
    <section className="container sm:pb-48 pb-10">
      <Typography size="h2" variant="primary" className="mb-10">
        {t('title')}
      </Typography>
      <div className="flex overflow-x-scroll gap-9">
        {ttlinks.map((id, index) => (
          <div
            className="rounded-2xl overflow-hidden min-w-[320px]"
            key={index}
          >
            <TikTokEmbed
              url={`https://www.tiktok.com/@superbol.kz/video/${id}`}
              width={325}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
