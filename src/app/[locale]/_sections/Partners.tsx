import { Typography } from "@/shared/ui/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const Partners = () => {
  const t = useTranslations("landing.partners");
  return (
    <section className="container pt-20 pb-8">
      <Typography size="h1" variant="primary">
        {t("title")}
      </Typography>
      <Typography size="body3" variant="grey" className="mb-5">
        {t("subtitle")}
      </Typography>
      <div className="flex items-center gap-14 overflow-x-scroll">
        <Image
          src="/partners/freedom.png"
          alt="Freedom"
          width={317}
          height={166}
        />
      </div>
    </section>
  );
};
