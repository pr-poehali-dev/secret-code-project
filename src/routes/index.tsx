import { createFileRoute } from "@tanstack/react-router"
import Index from "@/pages/Index"
import { seoHead } from "@/lib/seo"

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "ОртоЦентр — индивидуальные ортоаппараты и туторы в Мытищах",
      description: "Изготовление индивидуальных ортопедических аппаратов и туторов для детей с ДЦП и нарушениями ОПДА. Опыт более 25 лет. Мытищи, ул. Карла Маркса д.2. Тел: +7 905 502-15-02.",
      canonical: "https://orto.center/",
    }),
  component: Index,
})
