import {Typography} from "@/shared/ui/Typography";
import {notificationApi} from "@/shared/api/notification";
import {Notification} from "@/features/Notification";
import {ReactNode} from "react";

export default async function CabinetNotificationsPage({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  const data = await notificationApi.getNotificationList()

  const notifications = data?.notifications || []

  console.log(notifications)

  return (
    <main>
      <Typography size="h3" className="sm:mb-10 mb-4">Уведомления</Typography>
      <div className="flex flex-col gap-4">
        {notifications.map((item, index) =>
          <Notification
            key={index}
            type={item.type}
            title={(item as any)[locale === "en" ? "name" : `name_${locale}`]}
            description={(item as any)[locale === "en" ? "description" : `description_${locale}`]}
            date={new Date(item.date)}
            qr={item.qr_code}
          />
        )}
      </div>
    </main>
  )
}