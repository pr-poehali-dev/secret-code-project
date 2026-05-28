import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"

export default function Terms() {
  return (
    <main>
      <LpNavbar1 />
      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Условия использования</h1>

        <div className="flex flex-col gap-6 text-muted-foreground text-sm leading-relaxed">
          <p>Настоящие Условия использования регулируют отношения между ИП Тамбовцев Алексей Сергеевич (ИНН 502982372818, далее — Исполнитель) и пользователями сайта ОртоЦентр при заказе и получении ортопедических изделий.</p>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">1. Предмет услуг</h2>
            <p>Исполнитель оказывает услуги по изготовлению индивидуальных ортопедических изделий (туторов, аппаратов, ортезов и др.) на основании индивидуальных замеров и медицинских показаний пациента.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">2. Порядок оказания услуг</h2>
            <p>Услуга оказывается в несколько этапов: запись на консультацию → первичный осмотр и снятие мерок → изготовление изделия (от 20 дней) → примерка и при необходимости корректировка → выдача изделия с инструкцией.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">3. Стоимость и оплата</h2>
            <p>Стоимость изделия определяется индивидуально в зависимости от сложности конструкции и применяемых материалов. Принимается оплата наличными, безналичным переводом, а также по электронным сертификатам ТСР (технических средств реабилитации).</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">4. Гарантии и возврат</h2>
            <p>На все изготовленные изделия распространяется гарантия в течение 6 месяцев с момента выдачи. Гарантия не распространяется на механические повреждения, возникшие по вине пользователя. Возврат индивидуально изготовленного изделия возможен только при наличии производственного брака.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">5. Ответственность сторон</h2>
            <p>Исполнитель не несёт ответственности за результаты лечения, если изделие используется с нарушением рекомендаций специалиста. Пользователь обязуется предоставлять достоверные сведения о состоянии здоровья, необходимые для корректного изготовления изделия.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">6. Контакты</h2>
            <p>По всем вопросам обращайтесь: г. Мытищи, ул. Карла Маркса д.2, 2 этаж, офис №209В. Телефон: +7 905 502-15-02. Email: consul1979@yandex.ru.</p>
          </section>

          <p className="text-xs">Дата последнего обновления: май 2025 г.</p>
        </div>
      </article>
      <Footer2 />
    </main>
  )
}
