import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useSeo } from "@/hooks/useSeo"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"
import Icon from "@/components/ui/icon"

const IMG_CARD = "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/f4ddf503-a04d-45d7-8071-36f1ade32d8d.jpg"
const IMG_DOCS = "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/0e8fe766-9e09-43ec-9362-947d21780827.jpg"
const IMG_TSR = "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/a54c6b8c-26c4-4ebf-8df7-9f790ea8d8a6.jpg"

const faqItems = [
  {
    q: "Можно ли получить деньги наличными вместо сертификата?",
    a: "Нет. Электронный сертификат — это не деньги на руки, а специальный платёжный инструмент. Средствами с него можно оплатить только техническое средство реабилитации из перечня, причём у продавца, подключённого к системе.",
  },
  {
    q: "Что будет, если изделие дороже номинала сертификата?",
    a: "Разницу вы доплачиваете сами — своими средствами. Если изделие дешевле, остаток сгорает: «сдачу» сертификатом получить нельзя.",
  },
  {
    q: "Сколько действует сертификат?",
    a: "Обычно срок действия — до одного года с момента оформления. Точную дату всегда смотрите в личном кабинете на Госуслугах или уточняйте в СФР.",
  },
  {
    q: "Нужна ли карта «Мир»?",
    a: "Да, для оплаты на терминале сертификат привязывается к карте платёжной системы «Мир». Это обязательное условие программы.",
  },
]

