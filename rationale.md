# Rationale

Every Kazakh Latin proposal has to answer one question first: which alphabet are you actually transliterating? The usual answer is "the 42-letter Cyrillic alphabet Kazakhstan uses today," and everything else follows from trying to give each of those 42 letters a Latin counterpart, however awkward the fit.

This proposal answers the question differently. Eleven of those 42 letters, В, Ё, Ц, Ч, Щ, Ъ, Ь, Э, Ю, Я, Ф, were never part of Kazakh's own sound system. They were absorbed wholesale from Russian to spell Russian loanwords in Russian's own orthography. A Kazakh Latin alphabet does not owe them a seat.

## What each of the eleven was doing there

**В and Ф** spell sounds, /v/ and /f/, that do not occur in native Kazakh words. Every word that uses them is a loan from Russian.

**Ё, Ю, Я** are not single sounds. Each is a consonant glide followed by a vowel, /jo/, /ju/, /ja/. Kazakh can write that sequence with two letters it already has; a language does not need a dedicated letter for something that is already two sounds in a trench coat.

**Ц, Ч, Щ** are affricates and consonant clusters lifted directly from Russian spelling conventions. None of them mark a distinction that native Kazakh vocabulary needs.

**Ъ and Ь** are Russian orthographic devices for signaling palatalization and word-internal boundaries in Russian's consonant system. Kazakh vowel harmony already carries that kind of information through the vowels themselves, so these two letters do no independent work in Kazakh.

**Э** duplicates Е in everything except a narrow Russian spelling convention about word-initial position; Kazakh does not need the duplicate.

Take those eleven away and 31 letters are left, and every one of them is doing real work for Kazakh.

## From 31 Cyrillic letters to 29 Latin letters

Two more collapses happen on the way from that 31-letter Cyrillic set to the Latin alphabet, and both are choices about how much contrast is worth keeping, not accidents of the mapping:

- **И and Й become İ i.** They rarely compete for the same slot in a word: И behaves like a vowel, Й like a glide, and which one a given "i" is tends to be recoverable from where it sits in the word.
- **Х and Һ become H h.** Х is native; Һ rides in on a small, closed set of Arabic and Persian loanwords, and a lot of everyday speech does not keep the two apart anyway.

31 minus those two mergers gives the 29-letter alphabet in [character_mapping.md](character_mapping.md).

## What happens to the sounds that lost their letter

Dropping Ё, Ю, Я does not mean Kazakh loses the ability to write /jo/, /ju/, /ja/. It means those sequences are spelled the way they sound: J j followed by a vowel. A word that used to start with Я now starts with Ja.

This has a visible cost for a handful of established borrowings. "Яғни" ("that is, namely"), for instance, no longer has a one-letter spelling for its first sound and has to be respelled, roughly "Iagni". That is an acceptable trade: the sound was only ever needed to spell imported vocabulary, and the alphabet is not obligated to keep a whole letter alive for it.

Genuinely foreign words and names are handled the same way as any language handles foreign words: not transliterated character-for-character from Cyrillic, but respelled with the letters the alphabet has. "Wikipedia" becomes "Uikipedia", the way a language without /w/ would naturally adapt it, not a mechanical letter swap.

## The one distinction that survives the İ merger

Merging И and Й into İ i does not touch І. Even though І also looks like a plain "i" at a glance, it belongs to the opposite side of Kazakh vowel harmony from И/Й, so the alphabet keeps it as a fully separate letter: **I ı**, dotless, distinct from the dotted **İ i**. This dotted/dotless split is borrowed directly from Turkish orthography and is already supported by existing Turkic keyboard layouts, so it costs nothing to type.

## Against the official system

The official 2021 alphabet treats the full 42-letter Cyrillic alphabet as fixed and spends its design budget hunting for Latin equivalents, digraphs, or diacritics for letters that were never Kazakh's problem to begin with. This proposal spends that budget differently: decide what Kazakh actually needs first, and let the Latin alphabet be exactly that size. The result is smaller, has fewer digraphs, and drops nothing a native speaker was actually using.

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

© 2026 AnmiTaliDev
