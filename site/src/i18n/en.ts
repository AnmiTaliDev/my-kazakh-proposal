import type { Content } from "./types"

const en: Content = {
  meta: {
    title: "Kazakh Alphabet Proposal",
    description:
      "A Kazakh alphabet proposal: a reduced native Cyrillic letter set and its Latin equivalent, built from Kazakh phonology.",
  },
  nav: {
    brand: "Kazakh Alphabet Proposal",
    overview: "Overview",
    mapping: "Mapping",
    rationale: "Rationale",
    example: "Example",
    github: "GitHub",
  },
  footer: "Licensed under CC BY-SA 4.0. © 2026 AnmiTaliDev.",
  home: {
    badge: "Alphabet proposal",
    h1: "Kazakh Alphabet Proposal",
    lead: "An alternative Kazakh alphabet proposal, in both a reduced Cyrillic form and its Latin equivalent, built from Kazakh phonology rather than from the Russian-influenced Cyrillic letter set.",
    overviewHeading: "Overview",
    overviewBody:
      "This proposal starts from a reduced, 31-letter Kazakh Cyrillic set: the letters that Kazakh actually needs, with the eleven letters that exist only to write Russian loanwords removed (В, Ё, Ц, Ч, Щ, Ъ, Ь, Э, Ю, Я, Ф). From that set, it derives a 29-letter Latin alphabet, merging only the two pairs that rarely contrast in practice: И/Й and Х/Һ.",
    keyPointsHeading: "Key points",
    keyPoints: [
      {
        title: "Native phonology only",
        body: "The source Cyrillic set drops every letter that exists solely for Russian loanwords.",
      },
      {
        title: "Two merges",
        body: "И/Й collapse to İ i, and Х/Һ collapse to H h, because the pairs rarely contrast in the same position.",
      },
      {
        title: "No digraphs for removed sounds",
        body: "A я/ё/ю-type glide is written as J j plus a vowel; loanwords are respelled with the available letters instead of transliterated letter-for-letter.",
      },
      {
        title: "Standard Unicode",
        body: "Every character is a standard Latin letter with a common diacritic, typeable with existing Turkic keyboard layouts.",
      },
    ],
    mappingHeading: "Character mapping",
    mappingLinkText: "Full table with IPA and examples",
  },
  mapping: {
    h1: "Character mapping",
    lead: "29 Latin letters, mapped from a reduced 31-letter Kazakh Cyrillic set. Two Cyrillic pairs merge into a single Latin letter each: И and Й both become İ i, and Х and Һ both become H h.",
    table: {
      n: "#",
      latin: "Latin",
      cyrillic: "Cyrillic",
      ipa: "IPA",
      exLatin: "Example (Latin)",
      exCyrillic: "Example (Cyrillic)",
    },
    mergedHeading: "Merged letters",
    mergedIntro: "Two Cyrillic distinctions are not carried over into the Latin alphabet:",
    merged: [
      "İ i covers both И (vowel /i/) and Й (glide /j/). In practice the two rarely contrast in the same position.",
      "H h covers both Х (/χ/) and Һ (/h/). Һ occurs only in a small set of Arabic-Persian loanwords, and many speakers no longer distinguish it from Х.",
    ],
    droppedHeading: "Dropped letters",
    droppedIntro:
      "The following Cyrillic letters exist only to write Russian loanwords and have no place in native Kazakh phonology, so they are dropped entirely:",
    droppedNotes: [
      "Where a native word would historically use a soft-sign or a я/ё/ю-type glide, it is written with the existing letters: J j plus a vowel (ja, jo, ju).",
      "Loanwords and foreign proper names are not transliterated letter-for-letter; they are respelled with the available letters (for example Wikipedia becomes Uikipedia, not a direct copy of the Cyrillic spelling).",
    ],
    twoIHeading: "Distinct Latin letters for I",
    twoIIntro: "The alphabet uses the Turkish-style dotted/dotless pair:",
    twoIList: ["İ i (dotted) for И/Й", "I ı (dotless) for І"],
    twoIOutro:
      'This keeps the two Kazakh front/back distinctions typographically separate even though both are rendered as a plain "i" in casual, non-Turkic fonts.',
  },
  rationale: {
    h1: "Rationale",
    startHeading: "Starting point: a Kazakh, not Russian, letter set",
    startBody: [
      "Most Kazakh Latin proposals, including the official one, start from the full 42-letter Cyrillic alphabet used in Kazakhstan today, then try to find a Latin letter for every single one of those 42 letters, including the ones that only exist to write Russian loanwords: В, Ё, Ц, Ч, Щ, Ъ, Ь, Э, Ю, Я, Ф.",
      "This proposal starts from a different question: which letters does Kazakh itself actually need? The answer is 31 Cyrillic letters, none of which are Russian-only. Everything downstream, including the size and shape of the Latin alphabet, follows from that smaller set.",
    ],
    dropHeading: "Why drop those eleven letters",
    cards: [
      {
        title: "В, Ф",
        body: "No native Kazakh word begins with or requires these sounds; they appear only in Russian loanwords.",
      },
      {
        title: "Ё, Ю, Я",
        body: "Not independent sounds, but a consonant glide plus a vowel (jo, ju, ja), already spellable with existing letters.",
      },
      {
        title: "Ц, Ч, Щ",
        body: "Affricates and clusters borrowed wholesale from Russian orthography, not part of native Kazakh phonology.",
      },
      {
        title: "Ъ, Ь",
        body: "Exist to mark Russian spelling conventions; Kazakh vowel harmony already encodes the information they would carry.",
      },
    ],
    dropNote: "Э is redundant with Е in practice.",
    dropOutro:
      'Removing these letters is not a loss of information for Kazakh; it is a removal of letters that were never doing work for Kazakh in the first place. A side effect is that a handful of established loanwords and calques, such as "яғни", no longer have a one-letter spelling for their first sound and must be respelled (for example, "iagni"), because that sound was only ever needed for imported vocabulary.',
    mergeHeading: "Merging И/Й and Х/Һ",
    mergeIntro: "Two more mergers happen at the Cyrillic-to-Latin step itself, on top of the removals above:",
    mergeList: [
      "И, Й → İ i: rarely contrast in the same position; treating them as one letter matches how many speakers already use them.",
      "Х, Һ → H h: Һ is confined to a small set of Arabic-Persian loanwords and is not consistently distinguished from Х in everyday speech.",
    ],
    mergeOutro: "This brings the alphabet down from 31 Cyrillic letters to 29 Latin letters.",
    soundsHeading: "Handling sounds that have no letter",
    soundsBody: [
      "Where a word historically needed a я/ё/ю-type glide, it is written as J j followed by a vowel (ja, jo, ju), using letters the alphabet already has rather than adding a new one.",
      'Loanwords and foreign proper names are not transliterated letter-for-letter from their Cyrillic spelling. They are respelled using the available 29 letters, the same way any language adapts foreign words to its own orthography. "Wikipedia", for example, becomes "Uikipedia", not a direct copy of a Cyrillic transliteration.',
    ],
    iHeading: "Distinguishing İ i from I ı",
    iBody:
      "Even after the И/Й merge, Kazakh still needs to keep И/Й apart from І, because they belong to opposite vowel-harmony classes. The alphabet borrows the Turkish-style dotted/dotless pair to do this: İ i (dotted) for И/Й, and I ı (dotless) for І. This is a well-established convention in Turkic Latin orthographies and is supported by existing Turkic keyboard layouts.",
    compareHeading: "Comparison with the official system",
    compareBody:
      "The official 2021 Kazakh Latin alphabet keeps all 42 Cyrillic letters in scope and spends significant design effort finding Latin equivalents (or digraphs) for Russian-only letters. This proposal argues that effort is misplaced: those letters do not belong in a Kazakh alphabet at all, and removing them up front produces a smaller, more consistent Latin alphabet without sacrificing any native Kazakh sound.",
    conclusionHeading: "Conclusion",
    conclusionBody:
      "This alphabet is built in two steps: first reduce the Cyrillic reference set to what Kazakh phonology actually requires, then map that set to Latin letters with only two narrow, well-motivated mergers. The result is a 29-letter alphabet that covers every native Kazakh sound, uses standard Unicode characters with established Turkic-language support, and does not carry over the digraph or diacritic clutter needed to represent Russian-only letters.",
  },
  example: {
    h1: "Toi jyry",
    performerLabel: "Performer",
    performer: "Dos Mukasan",
    verses: [
      {
        title: "Qaiyrmasy",
        lines: [
          "Toi üstınde tättı künder, tättı künder.",
          "Jas jūbailar şat külıñder, şat külıñder.",
          "Än salaiyq bi bileiık, bi bileiık,",
          "Şaryqtasyn şattyq ünder, şattyq ünder.",
        ],
      },
    ],
    copyrightHeading: "Copyright notice",
    copyrightBody:
      "This is a short excerpt (one chorus) from a song by Dos Mukasan, reproduced solely to demonstrate this Kazakh alphabet proposal. Lyrics and music are the intellectual property of their respective authors and performers; this excerpt is not a substitute for the full work. No commercial use is intended.",
    transcriptionLabel: "Transcription system",
    transcriptionValue: "Kazakh Alphabet Proposal (Latin variant)",
    licenseLabel: "Licensed under",
    licenseValue: "CC BY-SA 4.0",
    copyrightLine: "© 2026 AnmiTaliDev",
    epicHeading: "Qyz jibek (excerpt)",
    epicSubheading: "Traditional epic, author unknown",
    epicLines: [
      "Bazarbaidyñ Tölegen,",
      "Erte tuğan köbegen.",
      "Seksen jıgıt qosşy alyp,",
      "On bes jıgıt basşy alyp,",
      "Aqjaiyqqa jönegen.",
      "Aidyñ ötken şeşesı,",
      "Ai qarañğy keşesı,",
      "Padişadan kem emes,",
      "Er Tölegen müşesı.",
    ],
    epicSourceHeading: "Source and copyright notice",
    epicSourceBody:
      "Original text: a traditional (folk) work, public domain, first committed to paper in 1894 or earlier. Source:",
    epicSourceLinkText: "adebiportal.kz",
    epicEditionLine: "This orthography edition: © 2026 AnmiTaliDev, licensed under CC BY-SA 4.0.",
  },
}

export default en
