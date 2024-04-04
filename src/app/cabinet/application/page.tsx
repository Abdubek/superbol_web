import {ParticipantApplicationForm} from "@/features/ParticipantApplicationForm";
import {Typography} from "@/shared/ui/Typography";

export default function CabinetApplicationPage() {
  return (
    <main>
      <Typography size="h3" className="mb-3">Анкета участника</Typography>
      <ParticipantApplicationForm />
    </main>
  )
}