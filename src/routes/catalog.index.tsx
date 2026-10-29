import { createFileRoute } from "@tanstack/react-router"
import Catalog from "@/pages/Catalog"
import { seoHead } from "@/lib/seo"

export const Route = createFileRoute("/catalog/")({
  head: () =>
    seoHead({
      title: "Каталог реабилитационного оборудования — ОртоЦентр",
      description: "Каталог реабилитационного оборудования: детские и взрослые коляски, вертикализаторы, ходунки, электроскутеры, медицинские кровати. Мытищи.",
      canonical: "https://orto.center/catalog",
    }),
  component: Catalog,
})
