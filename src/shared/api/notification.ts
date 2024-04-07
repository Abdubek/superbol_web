import {request} from '@/shared/api/api';

export type NotificationType = "success" | "fail" | "warn" | "qr" | "error"

type Notification = {
  date: string,
  description: string,
  description_kz: string,
  description_ru: string,
  id: number,
  name: string,
  name_kz: string,
  name_ru: string,
  qr_code: string,
  type: NotificationType
}

type NotificationListResponse = {
  notifications: Notification[],
  count: number
}

const getNotificationList = (): Promise<NotificationListResponse> => {
  return request('/notifications')
}

export const notificationApi = {
  getNotificationList
}