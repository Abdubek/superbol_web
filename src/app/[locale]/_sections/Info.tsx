import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/Tabs"
import {Typography} from "@/shared/ui/Typography";
import PlayerPicture from "../../../../public/player.png";
import PlayersPicture from "../../../../public/players.png";
import QuotesIcon from '@/shared/icons/quotes.svg'
import Image from 'next/image'

enum TabTypes {
  RULES = "rules",
  GOALS = "goals",
}

export const Info = () => {
  return (
    <section className="container pb-9 min-h-[535px]">
      <Tabs defaultValue={TabTypes.RULES}>
        <TabsList className="sm:mb-10 mb-4 sm:gap-12 gap-4">
          <TabsTrigger value={TabTypes.RULES} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">
            <Typography className="sm:font-bold sm:text-[32px] sm:leading-[133%] text-base">Правила проекта</Typography>
          </TabsTrigger>
          <TabsTrigger value={TabTypes.GOALS} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">
            <Typography className="sm:font-bold sm:text-[32px] sm:leading-[133%] text-base">Наши цели</Typography>
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
  )
}

const RulesContent = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center">
      <div className="flex-1">
        <Typography asChild size="h4" className="mb-3 lg:block hidden">
          <h4>
            Кастинг участников будет проводиться по уникальной системе и методике отбора, разработанной профессиональной командой организаторов проекта.
          </h4>
        </Typography>
        <Typography size="body1">
          Спортивное реалити-шоу включает в себя этап кастинга, а также второй отборочный матч и финал. Заключительная стадия проекта состоит из профессиональных тренировок под руководством тренерского состава и проведения регулярных еженедельных матчей с целью просмотра потенциальными скаутами для подписания профессионального контракта с участниками.
          <br /><br />
          Проект основан на следующих принципах: равенства и доступности для всех желающих участвовать, здорового образа жизни, запрета на дискриминацию и отвергания насилия, поддержки инноваций в футболе, стимулирования интереса молодежи к этому виду спорта и развития юношеского спорта в Казахстане.
        </Typography>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <Typography asChild size="h4" className="mb-6 lg:hidden block">
          <h4>
            Кастинг участников будет проводиться по уникальной системе и методике отбора, разработанной профессиональной командой организаторов проекта.
          </h4>
        </Typography>
        <div className="relative sm:w-[522px] w-[320px] sm:h-[442px] px-10 mb-6">
          <Image alt="Player picture"
                 src={PlayerPicture}
                 sizes="100vw"
                 style={{
                   width: '100%',
                   height: 'auto',
                 }} />
          <Typography className="absolute top-[10px] left-8 p-2.5 bg-bg-white text-text-primary border-2 rounded-lg sm:text-lg text-sm text-center">
            16-24 года
          </Typography>

          <Typography className="absolute top-[80px] left-0 p-2.5 bg-bg-white text-text-primary border-2 rounded-lg sm:text-lg text-sm text-center">
            любитель футбола
          </Typography>

          <Typography className="absolute bottom-5 right-0 p-2.5 bg-bg-white text-text-primary border-2 rounded-lg text-lg text-center">
            уровень подготовки<br/> не имеет значения
          </Typography>
        </div>
      </div>
    </div>
  )
}

const GoalsContent = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center">
      <div className="flex-1">
        <Typography asChild size="h4" className="mb-3 lg:block hidden">
          <h4>Популяризация спорта</h4>
        </Typography>
        <Typography size="body1" className="mb-10">
          Одной из главных целей проекта "SUPER BOL" является распространение и популяризация футбола как спортивной дисциплины в Казахстане. Через создание уникального формата реалити-шоу, проект стремится привлечь внимание широкой аудитории к этому спорту, показав его увлекательность, динамичность и эмоциональность.
        </Typography>

        <div className="flex">
          <div className="mr-8">
            <Image src='/turlov.png' width={148} height={148} alt="Turlov" />
          </div>
          <div>
            <QuotesIcon />
          </div>
          <div className="ml-4">
            <Typography size="h3" className="mb-3">
              Казахстан богат не нефтью, он богат людьми.
            </Typography>
            <Typography size="body1">
              Тимур Турлов, CEO Freedom Holding
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <Typography asChild size="h4" className="mb-6 lg:hidden block text-left w-full">
          <h4>Популяризация спорта</h4>
        </Typography>
        <div className="relative sm:w-[522px] w-[320px] sm:h-[442px] px-10 mb-6 sm:pt-0 pt-8">
          <Image alt="Player picture"
                 src={PlayersPicture}
                 sizes="100vw"
                 style={{
                   width: '100%',
                   height: 'auto',
                 }}/>
          <Typography className="absolute top-0 left-1/2 -translate-x-1/2 p-2.5 bg-bg-primary text-text-white rounded-lg sm:text-lg text-sm font-bold text-center">
            Всегда стремитесь <br/>
            к исполнению свой мечты
          </Typography>
        </div>
      </div>
    </div>
  )
}