# Site

Astro + React + Tailwind + shadcn/ui site for the AnmiTaliDev Kazakh Latin Alphabet proposal.

## Structure

```
src/
  components/ui/   shadcn/ui components
  data/mapping.ts  the character mapping table, shared by all pages
  layouts/         shared page shell (nav, theme toggle, language switch)
  pages/           English pages at /, Kazakh pages under /kk/
```

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the build locally |

## License

Content and alphabet design: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), © 2026 AnmiTaliDev.
