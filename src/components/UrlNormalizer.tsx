import { useEffect } from "react"
import { useLocation, useNavigate } from "@/lib/router-compat"

const MAIN_HOST = "orto.center"

function normalizePath(pathname: string): string {
  let path = pathname.replace(/\/{2,}/g, "/")
  path = path.replace(/\/index\.(html?|php)$/i, "/")
  path = path.toLowerCase()
  if (path.length > 1) path = path.replace(/\/+$/, "")
  return path || "/"
}

export function UrlNormalizer() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const { hostname, protocol } = window.location
    const isMirror = hostname === `www.${MAIN_HOST}` || (hostname === MAIN_HOST && protocol === "http:")
    if (isMirror) {
      const path = normalizePath(location.pathname)
      window.location.replace(`https://${MAIN_HOST}${path}${location.search}${location.hash}`)
      return
    }

    const path = normalizePath(location.pathname)
    if (path !== location.pathname) {
      navigate({ pathname: path, search: location.search, hash: location.hash }, { replace: true })
    }
  }, [location.pathname, location.search, location.hash, navigate])

  return null
}

export default UrlNormalizer
