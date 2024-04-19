"use client"

import {Button} from "@/shared/ui/Button";
import {Participant} from "@/shared/api/participant";
import {actions} from "@/actions";

const downloadNumberStatuses = ['application_submitted', 'application_verified', 'passed_first_casting', 'came_to_second_casting']

type Props = {
  participant?: Participant
}

export const DownloadNumber = ({ participant }: Props) => {

  if (downloadNumberStatuses.includes(participant?.status || "")) {
    return <Button asChild variant="primary">
      <a href="/api/download/number" download>
        Скачать номер участника - {participant?.number}
      </a>
    </Button>
  }
  return <div />
}