import {Typography} from "@/shared/ui/Typography";
import {useTranslations} from "next-intl";

export const Steps = () => {
  const t = useTranslations('superbol2024.steps');
  const keys = ['first', 'second', 'third', 'fourth', 'fifth'] as const;
  return (
    <div className="container">
      <Typography asChild size="h1" variant="primary" className="col-span-2 mb-7">
        <h1>{t('title')}</h1>
      </Typography>
      <div className="flex xl:flex-row flex-col gap-3 mb-16">
        {keys.map((key, index) => (
          <div key={index} className="flex-1 bg-bg-platinum px-5 py-6 rounded-md">
            <Typography size="h3" className="text-text-primary/25 uppercase mb-4">{index + 1} {t('stage')}</Typography>
            <Typography size="h5" variant="primary" className="mb-2">{t(`${key}.title`)}</Typography>
            <Typography size="body1" variant="grey">{t(`${key}.text`)}</Typography>
          </div>
        ))}
      </div>
    </div>
  )
}