import { useSeo } from "@/hooks/useSeo"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"

export default function Privacy() {
  useSeo({
    title: "Политика конфиденциальности — ОртоЦентр",
    description: "Политика конфиденциальности ОртоЦентр. Как мы собираем, храним и защищаем персональные данные пользователей. ИП Тамбовцев А.С., Мытищи.",
    canonical: "https://ortocentr.ru/privacy",
  })
  return (
    <main>
      <LpNavbar1 />
      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Политика конфиденциальности</h1>

        <div className="flex flex-col gap-6 text-muted-foreground text-sm leading-relaxed">
          <p>Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта ОртоЦентр (далее — Сайт), которые предоставляются при использовании услуг ИП Тамбовцев Алексей Сергеевич (ИНН 502982372818).</p>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">1. Какие данные мы собираем</h2>
            <p>При обращении к нам мы можем запрашивать следующие персональные данные: имя и фамилию, номер телефона, адрес электронной почты, а также сведения о состоянии здоровья, необходимые для подбора и изготовления ортопедических изделий.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">2. Цели обработки данных</h2>
            <p>Персональные данные используются исключительно в следующих целях: обработка заявок и запись на консультацию; изготовление индивидуальных ортопедических изделий; информирование о готовности заказа; обратная связь с клиентом.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">3. Хранение и защита данных</h2>
            <p>Мы обязуемся не передавать ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством Российской Федерации. Данные хранятся на защищённых серверах и используются только в рамках оказания услуг.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">4. Файлы cookie</h2>
            <p>Сайт может использовать файлы cookie для улучшения работы сервиса и анализа посещаемости. Вы можете отключить cookies в настройках браузера, однако это может повлиять на функциональность сайта.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">5. Права пользователя</h2>
            <p>Вы вправе запросить доступ к своим персональным данным, потребовать их исправления или удаления. Для этого свяжитесь с нами по телефону +7 905 502-15-02 или email consul1979@yandex.ru.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">6. Изменения политики</h2>
            <p>Мы оставляем за собой право вносить изменения в настоящую политику. Актуальная версия всегда доступна на данной странице.</p>
          </section>

          <p className="text-xs">Дата последнего обновления: май 2025 г.</p>
        </div>
      </article>
      <Footer2 />
    </main>
  )
}