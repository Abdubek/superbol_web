import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/ui/Tabs"
import {Typography} from "@/shared/ui/Typography";
import PlayerPicture from "../../../public/player.png";
import PlayersPicture from "../../../public/players.png";
import Image from 'next/image'

enum TabTypes {
  RULES = "rules",
  GOALS = "goals",
  TASKS = "tasks"
}

export const Info = () => {
  return (
    <section className="container pb-9 min-h-[535px]">
      <Tabs defaultValue={TabTypes.RULES}>
        <TabsList className="mb-10">
          <TabsTrigger value={TabTypes.RULES} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">
            <Typography size="h3">Правила проекта</Typography>
          </TabsTrigger>
          <TabsTrigger value={TabTypes.GOALS} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">
            <Typography size="h3">Наши цели</Typography>
          </TabsTrigger>
          <TabsTrigger value={TabTypes.TASKS} className="text-text-grey data-[state=active]:text-text-primary data-[state=active]:border-b-[3px]">
            <Typography size="h3">Задачи</Typography>
          </TabsTrigger>
        </TabsList>
        <TabsContent value={TabTypes.RULES}>
          <RulesContent />
        </TabsContent>
        <TabsContent value={TabTypes.GOALS}>
          <GoalsContent />
        </TabsContent>
        <TabsContent value={TabTypes.TASKS}>
          <GoalsContent />
        </TabsContent>
      </Tabs>
    </section>
  )
}

const RulesContent = () => {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <Typography asChild size="h4" className="mb-3">
          <h4>Заголовок заголовок заголовок</h4>
        </Typography>
        <Typography size="body1">
          Футбольные отборы будут проводиться по уникальной системе и методике выбывания, разработанной командой организатора проекта. Спортивное реалити-шоу состоит из кастинга, в который включен второй отборный матч и финал. Финальный этап, включающий в себя профессиональные футбольные тренировки под руководством тренерского состава и проведением регулярных еженедельных матчей с целью выявления и просмотра потенциальными скаутами подписание профессионального контракта с участниками.
          <br /><br />
          Проект проводится на основании следующих принципов: равенства и общедоступности для всех физических лиц, желающих участвовать в проекте, оздоровительной направленности, запрета на дискриминацию и недопущения пропаганды культа жестокости, насилия и унижения человеческого достоинства, содействия развитию &quot;инновационной ментальности&quot; в футболе, повышение интереса молодежи к футболу, развития юношеского спорта в Казахстанe
        </Typography>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[522px] h-[442px] px-10">
          <Image alt="Player picture"
                 src={PlayerPicture}
                 sizes="100vw"
                 style={{
                   width: '100%',
                   height: 'auto',
                 }} />
          <Typography className="absolute top-0 right-0 p-2.5 bg-bg-primary text-text-white rounded-lg text-lg font-bold text-center">
            профиль<br/> участника
          </Typography>

          <Typography className="absolute top-[90px] left-8 p-2.5 bg-bg-white text-text-primary border-2 rounded-lg text-lg text-center">
            16-24 года
          </Typography>

          <Typography className="absolute top-[170px] left-0 p-2.5 bg-bg-white text-text-primary border-2 rounded-lg text-lg text-center">
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
    <div className="flex items-center">
      <div className="flex-1">
        <Typography asChild size="h4" className="mb-3">
          <h4>Заголовок заголовок заголовок</h4>
        </Typography>
        <Typography size="body1" className="mb-10">
          Одной из главных целей проекта &quot;SUPER BOL&quot; является распространение и популяризация футбола как спортивной дисциплины в Казахстане. Через создание уникального формата реалити-шоу, проект стремится привлечь внимание широкой аудитории к этому спорту, показав его увлекательность, динамичность и эмоциональность.
        </Typography>

        <Typography asChild size="h4" className="mb-3">
          <h4>Заголовок заголовок заголовок</h4>
        </Typography>
        <Typography size="body1">
          Мы нацелены на привлечение молодого поколения к увлекательному миру футбола. Через участие молодежи как участников и зрителей, проект стремится не только представить футбол как спортивную игру, но и показать его как средство для развития лидерских качеств, командной работы, а также способ привлечения внимания к здоровому образу жизни и физической активности.
        </Typography>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[522px] h-[442px] px-10">
          <Image alt="Player picture"
                 src={PlayersPicture}
                 sizes="100vw"
                 style={{
                   width: '100%',
                   height: 'auto',
                 }}/>
          <Typography className="absolute top-0 left-1/2 -translate-x-1/2 p-2.5 bg-bg-primary text-text-white rounded-lg text-lg font-bold text-center">
            Всегда стремитесь <br/>
            к исполнению свой мечты
          </Typography>
        </div>
      </div>
    </div>
  )
}