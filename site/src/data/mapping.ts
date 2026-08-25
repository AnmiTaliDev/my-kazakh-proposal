export interface MappingRow {
  n: number
  latin: string
  cyrillic: string
  ipa: string
  exampleLatin: string
  exampleCyrillic: string
}

export const mappingRows: MappingRow[] = [
  { n: 1, latin: "A a", cyrillic: "А а", ipa: "/a/", exampleLatin: "ana", exampleCyrillic: "ана" },
  { n: 2, latin: "Ä ä", cyrillic: "Ә ә", ipa: "/æ/", exampleLatin: "äke", exampleCyrillic: "әке" },
  { n: 3, latin: "B b", cyrillic: "Б б", ipa: "/b/", exampleLatin: "bala", exampleCyrillic: "бала" },
  { n: 4, latin: "G g", cyrillic: "Г г", ipa: "/ɡ/", exampleLatin: "gül", exampleCyrillic: "гүл" },
  { n: 5, latin: "Ğ ğ", cyrillic: "Ғ ғ", ipa: "/ɣ/", exampleLatin: "ğalym", exampleCyrillic: "ғалым" },
  { n: 6, latin: "D d", cyrillic: "Д д", ipa: "/d/", exampleLatin: "dos", exampleCyrillic: "дос" },
  { n: 7, latin: "E e", cyrillic: "Е е", ipa: "/e/", exampleLatin: "emes", exampleCyrillic: "емес" },
  { n: 8, latin: "J j", cyrillic: "Ж ж", ipa: "/ʒ/", exampleLatin: "jaz", exampleCyrillic: "жаз" },
  { n: 9, latin: "Z z", cyrillic: "З з", ipa: "/z/", exampleLatin: "zat", exampleCyrillic: "зат" },
  { n: 10, latin: "İ i", cyrillic: "И и, Й й", ipa: "/i/, /j/", exampleLatin: "is, tai", exampleCyrillic: "ис, тай" },
  { n: 11, latin: "K k", cyrillic: "К к", ipa: "/k/", exampleLatin: "kül", exampleCyrillic: "күл" },
  { n: 12, latin: "Q q", cyrillic: "Қ қ", ipa: "/q/", exampleLatin: "qala", exampleCyrillic: "қала" },
  { n: 13, latin: "L l", cyrillic: "Л л", ipa: "/l/", exampleLatin: "laq", exampleCyrillic: "лақ" },
  { n: 14, latin: "M m", cyrillic: "М м", ipa: "/m/", exampleLatin: "men", exampleCyrillic: "мен" },
  { n: 15, latin: "N n", cyrillic: "Н н", ipa: "/n/", exampleLatin: "nan", exampleCyrillic: "нан" },
  { n: 16, latin: "Ñ ñ", cyrillic: "Ң ң", ipa: "/ŋ/", exampleLatin: "tañ", exampleCyrillic: "таң" },
  { n: 17, latin: "O o", cyrillic: "О о", ipa: "/o/", exampleLatin: "ot", exampleCyrillic: "от" },
  { n: 18, latin: "Ö ö", cyrillic: "Ө ө", ipa: "/ø/", exampleLatin: "öz", exampleCyrillic: "өз" },
  { n: 19, latin: "P p", cyrillic: "П п", ipa: "/p/", exampleLatin: "pai", exampleCyrillic: "пай" },
  { n: 20, latin: "R r", cyrillic: "Р р", ipa: "/r/", exampleLatin: "ret", exampleCyrillic: "рет" },
  { n: 21, latin: "S s", cyrillic: "С с", ipa: "/s/", exampleLatin: "sen", exampleCyrillic: "сен" },
  { n: 22, latin: "T t", cyrillic: "Т т", ipa: "/t/", exampleLatin: "tıl", exampleCyrillic: "тіл" },
  { n: 23, latin: "U u", cyrillic: "У у", ipa: "/w, u/", exampleLatin: "uyq", exampleCyrillic: "уық" },
  { n: 24, latin: "Ū ū", cyrillic: "Ұ ұ", ipa: "/ʊ/", exampleLatin: "ūl", exampleCyrillic: "ұл" },
  { n: 25, latin: "Ü ü", cyrillic: "Ү ү", ipa: "/y/", exampleLatin: "üi", exampleCyrillic: "үй" },
  { n: 26, latin: "H h", cyrillic: "Х х, Һ һ", ipa: "/χ/, /h/", exampleLatin: "hat, mahabbat", exampleCyrillic: "хат, махаббат" },
  { n: 27, latin: "Ş ş", cyrillic: "Ш ш", ipa: "/ʃ/", exampleLatin: "şekpen", exampleCyrillic: "шекпен" },
  { n: 28, latin: "Y y", cyrillic: "Ы ы", ipa: "/ɯ/", exampleLatin: "qyz", exampleCyrillic: "қыз" },
  { n: 29, latin: "I ı", cyrillic: "І і", ipa: "/ɪ/", exampleLatin: "tıl", exampleCyrillic: "тіл" },
]

export const droppedLetters = ["В", "Ё", "Ц", "Ч", "Щ", "Ъ", "Ь", "Э", "Ю", "Я", "Ф"]
