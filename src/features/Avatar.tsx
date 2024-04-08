import DefaultAvatarMini from "@/shared/icons/default-avatar-mini.svg";
import DefaultAvatar from "@/shared/icons/default-avatar.svg";
import {cn} from "@/shared/utils/common";

type Props = {
  image: string
  width?: 60 | 120
}

export const UserAvatar = ({ image, width = 60 }: Props) => {
  if (image) {
    return <div className={cn(
      "relative rounded-full overflow-hidden",
      width === 60 && "w-[60px] h-[60px]",
      width === 120 && "w-[120px] h-[120px]"
    )}>
      <img src={`https://super-bol.kz/api/v1/images/${image}`}
           alt="avatar"
           width={60}
           height={60}
           className="w-full object-cover"/>
    </div>
  }
  if (width === 60) {
    return <DefaultAvatarMini />
  }
  return <DefaultAvatar width={120} height={120} />
}