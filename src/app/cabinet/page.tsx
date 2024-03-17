import Pattern from "@/shared/images/secondary_pattern.svg";
import {CastingTimer} from "@/entities/casting/CastingTimer";
import {Typography} from "@/shared/ui/Typography";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/Tabs";

enum TabTypes {
  ABOUT_US = "about_us",
  CASTING_PROCESS = "casting_process",
  ADVICES = "advices"
}

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

      <Typography size="h3" className="mb-3">Инструкция пользователя</Typography>
      <Tabs defaultValue={TabTypes.ABOUT_US}>
        <TabsList className="mb-6">
          <TabsTrigger value={TabTypes.ABOUT_US} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">
            <Typography size="caption1">О проекте</Typography>
          </TabsTrigger>
          <TabsTrigger value={TabTypes.CASTING_PROCESS} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">
            <Typography size="caption1">Процесс кастинга</Typography>
          </TabsTrigger>
          <TabsTrigger value={TabTypes.ADVICES} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">
            <Typography size="caption1">Советы</Typography>
          </TabsTrigger>
        </TabsList>
        <TabsContent value={TabTypes.ABOUT_US}>
          about
        </TabsContent>
        <TabsContent value={TabTypes.CASTING_PROCESS}>
          casting
        </TabsContent>
        <TabsContent value={TabTypes.ADVICES}>
          advices
        </TabsContent>
      </Tabs>
    </main>
  )
}