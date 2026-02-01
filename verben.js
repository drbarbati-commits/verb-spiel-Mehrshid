// verben.js - Verb-Datenbank für 4. Klasse Grundschule

const verben = [
  // HILFSVERBEN
  {
    infinitiv: "sein",
    präsens: { ich: "bin", du: "bist", "er/sie/es": "ist", wir: "sind", ihr: "seid", sie: "sind" },
    präteritum: { ich: "war", du: "warst", "er/sie/es": "war", wir: "waren", ihr: "wart", sie: "waren" },
    perfekt: { hilfsverb: "sein", partizip: "gewesen" }
  },
  {
    infinitiv: "haben",
    präsens: { ich: "habe", du: "hast", "er/sie/es": "hat", wir: "haben", ihr: "habt", sie: "haben" },
    präteritum: { ich: "hatte", du: "hattest", "er/sie/es": "hatte", wir: "hatten", ihr: "hattet", sie: "hatten" },
    perfekt: { hilfsverb: "haben", partizip: "gehabt" }
  },
  {
    infinitiv: "werden",
    präsens: { ich: "werde", du: "wirst", "er/sie/es": "wird", wir: "werden", ihr: "werdet", sie: "werden" },
    präteritum: { ich: "wurde", du: "wurdest", "er/sie/es": "wurde", wir: "wurden", ihr: "wurdet", sie: "wurden" },
    perfekt: { hilfsverb: "sein", partizip: "geworden" }
  },

  // MODALVERBEN
  {
    infinitiv: "können",
    präsens: { ich: "kann", du: "kannst", "er/sie/es": "kann", wir: "können", ihr: "könnt", sie: "können" },
    präteritum: { ich: "konnte", du: "konntest", "er/sie/es": "konnte", wir: "konnten", ihr: "konntet", sie: "konnten" },
    perfekt: { hilfsverb: "haben", partizip: "gekonnt" }
  },
  {
    infinitiv: "müssen",
    präsens: { ich: "muss", du: "musst", "er/sie/es": "muss", wir: "müssen", ihr: "müsst", sie: "müssen" },
    präteritum: { ich: "musste", du: "musstest", "er/sie/es": "musste", wir: "mussten", ihr: "musstet", sie: "mussten" },
    perfekt: { hilfsverb: "haben", partizip: "gemusst" }
  },
  {
    infinitiv: "wollen",
    präsens: { ich: "will", du: "willst", "er/sie/es": "will", wir: "wollen", ihr: "wollt", sie: "wollen" },
    präteritum: { ich: "wollte", du: "wolltest", "er/sie/es": "wollte", wir: "wollten", ihr: "wolltet", sie: "wollten" },
    perfekt: { hilfsverb: "haben", partizip: "gewollt" }
  },
  {
    infinitiv: "dürfen",
    präsens: { ich: "darf", du: "darfst", "er/sie/es": "darf", wir: "dürfen", ihr: "dürft", sie: "dürfen" },
    präteritum: { ich: "durfte", du: "durftest", "er/sie/es": "durfte", wir: "durften", ihr: "durftet", sie: "durften" },
    perfekt: { hilfsverb: "haben", partizip: "gedurft" }
  },
  {
    infinitiv: "sollen",
    präsens: { ich: "soll", du: "sollst", "er/sie/es": "soll", wir: "sollen", ihr: "sollt", sie: "sollen" },
    präteritum: { ich: "sollte", du: "solltest", "er/sie/es": "sollte", wir: "sollten", ihr: "solltet", sie: "sollten" },
    perfekt: { hilfsverb: "haben", partizip: "gesollt" }
  },

  // STARKE VERBEN (Bewegung)
  {
    infinitiv: "gehen",
    präsens: { ich: "gehe", du: "gehst", "er/sie/es": "geht", wir: "gehen", ihr: "geht", sie: "gehen" },
    präteritum: { ich: "ging", du: "gingst", "er/sie/es": "ging", wir: "gingen", ihr: "gingt", sie: "gingen" },
    perfekt: { hilfsverb: "sein", partizip: "gegangen" }
  },
  {
    infinitiv: "kommen",
    präsens: { ich: "komme", du: "kommst", "er/sie/es": "kommt", wir: "kommen", ihr: "kommt", sie: "kommen" },
    präteritum: { ich: "kam", du: "kamst", "er/sie/es": "kam", wir: "kamen", ihr: "kamt", sie: "kamen" },
    perfekt: { hilfsverb: "sein", partizip: "gekommen" }
  },
  {
    infinitiv: "fahren",
    präsens: { ich: "fahre", du: "fährst", "er/sie/es": "fährt", wir: "fahren", ihr: "fahrt", sie: "fahren" },
    präteritum: { ich: "fuhr", du: "fuhrst", "er/sie/es": "fuhr", wir: "fuhren", ihr: "fuhrt", sie: "fuhren" },
    perfekt: { hilfsverb: "sein", partizip: "gefahren" }
  },
  {
    infinitiv: "laufen",
    präsens: { ich: "laufe", du: "läufst", "er/sie/es": "läuft", wir: "laufen", ihr: "lauft", sie: "laufen" },
    präteritum: { ich: "lief", du: "liefst", "er/sie/es": "lief", wir: "liefen", ihr: "lieft", sie: "liefen" },
    perfekt: { hilfsverb: "sein", partizip: "gelaufen" }
  },

  // STARKE VERBEN (Sinne & Kommunikation)
  {
    infinitiv: "sehen",
    präsens: { ich: "sehe", du: "siehst", "er/sie/es": "sieht", wir: "sehen", ihr: "seht", sie: "sehen" },
    präteritum: { ich: "sah", du: "sahst", "er/sie/es": "sah", wir: "sahen", ihr: "saht", sie: "sahen" },
    perfekt: { hilfsverb: "haben", partizip: "gesehen" }
  },
  {
    infinitiv: "lesen",
    präsens: { ich: "lese", du: "liest", "er/sie/es": "liest", wir: "lesen", ihr: "lest", sie: "lesen" },
    präteritum: { ich: "las", du: "last", "er/sie/es": "las", wir: "lasen", ihr: "last", sie: "lasen" },
    perfekt: { hilfsverb: "haben", partizip: "gelesen" }
  },
  {
    infinitiv: "schreiben",
    präsens: { ich: "schreibe", du: "schreibst", "er/sie/es": "schreibt", wir: "schreiben", ihr: "schreibt", sie: "schreiben" },
    präteritum: { ich: "schrieb", du: "schriebst", "er/sie/es": "schrieb", wir: "schrieben", ihr: "schriebt", sie: "schrieben" },
    perfekt: { hilfsverb: "haben", partizip: "geschrieben" }
  },
  {
    infinitiv: "sprechen",
    präsens: { ich: "spreche", du: "sprichst", "er/sie/es": "spricht", wir: "sprechen", ihr: "sprecht", sie: "sprechen" },
    präteritum: { ich: "sprach", du: "sprachst", "er/sie/es": "sprach", wir: "sprachen", ihr: "spracht", sie: "sprachen" },
    perfekt: { hilfsverb: "haben", partizip: "gesprochen" }
  },

  // STARKE VERBEN (Essen & Trinken)
  {
    infinitiv: "essen",
    präsens: { ich: "esse", du: "isst", "er/sie/es": "isst", wir: "essen", ihr: "esst", sie: "essen" },
    präteritum: { ich: "aß", du: "aßt", "er/sie/es": "aß", wir: "aßen", ihr: "aßt", sie: "aßen" },
    perfekt: { hilfsverb: "haben", partizip: "gegessen" }
  },
  {
    infinitiv: "trinken",
    präsens: { ich: "trinke", du: "trinkst", "er/sie/es": "trinkt", wir: "trinken", ihr: "trinkt", sie: "trinken" },
    präteritum: { ich: "trank", du: "trankst", "er/sie/es": "trank", wir: "tranken", ihr: "trankt", sie: "tranken" },
    perfekt: { hilfsverb: "haben", partizip: "getrunken" }
  },

  // STARKE VERBEN (Weitere wichtige)
  {
    infinitiv: "schlafen",
    präsens: { ich: "schlafe", du: "schläfst", "er/sie/es": "schläft", wir: "schlafen", ihr: "schlaft", sie: "schlafen" },
    präteritum: { ich: "schlief", du: "schliefst", "er/sie/es": "schlief", wir: "schliefen", ihr: "schlieft", sie: "schliefen" },
    perfekt: { hilfsverb: "haben", partizip: "geschlafen" }
  },
  {
    infinitiv: "geben",
    präsens: { ich: "gebe", du: "gibst", "er/sie/es": "gibt", wir: "geben", ihr: "gebt", sie: "geben" },
    präteritum: { ich: "gab", du: "gabst", "er/sie/es": "gab", wir: "gaben", ihr: "gabt", sie: "gaben" },
    perfekt: { hilfsverb: "haben", partizip: "gegeben" }
  },
  {
    infinitiv: "nehmen",
    präsens: { ich: "nehme", du: "nimmst", "er/sie/es": "nimmt", wir: "nehmen", ihr: "nehmt", sie: "nehmen" },
    präteritum: { ich: "nahm", du: "nahmst", "er/sie/es": "nahm", wir: "nahmen", ihr: "nahmt", sie: "nahmen" },
    perfekt: { hilfsverb: "haben", partizip: "genommen" }
  },
  {
    infinitiv: "finden",
    präsens: { ich: "finde", du: "findest", "er/sie/es": "findet", wir: "finden", ihr: "findet", sie: "finden" },
    präteritum: { ich: "fand", du: "fandest", "er/sie/es": "fand", wir: "fanden", ihr: "fandet", sie: "fanden" },
    perfekt: { hilfsverb: "haben", partizip: "gefunden" }
  },
  {
    infinitiv: "helfen",
    präsens: { ich: "helfe", du: "hilfst", "er/sie/es": "hilft", wir: "helfen", ihr: "helft", sie: "helfen" },
    präteritum: { ich: "half", du: "halfst", "er/sie/es": "half", wir: "halfen", ihr: "halft", sie: "halfen" },
    perfekt: { hilfsverb: "haben", partizip: "geholfen" }
  },

  // SCHWACHE VERBEN (Regelmäßig)
  {
    infinitiv: "machen",
    präsens: { ich: "mache", du: "machst", "er/sie/es": "macht", wir: "machen", ihr: "macht", sie: "machen" },
    präteritum: { ich: "machte", du: "machtest", "er/sie/es": "machte", wir: "machten", ihr: "machtet", sie: "machten" },
    perfekt: { hilfsverb: "haben", partizip: "gemacht" }
  },
  {
    infinitiv: "spielen",
    präsens: { ich: "spiele", du: "spielst", "er/sie/es": "spielt", wir: "spielen", ihr: "spielt", sie: "spielen" },
    präteritum: { ich: "spielte", du: "spieltest", "er/sie/es": "spielte", wir: "spielten", ihr: "spieltet", sie: "spielten" },
    perfekt: { hilfsverb: "haben", partizip: "gespielt" }
  },
  {
    infinitiv: "lernen",
    präsens: { ich: "lerne", du: "lernst", "er/sie/es": "lernt", wir: "lernen", ihr: "lernt", sie: "lernen" },
    präteritum: { ich: "lernte", du: "lerntest", "er/sie/es": "lernte", wir: "lernten", ihr: "lerntet", sie: "lernten" },
    perfekt: { hilfsverb: "haben", partizip: "gelernt" }
  },
  {
    infinitiv: "kaufen",
    präsens: { ich: "kaufe", du: "kaufst", "er/sie/es": "kauft", wir: "kaufen", ihr: "kauft", sie: "kaufen" },
    präteritum: { ich: "kaufte", du: "kauftest", "er/sie/es": "kaufte", wir: "kauften", ihr: "kauftet", sie: "kauften" },
    perfekt: { hilfsverb: "haben", partizip: "gekauft" }
  },
  {
    infinitiv: "sagen",
    präsens: { ich: "sage", du: "sagst", "er/sie/es": "sagt", wir: "sagen", ihr: "sagt", sie: "sagen" },
    präteritum: { ich: "sagte", du: "sagtest", "er/sie/es": "sagte", wir: "sagten", ihr: "sagtet", sie: "sagten" },
    perfekt: { hilfsverb: "haben", partizip: "gesagt" }
  },
  {
    infinitiv: "fragen",
    präsens: { ich: "frage", du: "fragst", "er/sie/es": "fragt", wir: "fragen", ihr: "fragt", sie: "fragen" },
    präteritum: { ich: "fragte", du: "fragtest", "er/sie/es": "fragte", wir: "fragten", ihr: "fragtet", sie: "fragten" },
    perfekt: { hilfsverb: "haben", partizip: "gefragt" }
  },
  {
    infinitiv: "hören",
    präsens: { ich: "höre", du: "hörst", "er/sie/es": "hört", wir: "hören", ihr: "hört", sie: "hören" },
    präteritum: { ich: "hörte", du: "hörtest", "er/sie/es": "hörte", wir: "hörten", ihr: "hörtet", sie: "hörten" },
    perfekt: { hilfsverb: "haben", partizip: "gehört" }
  },
  {
    infinitiv: "wohnen",
    präsens: { ich: "wohne", du: "wohnst", "er/sie/es": "wohnt", wir: "wohnen", ihr: "wohnt", sie: "wohnen" },
    präteritum: { ich: "wohnte", du: "wohntest", "er/sie/es": "wohnte", wir: "wohnten", ihr: "wohntet", sie: "wohnten" },
    perfekt: { hilfsverb: "haben", partizip: "gewohnt" }
  },

  // GEMISCHTE VERBEN
  {
    infinitiv: "bringen",
    präsens: { ich: "bringe", du: "bringst", "er/sie/es": "bringt", wir: "bringen", ihr: "bringt", sie: "bringen" },
    präteritum: { ich: "brachte", du: "brachtest", "er/sie/es": "brachte", wir: "brachten", ihr: "brachtet", sie: "brachten" },
    perfekt: { hilfsverb: "haben", partizip: "gebracht" }
  },
  {
    infinitiv: "denken",
    präsens: { ich: "denke", du: "denkst", "er/sie/es": "denkt", wir: "denken", ihr: "denkt", sie: "denken" },
    präteritum: { ich: "dachte", du: "dachtest", "er/sie/es": "dachte", wir: "dachten", ihr: "dachtet", sie: "dachten" },
    perfekt: { hilfsverb: "haben", partizip: "gedacht" }
  },
  {
    infinitiv: "wissen",
    präsens: { ich: "weiß", du: "weißt", "er/sie/es": "weiß", wir: "wissen", ihr: "wisst", sie: "wissen" },
    präteritum: { ich: "wusste", du: "wusstest", "er/sie/es": "wusste", wir: "wussten", ihr: "wusstet", sie: "wussten" },
    perfekt: { hilfsverb: "haben", partizip: "gewusst" }
  },
  {
    infinitiv: "kennen",
    präsens: { ich: "kenne", du: "kennst", "er/sie/es": "kennt", wir: "kennen", ihr: "kennt", sie: "kennen" },
    präteritum: { ich: "kannte", du: "kanntest", "er/sie/es": "kannte", wir: "kannten", ihr: "kanntet", sie: "kannten" },
    perfekt: { hilfsverb: "haben", partizip: "gekannt" }
  }
];
