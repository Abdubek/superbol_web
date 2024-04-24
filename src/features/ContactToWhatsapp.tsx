import WhatsappLogo from "@/shared/icons/whatsapp-logo.svg";
import {Typography} from "@/shared/ui/Typography";
import * as React from "react";
import {useTranslations} from "next-intl";

export const ContactToWhatsapp = () => {
  const t = useTranslations('contact');
  return (
    <a href="https://api.whatsapp.com/send?phone=77066820248" target="_blank"
       className="flex items-center gap-3 rounded-md border border-border-primary px-3 py-2.5">
      <div>
        <WhatsappLogo width={23} height={23}/>
      </div>
      <Typography size="body2" variant="grey">
        {t('text')}
      </Typography>
    </a>
  )
}