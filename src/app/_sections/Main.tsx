import {Typography} from "@/shared/ui/Typography";
import {Button} from "@/shared/ui/Button";
import Link from "next/link";
import ArrowRightIcon from "@/shared/icons/arrow-right.svg";
import PrimaryPattern from "@/shared/images/primary_pattern.svg";

export const Main = () => {
  return (
    <section className="relative container mx-auto grid grid-cols-7 items-center gap-20 py-36">
      <PrimaryPattern
        className="absolute left-[120px] w-[600px] h-[600px]"
        style={{
          clipPath: "circle(50% at center)",
          opacity: "0.1",
        }}
      />
      <div className="col-span-4 flex flex-col gap-5 items-start">
        <Typography size="h1" variant="primary" className="uppercase">
          ТВОЙ ШАНС<br/> ОСУЩЕСТВЛЕНИЯ МЕЧТЫ
        </Typography>
        <Typography size="body1" className="max-w-[480px]">
          Социальный футбольный проект{" "}
          <span className="text-text-primary font-bold">«SUPER BOL»</span> –
          уникальное и самое масштабное спортивное реалити-шоу в отечественной
          истории Казахстана.
        </Typography>
        <Button variant="primary">
          Стать участником
        </Button>
      </div>
      <div className="col-span-3 flex flex-col items-start gap-14 pr-14">
        <Button>
          Наши выпуски на YouTube
        </Button>
        <Link href="#" className="flex items-center justify-between gap-12 w-full">
          <Typography as="span" size="body1">
            Финал. Матч жизни для &quot;Super Bol&quot; / Скауты на Астана-Арена!
          </Typography>
          <ArrowRightIcon />
        </Link>
        <Link href="#" className="flex items-center justify-between gap-12 w-full">
          <Typography as="span" size="body1">
            Выгнали с команды 3-их игроков после игры с &quot;Jas-Qyran&quot; / Super Bol
          </Typography>
          <ArrowRightIcon />
        </Link>
        <Link href="#" className="flex items-center justify-between gap-12 w-full">
          <Typography as="span" size="body1">
            &quot;Казахстан богат не нефтью, он богат людьми&quot; - Тимур Турлов
          </Typography>
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  )
}