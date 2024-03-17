import {Typography} from "@/shared/ui/Typography";
import PrimaryPattern from "@/shared/images/primary_pattern.svg";
import {Button} from "@/shared/ui/Button";

export const SuperBol2024 = () => {
  return (
    <section className="container grid grid-cols-2 gap-10 py-15">
      <Typography as="h1" size="h1" variant="primary" className="col-span-2">Super Bol 2024 </Typography>
      <div className="col-span-1 px-6 py-8 bg-bg-primary/20 rounded-2xl overflow-hidden relative">
        <PrimaryPattern
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            opacity: "0.1",
          }}
        />

        <Typography as="h3" size="h3" className="mb-2">
          Формат проекта
        </Typography>
        <Typography size="body1">
          Футбольные отборы будут проводиться по уникальной системе и методике выбывания, разработанной командой организатора проекта. Спортивное реалити-шоу состоит из кастинга, в который включен второй отборный матч и финал.
        </Typography>
      </div>
      <div className="col-span-1 px-6 py-8 bg-bg-yellow/20 rounded-2xl">
        <Typography as="h3" size="h3" className="mb-2">
          Даты проведения
        </Typography>

        <div className="grid grid-rows-4 grid-flow-col gap-1">
          <Typography size="body1">
            🇰🇿 Алматы: ХХ - ХХ месяц
          </Typography>
          <Typography size="body1">
            🇰🇿 Алматы: ХХ - ХХ месяц
          </Typography>
          <Typography size="body1">
            🇰🇿 Шымкент: ХХ - ХХ месяц
          </Typography>
          <Typography size="body1">
            🇰🇿 Алматы: ХХ - ХХ месяц
          </Typography>
          <Typography size="body1">
            🇰🇬  Бишкек: ХХ - ХХ месяц
          </Typography>
          <Typography size="body1">
            🇺🇿  Ташкент: ХХ - ХХ месяц
          </Typography>
        </div>
      </div>
      <div className="col-span-2">
        <Button variant="primary">Узнать подробнее</Button>
      </div>
    </section>
  )
}