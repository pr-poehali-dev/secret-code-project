import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

export function LeadForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-card border rounded-2xl shadow-sm p-8 md:p-10 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 shrink-0">
                <Icon name="Mail" size={20} className="text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Получить ссылку на оплату</h2>
            </div>
            <p className="text-muted-foreground text-base">
              Оставьте заявку — мы сформируем счёт через PayKeeper и отправим ссылку для оплаты по электронному сертификату ТСР на вашу почту.
            </p>
          </div>

          {sent ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/15">
                <Icon name="CheckCircle" size={28} className="text-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-foreground">Заявка отправлена!</p>
                <p className="text-muted-foreground text-sm">Мы свяжемся с вами и отправим ссылку на оплату в течение рабочего дня.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">Ваше имя</label>
                <Input
                  placeholder="Иван Иванов"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">Электронная почта</label>
                <Input
                  type="email"
                  placeholder="example@mail.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">Телефон</label>
                <Input
                  type="tel"
                  placeholder="+7 905 000-00-00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="/privacy" className="text-primary underline hover:no-underline">политикой конфиденциальности</a>.
              </p>
              <Button type="submit" className="w-full" size="lg">
                Отправить заявку
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
