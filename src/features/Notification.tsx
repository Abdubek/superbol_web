import {NotificationType} from "@/shared/api/notification";
import clsx from "clsx";
import CheckIcon from "@/shared/icons/check-mini.svg";
import InformationIcon from "@/shared/icons/information.svg";
import InformationPrimaryIcon from "@/shared/icons/information-primary.svg";
import QrIcon from "@/shared/icons/qr.svg";
import {Typography} from "@/shared/ui/Typography";

type Props = {
  type: NotificationType
  title: string
  description?: string
  date: Date
  qr?: string
}

export const Notification = ({ type, title, description, date, qr }: Props) => {
  return <div className={clsx(
    "flex items-center gap-6 p-4 rounded-md",
    type === "success" && "bg-bg-success",
    type === "warn" && "bg-bg-warn/25",
    type === "qr" && "bg-bg-lightblue",
    (type === "error" || type === "fail") && "bg-bg-red/5",
  )}>
    <div>
      {type === "success" && <CheckIcon width={24} height={24} />}
      {(type === "error" || type === "fail") && <InformationIcon width={24} height={24} />}
      {type === "warn" && <InformationPrimaryIcon width={24} height={24} />}
      {type === "qr" && <QrIcon width={24} height={24} />}
    </div>
    <div className="flex-1 flex flex-col gap-3">
      {!!title && <Typography size="caption1">{title}</Typography>}
      {!!description && <Typography size="body2">{description}</Typography>}
      <Typography size="body3" variant="grey">{new Intl.DateTimeFormat('ru-RU').format(date)}</Typography>
    </div>
    {!!qr && <div>
      <img src={qr} alt="QR" width={96} />
    </div>}
  </div>
}
