"use client"

import {Typography} from "@/shared/ui/Typography";
import ConsentToParticipateIcon from '@/shared/icons/consent-to-participate.svg'
import ConsentOfLegalRepresentativesIcon from '@/shared/icons/consent-of-legal-representatives.svg'
import VideoIcon from '@/shared/icons/video.svg'
import {ArrowDownIcon} from "@radix-ui/react-icons";
import {Button} from "@/shared/ui/Button";
import {useFormStore} from "@/features/ParticipantApplicationForm/index";
import {actions} from "@/actions";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {Routes} from "@/routes";

export const ThirdStep = () => {
  const data = useFormStore((state) => state.data)
  const setStep = useFormStore((state) => state.setStep)
  const setStatus = useFormStore((state) => state.setStatus)
  const [pending, setPending] = useState(false)
  const router = useRouter();

  const onSubmit = async () => {
    const gamePositions = []
    data.gaming_positions_1 && gamePositions.push(data.gaming_positions_1)
    data.gaming_positions_2 && gamePositions.push(data.gaming_positions_2)
    data.gaming_positions_3 && gamePositions.push(data.gaming_positions_3)

    const specifiedSkills = []
    data.specified_skills_1 && specifiedSkills.push(data.specified_skills_1)
    data.specified_skills_2 && specifiedSkills.push(data.specified_skills_2)
    data.specified_skills_3 && specifiedSkills.push(data.specified_skills_3)

    setPending(true)
    await actions.application({
      full_name: data.full_name,
      birth_date: data.birth_date + "T00:00:00Z",
      height: Number(data.height),
      weight: Number(data.weight),
      origin_city: data.origin_city,
      main_leg: data.main_leg,
      experience_years: Number(data.experience_years),
      casting_city: data.casting_city,
      gaming_positions: gamePositions,
      specified_skills: specifiedSkills
    })
    setStep(1)
    setPending(false)
    setStatus("application_verified")
    window.scrollTo(0, 0)
    router.push(Routes.PROFILE_NOTIFICATIONS)
  }

  return (
    <div>
      <Typography size="body1" className="mb-6">
        На данном этапе процесса подачи заявки на участие в программе SUPER BOL 2024 важно заполнить и подписать следующие документы:<br/>
        <ul className="pl-6 list-decimal my-3">
          <li className="mb-2">Согласие на участие: Этот документ подтверждает ваше согласие принять участие в нашей программе.</li>
          <li className="mb-2">Согласие родителей (если вам нет 18 лет): Если вам меньше 18 лет, необходимо предоставить согласие от ваших родителей или законных представителей.</li>
          <li className="mb-2">Согласие на съемку: Для участия в нашем проекте необходимо ваше согласие на использование вашего изображения и видеоматериалов в рамках реалити-шоу.</li>
        </ul>
        Пожалуйста, нажмите на кнопки ниже, чтобы скачать документы. При успешном прохождении на следующий этап, просим вас принести документы с собой в бумажном варианте.
      </Typography>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mb-6 gap-4">
        <Typography size="body2" asChild>
          <a href="/files/SuperBol_2024_Согласие_участника.pdf"
             download
             className="p-6 bg-bg-platinum border border-border-primary rounded-md flex items-center gap-4 max-w-[280px]">
            <div>
              <ConsentToParticipateIcon />
            </div>
            <div className="flex-1">
              Согласие на участие
            </div>
            <ArrowDownIcon height={24} width={24} />
          </a>
        </Typography>
        <Typography size="body2" asChild>
          <a href="/files/SuperBol_2024_Согласие_законных_представителей.pdf"
             download
             className="p-6 bg-bg-platinum border border-border-primary rounded-md flex items-center gap-4 max-w-[280px]">
            <div>
              <ConsentOfLegalRepresentativesIcon/>
            </div>
            <div className="flex-1">
              Согласие законных представителей
            </div>
            <ArrowDownIcon height={24} width={24}/>
          </a>
        </Typography>
        <Typography size="body2" asChild>
          <a href="/files/SuperBol_2024_Согласие_на_съемку.pdf"
             download
             className="p-6 bg-bg-platinum border border-border-primary rounded-md flex items-center gap-4 max-w-[280px]">
            <div>
              <VideoIcon/>
            </div>
            <div className="flex-1">
              Согласие на съемку
            </div>
            <ArrowDownIcon height={24} width={24}/>
          </a>
        </Typography>
        <Typography size="body2" asChild>
          <a href="/files/SuperBol 2024_Келісім.pdf"
             download
             className="p-6 bg-bg-platinum border border-border-primary rounded-md flex items-center gap-4 max-w-[280px]">
            <div>
              <ConsentToParticipateIcon/>
            </div>
            <div className="flex-1">
              Келісім
            </div>
            <ArrowDownIcon height={24} width={24}/>
          </a>
        </Typography>
        <Typography size="body2" asChild>
          <a href="/files/SuperBol_2024_Заңды_өкілдердің_келісімі.pdf"
             download
             className="p-6 bg-bg-platinum border border-border-primary rounded-md flex items-center gap-4 max-w-[280px]">
            <div>
              <ConsentOfLegalRepresentativesIcon/>
            </div>
            <div className="flex-1">
              Заңды өкілдердің келісімі
            </div>
            <ArrowDownIcon height={24} width={24}/>
          </a>
        </Typography>
        <Typography size="body2" asChild>
          <a href="/files/SuperBol_2024_Съемкаға_келісім.pdf"
             download
             className="p-6 bg-bg-platinum border border-border-primary rounded-md flex items-center gap-4 max-w-[280px]">
            <div>
              <VideoIcon/>
            </div>
            <div className="flex-1">
              Съемкаға келісім
            </div>
            <ArrowDownIcon height={24} width={24}/>
          </a>
        </Typography>
      </div>
      <Typography size="h4" className="mb-6">
        Памятка об участии
      </Typography>
      <Typography size="body1" variant="primary">
        Памятка содержит важную информацию о правилах, требованиях и обязанностях участников в рамках программы SUPER BOL 2024.<br/><br/>
        После внимательного ознакомления с памяткой, пожалуйста, нажмите кнопку "Подтвердить" ниже, что означает ваше согласие с правилами проекта и готовность нести ответственность за их соблюдение.
      </Typography>
      <Typography size="body1" className="mb-6">
        <ul className="pl-6 list-disc my-3">
          <li className="mb-2">
            Соблюдать требования Правил проведения спортивного реалити-шоу SUPER BOL, Регламента, решений администрации проекта, тренерского персонала, правил техники безопасности, правил пожарной безопасности в целях обеспечения безопасности тренировочного процесса на проекте;
          </li>
          <li className="mb-2">
            Посещать в соответствии с распорядком учебно-тренировочного процесса и не пропускать тренировочные занятия без уважительной причины;
          </li>
          <li className="mb-2">
            быть вежливыми и честными с другими участниками, тренерским и административным персоналом на проекте, другими работниками и специалистами проекта;
          </li>
          <li className="mb-2">
            уважать достоинство и равные права других участников, воздерживаться от действий, ущемляющих или нарушающих права иных физических лиц;
          </li>
          <li className="mb-2">
            бережно относиться к имуществу на проекте, заботиться о его сохранности;
          </li>
          <li className="mb-2">
            доводить до сведения администрации и тренерского персонала обстоятельства, угрожающие здоровью и благополучию участников и работников проекта;
          </li>
          <li className="mb-2">
            во время перерывов участник-финалист должен находиться на профессиональной футбольной базе;
          </li>
          <li className="mb-2">
            проконсультироваться у врача, если чувствует недомогание и только после их разрешения приступать к тренировкам или участвовать в соревнованиях.
          </li>
          <li className="mb-2">
            следить за гигиеническим состоянием спортивной формы, своевременно стирать, чистить, высушивать, проветривать форму и обувь.
          </li>
          <li className="mb-2">
            в целях обеспечения благоприятных условий для проведения тренировочного процесса участникам
          </li>
        </ul>
      </Typography>

      <Typography size="body1" className="mb-6">
        запрещается:
        <ul className="pl-6 list-disc my-3">
          <li className="mb-2">
            приводить с собой или приглашать на проект посторонних лиц без разрешения тренера;
          </li>
          <li className="mb-2">
            употреблять во время нахождения на проекте не употреблять алкогольные напитки, наркотические средства, психотропные веществ, их аналоги, табак и табачные изделия, никотиносодержащие продукты, ненормативную лексику;
          </li>
          <li className="mb-2">
            играть в азартные игры, проводить операции спекулятивного характера;
          </li>
          <li className="mb-2">
            приносить оружие, взрывчатые, пиротехнические, химические, огнеопасные вещества, табачные изделия, спиртные напитки, наркотики, токсичные вещества и яды, животных, насекомых и другие вещи, несовместимые с требованиями тренировочного процесса;
          </li>
          <li className="mb-2">
            приносить дорогостоящие вещи (электронные и мобильные аппараты, фото и видеокамеры, драгоценности, крупные суммы денег и т.п.) стоимостью более 5 МРП.
          </li>
          <li className="mb-2">
            Организатор проекта, его сотрудники, тренерский персонал, не несут ответственности за утерю дорогостоящих вещей, указанных Правилах.
          </li>
        </ul>
        Основанием дисквалификации участника является:
        <ul className="pl-6 list-disc my-3">
          <li className="mb-2">
            нарушение дисциплины во время проведения проекта, выразившееся в нарушении правил поведения;
          </li>
          <li className="mb-2">
            неявка участника-финалиста на учебно-тренировочные занятия без уважительной причины;
          </li>
          <li className="mb-2">
            уход участника-финалиста без оповещения организатора проекта;
          </li>
          <li className="mb-2">
            участие в азартных играх;
          </li>
          <li className="mb-2">
            умышленная порча, повреждение имущества на проекте, имущества иных физических и/или юридических лиц;
          </li>
          <li className="mb-2">
            оскорбление чести и достоинства работников профессиональной футбольной базы, других участников и гостей проекта;
          </li>
          <li className="mb-2">
            постоянное использование непристойных выражений и жестов, ненормативной лексики во время проведения проекта;
          </li>
          <li className="mb-2">
            распространение материала, порочащего честь участников, работников профессиональной футбольной базы, представителей и гостей проекта;
          </li>
          <li className="mb-2">
            дискриминация кого-либо по языковым, гендерным, национальным, религиозным или другим признакам;
          </li>
          <li className="mb-2">
            навязывание религиозных взглядов и убеждений, разжигание межнациональной вражды, пропаганды, агрессии и насилия;
          </li>
          <li className="mb-2">
            любая причастность к курению, алкоголю или наркотикам, другим одурманивающим аналогам, появление на занятиях в состоянии алкогольного, наркотического или токсического опьянения;
          </li>
          <li className="mb-2">
            ношение оружия, взрывчатых, пиротехнических, химических, огнеопасных веществ, табачных изделий, спиртных напитков, наркотиков, токсичных веществ и ядов, животных, насекомых;
          </li>
          <li className="mb-2">
            нанесение психологического и физического вреда другим участникам, работникам профессиональной футбольной базы, представителям проекта, иным физическим лицам;
          </li>
          <li className="mb-2">
            информация о том, что участник состоит в действующих правоотношениях с футбольными центрами, спортивными клубами, футбольными школами на момент участия в проекте.
          </li>
        </ul>
      </Typography>
      <Button variant="primary" size="lg" onClick={onSubmit} isLoading={pending} disabled={pending}>Подтвердить</Button>
    </div>
  )
}