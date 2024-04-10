import {Typography} from "@/shared/ui/Typography";
import {citiesApi} from "@/shared/api/cities";
import {getTranslations} from "next-intl/server";

export const CitiesList = async () => {
  const citiesData = (await citiesApi.getCitiesList()) || [];
  const t = await getTranslations("landing.superBol2024");

  return (
    <div className="lg:col-span-1 col-span-2 px-6 py-8 bg-bg-yellow/20 rounded-2xl">
      <Typography asChild size="h3" className="mb-2">
        <h3>{t("title_dates")}</h3>
      </Typography>

      <div className="grid sm:grid-rows-4  grid-rows-6 grid-flow-col gap-1">
        {citiesData.map((city, index) => (
          <Typography key={index} size="body1">
            <CountryIcon country={city.country}/> {city.name_ru}:{" "}
            {new Intl.DateTimeFormat("ru-RU")
              .format(new Date(city.start_at))
              .substring(0, 2)}
            -
            {new Intl.DateTimeFormat("ru-RU")
              .format(new Date(city.end_at))
              .substring(0, 2)}{" "}
            {new Intl.DateTimeFormat("ru-RU", {month: "long"}).format(
              new Date(city.end_at)
            )}
          </Typography>
        ))}
      </div>
    </div>
  )
}

const CountryIcon = ({ country }: { country: "KZ" | "KG" | "UZ" }) => {
  switch (country) {
    case "KZ":
      return <>🇰🇿</>;
    case "KG":
      return <>🇰🇬</>;
    case "UZ":
      return <>🇺🇿</>;
    default:
      return <>🇰🇿</>;
  }
};
