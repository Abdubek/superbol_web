import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shared/ui/Accordion";
import ChevronDownIcon from "@/shared/icons/chevron-down.svg";
import * as React from "react";
import {Typography} from "@/shared/ui/Typography";
import Image from "next/image";
import Kazakhstan2023 from "../../../../public/superbol/2023/kazakhstan.png";
import Kazakhstan2022 from "../../../../public/superbol/2022/kazakhstan.png";

export const PreviousSuperBols = () => {
  return (
    <section>
      <Accordion type="single" collapsible>
        <AccordionItem value="superbol-2023">
          <AccordionTrigger className="bg-bg-platinum">
            <div className="container flex items-center justify-between">
              <Typography size="h3" variant="darkBlue">⚽ Superbol 2023</Typography>
              <ChevronDownIcon className="shrink-0 text-muted-foreground transition-transform duration-200" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <SuperBol2023 />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="superbol-2022">
          <AccordionTrigger className="bg-bg-platinum">
            <div className="container flex items-center justify-between">
              <Typography size="h3" variant="darkBlue">⚽ Superbol 2022</Typography>
              <ChevronDownIcon className="shrink-0 text-muted-foreground transition-transform duration-200" />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <SuperBol2022 />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

const SuperBol2023 = () => {
  return (
    <div className="container mx-auto xl:p-12 p-6 grid grid-cols-5 gap-24">
      <div className="lg:col-span-2 col-span-5">
        <Typography size="h3" className="mb-9">Финалисты 2023</Typography>
        <div className="grid grid-cols-5 gap-5">
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/1.png" alt="Владислав Гаврилюк" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Владислав<br/> Гаврилюк</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/2.png" alt="Абылай Хайролла" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Абылай<br/> Хайролла</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/3.png" alt="Абдугали Сагинтаев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Абдугали<br/> Сагинтаев</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/4.png" alt="Жаксылык Кенжебаев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Жаксылык<br/> Кенжебаев</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/5.png" alt="Диас Бакыт" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Диас Бакыт</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/6.png" alt="Оркен Жантураев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Оркен<br/> Жантураев</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/7.png" alt="Олжас Ибадуллаев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Олжас<br/> Ибадуллаев</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/8.png" alt="Еркебулан Турсынбай" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Еркебулан<br/> Турсынбай</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/9.png" alt="Шахмырза Адырбеков" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Шахмырза<br/> Адырбеков</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/10.png" alt="Асхат Мукушев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Асхат<br/> Мукушев</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/11.png" alt="Нурлыбек Мусылманбек" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Нурлыбек<br/> Мусылманбек</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2023/12.png" alt="Бексултан Слетов" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Бексултан<br/> Слетов</Typography>
          </div>
        </div>
      </div>
      <div className="lg:col-span-3 col-span-5 lg:order-1 -order-1">
        <div className="flex gap-12 mb-2 justify-center">
          <div className="flex flex-col items-center text-center">
            <Typography size="h1" variant="primary">16520</Typography>
            <Typography size="body1">участников</Typography>
            <Typography size="body3" variant="grey">по 14 городам</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Typography size="h1" variant="primary">186</Typography>
            <Typography size="body1">финалистов</Typography>
            <Typography size="body3" variant="grey">на первой<br/> тренировке</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Typography size="h1" variant="primary">25</Typography>
            <Typography size="body1">финалистов</Typography>
            <Typography size="body3" variant="grey">по контрольным матчам</Typography>
          </div>
        </div>

        <Image src={Kazakhstan2023}
               alt="Kazakhstan"
               quality={100}
               sizes="100vw"
               style={{
                 width: '100%',
                 height: 'auto',
               }}
        />
      </div>
    </div>
  )
}

const SuperBol2022 = () => {
  return (
    <div className="container mx-auto xl:p-12 p-6 grid grid-cols-5 gap-24">
      <div className="lg:col-span-2 col-span-5">
        <Typography size="h3" className="mb-9">Финалисты 2022</Typography>
        <div className="grid grid-cols-5 gap-5">
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/2.png" alt="Асылзат Ерден" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Асылзат<br/> Ерден</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/2.png" alt="Жаксылык Кенжебаев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Жаксылык<br/> Кенжебаев</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/3.png" alt="Оркен Жантураев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Оркен<br/> Жантураев</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/4.png" alt="Дунайбек Аянхан" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Дунайбек<br/> Аянхан</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/5.png" alt="Дани Назарбаев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Дани<br/> Назарбаев</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/6.png" alt="Жанибек Корганбек" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Жанибек<br/> Корганбек</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/7.png" alt="Алибек Жардемов" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Алибек<br/> Жардемов</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/8.png" alt="Бакытжан Маликов" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Бакытжан<br/> Маликов</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/9.png" alt="Бекболат Калдыбаев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Бекболат<br/> Калдыбаев</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/10.png" alt="Кылышбек Муханбет" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Кылышбек<br/> Муханбет</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/11.png" alt="Эмин Мусаев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Эмин<br/> Мусаев</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/12.png" alt="Тимур Тулегенов" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Тимур<br/> Тулегенов</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/13.png" alt="Акром Закиров" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Акром<br/> Закиров</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/14.png" alt="Ерсултан Тажимуканов" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Ерсултан<br/> Тажимуканов</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/superbol/2022/15.png" alt="Алдияр Жумабаев" width={82} height={82} className="mb-2" quality={100} />
            <Typography size="body3">Алдияр<br/> Жумабаев</Typography>
          </div>
        </div>
      </div>
      <div className="lg:col-span-3 col-span-5 lg:order-1 -order-1">
        <div className="flex gap-12 justify-center mb-2">
          <div className="flex flex-col items-center text-center">
            <Typography size="h1" variant="primary">6590</Typography>
            <Typography size="body1">участников</Typography>
            <Typography size="body3" variant="grey">по 8 городам</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Typography size="h1" variant="primary">50</Typography>
            <Typography size="body1">финалистов</Typography>
            <Typography size="body3" variant="grey">на первой<br/> тренировке</Typography>
          </div>
          <div className="flex flex-col items-center text-center">
            <Typography size="h1" variant="primary">22</Typography>
            <Typography size="body1">финалистов</Typography>
            <Typography size="body3" variant="grey">по контрольным матчам</Typography>
          </div>
        </div>

        <Image src={Kazakhstan2022}
               alt="Kazakhstan"
               quality={100}
               sizes="100vw"
               style={{
                 width: '100%',
                 height: 'auto',
               }}
        />
      </div>
    </div>
  )
}