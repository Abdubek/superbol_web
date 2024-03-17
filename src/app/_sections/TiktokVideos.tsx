"use client"

import {Typography} from "@/shared/ui/Typography";
import { TikTokEmbed } from "react-social-media-embed";

const ttlinks = [
  "7272981798030675205",
  "7268867928467000582",
  "7261657002491858181",
  "7254856341993393413",
];

export const TiktokVideos = () => {
  return (
    <section className="container pb-48">
      <Typography size="h2" variant="primary" className="mb-10">Смотрите нас в TikTok</Typography>
      <div className="flex overflow-x-scroll gap-9">
        {ttlinks.map((id, index) => (
          <div className="rounded-2xl overflow-hidden"
               key={index}>
            <TikTokEmbed
              url={`https://www.tiktok.com/@superbol.kz/video/${id}`}
              width={325}
            />
          </div>
        ))}
      </div>
    </section>
  )
}