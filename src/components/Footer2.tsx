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
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                О нас
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Поддержка
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Вопросы
              </a>
            </nav>
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