import Icon from "@/components/ui/icon"

export function TsrBanner() {
  return (
    <div className="bg-primary/10 border border-primary/20 rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 container mx-auto">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 shrink-0">
        <Icon name="CreditCard" size={20} className="text-primary" />
      </div>
      <p className="text-sm text-foreground">
        <span className="font-semibold">Оплата по электронным сертификатам ТСР.</span>{" "}
        Принимаем оплату ортоаппаратов через электронные сертификаты технических средств реабилитации (ТСР) — в рамках государственной программы обеспечения инвалидов.
      </p>
    </div>
  )
}