export default function TsrCertificate() {
  useSeo({
    title: "Сертификат ТСР в 2026 году: как оформить и оплатить реабилитацию — ОртоЦентр",
    description: "Подробно об электронном сертификате на технические средства реабилитации (ТСР): кому положен, как оформить через СФР и Госуслуги, как оплатить картой «Мир», какие изделия можно купить. Опыт центра в Мытищах.",
    canonical: "https://ortocentr.ru/tsr-sertifikat",
    keywords: "сертификат ТСР, электронный сертификат, технические средства реабилитации, как оформить сертификат ТСР, оплата картой Мир, СФР, реабилитация инвалидов, инвалидная коляска по сертификату",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Сертификат ТСР: как оформить и оплатить реабилитацию",
      description: "Полное руководство по электронному сертификату на технические средства реабилитации.",
      image: IMG_CARD,
      datePublished: "2026-06-12",
      dateModified: "2026-06-12",
      author: { "@type": "Organization", name: "ОртоЦентр" },
      publisher: {
        "@type": "Organization",
        name: "ОртоЦентр",
        address: "Московская область, г. Мытищи, ул. Карла Маркса д.2",
      },
      mainEntity: {
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    },
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <main>
      <LpNavbar1 />

      <article className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-6 flex flex-col gap-8 max-w-2xl">

          <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap" aria-label="Навигация">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Icon name="Home" size={14} />Главная
            </Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-foreground">Сертификат ТСР</span>
          </nav>

          <header className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
              <Icon name="CreditCard" size={13} />
              Полезно знать
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              Сертификат ТСР: как оформить и оплатить реабилитацию средствами государства
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed">
              Многие наши клиенты впервые слышат про электронный сертификат уже в кабинете врача — и теряются в аббревиатурах
              ТСР, СФР, ИПРА. Мы каждый день помогаем людям оплачивать изделия этим способом, поэтому собрали всё, что
              действительно важно знать, простым языком и без канцелярита.
            </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Icon name="Calendar" size={12} />12 июня 2026</span>
              <span className="flex items-center gap-1"><Icon name="Clock" size={12} />9 мин чтения</span>
            </div>
          </header>

          <div className="h-56 md:h-72 rounded-2xl overflow-hidden">
            <img src={IMG_CARD} alt="Оплата технических средств реабилитации картой Мир по электронному сертификату ТСР" className="w-full h-full object-cover" />
          </div>

          <div className="bg-background border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-5 text-muted-foreground text-[15px] leading-relaxed">

            <p>
              Если коротко: <strong className="text-foreground">электронный сертификат на ТСР — это способ получить нужное
              изделие за счёт государства, не дожидаясь компенсации</strong>. Раньше человек сначала покупал коляску или тутор
              за свои деньги, собирал чеки и месяцами ждал возврата. Сейчас всё иначе — расскажем как.
            </p>

            <h2 className="flex items-center gap-2.5 text-lg font-bold text-foreground mt-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                <Icon name="HelpCircle" size={18} className="text-primary" />
              </span>
              Что такое ТСР и сертификат на него
            </h2>
            <p>
              ТСР расшифровывается как «технические средства реабилитации». Это всё, что помогает человеку с инвалидностью жить
              полноценно: инвалидные коляски, ходунки, трости, протезы, ортопедическая обувь, противопролежневые матрасы,
              слуховые аппараты и многое другое. Полный перечень утверждён государством.
            </p>
            <p>
              А <strong className="text-foreground">электронный сертификат</strong> — это, по сути, привязанный к вашей карте
              «Мир» лимит, которым можно оплатить конкретное ТСР. Деньги не выдаются на руки и не лежат на счёте — они
              «резервируются» государством и списываются только при покупке нужного изделия у подключённого продавца.
            </p>

            <div className="flex items-start gap-3 bg-primary/8 border border-primary/20 rounded-xl p-4">
              <Icon name="Lightbulb" size={20} className="text-primary shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">
                Главный плюс сертификата — не нужно вынимать деньги из семейного бюджета и ждать компенсацию. Вы получаете
                изделие сразу, а оплата проходит средствами государства.
              </p>
            </div>

            <h2 className="flex items-center gap-2.5 text-lg font-bold text-foreground mt-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                <Icon name="UserCheck" size={18} className="text-primary" />
              </span>
              Кому положен сертификат
            </h2>
            <p>
              Право на ТСР есть у человека, для которого средство реабилитации прописано в индивидуальной программе
              реабилитации или абилитации — её сокращённо называют ИПРА. Эту программу составляет бюро медико-социальной
              экспертизы (МСЭ) при оформлении или продлении инвалидности.
            </p>
            <p>Проще говоря, путь обычно такой:</p>
            <ul className="flex flex-col gap-2">
              {[
                "У человека оформлена инвалидность.",
                "В ИПРА вписано конкретное средство — например, «кресло-коляска с ручным приводом».",
                "Значит, на это средство можно оформить сертификат и оплатить им покупку.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="h-52 md:h-64 rounded-2xl overflow-hidden my-2">
              <img src={IMG_DOCS} alt="Оформление заявления на электронный сертификат ТСР через СФР" className="w-full h-full object-cover" />
            </div>

            <h2 className="flex items-center gap-2.5 text-lg font-bold text-foreground mt-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                <Icon name="ListOrdered" size={18} className="text-primary" />
              </span>
              Как оформить сертификат: пошагово
            </h2>
            <p>
              На практике оформление занимает не так много времени, как многие боятся. Вот рабочая последовательность,
              которую мы советуем нашим клиентам.
            </p>
            <ol className="flex flex-col gap-4 list-none p-0 m-0">
              {[
                { t: "Проверьте ИПРА", d: "Убедитесь, что нужное средство реабилитации вписано в программу. Если его там нет — обратитесь в бюро МСЭ для внесения." },
                { t: "Подайте заявление в СФР", d: "Социальный фонд России принимает заявления через портал Госуслуги, лично в клиентской службе или в МФЦ. Удобнее всего — онлайн." },
                { t: "Дождитесь выпуска сертификата", d: "Обычно сертификат формируется в течение нескольких рабочих дней. Он привязывается к вашей карте «Мир»." },
                { t: "Проверьте номинал и срок", d: "В личном кабинете будет видна сумма сертификата и дата, до которой им можно воспользоваться." },
                { t: "Выберите изделие и оплатите", d: "Приходите к продавцу, подключённому к системе, выбираете средство и оплачиваете его сертификатом на терминале." },
              ].map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>
                    <strong className="text-foreground">{step.t}.</strong> {step.d}
                  </span>
                </li>
              ))}
            </ol>

            <h2 className="flex items-center gap-2.5 text-lg font-bold text-foreground mt-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                <Icon name="Wallet" size={18} className="text-primary" />
              </span>
              Как проходит оплата у нас
            </h2>
            <p>
              В нашем центре оплатить изделие сертификатом можно двумя способами — мы подбираем тот, что удобнее именно вам.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-start gap-2">
                <Icon name="CreditCard" size={18} className="text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Картой «Мир» на терминале.</strong> Прикладываете карту с привязанным сертификатом, средства списываются с его баланса.</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Link" size={18} className="text-primary shrink-0 mt-0.5" />
                <span><strong className="text-foreground">По ссылке через PayKeeper.</strong> Мы формируем счёт и отправляем ссылку на оплату вам на электронную почту.</span>
              </li>
            </ul>

            <div className="h-52 md:h-64 rounded-2xl overflow-hidden my-2">
              <img src={IMG_TSR} alt="Технические средства реабилитации: инвалидная коляска и ходунки" className="w-full h-full object-cover" />
            </div>

            <h2 className="flex items-center gap-2.5 text-lg font-bold text-foreground mt-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                <Icon name="TriangleAlert" size={18} className="text-primary" />
              </span>
              Частые ошибки и важные нюансы
            </h2>
            <p>За годы работы мы заметили несколько моментов, на которых люди чаще всего спотыкаются:</p>
            <ul className="flex flex-col gap-2">
              {[
                "Сертификат не получится «обналичить» — это распространённое заблуждение. Им можно только оплатить ТСР.",
                "Если изделие дешевле номинала, разница сгорает. Поэтому есть смысл подбирать качественное средство под всю сумму.",
                "У сертификата есть срок годности. Не откладывайте покупку до последнего дня.",
                "Покупать нужно у продавца, подключённого к системе сертификатов, иначе оплата не пройдёт.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon name="Dot" size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h2 className="flex items-center gap-2.5 text-lg font-bold text-foreground mt-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                <Icon name="MessageCircleQuestion" size={18} className="text-primary" />
              </span>
              Частые вопросы
            </h2>
            <div className="flex flex-col gap-3">
              {faqItems.map((f, i) => (
                <div key={i} className="bg-muted/60 rounded-xl p-4 flex flex-col gap-1.5">
                  <p className="font-semibold text-foreground flex items-start gap-2">
                    <Icon name="HelpCircle" size={17} className="text-primary shrink-0 mt-0.5" />
                    {f.q}
                  </p>
                  <p className="pl-6">{f.a}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3">
            <p className="font-semibold text-foreground flex items-center gap-2">
              <Icon name="Phone" size={18} className="text-primary" />
              Хотите оплатить реабилитацию сертификатом?
            </p>
            <p className="text-sm text-muted-foreground">
              Поможем разобраться с оформлением, подберём подходящее изделие под номинал сертификата и проведём оплату.
              Звоните — подскажем по вашей ситуации.
            </p>
            <a
              href="tel:+79055021502"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity w-fit"
            >
              <Icon name="Phone" size={16} />
              +7 905 502-15-02
            </a>
          </div>

          <Link to="/catalog" className="group bg-background border border-border rounded-2xl px-6 py-5 flex items-center gap-4 hover:border-primary/40 hover:shadow-md transition-all duration-200">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 shrink-0">
              <Icon name="ShoppingCart" size={20} className="text-primary" />
            </div>
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <span className="text-foreground font-semibold text-base leading-tight group-hover:text-primary transition-colors">
                Каталог изделий, которые можно оплатить сертификатом
              </span>
              <span className="text-muted-foreground text-sm">Коляски, ходунки, вертикализаторы и другое оборудование</span>
            </div>
            <Icon name="ChevronRight" size={20} className="text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
          </Link>

        </div>
      </article>

      <Footer2 />
    </main>
  )
}