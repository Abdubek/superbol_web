import DefaultAvatarMini from "@/shared/icons/default-avatar-mini.svg";
import DefaultAvatar from "@/shared/icons/default-avatar.svg";
import DefaultAvatar36 from "@/shared/icons/default-avatar-36.svg";
import {cn} from "@/shared/utils/common";

type Props = {
  image_key?: string
  image_url?: string
  width?: 60 | 120 | 36
}

export const UserAvatar = ({ image_key, image_url, width = 60 }: Props) => {
  if (image_key) {
    return <div className={cn(
      "relative rounded-full overflow-hidden",
      width === 60 && "w-[60px] h-[60px]",
      width === 120 && "w-[120px] h-[120px]",
      width === 36 && "w-[36px] h-[36px]",
    )}>
      <img src={`https://super-bol.kz/api/v1/images/${image_key}`}
           alt="avatar"
           width={60}
           height={60}
           className="w-full object-cover"/>
    </div>
  }
  if (image_url) {
    return <div className={cn(
      "relative rounded-full overflow-hidden",
      width === 60 && "w-[60px] h-[60px]",
      width === 120 && "w-[120px] h-[120px]",
      width === 36 && "w-[36px] h-[36px]",
    )}>
      <img src={image_url}
           alt="avatar"
           width={60}
           height={60}
           className="w-full object-cover"/>
    </div>
  }
  if (width === 60) {
    return <DefaultAvatarMini />
  }
  if (width === 36) {
    return <DefaultAvatar36 />
  }
  return <DefaultAvatar width={120} height={120} />
}