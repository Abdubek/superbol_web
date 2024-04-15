import {Typography} from "@/shared/ui/Typography";
import * as React from "react";
import {useTranslations} from "next-intl";

export const CastingCities = () => {
  const t = useTranslations("superbol2024.cities");

  return (
    <div className="container mb-32">
      <Typography asChild size="h1" variant="primary" className="col-span-2 mb-7">
        <h1>{t('title')}</h1>
      </Typography>
      <div className="relative flex md:flex-row flex-col">
        <img src="/photos.png" alt="Players" className="md:w-1/3 w-full"/>
        <img src="/superbol/2024/kazakhstan.png" alt="Cities" className="md:w-2/3 w-full"/>
      </div>
    </div>
  )
}