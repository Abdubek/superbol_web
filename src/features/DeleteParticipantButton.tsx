"use client"

import {Popover, PopoverContent, PopoverTrigger} from "@/shared/ui/Popover";
import {Button} from "@/shared/ui/Button";
import {Typography} from "@/shared/ui/Typography";
import {actions} from "@/actions";
import {useRouter} from "next/navigation";
import {useState} from "react";

type Props = {
  id: number
}

export const DeleteParticipantButton = ({ id }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await actions.deleteParticipant(id)
    router.refresh()
    setLoading(false)
    setOpen(false)
  }

  return (
    <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <Button variant="danger">Удалить</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div>
            <Typography className="mb-4">Вы точно хотите удалить анкету?</Typography>
            <div>
              <Button variant="danger" className="ml-auto" onClick={handleDelete} isLoading={loading}>Да</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}