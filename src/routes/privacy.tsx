import { createFileRoute } from "@tanstack/react-router"
import Privacy from "@/pages/Privacy"
import { seoHead } from "@/lib/seo"

export const Route = createFileRoute("/privacy")({
  head: () =>
    seoHead({
      title: "Политика конфиденциальности — ОртоЦентр",
      description: "Политика конфиденциальности ОртоЦентр. Как мы собираем, храним и защищаем персональные данные пользователей. ИП Тамбовцев А.С., Мытищи.",
      canonical: "https://orto.center/privacy",
    }),
  component: Privacy,
})
