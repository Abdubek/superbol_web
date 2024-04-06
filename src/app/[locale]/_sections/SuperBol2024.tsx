import {Typography} from "@/shared/ui/Typography";
import PrimaryPattern from "@/shared/images/primary_pattern.svg";
import {Button} from "@/shared/ui/Button";

export const SuperBol2024 = () => {
  return (
    <section className="container grid grid-cols-2 gap-10 py-15">
      <Typography asChild size="h1" variant="primary" className="col-span-2"><h1>Super Bol 2024</h1></Typography>
      <div className="lg:col-span-1 col-span-2 px-6 py-8 bg-bg-primary/20 rounded-2xl overflow-hidden relative">
        <PrimaryPattern
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            opacity: "0.1",
          }}
        />

        <Typography asChild size="h3" className="mb-2">
          <h3>Формат проекта</h3>
        </Typography>
        <Typography size="body1">
          Кастинг участников будет проводиться по уникальной системе  и методике отбора, разработанной профессиональной командой организаторов проекта. Спортивное реалити-шоу включает в себя этап кастинга, а также второй отборочный матч и финал.
        </Typography>
      </div>
      <div className="lg:col-span-1 col-span-2 px-6 py-8 bg-bg-yellow/20 rounded-2xl">
        <Typography asChild size="h3" className="mb-2">
          <h3>Даты проведения</h3>
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