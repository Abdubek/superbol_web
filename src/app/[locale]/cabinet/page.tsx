import Pattern from "@/shared/images/secondary_pattern.svg";
import {CastingTimer} from "@/entities/casting/CastingTimer";
import {Typography} from "@/shared/ui/Typography";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/Tabs";
import {userApi} from "@/shared/api/user";
import {citiesApi} from "@/shared/api/cities";

enum TabTypes {
  ABOUT_US = "about_us",
  CASTING_PROCESS = "casting_process",
  ADVICES = "advices"
}

export default async function CabinetPage() {
  const citiesData = await citiesApi.getCitiesList() || []

  return (
    <main className="">
      {citiesData.length ? <div className="relative bg-gradient-to-tl from-bg-primary lg:px-12 px-4 py-5 rounded-2xl overflow-hidden grid xl:grid-cols-3 grid-cols-2 gap-4 mb-6">
        <Pattern
          className="absolute top-0 left-0 right-0 bottom-0 h-full"
          style={{
            opacity: "1",
          }}
        />

        {citiesData.map((city, index) =>
          <CastingTimer key={index} city={city.name} date={new Date(city.start_at)} />
        )}
      </div> : null}

      <Typography size="h3" className="mb-3">Инструкция пользователя</Typography>
      <Tabs defaultValue={TabTypes.ABOUT_US}>
        <TabsList className="mb-6">
          <TabsTrigger value={TabTypes.ABOUT_US} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">
            <Typography size="caption1">О проекте</Typography>
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

const AboutUs = () => {
  return (
    <div>
      <Typography size="caption1" className="mb-2">
        Super Bol 2024
      </Typography>
      <Typography>
        Футбольные отборы будут проводиться по уникальной системе и методике выбывания, разработанной командой организатора проекта. Спортивное реалити-шоу состоит из кастинга, в который включен второй отборный матч и финал. Финальный этап, включающий в себя профессиональные футбольные тренировки под руководством тренерского состава и проведением регулярных еженедельных матчей с целью выявления и просмотра потенциальными скаутами подписание профессионального контракта с участниками.<br/><br/>
        Проект проводится на основании следующих принципов: равенства и общедоступности для всех физических лиц, желающих участвовать в проекте, оздоровительной направленности, запрета на дискриминацию и недопущения пропаганды культа жестокости, насилия и унижения человеческого достоинства, содействия развитию "инновационной ментальности" в футболе, повышение интереса молодежи к футболу, развития юношеского спорта в Казахстане"
      </Typography>
    </div>
  )
}