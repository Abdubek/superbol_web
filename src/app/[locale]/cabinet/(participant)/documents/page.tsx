import { Typography } from "@/shared/ui/Typography";
import ConsentToParticipateIcon from "@/shared/icons/consent-to-participate.svg";
import {ArrowDownIcon} from "@radix-ui/react-icons";
import ConsentOfLegalRepresentativesIcon from "@/shared/icons/consent-of-legal-representatives.svg";
import VideoIcon from "@/shared/icons/video.svg";

export default async function CabinetDocumentsPage({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  return (
    <main>
      <Typography size="h3" className="sm:mb-10 mb-4">
        Документы
      </Typography>
      <div className="flex flex-col gap-4">
        <Typography size="body1" className="mb-6">
          Для участия в программе SUPER BOL 2024 важно заполнить и подписать следующие документы:<br/>
          <ul className="pl-6 list-decimal my-3">
            <li className="mb-2">Согласие на участие: Этот документ подтверждает ваше согласие принять участие в нашей программе.</li>
            <li className="mb-2">Согласие родителей (если вам нет 18 лет): Если вам меньше 18 лет, необходимо предоставить согласие от ваших родителей или законных представителей.</li>
            <li className="mb-2">Согласие на съемку: Для участия в нашем проекте необходимо ваше согласие на использование вашего изображения и видеоматериалов в рамках реалити-шоу.</li>
          </ul>
          Пожалуйста, нажмите на кнопки ниже, чтобы скачать документы. При успешном прохождении на следующий этап, просим вас принести документы с собой в бумажном варианте.
        </Typography>
        <div className="flex justify-between mb-6 gap-4">
          <Typography size="body2" asChild>
            <a href="/files/SuperBol_2024_Согласие_участника.pdf"
               download
               className="p-6 bg-bg-platinum border border-border-primary rounded-md flex items-center gap-4 max-w-[280px]">
              <ConsentToParticipateIcon />
              Согласие на участие
              <ArrowDownIcon height={24} width={24} />
            </a>
          </Typography>
          <Typography size="body2" asChild>
            <a href="/files/SuperBol_2024_Согласие_законных_представителей.pdf"
               download
               className="p-6 bg-bg-platinum border border-border-primary rounded-md flex items-center gap-4 max-w-[280px]">
              <div>
                <ConsentOfLegalRepresentativesIcon />
              </div>
              Согласие законных представителей
              <ArrowDownIcon height={24} width={24} />
            </a>
          </Typography>
          <Typography size="body2" asChild>
            <a href="/files/SuperBol_2024_Согласие_на_съемку.pdf"
               download
               className="p-6 bg-bg-platinum border border-border-primary rounded-md flex items-center gap-4 max-w-[280px]">
              <VideoIcon />
              Согласие на съемку
              <ArrowDownIcon height={24} width={24} />
            </a>
          </Typography>
        </div>
      </div>
    </main>
  );
}
