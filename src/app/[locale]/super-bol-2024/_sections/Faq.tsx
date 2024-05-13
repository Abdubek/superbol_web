import { Typography } from "@/shared/ui/Typography";
import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/Accordion";
import ChevronDownIcon from "@/shared/icons/chevron-down.svg";
import TelegramLogo from "@/shared/icons/telegram-logo.svg";
import { useTranslations } from "next-intl";

export const Faq = () => {
  const t = useTranslations("superbol2024");
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

  return (
    <div className="container mb-16">
      <Typography
        asChild
        size="h1"
        variant="primary"
        className="col-span-2 mb-7"
      >
        <h1>FAQ</h1>
      </Typography>

      <Accordion type="single" collapsible className="flex flex-col gap-2 mb-6">
        {keys.map((item, index) => (
          <AccordionItem
            key={index}
            value={t(`faq.${item}.question`)}
            className="rounded-md overflow-hidden"
          >
            <AccordionTrigger className="bg-bg-platinum rounded-t-md hover:bg-bg-white">
              <div className="flex items-center justify-between px-6 w-full text-left">
                <Typography size="body1">
                  {t(`faq.${item}.question`)}
                </Typography>
                <ChevronDownIcon className="shrink-0 text-muted-foreground transition-transform duration-200" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-bg-platinum px-6 pb-4 rounded-b-md">
                {t(`faq.${item}.answer`)}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex sm:flex-row flex-col gap-4 justify-between items-center bg-bg-lightblue py-4 px-6 rounded-[20px]">
        <Typography size="h3" variant="primary">
          {t("feedback.title")}
        </Typography>
        <a
          href="https://t.me/+KdU3tzpXmRtmYzYy"
          target="_blank"
          className="flex items-center gap-3 rounded-full border border-border-primary hover:bg-bg-darkerblue transition duration-400 px-5 py-2.5"
        >
          <div>
            <TelegramLogo />
          </div>
          <Typography size="body1" variant="grey">
            {t("feedback.text")}
          </Typography>
        </a>
      </div>
    </div>
  );
};
