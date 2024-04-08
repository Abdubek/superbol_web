import {Typography} from "@/shared/ui/Typography";
import {Header} from "@/app/[locale]/_sections/Header";
import {Footer} from "@/app/[locale]/_sections/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Header />
      <div className="container pt-12">
          <Typography size="h3" variant="primary" className="text-center mb-6">Политика конфиденциальности</Typography>

          <Typography size="caption1">1. Сбор и использование информации</Typography>
          <Typography size="body1" className="mb-4">Мы ценим ваше доверие и обязуемся защищать вашу конфиденциальность. При использовании нашего сервиса "Super Bol" мы можем собирать определенную информацию о вас, такую как ваше имя, контактные данные, данные о профиле и другие сведения, необходимые для обеспечения работы сервиса и участия в проекте.</Typography>

          <Typography size="caption1">2. Использование информации</Typography>
          <Typography size="body1">Собранная информация может использоваться для следующих целей:</Typography>
          <Typography size="body1" className="mb-4">
              <ul className="list-disc">
                  <li>Предоставления доступа к сервису и участия в проекте "Super Bol".</li>
                  <li>Обработки заявок и запросов от участников.</li>
                  <li>Обработки заявок и запросов от участников.</li>
                  <li>Улучшения качества сервиса и адаптации его к потребностям пользователей.</li>
                  <li>Проведения аналитики и исследований для оптимизации проекта.</li>
              </ul>
          </Typography>

          <Typography size="caption1">3. Раскрытие информации</Typography>
          <Typography size="body1" className="mb-4">Мы можем раскрывать вашу информацию третьим лицам только в случаях, предусмотренных законом или с вашего согласия.</Typography>

          <Typography size="caption1">4. Безопасность данных</Typography>
          <Typography size="body1" className="mb-4">Мы принимаем меры для защиты ваших данных от несанкционированного доступа, использования или раскрытия.</Typography>

          <Typography size="caption1">5. Изменения в политике</Typography>
          <Typography size="body1" className="mb-8">Мы оставляем за собой право вносить изменения в нашу Политику конфиденциальности. В случае значительных изменений, мы уведомим вас об этом.</Typography>

          <Typography size="h3" variant="primary" className="text-center mb-6">Пользовательское соглашение</Typography>
          <Typography size="caption1">Условия использования</Typography>
          <Typography size="body1" className="mb-6">Используя наш сервис "Super Bol", вы соглашаетесь с нашими Условиями использования и обязуетесь соблюдать их.</Typography>

          <Typography size="caption1">Права и обязанности</Typography>
          <Typography size="body1" className="mb-6">Вы имеете право на доступ к сервису и участие в проекте в соответствии с нашими правилами и регламентом. Вы также обязуетесь соблюдать правила проекта и уважать других участников.</Typography>

          <Typography size="caption1">Ответственность</Typography>
          <Typography size="body1" className="mb-6">Мы не несем ответственности за утрату или повреждение данных, возникшие в результате использования нашего сервиса.</Typography>

          <Typography size="caption1">Изменения в соглашении</Typography>
          <Typography size="body1" className="mb-6">Мы оставляем за собой право вносить изменения в наше Пользовательское соглашение. Изменения вступают в силу с момента их публикации.</Typography>

          <Typography size="body1" className="mb-16">С уважением, Команда проекта "Super Bol"</Typography>
      </div>
      <Footer />
    </div>
  )
}