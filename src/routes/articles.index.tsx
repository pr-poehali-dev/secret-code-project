import { createFileRoute } from "@tanstack/react-router"
import Articles from "@/pages/Articles"
import { seoHead } from "@/lib/seo"

export const Route = createFileRoute("/articles/")({
  head: () =>
    seoHead({
      title: "Статьи о реабилитации — ОртоЦентр",
      description: "Полезные статьи о подборе реабилитационного оборудования: инвалидные коляски, реабилитация детей с ДЦП, вертикализаторы и ходунки.",
      canonical: "https://orto.center/articles",
    }),
  component: Articles,
})
