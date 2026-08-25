# Kazakh Alphabet Proposal

A reduced, native Cyrillic letter set and its Latin equivalent, built from Kazakh phonology, not from the full 42-letter Cyrillic alphabet Kazakhstan currently uses.

Most Latin proposals, official or otherwise, take the current Cyrillic alphabet as a given and try to find a Latin letter for every single one of its 42 letters. Eleven of those letters (В, Ё, Ц, Ч, Щ, Ъ, Ь, Э, Ю, Я, Ф) exist only to spell Russian loanwords and were never part of native Kazakh sound inventory. This proposal removes them first, then builds the Latin alphabet from what remains.

## The alphabet

29 letters, one diacritic system, no digraphs for native sounds:

```
A a   Ä ä   B b   G g   Ğ ğ   D d   E e   J j   Z z
İ i   K k   Q q   L l   M m   N n   Ñ ñ   O o   Ö ö
P p   R r   S s   T t   U u   Ū ū   Ü ü   H h   Ş ş
Y y   I ı
```

| Latin | Cyrillic source |
|---|---|
| A a | А а |
| Ä ä | Ә ә |
| B b | Б б |
| G g | Г г |
| Ğ ğ | Ғ ғ |
| D d | Д д |
| E e | Е е |
| J j | Ж ж |
| Z z | З з |
| İ i | И и, Й й |
| K k | К к |
| Q q | Қ қ |
| L l | Л л |
| M m | М м |
| N n | Н н |
| Ñ ñ | Ң ң |
| O o | О о |
| Ö ö | Ө ө |
| P p | П п |
| R r | Р р |
| S s | С с |
| T t | Т т |
| U u | У у |
| Ū ū | Ұ ұ |
| Ü ü | Ү ү |
| H h | Х х, Һ һ |
| Ş ş | Ш ш |
| Y y | Ы ы |
| I ı | І і |

Full table with IPA values and example words: [character_mapping.md](character_mapping.md).
Full reasoning behind every design choice: [rationale.md](rationale.md).
A worked example (song lyrics): [examples/Toi_jyry.md](examples/Toi_jyry.md).

## Design in three sentences

The source alphabet is Kazakh Cyrillic minus its eleven Russian-only letters, leaving 31 letters that are all actually needed. Two of those 31 still collapse into a single Latin letter each, because they rarely contrast in the same word position: И and Й both become İ i, and Х and Һ both become H h. Sounds that used to need Ё, Ю or Я are spelled as J j plus a vowel, and loanwords are respelled with the 29 available letters rather than transliterated character by character.

## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

© 2026 AnmiTaliDev
