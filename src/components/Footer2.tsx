import { Logo } from "./Logo"
import { Separator } from "@/components/ui/separator"
import Icon from "@/components/ui/icon"

export function Footer2() {
  return (
    <footer className="bg-muted py-16 lg:py-24" role="contentinfo" aria-label="Подвал сайта">
      <div className="container px-6 mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row md:justify-between gap-12">
            <div className="flex flex-col items-center lg:items-start gap-6">
              <a href="/" aria-label="На главную">
                <Logo />
              </a>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>Московская область, г. Мытищи,<br />ул. Карла Маркса д.2, 2 этаж, офис №209В</span>
                </div>
                <a href="tel:+79055021502" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Icon name="Phone" size={16} className="shrink-0 text-primary" />
                  +7 905 502-15-02
                </a>
                <a href="mailto:consul1979@yandex.ru" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Icon name="Mail" size={16} className="shrink-0 text-primary" />
                  consul1979@yandex.ru
                </a>
              </div>
            </div>

            <nav
              className="flex flex-col md:flex-row items-center lg:items-start gap-6 md:gap-8 text-center lg:text-left"
              aria-label="Навигация в подвале"
            >
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Главная
              </a>
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="tel:+79055021502" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Тарифы
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                Вопросы
              </a>
            </nav>
          </div>

          <div className="w-full overflow-hidden rounded-xl border">
            <iframe
              title="Карта ОртоЦентр"
              src="https://yandex.ru/map-widget/v1/?ll=37.739&spn=0.02,0.02&z=16&pt=37.739,55.9118,pm2rdm&text=%D0%9C%D1%8B%D1%82%D0%B8%D1%89%D0%B8%2C%20%D1%83%D0%BB.%20%D0%9A%D0%B0%D1%80%D0%BB%D0%B0%20%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B0%2C%202"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen
              className="block"
            />
          </div>

          <Separator role="presentation" />

          <div className="flex flex-col gap-2 text-xs text-muted-foreground">
            <p className="font-medium text-foreground text-sm">Реквизиты</p>
            <p>ИП Тамбовцев Алексей Сергеевич &nbsp;·&nbsp; ИНН: 502982372818</p>
            <p>Банк: ООО «Банк Точка» &nbsp;·&nbsp; БИК: 044525104</p>
            <p>Р/с: 40802810920001005892 &nbsp;·&nbsp; К/с: 30101810745374525104</p>
          </div>

          <Separator role="presentation" />

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 text-center">
            <p className="text-muted-foreground order-2 md:order-1">
              2025 ОртоЦентр. Все права защищены.
            </p>

            <nav
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8 order-1 md:order-2"
              aria-label="Юридические ссылки"
            >
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Условия использования
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Настройки cookies
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}