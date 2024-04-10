import { Typography } from "@/shared/ui/Typography";
import PrimaryPattern from "@/shared/images/primary_pattern.svg";
import { Button } from "@/shared/ui/Button";
import { citiesApi } from "@/shared/api/cities";
import { getTranslations } from "next-intl/server";
import {CitiesList} from "@/features/CitiesList";
import ErrorBoundary from "@/shared/ui/ErrorBoundary";

export const SuperBol2024 = async () => {
  const t = await getTranslations("landing.superBol2024");

  return (
    <section className="container grid grid-cols-2 sm:gap-10 gap-3 sm:py-15 py-4">
      <Typography asChild size="h1" variant="primary" className="col-span-2">
        <h1>Super Bol 2024</h1>
      </Typography>
      <div className="lg:col-span-1 col-span-2 px-6 py-8 bg-bg-primary/20 rounded-2xl overflow-hidden relative">
        <PrimaryPattern
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            opacity: "0.1",
          }}
        />

        <Typography asChild size="h3" className="mb-2">
          <h3>{t("title_format")}</h3>
        </Typography>
        <Typography size="body1">{t("content")}</Typography>
      </div>
      <CitiesList/>
      {/*<div className="col-span-2">*/}
      {/*  <Button variant="primary">Узнать подробнее</Button>*/}
      {/*</div>*/}
    </section>
  );
};
