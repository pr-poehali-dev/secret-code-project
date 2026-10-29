import { createFileRoute } from "@tanstack/react-router"
import Terms from "@/pages/Terms"
import { seoHead } from "@/lib/seo"

export const Route = createFileRoute("/terms")({
  head: () =>
    seoHead({
      title: "Условия использования — ОртоЦентр",
      description: "Условия использования сайта ОртоЦентр. Порядок оказания услуг по изготовлению ортопедических изделий, оплата, гарантии и возврат. ИП Тамбовцев А.С.",
      canonical: "https://orto.center/terms",
    }),
  component: Terms,
})
