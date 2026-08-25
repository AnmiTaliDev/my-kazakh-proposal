export interface Content {
  meta: {
    title: string
    description: string
  }
  nav: {
    brand: string
    overview: string
    mapping: string
    rationale: string
    example: string
    github: string
  }
  footer: string
  home: {
    badge: string
    h1: string
    lead: string
    overviewHeading: string
    overviewBody: string
    keyPointsHeading: string
    keyPoints: { title: string; body: string }[]
    mappingHeading: string
    mappingLinkText: string
  }
  mapping: {
    h1: string
    lead: string
    table: {
      n: string
      latin: string
      cyrillic: string
      ipa: string
      exLatin: string
      exCyrillic: string
    }
    mergedHeading: string
    mergedIntro: string
    merged: string[]
    droppedHeading: string
    droppedIntro: string
    droppedNotes: string[]
    twoIHeading: string
    twoIIntro: string
    twoIList: string[]
    twoIOutro: string
  }
  rationale: {
    h1: string
    startHeading: string
    startBody: string[]
    dropHeading: string
    cards: { title: string; body: string }[]
    dropNote: string
    dropOutro: string
    mergeHeading: string
    mergeIntro: string
    mergeList: string[]
    mergeOutro: string
    soundsHeading: string
    soundsBody: string[]
    iHeading: string
    iBody: string
    compareHeading: string
    compareBody: string
    conclusionHeading: string
    conclusionBody: string
  }
  example: {
    h1: string
    performerLabel: string
    performer: string
    verses: { title: string; lines: string[] }[]
    copyrightHeading: string
    copyrightBody: string
    transcriptionLabel: string
    transcriptionValue: string
    licenseLabel: string
    licenseValue: string
    copyrightLine: string
    epicHeading: string
    epicSubheading: string
    epicLines: string[]
    epicSourceHeading: string
    epicSourceBody: string
    epicSourceLinkText: string
    epicEditionLine: string
  }
}
