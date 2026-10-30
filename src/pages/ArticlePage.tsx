import { useEffect } from "react"
import { useParams, Link } from "@/lib/router-compat"
import type { SeoHeadProps } from "@/lib/seo"
import { LpNavbar1 } from "@/components/LpNavbar1"
import { Footer2 } from "@/components/Footer2"
import Icon from "@/components/ui/icon"
import Page404 from "@/pages/Page404"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ArticleBody, ArticleToc, ArticleFaqBlock } from "@/components/article/ArticleBody"
import { stripLinks } from "@/components/article/RichText"
import { getArticleBySlug, getRelatedArticles, toIsoDate, type Article } from "@/data/articlesData"

export function articleSeo(slug: string): SeoHeadProps {
  const article = getArticleBySlug(slug)
  const url = `https://orto.center/articles/${slug}`
  return {
    title: article ? `${article.seoTitle ?? article.title} — ОртоЦентр` : "Страница не найдена (404) — ОртоЦентр",
    description: article ? article.metaDescription ?? article.excerpt : "Такой статьи нет на сайте ОртоЦентра.",
    keywords: article?.keywords,
    canonical: url,
    jsonLd: buildJsonLd(article, url),
    noindex: !article,
    image: article?.cover,
    type: article ? "article" : "website",
  }
}

function buildJsonLd(article: Article | undefined, url: string): object | undefined {
  {
    if (!article) return undefined
    const published = toIsoDate(article.date)
    const modified = article.updated ? toIsoDate(article.updated) : published
    const org = {
      "@type": "Organization",
      name: "ОртоЦентр",
      url: "https://orto.center/",
      telephone: "+7 905 502-15-02",
      address: {
        "@type": "PostalAddress",
        addressCountry: "RU",
        addressRegion: "Московская область",
        addressLocality: "Мытищи",
        streetAddress: "ул. Карла Маркса, д. 2",
      },
    }
    const graph: object[] = [
      {
        "@type": "Article",
        headline: article.seoTitle ?? article.title,
        description: article.metaDescription ?? article.excerpt,
        image: [article.cover],
        inLanguage: "ru-RU",
        ...(article.keywords ? { keywords: article.keywords } : {}),
        ...(published ? { datePublished: published } : {}),
        ...(modified ? { dateModified: modified } : {}),
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: org,
        publisher: org,
      },
    ]
    if (article.faq?.length) {
      graph.push({
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
        })),
      })
    }
    return { "@context": "https://schema.org", "@graph": graph }
  }
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = getArticleBySlug(slug ?? "")

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [slug])

  if (!article) return <Page404 />

  const other = getRelatedArticles(article, 3)
  const isTsr = article.tags?.includes("tsr")

  return (
    <main>
      <LpNavbar1 />

      <section className="bg-muted py-12 md:py-16 min-h-screen">
        <div className="container mx-auto px-6 flex flex-col gap-8 max-w-2xl">

          <Breadcrumbs items={[{ label: "Статьи", to: "/articles" }, { label: article.title }]} />

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Icon name="Calendar" size={12} /><time dateTime={toIsoDate(article.date)}>{article.date}</time></span>
              <span className="flex items-center gap-1"><Icon name="Clock" size={12} />{article.readTime}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">{article.title}</h1>
          </div>

          <div className="h-52 md:h-64 rounded-2xl overflow-hidden">
            <img src={article.cover} alt={article.coverAlt ?? article.title} className="w-full h-full object-cover" width={1360} height={768} fetchPriority="high" />
          </div>

          {article.toc && <ArticleToc blocks={article.content} />}

          <article className="bg-background border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4">
            <ArticleBody blocks={article.content} />
          </article>

          {article.faq && article.faq.length > 0 && <ArticleFaqBlock items={article.faq} />}

          {isTsr && (
            <Link to="/tsr-sertifikat" className="group bg-background border border-primary/30 rounded-2xl px-6 py-5 flex items-center gap-4 hover:border-primary/60 hover:shadow-md transition-all duration-200">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 shrink-0">
                <Icon name="CreditCard" size={20} className="text-primary" />
              </div>
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span className="text-foreground font-semibold text-base leading-tight group-hover:text-primary transition-colors">
                  Полное руководство по сертификату ТСР
                </span>
                <span className="text-muted-foreground text-sm">Кому положен, как оформить и оплатить — всё на одной странице</span>
              </div>
              <Icon name="ChevronRight" size={20} className="text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
            </Link>
          )}

          <div className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-3">
            <p className="font-semibold text-foreground">Нужна консультация по подбору?</p>
            <p className="text-sm text-muted-foreground">Поможем выбрать оборудование с учётом диагноза и индивидуальных параметров.</p>
            <a
              href="tel:+79055021502"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity w-fit"
            >
              <Icon name="Phone" size={16} />
              +7 905 502-15-02
            </a>
          </div>

          {other.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-foreground">Читайте также</h2>
              <div className="flex flex-col gap-3">
                {other.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/articles/${a.slug}`}
                    className="group bg-background border border-border rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-primary/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 shrink-0 group-hover:bg-primary/15 transition-colors">
                      <Icon name={a.icon} size={20} className="text-primary" />
                    </div>
                    <span className="text-foreground text-sm font-semibold leading-snug flex-1 group-hover:text-primary transition-colors">{a.title}</span>
                    <Icon name="ChevronRight" size={16} className="text-muted-foreground shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer2 />
    </main>
  )
}