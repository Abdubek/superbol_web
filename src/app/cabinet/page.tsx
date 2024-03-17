import Pattern from "@/shared/images/secondary_pattern.svg";
import {CastingTimer} from "@/entities/casting/CastingTimer";
import {Typography} from "@/shared/ui/Typography";

export default function CabinetPage() {
  return (
    <main className="">
      <div className="relative bg-gradient-to-tl from-bg-primary px-12 py-5 rounded-2xl overflow-hidden grid grid-cols-3 gap-4 mb-6">
        <Pattern
          className="absolute top-0 left-0 right-0 bottom-0 h-full"
          style={{
            opacity: "1",
          }}
        />

        <CastingTimer city="Астана" date={new Date()} />
        <CastingTimer city="Алматы" date={new Date()} />
        <CastingTimer city="Шымкент" date={new Date()} />
        <CastingTimer city="Актобе" date={new Date()} />
        <CastingTimer city="Ташкент" date={new Date()} />
      </div>

      <Typography size="h3">Инструкция пользователя</Typography>
    </main>
  )
}