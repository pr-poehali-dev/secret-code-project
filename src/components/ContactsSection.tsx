import Icon from "@/components/ui/icon"

const PHONE_DISPLAY = "+7 905 502-15-02"
const PHONE_LINK = "tel:+79055021502"
const EMAIL = "consul1979@yandex.ru"
const ADDRESS_LINE = "ул. Карла Маркса, д. 2, 2 этаж, офис №209В"
const CITY_LINE = "Московская область, г. Мытищи"
const LAT = 55.916668
const LON = 37.766468
const ROUTE_URL = `https://yandex.ru/maps/?rtext=~${LAT}%2C${LON}&rtt=auto`

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://orto.center/#organization",
  name: "ОртоЦентр — лаборатория ортезирования",
  description: "Изготовление индивидуальных ортоаппаратов и туторов для детей с ДЦП, spina bifida и нарушениями опорно-двигательного аппарата.",
  url: "https://orto.center/",
  telephone: "+7 905 502-15-02",
  email: EMAIL,
  image: "https://cdn.poehali.dev/projects/9208e6ef-a6ed-4504-aa9f-b27608879c28/files/og-image-1781862349330.jpg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "RU",
    addressRegion: "Московская область",
    addressLocality: "Мытищи",
    streetAddress: "ул. Карла Маркса, д. 2, офис 209В",
  },
  geo: { "@type": "GeoCoordinates", latitude: LAT, longitude: LON },
  areaServed: ["Мытищи", "Москва", "Московская область"],
  paymentAccepted: "Электронный сертификат ТСР, банковская карта",
}

export function ContactsSection() {
  return (
    <section id="contacts" aria-labelledby="contacts-title" className="bg-muted py-16 md:py-24 scroll-mt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <div className="container mx-auto px-6 max-w-5xl flex flex-col gap-10">
        <div className="flex flex-col gap-3 text-center items-center">
          <h2 id="contacts-title" className="text-3xl md:text-4xl font-bold text-foreground">Контакты</h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Позвоните, чтобы записаться на консультацию или снятие мерок. Ответим на вопросы об изделиях и оплате электронным сертификатом.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-5">
          <div className="lg:col-span-2 bg-primary text-primary-foreground rounded-2xl p-8 flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-3">
              <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-foreground/15">
                <Icon name="Phone" size={24} />
              </span>
              <p className="text-primary-foreground/80 text-sm">Телефон для записи и консультаций</p>
              <a href={PHONE_LINK} className="text-2xl md:text-3xl font-bold tracking-tight hover:opacity-90 transition-opacity whitespace-nowrap">
                {PHONE_DISPLAY}
              </a>
            </div>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary font-semibold text-sm px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              <Icon name="PhoneCall" size={18} />
              Позвонить
            </a>
          </div>

          <address className="lg:col-span-3 not-italic grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2 bg-background border border-border rounded-2xl p-6 flex items-start gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 shrink-0">
                <Icon name="MapPin" size={22} className="text-primary" />
              </span>
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <p className="text-sm text-muted-foreground">Адрес</p>
                <p className="text-foreground font-semibold leading-snug">{CITY_LINE},<br />{ADDRESS_LINE}</p>
                <a
                  href={ROUTE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline w-fit mt-1"
                >
                  <Icon name="Navigation" size={14} />
                  Построить маршрут в Яндекс Картах
                </a>
              </div>
            </div>

            <div className="bg-background border border-border rounded-2xl p-6 flex items-start gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 shrink-0">
                <Icon name="Mail" size={22} className="text-primary" />
              </span>
              <div className="flex flex-col gap-1 min-w-0">
                <p className="text-sm text-muted-foreground">Электронная почта</p>
                <a href={`mailto:${EMAIL}`} className="text-foreground font-semibold text-sm hover:text-primary transition-colors whitespace-nowrap">
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="bg-background border border-border rounded-2xl p-6 flex items-start gap-4">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 shrink-0">
                <Icon name="CalendarCheck" size={22} className="text-primary" />
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground">Приём</p>
                <p className="text-foreground font-semibold leading-snug">По записи по телефону</p>
              </div>
            </div>
          </address>
        </div>
      </div>
    </section>
  )
}

export default ContactsSection
