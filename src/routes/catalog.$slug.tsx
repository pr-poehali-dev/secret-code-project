import { createFileRoute, notFound } from "@tanstack/react-router"
import CategoryPage from "@/pages/CategoryPage"
import { seoHead } from "@/lib/seo"
import { getCategoryBySlug } from "@/data/catalogData"

export const Route = createFileRoute("/catalog/$slug")({
  loader: ({ params }) => {
    const category = getCategoryBySlug(params.slug)
    if (!category) throw notFound()
    return { title: category.title, description: category.description }
  },
  head: ({ params, loaderData }) =>
    seoHead({
      title: loaderData ? `${loaderData.title} — ОртоЦентр` : "Страница не найдена (404) — ОртоЦентр",
      description: loaderData?.description ?? "Такого раздела нет в каталоге ОртоЦентра.",
      canonical: `https://orto.center/catalog/${params.slug}`,
      noindex: !loaderData,
    }),
  component: CategoryPage,
})
