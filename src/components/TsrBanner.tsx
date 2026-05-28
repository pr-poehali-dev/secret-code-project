import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

function TsrModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-2xl shadow-2xl max-w-lg w-full p-7 flex flex-col gap-5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Закрыть"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/15 shrink-0">
            <Icon name="CreditCard" size={20} className="text-primary" />
          </div>
          <h2 className="text-lg font-bold text-foreground">Оплата по электронному сертификату ТСР</h2>
        </div>

        <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Мы принимаем оплату ортоаппаратов через <strong className="text-foreground">электронные сертификаты ТСР</strong> — технических средств реабилитации в рамках государственной программы обеспечения инвалидов.
          </p>

          <div className="flex flex-col gap-3">
            <p className="font-semibold text-foreground">Как происходит оплата:</p>
            <ol className="flex flex-col gap-2 list-decimal list-inside">
              <li>Вы заказываете изделие и согласовываете итоговую стоимость с нашим специалистом.</li>
              <li>Мы формируем счёт через систему <strong className="text-foreground">PayKeeper</strong> и отправляем вам ссылку на оплату на электронную почту.</li>
              <li>Вы переходите по ссылке и оплачиваете заказ средствами электронного сертификата ТСР — без наличных и банковских карт.</li>
              <li>После подтверждения оплаты мы приступаем к изготовлению изделия.</li>
            </ol>
          </div>

          <div className="bg-muted rounded-xl p-4 flex flex-col gap-1">
            <p className="font-semibold text-foreground text-xs uppercase tracking-wide">Важно</p>
            <p>Для оплаты по сертификату ТСР необходимо иметь действующий электронный сертификат, оформленный через Фонд социального страхования (СФР). Уточните наличие и номинал у вашего куратора ФСС.</p>
          </div>

          <p>
            Остались вопросы? Позвоните нам:{" "}
            <a href="tel:+79055021502" className="text-primary font-semibold">+7 905 502-15-02</a>
          </p>
        </div>

        <Button onClick={onClose} className="w-full mt-1">Понятно</Button>
      </div>
    </div>
  )
}

export function TsrBanner() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-primary/10 border border-primary/20 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 container mx-auto">
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 shrink-0">
            <Icon name="CreditCard" size={20} className="text-primary" />
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-1.5 border border-border shadow-sm">
            <span className="text-xs font-bold tracking-tight text-foreground">Pay</span>
            <span className="text-xs font-bold tracking-tight text-primary">Keeper</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="text-sm text-foreground flex-1">
            <span className="font-semibold">Оплата по электронным сертификатам ТСР.</span>{" "}
            Принимаем оплату через PayKeeper — отправляем ссылку на почту клиенту.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="text-sm text-primary font-semibold underline hover:no-underline shrink-0 text-left sm:text-right"
          >
            Как это работает?
          </button>
        </div>
      </div>

      {open && <TsrModal onClose={() => setOpen(false)} />}
    </>
  )
}
