import { useSeo } from "@/hooks/useSeo"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"

export default function Cookies() {
  useSeo({
    title: "Настройки cookies — ОртоЦентр",
    description: "Информация об использовании файлов cookie на сайте ОртоЦентр. Какие cookies мы используем и как ими управлять.",
    canonical: "https://ortocentr.ru/cookies",
  })
  return (
    <main>
      <LpNavbar1 />
      <article className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Настройки cookies</h1>

        <div className="flex flex-col gap-6 text-muted-foreground text-sm leading-relaxed">
          <p>Сайт ОртоЦентр использует файлы cookie для обеспечения корректной работы сайта и улучшения пользовательского опыта.</p>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">Что такое cookies</h2>
            <p>Cookies — небольшие текстовые файлы, которые сохраняются в вашем браузере при посещении сайта. Они позволяют сайту запоминать ваши предпочтения и улучшать работу сервиса.</p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">Какие cookies мы используем</h2>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li><span className="font-medium text-foreground">Необходимые</span> — обеспечивают базовую функциональность сайта. Без них сайт не работает корректно.</li>
              <li><span className="font-medium text-foreground">Аналитические</span> — помогают нам понять, как посетители используют сайт, чтобы улучшать его.</li>
              <li><span className="font-medium text-foreground">Функциональные</span> — запоминают ваши настройки и предпочтения при повторных посещениях.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">Как управлять cookies</h2>
            <p>Вы можете принять или отклонить использование cookies в настройках вашего браузера. Обратите внимание, что отключение cookies может повлиять на работу некоторых функций сайта.</p>
            <p>Инструкции по управлению cookies:</p>
            <ul className="flex flex-col gap-1 list-disc list-inside">
              <li>Google Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie</li>
              <li>Mozilla Firefox: Настройки → Приватность и защита → Куки и данные сайтов</li>
              <li>Safari: Настройки → Конфиденциальность → Управление данными сайтов</li>
              <li>Яндекс.Браузер: Настройки → Сайты → Расширенные настройки сайтов → Cookies</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-foreground">Контакты</h2>
            <p>Если у вас есть вопросы о нашем использовании cookies, свяжитесь с нами: consul1979@yandex.ru или +7 905 502-15-02.</p>
          </section>

          <p className="text-xs">Дата последнего обновления: май 2025 г.</p>
        </div>
      </article>
      <Footer2 />
    </main>
  )
}