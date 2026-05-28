import { useNavigate, useLocation } from "react-router-dom"

export function useAnchorNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (anchor: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (location.pathname === "/") {
      const el = document.getElementById(anchor)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top, behavior: "smooth" })
      }
    } else {
      navigate(`/#${anchor}`)
    }
  }
}
