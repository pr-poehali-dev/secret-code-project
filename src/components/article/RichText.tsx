import { Fragment } from "react"
import { Link } from "@/lib/router-compat"

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g

export function RichText({ text }: { text?: string }) {
  if (!text) return null
  const parts: React.ReactNode[] = []
  let last = 0
  let m: RegExpExecArray | null
  LINK_RE.lastIndex = 0
  while ((m = LINK_RE.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    const [, label, href] = m
    const cls = "text-primary font-medium underline underline-offset-2 decoration-primary/40 hover:decoration-primary transition-colors"
    parts.push(
      href.startsWith("/") ? (
        <Link key={m.index} to={href} className={cls}>{label}</Link>
      ) : (
        <a key={m.index} href={href} className={cls} target="_blank" rel="noopener noreferrer">{label}</a>
      ),
    )
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>
}

export function stripLinks(text: string): string {
  return text.replace(LINK_RE, "$1")
}
