import {Typography} from "@/shared/ui/Typography";
import {Header} from "@/app/[locale]/_sections/Header";
import {Footer} from "@/app/[locale]/_sections/Footer";
import {useTranslations} from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");

  return (
    <div>
      <Header />
      <div className="container pt-12">
          <Typography size="h3" variant="primary" className="text-center mb-6">{t('privacy_policy')}</Typography>

          <Typography size="caption1">1. {t('privacy_policy_1_title')}</Typography>
          <Typography size="body1" className="mb-4">
              {t('privacy_policy_1_content')}
          </Typography>

          <Typography size="caption1">2. {t('privacy_policy_2_title')}</Typography>
          <Typography size="body1">{t('privacy_policy_2_content')}</Typography>
          <Typography size="body1" className="mb-4">
              <ul className="list-disc">
                  <li>{t('privacy_policy_2_list_1')}</li>
                  <li>{t('privacy_policy_2_list_2')}</li>
                  <li>{t('privacy_policy_2_list_3')}</li>
                  <li>{t('privacy_policy_2_list_4')}</li>
              </ul>
          </Typography>

          <Typography size="caption1">3. {t('privacy_policy_3_title')}</Typography>
          <Typography size="body1" className="mb-4">{t('privacy_policy_3_content')}</Typography>

          <Typography size="caption1">4. {t('privacy_policy_4_title')}</Typography>
          <Typography size="body1" className="mb-4">{t('privacy_policy_4_content')}</Typography>

          <Typography size="caption1">5. {t('privacy_policy_5_title')}</Typography>
          <Typography size="body1" className="mb-8">{t('privacy_policy_5_content')}</Typography>

          <Typography size="h3" variant="primary" className="text-center mb-6">{t('terms_of_use')}</Typography>
          <Typography size="caption1">{t('terms_of_use_1_title')}</Typography>
          <Typography size="body1" className="mb-6">{t('terms_of_use_1_content')}</Typography>

          <Typography size="caption1">{t('terms_of_use_2_title')}</Typography>
          <Typography size="body1" className="mb-6">{t('terms_of_use_2_content')}</Typography>

          <Typography size="caption1">{t('terms_of_use_3_title')}</Typography>
          <Typography size="body1" className="mb-6">{t('terms_of_use_3_content')}</Typography>

          <Typography size="caption1">{t('terms_of_use_4_title')}</Typography>
          <Typography size="body1" className="mb-6">{t('terms_of_use_4_content')}</Typography>

          <Typography size="body1" className="mb-16">{t('terms_of_use_last')}</Typography>
      </div>
      <Footer />
    </div>
  )
}