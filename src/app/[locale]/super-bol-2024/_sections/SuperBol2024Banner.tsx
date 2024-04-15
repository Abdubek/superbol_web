import Image from "next/image";
import {Typography} from "@/shared/ui/Typography";
import {Button} from "@/shared/ui/Button";
import Link from "next/link";
import {Routes} from "@/routes";
import {useTranslations} from "next-intl";

export const SuperBol2024Banner = () => {
  const t = useTranslations("superbol2024.banner");

  return (
    <div className="container mb-20">
      <div className="flex-1 relative w-full rounded-3xl overflow-hidden md:min-h-[672px] min-h-[460px]">
        <Image
          src={"/superbol2024banner.png"}
          alt={"Players"}
          fill
          quality={100}
          style={{
            objectFit: "cover",
          }}
        />

        <div className="absolute z-20 md:max-w-[630px] max-w-[320px] w-full flex items-center flex-col gap-3 left-1/2 -translate-x-1/2 md:bottom-[100px] bottom-10 text-center">
          <Typography size="h2" variant="white" className="sm:text-[40px] text-[18px]">
            SUPER BOL 2024
          </Typography>
          <Typography size="body1" variant="white">
            {t('text')}
          </Typography>
          <Button asChild variant="primary">
            <Link href={Routes.SIGN_IN}>{t('button')}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}