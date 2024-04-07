import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/Tabs";
import { Typography } from "@/shared/ui/Typography";
import PlayerPicture from "../../../../public/player.png";
import PlayersPicture from "../../../../public/players.png";
import QuotesIcon from "@/shared/icons/quotes.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

enum TabTypes {
  RULES = "rules",
  GOALS = "goals",
}

export const Info = () => {
  const t = useTranslations("landing.info");

  return (
    <section className="container pb-9 min-h-[535px]">
      <Tabs defaultValue={TabTypes.RULES}>
        <TabsList className="sm:mb-10 mb-4 sm:gap-12 gap-4">
          <TabsTrigger
            value={TabTypes.RULES}
            className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]"
          >
            <Typography className="sm:font-bold sm:text-[32px] sm:leading-[133%] text-base">
              {t("rules.tab")}
            </Typography>
          </TabsTrigger>
          <TabsTrigger
            value={TabTypes.GOALS}
            className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]"
          >
            <Typography className="sm:font-bold sm:text-[32px] sm:leading-[133%] text-base">
              {t("goals.tab")}
            </Typography>
          </TabsTrigger>
        </TabsList>
        <TabsContent value={TabTypes.RULES}>
          <RulesContent />
        </TabsContent>
        <TabsContent value={TabTypes.GOALS}>
          <GoalsContent />
        </TabsContent>
      </Tabs>
    </section>
  );
};

const RulesContent = () => {
  const t = useTranslations("landing.info.rules");
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center">
      <div className="flex-1">
        <Typography asChild size="h4" className="mb-3 lg:block hidden">
          <h4>{t("title")}</h4>
        </Typography>
        <Typography size="body1">
          {t.rich("p", {
            br: () => <br />,
          })}
        </Typography>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <Typography asChild size="h4" className="mb-6 lg:hidden block">
          <h4>{t("title")}</h4>
        </Typography>
        <div className="relative sm:w-[522px] w-[320px] sm:h-[442px] px-10 mb-6">
          <Image
            alt="Player picture"
            src={PlayerPicture}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Typography className="absolute top-[10px] left-8 p-2.5 bg-bg-white text-text-primary border-2 rounded-lg sm:text-lg text-sm text-center">
            {t("badge1")}
          </Typography>

          <Typography className="absolute top-[80px] left-0 p-2.5 bg-bg-white text-text-primary border-2 rounded-lg sm:text-lg text-sm text-center">
            {t("badge2")}
          </Typography>

          <Typography className="absolute bottom-5 right-0 p-2.5 bg-bg-white text-text-primary border-2 rounded-lg text-lg text-center">
            {t.rich("badge3", {
              br: () => <br />,
            })}
          </Typography>
        </div>
      </div>
    </div>
  );
};

const GoalsContent = () => {
  const t = useTranslations("landing.info.goals");
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center">
      <div className="flex-1">
        <Typography asChild size="h4" className="mb-3 lg:block hidden">
          <h4>{t("title")}</h4>
        </Typography>
        <Typography size="body1" className="mb-10">
          {t("p")}
        </Typography>

        <div className="flex">
          <div className="mr-8">
            <Image src="/turlov.png" width={148} height={148} alt="Turlov" />
          </div>
          <div>
            <QuotesIcon />
          </div>
          <div className="ml-4">
            <Typography size="h3" className="mb-3">
              {t("quote")}
            </Typography>
            <Typography size="body1">{t("quoteAuthor")}</Typography>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <Typography
          asChild
          size="h4"
          className="mb-6 lg:hidden block text-left w-full"
        >
          <h4>{t("title")}</h4>
        </Typography>
        <div className="relative sm:w-[522px] w-[320px] sm:h-[442px] px-10 mb-6 sm:pt-0 pt-8">
          <Image
            alt="Player picture"
            src={PlayersPicture}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <Typography className="absolute top-0 left-1/2 -translate-x-1/2 p-2.5 bg-bg-primary text-text-white rounded-lg sm:text-lg text-sm font-bold text-center">
            {t.rich("badge1", {
              br: () => <br />,
            })}
          </Typography>
        </div>
      </div>
    </div>
  );
};
