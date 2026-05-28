import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted")
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border shadow-lg rounded-xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-muted-foreground flex-1">
            Мы используем файлы cookie для корректной работы сайта. Продолжая использование сайта, вы соглашаетесь с нашей{" "}
            <a href="/privacy" className="text-primary underline hover:no-underline">
              политикой конфиденциальности
            </a>{" "}
            и{" "}
            <a href="/cookies" className="text-primary underline hover:no-underline">
              условиями использования cookies
            </a>.
          </p>
          <div className="flex gap-2 shrink-0">
            <Button size="sm" onClick={accept}>
              Принять
            </Button>
            <Button size="sm" variant="outline" onClick={accept}>
              Закрыть
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
