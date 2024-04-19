"use client"

import {Button} from "@/shared/ui/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader, DrawerOverlay, DrawerPortal,
  DrawerTitle, DrawerTrigger
} from "@/shared/ui/Drawer";
import {Participant} from "@/shared/api/participant";
import {Typography} from "@/shared/ui/Typography";
import {Routes} from "@/routes";
import Pattern from "@/shared/images/pattern.svg";
import {UserAvatar} from "@/features/Avatar";
import Image from "next/image";
import Link from "next/link";
import {useLocale} from "next-intl";
import {gamingPositionOptions, mainLegOptions, specifiedSkillOptions} from "@/entities/participant/options";

type Props = {
  data: Participant
}

export const ParticipantDrawer = ({ data }: Props) => {

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="primary">Посмотреть</Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0 bg-bg-black/40" />
        <DrawerContent className="h-full w-[500px] fixed bottom-0 right-0 p-4 overflow-y-auto">
          <Typography size="h4" className="mb-4">Профиль участника</Typography>
          <div className="relative bg-gradient-to-tl from-bg-primary p-5 rounded-2xl flex flex-col items-start gap-2 mb-4">
            <Pattern
              className="absolute top-0 left-0 right-0 bottom-0 h-full w-full"
              style={{
                opacity: "1",
              }}
            />

            <div className="w-[126px] h-[126px] rounded-full border-[3px] border-border-secondary flex items-center justify-center box-border z-10 mb-4">
              <UserAvatar image_url={data?.image_url || ""} width={120} />
            </div>

            <div className="flex flex-col items-start gap-1 z-10 w-full">
              <Typography size="h3" variant="white" className="w-full line-clamp-2">
                {data?.full_name || data?.email}
              </Typography>
              <Typography size="body3" variant="grey">
                {data?.number}
              </Typography>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="mb-3">
              <Typography size="body1" variant="grey">Дата рождения:</Typography>
              <Typography size="body1">{new Intl.DateTimeFormat("ru-RU").format(
                new Date(data.birth_date)
              )}</Typography>
            </div>
            <div className="mb-3 flex gap-8">
              <div>
                <Typography size="body1" variant="grey">Рост:</Typography>
                <Typography size="body1">{data.height}</Typography>
              </div>
              <div>
                <Typography size="body1" variant="grey">Вес:</Typography>
                <Typography size="body1">{data.weight}</Typography>
              </div>
            </div>
            <div className="mb-3">
              <Typography size="body1" variant="grey">Город проживания:</Typography>
              <Typography size="body1">{data.origin_city}</Typography>
            </div>
            <div className="mb-3">
              <Typography size="body1" variant="grey">Игровая нога:</Typography>
              <Typography size="body1"><MainLeg value={data.main_leg} /></Typography>
            </div>
            {(data?.gaming_positions?.length >= 1) && <div className="mb-3">
              <Typography size="body1" variant="grey">Игровая позиция 1:</Typography>
              <Typography size="body1"><GamePosition pos={data.gaming_positions[0]} /></Typography>
            </div>}
            {(data?.gaming_positions?.length >= 2) && <div className="mb-3">
              <Typography size="body1" variant="grey">Игровая позиция 2:</Typography>
              <Typography size="body1"><GamePosition pos={data.gaming_positions[1]} /></Typography>
            </div>}
            {(data?.gaming_positions?.length >= 3) && <div className="mb-3">
              <Typography size="body1" variant="grey">Игровая позиция 3:</Typography>
              <Typography size="body1"><GamePosition pos={data.gaming_positions[2]} /></Typography>
            </div>}
            <div className="mb-3">
              <Typography size="body1" variant="grey">Игровой опыт:</Typography>
              <Typography size="body1">{data.experience_years}</Typography>
            </div>
            <div className="mb-3">
              <Typography size="body1" variant="grey">Сильные качества:</Typography>
              <Typography size="body1">{data?.specified_skills?.map(((i, index) => (
                <Skill key={index} value={i} />
              )))}</Typography>
            </div>
            <div className="mb-3">
              <Typography size="body1" variant="grey">Город кастинга:</Typography>
              <Typography size="body1">{data.casting_city}</Typography>
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>

    </Drawer>
  )
}

const Skill = ({ value }: { value: string }) => {
  const locale = useLocale()
  const item = specifiedSkillOptions.find(i => i.value === value)
  return (
    <div>
      {locale === "ru" ? item?.label : null}
      {locale === "kz" ? item?.label_kz : null}
      {locale === "en" ? item?.label_en : null}
    </div>
  )
}

const MainLeg = ({ value }: { value: string }) => {
  const locale = useLocale()
  const item = mainLegOptions.find(i => i.value === value)
  return (
    <div>
      {locale === "ru" ? item?.label : null}
      {locale === "kz" ? item?.label_kz : null}
      {locale === "en" ? item?.label_en : null}
    </div>
  )
}

const GamePosition = ({pos}: { pos: string }) => {
  const locale = useLocale()
  const item = gamingPositionOptions.find(i => i.value === pos)
  return (
    <div>
      {locale === "ru" ? item?.label : null}
      {locale === "kz" ? item?.label_kz : null}
      {locale === "en" ? item?.label_en : null}
    </div>
  )
}