export interface LocaleDef {
  code: "en" | "kk-cyr" | "kk-lat" | "ru"
  htmlLang: string
  dir: string
  switchLabel: string
}

export const locales: LocaleDef[] = [
  { code: "en", htmlLang: "en", dir: "/", switchLabel: "EN" },
  { code: "kk-cyr", htmlLang: "kk", dir: "/kk/", switchLabel: "ҚАЗ" },
  { code: "kk-lat", htmlLang: "kk-Latn", dir: "/kk-lat/", switchLabel: "QAZ" },
  { code: "ru", htmlLang: "ru", dir: "/ru/", switchLabel: "РУС" },
]

export type PageKey = "home" | "mapping" | "rationale" | "example"

export function pageHref(dir: string, page: PageKey): string {
  if (page === "home") return dir
  return dir === "/" ? `/${page}` : `${dir}${page}`
}
