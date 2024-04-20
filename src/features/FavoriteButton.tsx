"use client"

import {actions} from "@/actions";
import HeartPrimaryIcon from "@/shared/icons/heart-primary.svg";
import HeartIcon from "@/shared/icons/heart.svg";
import {useRouter} from "next/navigation";
import {TransitionStartFunction} from "react";

type Props = {
  isFavorite: boolean
  participantId: number
  startTransition: TransitionStartFunction
}

export const FavoriteButton = ({ isFavorite, participantId, startTransition }: Props) => {
  const router = useRouter()

  const handleDeleteFavorite = async () => {
    startTransition(async () => {
      await actions.deleteFavorite(participantId)
      router.refresh()
    })
  }

  const handleAddFavorite = async () => {
    startTransition(async () => {
      await actions.addFavorite(participantId)
      router.refresh()
    })
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