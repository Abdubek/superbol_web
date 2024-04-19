import Pattern from "@/shared/images/secondary_pattern.svg";
import { CastingTimer } from "@/entities/casting/CastingTimer";
import { Typography } from "@/shared/ui/Typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs";
import { userApi } from "@/shared/api/user";
import { citiesApi } from "@/shared/api/cities";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

enum TabTypes {
  ABOUT_US = "about_us",
  CASTING_PROCESS = "casting_process",
  ADVICES = "advices",
}

export default async function CabinetPage() {
  const [profileData, citiesData, t] = await Promise.all([
    userApi.profile(),
    citiesApi.getCitiesList(),
    getTranslations("welcome")
  ])
  return (
    <main className="">
      {citiesData?.length ? (
        <div className="relative bg-gradient-to-tl from-bg-primary lg:px-12 px-4 py-5 rounded-2xl overflow-hidden grid xl:grid-cols-3 grid-cols-2 gap-4 mb-6">
          <Pattern
            className="absolute top-0 left-0 right-0 bottom-0 h-full"
            style={{
              opacity: "1",
            }}
          />

          {citiesData?.map((city, index) => (
            <CastingTimer
              key={index}
              city={city.name}
              date={new Date(city.start_at)}
            />
          ))}
        </div>
      ) : null}

      {(profileData?.role !== "moderator" && profileData?.role !== "volunteer") && (
        <>
          <Typography size="h3" className="mb-3">
            {t("heading")}
          </Typography>
          <Tabs defaultValue={TabTypes.ABOUT_US}>
            <TabsList className="mb-6">
              <TabsTrigger
                value={TabTypes.ABOUT_US}
                className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]"
              >
                <Typography size="caption1">{t("tabs.about.name")}</Typography>
              </TabsTrigger>
              {/*<TabsTrigger value={TabTypes.CASTING_PROCESS} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">*/}
              {/*  <Typography size="caption1">Процесс кастинга</Typography>*/}
              {/*</TabsTrigger>*/}
              {/*<TabsTrigger value={TabTypes.ADVICES} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">*/}
              {/*  <Typography size="caption1">Советы</Typography>*/}
              {/*</TabsTrigger>*/}
            </TabsList>
            <TabsContent value={TabTypes.ABOUT_US}>
              <AboutUs />
            </TabsContent>
            <TabsContent value={TabTypes.CASTING_PROCESS}>casting</TabsContent>
            <TabsContent value={TabTypes.ADVICES}>advices</TabsContent>
          </Tabs>
        </>
      )}
    </main>
  );
}

const AboutUs = () => {
  const t = useTranslations("welcome");
  return (
    <div>
      <Typography size="caption1" className="mb-2">
        {t("tabs.about.title")}
      </Typography>
      <Typography>
        {t.rich("tabs.about.content", {
          br: () => <br />,
        })}
      </Typography>
    </div>
  );
};
