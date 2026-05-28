import { Logo } from "./Logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLocation, Link } from "react-router-dom"

const MENU_ITEMS = [
  { label: "Возможности", href: "#features" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Вопросы", href: "#faq" },
] as const

interface NavMenuItemsProps {
  className?: string
  onItemClick?: () => void
  isHome: boolean
}

const NavMenuItems = ({ className, onItemClick, isHome }: NavMenuItemsProps) => (
  <div className={`flex flex-col md:flex-row gap-1 ${className ?? ""}`}>
    {MENU_ITEMS.map(({ label, href }) => {
      if (isHome) {
        return (
          <a
            key={label}
            href={href}
            onClick={(e) => {
              e.preventDefault()
              onItemClick?.()
              const id = href.replace("#", "")
              const el = document.getElementById(id)
              if (el) {
                const offset = 72
                const top = el.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top, behavior: "smooth" })
              }
            }}
          >
            <Button variant="ghost" className="w-full md:w-auto">
              {label}
            </Button>
          </a>
        )
      }
      return (
        <a key={label} href={`/${href}`} onClick={onItemClick}>
          <Button variant="ghost" className="w-full md:w-auto">
            {label}
          </Button>
        </a>
      )
    })}
  </div>
)

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav className="sticky top-0 z-50 bg-background py-3.5 md:py-4 isolate">
      <div className="container relative px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 m-auto">
        <div className="flex items-center justify-between">
          <a href="/">
            <Logo />
          </a>
          <Button
            variant="ghost"
            className="size-9 flex items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-5 w-full justify-end items-center">
          <NavMenuItems isHome={isHome} />
          <Link to="/catalog">
            <Button variant="outline">Каталог</Button>
          </Link>
          <a href="tel:+79055021502">
            <Button>Записаться</Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-5 w-full justify-end pb-2.5">
            <NavMenuItems isHome={isHome} onItemClick={closeMenu} />
            <Link to="/catalog" onClick={closeMenu}>
              <Button variant="outline" className="w-full">Каталог</Button>
            </Link>
            <a href="tel:+79055021502" onClick={closeMenu}>
              <Button className="w-full">Записаться</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}