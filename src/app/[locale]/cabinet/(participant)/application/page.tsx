import { ParticipantApplicationForm } from "@/features/ParticipantApplicationForm";
import { Typography } from "@/shared/ui/Typography";
import { citiesApi } from "@/shared/api/cities";
import { userApi } from "@/shared/api/user";
import { participantApi } from "@/shared/api/participant";
import { getTranslations } from "next-intl/server";

export default async function CabinetApplicationPage() {
  const [cities, profileData] = await Promise.all([
    citiesApi.getCitiesList(),
    userApi.profile(),
  ]);
  const t = await getTranslations("application");
  return (
    <main>
      <Typography size="h3" className="mb-10">
        {t("title")}
      </Typography>
      <ParticipantApplicationForm
        cities={cities}
        initialData={profileData.participant}
      />
    </main>
  );
}
