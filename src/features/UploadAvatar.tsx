"use client"

import UploadIcon from "@/shared/icons/upload.svg";
import {ChangeEvent} from "react";
import {actions} from "@/actions";
import {useRouter} from "next/navigation";
import {UserAvatar} from "@/features/Avatar";

type Props = {
  image: string
}

export const UploadAvatar = ({ image }: Props) => {
  const router = useRouter()

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.files?.[0]) {
      const data = new FormData();
      data.append('file', event?.target?.files?.[0]);
      await actions.uploadAvatar(data, "ru")
      router.refresh()
    }
  }

  return (
    <div className="relative">
      <label htmlFor="avatar">
        <UserAvatar image={image} width={60}/>
        <div className="absolute right-0 bottom-0">
          <UploadIcon/>
        </div>
      </label>
      <input id="avatar" type="file" className="hidden" onChange={handleFileChange}/>
    </div>
  )
}
