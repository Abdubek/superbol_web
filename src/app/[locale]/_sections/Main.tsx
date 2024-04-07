import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";
import { useTranslations } from "next-intl";
import ArrowRightIcon from "@/shared/icons/arrow-right.svg";
import PrimaryPattern from "@/shared/images/primary_pattern.svg";
import Link from "next/link";

export const Main = () => {
  const t = useTranslations("landing.main");

  return (
    <section className="relative container grid grid-cols-7 items-center sm:gap-20 gap-0 sm:py-36 pb-10 pt-36">
      <PrimaryPattern
        className="absolute sm:left-[10px] left=0 md:w-[600px] w-[300px] md:h-[600px] h-[300px]"
        style={{
          clipPath: "circle(50% at center)",
          opacity: "0.1",
        }}
      />
      <div className="col-span-7 lg:col-span-4 flex flex-col gap-5 items-start">
        <Typography
          size="h3"
          variant="primary"
          className="uppercase md:text-5xl"
        >
          {t("title")}
        </Typography>
        <Typography size="body1" className="max-w-[480px]">
          <span className="text-text-primary font-bold">«SUPER BOL»</span>
          {t("subtitle")}
        </Typography>

        <Link href={"/sign-up"}>
          <Button variant="primary">{t("cta")}</Button>
        </Link>
      </div>
      <div className="col-span-3 hidden lg:flex flex-col items-start gap-14 pr-14">
        <a
          href="https://www.youtube.com/@SuperBolKz"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button variant="ghost" className="text-text-primary">
            {t("weAreOnYouTube")}
          </Button>
        </a>
        <a
          href="https://www.youtube.com/watch?v=gd0EHzrj6o4&t=4s&ab_channel=SuperBol"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-between gap-12 w-full"
        >
          <Typography asChild size="body1">
            <span>
              Финал. Матч жизни для &quot;Super Bol&quot; / Скауты на
              Астана-Арена!
            </span>
          </Typography>
          <ArrowRightIcon />
        </a>
        <a
          href="https://www.youtube.com/watch?v=5t-dbNVisR4&ab_channel=SuperBol"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-between gap-12 w-full"
        >
          <Typography asChild size="body1">
            <span>
              Выгнали с команды 3-их игроков после игры с &quot;Jas-Qyran&quot;
              / Super Bol
            </span>
          </Typography>
          <ArrowRightIcon />
        </a>
        <a
          href="https://www.youtube.com/watch?v=qb5BvjfDZFk&t=1408s&ab_channel=SuperBol"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-between gap-12 w-full"
        >
          <Typography asChild size="body1">
            <span>
              &quot;Казахстан богат не нефтью, он богат людьми&quot; - Тимур
              Турлов
            </span>
          </Typography>
          <ArrowRightIcon />
        </a>
      </div>
    </section>
  );
};
