import { createFileRoute, notFound } from "@tanstack/react-router"
import ArticlePage, { articleSeo } from "@/pages/ArticlePage"
import { seoHead } from "@/lib/seo"
import { getArticleBySlug } from "@/data/articlesData"

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    if (!getArticleBySlug(params.slug)) throw notFound()
    return null
  },
  head: ({ params }) => seoHead(articleSeo(params.slug)),
  component: ArticlePage,
})
