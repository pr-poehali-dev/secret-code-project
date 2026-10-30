import Icon from "@/components/ui/icon"
import type { ArticleBlock } from "@/data/articlesData"
import { RichText } from "./RichText"

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} id={block.id} className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-foreground mt-4 scroll-mt-24">
                {block.icon && (
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
                    <Icon name={block.icon} size={18} className="text-primary" />
                  </span>
                )}
                {block.text}
              </h2>
            )
          case "subheading":
            return (
              <h3 key={i} id={block.id} className="text-base font-semibold text-foreground mt-1 scroll-mt-24">
                {block.text}
              </h3>
            )
          case "callout":
            return (
              <aside key={i} className="flex items-start gap-3 bg-primary/8 border border-primary/20 rounded-xl p-4">
                <Icon name={block.icon ?? "Info"} size={20} className="text-primary shrink-0 mt-0.5" />
                <p className="text-foreground text-[15px] leading-relaxed font-medium"><RichText text={block.text} /></p>
              </aside>
            )
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-2">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-muted-foreground text-[15px] leading-relaxed">
                    <Icon name="Check" size={18} className="text-primary shrink-0 mt-0.5" />
                    <span><RichText text={item} /></span>
                  </li>
                ))}
              </ul>
            )
          case "numbered":
            return (
              <ol key={i} className="flex flex-col gap-3">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground text-[15px] leading-relaxed">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">
                      {j + 1}
                    </span>
                    <span className="pt-0.5"><RichText text={item} /></span>
                  </li>
                ))}
              </ol>
            )
          case "table":
            return (
              <div key={i} className="overflow-x-auto -mx-2 px-2">
                <table className="w-full min-w-[520px] text-sm border-collapse">
                  <thead>
                    <tr>
                      {block.head?.map((h, j) => (
                        <th key={j} scope="col" className="text-left font-semibold text-foreground bg-primary/10 px-3 py-2.5 first:rounded-tl-lg last:rounded-tr-lg">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows?.map((row, r) => (
                      <tr key={r} className="border-b border-border last:border-0">
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th key={c} scope="row" className="text-left font-medium text-foreground px-3 py-2.5 align-top">{cell}</th>
                          ) : (
                            <td key={c} className="text-muted-foreground px-3 py-2.5 align-top leading-relaxed"><RichText text={cell} /></td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          default:
            return <p key={i} className="text-muted-foreground text-[15px] leading-relaxed"><RichText text={block.text} /></p>
        }
      })}
    </>
  )
}

export function ArticleToc({ blocks }: { blocks: ArticleBlock[] }) {
  const items = blocks.filter((b) => b.type === "heading" && b.id)
  if (items.length < 3) return null
  return (
    <nav aria-labelledby="toc-title" className="bg-background border border-border rounded-2xl p-5 md:p-6 flex flex-col gap-3">
      <p id="toc-title" className="font-semibold text-foreground flex items-center gap-2">
        <Icon name="ListOrdered" size={18} className="text-primary" />
        Содержание
      </p>
      <ol className="flex flex-col gap-1.5 text-sm list-decimal pl-5 marker:text-muted-foreground">
        {items.map((b) => (
          <li key={b.id}>
            <a href={`#${b.id}`} className="text-muted-foreground hover:text-primary transition-colors">{b.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function ArticleFaqBlock({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section aria-labelledby="faq-title" className="bg-background border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4">
      <h2 id="faq-title" className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-foreground scroll-mt-24">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 shrink-0">
          <Icon name="MessageCircleQuestion" size={18} className="text-primary" />
        </span>
        Частые вопросы
      </h2>
      <div className="flex flex-col gap-3">
        {items.map((f, i) => (
          <details key={i} className="group bg-muted/60 rounded-xl p-4" open={i === 0}>
            <summary className="font-semibold text-foreground flex items-start gap-2 cursor-pointer list-none">
              <Icon name="HelpCircle" size={17} className="text-primary shrink-0 mt-0.5" />
              <h3 className="flex-1 text-[15px]">{f.q}</h3>
              <Icon name="ChevronDown" size={17} className="text-muted-foreground shrink-0 mt-0.5 transition-transform group-open:rotate-180" />
            </summary>
            <p className="pl-6 pt-2 text-muted-foreground text-[15px] leading-relaxed"><RichText text={f.a} /></p>
          </details>
        ))}
      </div>
    </section>
  )
}
