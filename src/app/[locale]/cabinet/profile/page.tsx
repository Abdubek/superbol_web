import {Typography} from "@/shared/ui/Typography";
import DefaultAvatar from "@/shared/icons/default-avatar-mini.svg";
import {userApi} from "@/shared/api/user";
import {ChangePasswordButton} from "@/features/ChangePasswordButton";
import {UploadAvatar} from "@/features/UploadAvatar";

export default async function CabinetProfilePage() {
  const profileData = await userApi.profile()

  return (
    <main>
      <Typography size="h3" className="mb-3">Профиль</Typography>
      <div className="p-10 bg-bg-platinum rounded-2xl mb-4 flex flex-col items-start">
        <UploadAvatar image={profileData.image_key} />
        <div className="flex flex-col gap-2 pb-3 border-b border-border-lightgray mt-3">
          <Typography size="body1" variant="grey">ID пользователя</Typography>
          <Typography size="body1">{profileData.id}</Typography>
        </div>
        <div className="flex flex-col gap-2 py-3 border-b border-border-lightgray">
          <Typography size="body1" variant="grey">Почта</Typography>
          <Typography size="body1">{profileData.email}</Typography>
        </div>
        <div className="flex flex-col gap-2 pt-3">
          <Typography size="body1" variant="grey">Имя Фамилия</Typography>
          <Typography size="body1">{profileData.full_name || '-'}</Typography>
        </div>
      </div>

      <ChangePasswordButton email={profileData.email} />
    </main>
  )
}