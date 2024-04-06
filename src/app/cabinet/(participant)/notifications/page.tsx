import {Typography} from "@/shared/ui/Typography";
import {notificationApi} from "@/shared/api/notification";
import {Notification} from "@/features/Notification";

export default async function CabinetNotificationsPage() {
  const data = await notificationApi.getNotificationList()
  console.log(data)

  const notifications = data?.notifications || []

  return (
    <main>
      <Typography size="h3" className="mb-10">Уведомления</Typography>
      <div className="flex flex-col gap-4">
        {notifications.map((item, index) =>
          <Notification
            key={index}
            type={item.type}
            title={item.name}
            description={item.description}
            date={new Date(item.date)}
            qr={item.qr_code}
          />
        )}
      </div>
    </main>
  )
}