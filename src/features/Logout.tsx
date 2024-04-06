"use client"

import {Button} from "@/shared/ui/Button";
import {actions} from "@/actions";

export const LogoutButton = () => {
  return (
    <Button onClick={() => actions.logout()} size="sm" radius="md" weight="bold" variant="foreground">
      Выйти
    </Button>
  )
}