import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Sun03FreeIcons, Moon02FreeIcons } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggle}>
      <HugeiconsIcon icon={isDark ? Sun03FreeIcons : Moon02FreeIcons} size={16} />
    </Button>
  )
}
