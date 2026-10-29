import { createFileRoute } from "@tanstack/react-router"
import TsrCertificate, { tsrSeo } from "@/pages/TsrCertificate"
import { seoHead } from "@/lib/seo"

export const Route = createFileRoute("/tsr-sertifikat")({
  head: () => seoHead(tsrSeo),
  component: TsrCertificate,
})
