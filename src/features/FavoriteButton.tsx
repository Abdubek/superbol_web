"use client"

import {actions} from "@/actions";
import HeartPrimaryIcon from "@/shared/icons/heart-primary.svg";
import HeartIcon from "@/shared/icons/heart.svg";
import {useRouter} from "next/navigation";

type Props = {
  isFavorite: boolean
  participantId: number
}

export const FavoriteButton = ({ isFavorite, participantId }: Props) => {
  const router = useRouter()

  const handleDeleteFavorite = async () => {
    await actions.deleteFavorite(participantId)
    router.refresh()
  }

  const handleAddFavorite = async () => {
    await actions.addFavorite(participantId)
    router.refresh()
  }

  if (isFavorite) {
    return <button onClick={handleDeleteFavorite}>
      <HeartPrimaryIcon/>
    </button>
  }

  return <button onClick={handleAddFavorite}>
    <HeartIcon />
  </button>
}