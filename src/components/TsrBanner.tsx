import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

function TsrModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-card w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, #ff4e00, #e53935)" }}>
              <Icon name="CreditCard" size={18} className="text-white" />
            </div>
            <h2 className="text-base font-bold text-foreground leading-tight">Оплата по сертификату ТСР</h2>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors ml-3 shrink-0" aria-label="Закрыть">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-5 flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Мы принимаем оплату ортоаппаратов через <strong className="text-foreground">электронные сертификаты ТСР</strong> — технических средств реабилитации в рамках государственной программы обеспечения инвалидов.
          </p>

          <div className="flex flex-col gap-3">
            <p className="font-semibold text-foreground">Как происходит оплата:</p>
            <ol className="flex flex-col gap-3 list-none p-0 m-0">
              {[
                "Вы заказываете изделие и согласовываете итоговую стоимость с нашим специалистом.",
                "Мы формируем счёт через PayKeeper и отправляем вам ссылку на оплату на электронную почту.",
                "Вы переходите по ссылке и оплачиваете заказ средствами электронного сертификата ТСР — без наличных и банковских карт.",
                "После подтверждения оплаты мы приступаем к изготовлению изделия.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold shrink-0 mt-0.5" style={{ background: "linear-gradient(135deg, #ff4e00, #e53935)" }}>
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-muted rounded-xl p-4">
            <p className="font-semibold text-foreground text-xs uppercase tracking-wide mb-2">Важно</p>
            <p>Для оплаты необходим действующий электронный сертификат ТСР, оформленный через Социальный фонд России (СФР). Уточните наличие и номинал у вашего куратора СФР.</p>
          </div>

          <p>
            Остались вопросы? Позвоните:{" "}
            <a href="tel:+79055021502" className="font-semibold" style={{ color: "#e53935" }}>+7 905 502-15-02</a>
          </p>
        </div>

        <div className="px-6 pb-6 pt-4 border-t border-border shrink-0">
          <Button onClick={onClose} className="w-full">Понятно</Button>
        </div>
      </div>
    </div>
  )
}

function CardTsrModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-card w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col max-h-[90dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, #1a73e8, #0d47a1)" }}>
              <Icon name="Wallet" size={18} className="text-white" />
            </div>
            <h2 className="text-base font-bold text-foreground leading-tight">Оплата картой по электронному сертификату ТСР</h2>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors ml-3 shrink-0" aria-label="Закрыть">
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-6 py-5 flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Вы можете оплатить изделие <strong className="text-foreground">физической банковской картой</strong> в рамках программы электронных сертификатов ТСР — прямо на нашем терминале при получении.
          </p>

          <div className="flex flex-col gap-3">
            <p className="font-semibold text-foreground">Как происходит оплата:</p>
            <ol className="flex flex-col gap-3 list-none p-0 m-0">
              {[
                "Вы заранее оформляете электронный сертификат ТСР через Социальный фонд России (СФР) и привязываете его к вашей банковской карте «Мир».",
                "Приходите к нам для получения готового изделия.",
                "На нашем POS-терминале выбираете оплату по сертификату ТСР и прикладываете карту «Мир».",
                "Средства списываются с баланса сертификата — без расходов из личного бюджета.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full text-white text-xs font-bold shrink-0 mt-0.5" style={{ background: "linear-gradient(135deg, #1a73e8, #0d47a1)" }}>
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-muted rounded-xl p-4">
            <p className="font-semibold text-foreground text-xs uppercase tracking-wide mb-2">Важно</p>
            <p>Для этого способа оплаты необходима карта «Мир» с привязанным электронным сертификатом ТСР. Уточните у вашего куратора СФР, как привязать сертификат к карте.</p>
          </div>

          <p>
            Остались вопросы? Позвоните:{" "}
            <a href="tel:+79055021502" className="font-semibold" style={{ color: "#1a73e8" }}>+7 905 502-15-02</a>
          </p>
        </div>

        <div className="px-6 pb-6 pt-4 border-t border-border shrink-0">
          <Button onClick={onClose} className="w-full">Понятно</Button>
        </div>
      </div>
    </div>
  )
}

export function TsrBanner() {
  const [openTsr, setOpenTsr] = useState(false)
  const [openCard, setOpenCard] = useState(false)

  return (
    <>
      <div className="container mx-auto flex flex-col gap-4">
        {/* Блок PayKeeper / электронный сертификат */}
        <div className="bg-primary/10 border border-primary/20 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, #ff4e00, #e53935)" }}>
              <Icon name="CreditCard" size={20} className="text-white" />
            </div>
            <div className="flex items-center gap-0.5 bg-white rounded-lg px-3 py-1.5 border shadow-sm">
              <span className="font-bold text-sm" style={{ color: "#e53935" }}>Pay</span>
              <span className="font-bold text-sm" style={{ color: "#ff4e00" }}>keeper</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-sm text-foreground flex-1">
              <span className="font-semibold">Оплата по электронным сертификатам ТСР.</span>{" "}
              Принимаем оплату через PayKeeper — отправляем ссылку на почту клиенту.
            </p>
            <button
              onClick={() => setOpenTsr(true)}
              className="text-sm font-semibold underline hover:no-underline shrink-0 text-left sm:text-right whitespace-nowrap"
              style={{ color: "#e53935" }}
            >
              Как это работает?
            </button>
          </div>
        </div>

        {/* Блок оплаты физической картой по ТСР */}
        <div className="border rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ background: "rgba(26,115,232,0.07)", borderColor: "rgba(26,115,232,0.2)" }}>
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, #1a73e8, #0d47a1)" }}>
              <Icon name="Wallet" size={20} className="text-white" />
            </div>
            <div className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-1.5 border shadow-sm">
              <span className="font-bold text-sm" style={{ color: "#1a73e8" }}>Карта</span>
              <span className="font-bold text-sm text-foreground">«Мир»</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-sm text-foreground flex-1">
              <span className="font-semibold">Оплата физической картой по ТСР.</span>{" "}
              Принимаем оплату картой «Мир» с привязанным электронным сертификатом ТСР на нашем терминале.
            </p>
            <button
              onClick={() => setOpenCard(true)}
              className="text-sm font-semibold underline hover:no-underline shrink-0 text-left sm:text-right whitespace-nowrap"
              style={{ color: "#1a73e8" }}
            >
              Как это работает?
            </button>
          </div>
        </div>
      </div>

      {openTsr && <TsrModal onClose={() => setOpenTsr(false)} />}
      {openCard && <CardTsrModal onClose={() => setOpenCard(false)} />}
    </>
  )
}
