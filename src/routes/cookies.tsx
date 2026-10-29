import { createFileRoute } from "@tanstack/react-router"
import Cookies from "@/pages/Cookies"
import { seoHead } from "@/lib/seo"

export const Route = createFileRoute("/cookies")({
  head: () =>
    seoHead({
      title: "Настройки cookies — ОртоЦентр",
      description: "Информация об использовании файлов cookie на сайте ОртоЦентр. Какие cookies мы используем и как ими управлять.",
      canonical: "https://orto.center/cookies",
    }),
  component: Cookies,
})
