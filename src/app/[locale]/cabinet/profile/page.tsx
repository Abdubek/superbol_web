import { Typography } from "@/shared/ui/Typography";
import { userApi } from "@/shared/api/user";
import { ChangePasswordButton } from "@/features/ChangePasswordButton";
import { UploadAvatar } from "@/features/UploadAvatar";
import { getTranslations } from "next-intl/server";
import { SendConfirmEmailButton } from "@/features/SendConfirmEmailButton";

export default async function CabinetProfilePage() {
  const profileData = await userApi.profile();
  const t = await getTranslations("welcome");

  return (
    <main>
      <Typography size="h3" className="mb-3">
        {t("profile.title")}
      </Typography>
      <div className="p-10 bg-bg-platinum rounded-2xl mb-4 flex flex-col items-start">
        <UploadAvatar image={profileData?.image_key || ""} />
        <div className="flex flex-col gap-2 pb-3 border-b border-border-lightgray mt-3">
          <Typography size="body1" variant="grey">
            {t("profile.user_id")}
          </Typography>
          <Typography size="body1">{profileData?.id}</Typography>
        </div>
        <div className="flex flex-col gap-2 py-3 border-b border-border-lightgray">
          <Typography size="body1" variant="grey">
            {t("profile.email")}
          </Typography>
          <div className="flex gap-4 items-center">
            <Typography size="body1">{profileData?.email}</Typography>
            {process.env.NEXT_PUBLIC_IS_ACTIVE === "true" && (
              <SendConfirmEmailButton
                isVerified={
                  profileData?.participant
                    ? profileData.participant.email_verified
                    : true
                }
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-3">
          <Typography size="body1" variant="grey">
            {t.rich("profile.full_name", {
              br: () => <br />,
            })}
          </Typography>
          <Typography size="body1">{profileData?.full_name || "-"}</Typography>
        </div>
      </div>

      {profileData && <ChangePasswordButton email={profileData?.email} />}
    </main>
  );
}
