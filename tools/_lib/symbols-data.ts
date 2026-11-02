/**
 * Symbly curated symbol dataset.
 *
 * Every entry: the character itself, an English name, an HTML named entity when
 * the WHATWG table defines one ("" otherwise), the category id and search keywords.
 * Purity: data + pure helpers only, no imports — engines (client) and MCP tools
 * (node) both consume this module directly.
 */

export type SymbolCategory =
  | "arrows"
  | "math"
  | "currency"
  | "punctuation"
  | "technical"
  | "music"
  | "cards"
  | "check"
  | "stars"
  | "weather"
  | "law"
  | "greek"
  | "fractions";

export const SYMBOL_CATEGORY_IDS = [
  "arrows", "math", "currency", "punctuation", "technical", "music",
  "cards", "check", "stars", "weather", "law", "greek", "fractions",
] as const satisfies readonly SymbolCategory[];

export type SymbolEntry = {
  /** The symbol itself (a single Unicode code point). */
  char: string;
  /** English name, e.g. "rightwards double arrow". */
  name: string;
  /** HTML named entity including & and ; — omitted when WHATWG defines none. */
  entity?: string;
  category: SymbolCategory;
  /** Lowercase search terms, space-free tokens. */
  keywords: string[];
};

/** [char, name, entity ("" = none), keywords] */
type Row = [string, string, string, string];

const ROWS: Record<SymbolCategory, Row[]> = {
  arrows: [
    ["←", "leftwards arrow", "&larr;", "left arrow west previous back"],
    ["→", "rightwards arrow", "&rarr;", "right arrow east next forward"],
    ["↑", "upwards arrow", "&uarr;", "up arrow north upload top"],
    ["↓", "downwards arrow", "&darr;", "down arrow south download bottom"],
    ["↔", "left right arrow", "&harr;", "left right horizontal both swap"],
    ["↕", "up down arrow", "&varr;", "up down vertical both"],
    ["↖", "north west arrow", "&UpperLeftArrow;", "up left diagonal northwest"],
    ["↗", "north east arrow", "&UpperRightArrow;", "up right diagonal northeast trend"],
    ["↘", "south east arrow", "&LowerRightArrow;", "down right diagonal southeast"],
    ["↙", "south west arrow", "&LowerLeftArrow;", "down left diagonal southwest"],
    ["⇐", "leftwards double arrow", "&lArr;", "double left implies if backward"],
    ["⇒", "rightwards double arrow", "&rArr;", "double right implies therefore then"],
    ["⇑", "upwards double arrow", "&uArr;", "double up"],
    ["⇓", "downwards double arrow", "&dArr;", "double down"],
    ["⇔", "left right double arrow", "&hArr;", "double horizontal iff equivalence"],
    ["⇕", "up down double arrow", "&vArr;", "double vertical"],
    ["↦", "rightwards arrow from bar", "&map;", "maps to function definition"],
    ["↤", "leftwards arrow from bar", "&mapstoleft;", "maps from bar left"],
    ["↥", "upwards arrow from bar", "&mapstoup;", "maps from bar up"],
    ["↧", "downwards arrow from bar", "&mapstodown;", "maps from bar down"],
    ["↩", "leftwards arrow with hook", "&larrhk;", "return reply enter undo back"],
    ["↪", "rightwards arrow with hook", "&rarrhk;", "forward redo reply"],
    ["↣", "rightwards arrow with tail", "", "tail"],
    ["↳", "downwards arrow with tip rightwards", "", "tip right indent branch tree"],
    ["↲", "leftwards arrow with tip downwards", "", "tip down branch tree"],
    ["↠", "rightwards two headed arrow", "", "two headed fast"],
    ["↟", "upwards two headed arrow", "", "two headed fast up"],
    ["↡", "downwards two headed arrow", "", "two headed fast down"],
    ["↚", "leftwards arrow with stroke", "&nleftarrow;", "not left barred crossed"],
    ["↛", "rightwards arrow with stroke", "&nrightarrow;", "not right barred crossed"],
    ["⇍", "leftwards double arrow with stroke", "&nLeftarrow;", "not double left"],
    ["⇏", "rightwards double arrow with stroke", "&nRightarrow;", "not double right"],
    ["⇎", "left right double arrow with stroke", "&nLeftrightarrow;", "not double horizontal"],
    ["↼", "leftwards harpoon with barb upwards", "&lharu;", "harpoon barb up"],
    ["↽", "leftwards harpoon with barb downwards", "&lhard;", "harpoon barb down"],
    ["⇀", "rightwards harpoon with barb upwards", "&rharu;", "harpoon barb up"],
    ["⇁", "rightwards harpoon with barb downwards", "&rhard;", "harpoon barb down"],
    ["↭", "left right harpoon", "", "harpoon equilibrium"],
    ["⇌", "rightwards harpoon over leftwards harpoon", "", "equilibrium reaction chemistry reversible"],
    ["⇄", "rightwards arrow over leftwards arrow", "", "exchange swap transfer"],
    ["⇅", "upwards arrow leftwards of downwards arrow", "", "exchange vertical swap"],
    ["⇠", "leftwards dashed arrow", "", "dashed left"],
    ["⇢", "rightwards dashed arrow", "", "dashed right dotted"],
    ["⇡", "upwards dashed arrow", "", "dashed up"],
    ["⇣", "downwards dashed arrow", "", "dashed down"],
    ["⇤", "leftwards arrow to bar", "&larrb;", "home tab stop bar"],
    ["⇥", "rightwards arrow to bar", "&Tab;", "tab key indent bar"],
    ["⟵", "long leftwards arrow", "&longleftarrow;", "long left"],
    ["⟶", "long rightwards arrow", "&longrightarrow;", "long right"],
    ["⟷", "long left right arrow", "&longleftrightarrow;", "long horizontal"],
    ["⟸", "long leftwards double arrow", "&Longleftarrow;", "long double left"],
    ["⟹", "long rightwards double arrow", "&Longrightarrow;", "long double right"],
    ["⟺", "long left right double arrow", "&Longleftrightarrow;", "long double iff"],
    ["⇦", "leftwards white arrow", "", "outline left hollow"],
    ["⇨", "rightwards white arrow", "", "outline right hollow"],
    ["⇧", "upwards white arrow", "", "outline up hollow shift"],
    ["⇩", "downwards white arrow", "", "outline down hollow"],
    ["⇖", "north west white arrow", "&Nwarrow;", "outline diagonal left up"],
    ["⇗", "north east white arrow", "&Nearrow;", "outline diagonal right up"],
    ["⇘", "south east white arrow", "&Searrow;", "outline diagonal right down"],
    ["⇙", "south west white arrow", "&Swarrow;", "outline diagonal left down"],
    ["↰", "upwards arrow with tip leftwards", "", "tip left curve back"],
    ["↱", "upwards arrow with tip rightwards", "", "tip right curve forward"],
    ["⟼", "long rightwards arrow from bar", "&longmapsto;", "long maps to function"],
  ],

  math: [
    ["+", "plus sign", "&plus;", "add addition plus"],
    ["−", "minus sign", "&minus;", "subtract minus hyphen"],
    ["±", "plus minus sign", "&plusmn;", "plus minus tolerance error"],
    ["×", "multiplication sign", "&times;", "multiply times cross product"],
    ["÷", "division sign", "&divide;", "divide obelus division"],
    ["≠", "not equal to", "&ne;", "not equal unequal"],
    ["≈", "almost equal to", "&asymp;", "approximately equal about approx"],
    ["≅", "approximately equal to", "&cong;", "congruent approx"],
    ["≡", "identical to", "&equiv;", "identical congruent equivalent"],
    ["≤", "less than or equal to", "&le;", "less equal lte"],
    ["≥", "greater than or equal to", "&ge;", "greater equal gte"],
    ["≪", "much less than", "&Lt;", "much less double"],
    ["≫", "much greater than", "&Gt;", "much greater double"],
    ["<", "less than sign", "&lt;", "less angle bracket open"],
    [">", "greater than sign", "&gt;", "greater angle bracket close"],
    ["√", "square root", "&radic;", "root radical sqrt checkmark"],
    ["∑", "n-ary summation", "&sum;", "sum sigma summation total"],
    ["∏", "n-ary product", "&prod;", "product pi multiply"],
    ["∫", "integral", "&int;", "integral calculus"],
    ["∬", "double integral", "&iint;", "double integral calculus surface"],
    ["∭", "triple integral", "&iiint;", "triple integral volume"],
    ["∮", "contour integral", "", "contour integral closed loop"],
    ["∞", "infinity", "&infin;", "infinity infinite forever lemniscate"],
    ["∝", "proportional to", "&prop;", "proportional ratio"],
    ["∂", "partial differential", "&part;", "partial derivative del"],
    ["∇", "nabla", "&nabla;", "nabla del gradient divergence"],
    ["∆", "increment", "", "delta change increment nabla increment"],
    ["∈", "element of", "&isin;", "element belongs member in"],
    ["∉", "not an element of", "&notin;", "not element member"],
    ["∋", "contains as member", "&ni;", "contains member reverse"],
    ["∅", "empty set", "&empty;", "empty null set nothing"],
    ["∩", "intersection", "&cap;", "intersection and overlap"],
    ["∪", "union", "&cup;", "union or combine"],
    ["⊂", "subset of", "&sub;", "subset contained"],
    ["⊃", "superset of", "&sup;", "superset contains"],
    ["⊆", "subset of or equal to", "&sube;", "subset equal"],
    ["⊇", "superset of or equal to", "&supe;", "superset equal"],
    ["⊕", "circled plus", "&oplus;", "xor direct sum circle plus"],
    ["⊖", "circled minus", "", "circle minus"],
    ["⊗", "circled times", "&otimes;", "tensor circle times cross"],
    ["⊙", "circled dot operator", "&odot;", "circle dot"],
    ["⊥", "up tack", "&perp;", "perpendicular orthogonal bottom"],
    ["⊤", "down tack", "&top;", "top tautology true"],
    ["⊢", "right tack", "&vdash;", "turnstile proves entails"],
    ["∥", "parallel to", "&parallel;", "parallel lines"],
    ["∠", "angle", "&ang;", "angle geometry"],
    ["∟", "right angle", "&angrt;", "right angle geometry"],
    ["∡", "measured angle", "", "measured angle geometry"],
    ["∴", "therefore", "&there4;", "therefore hence"],
    ["∵", "because", "&because;", "because since"],
    ["¬", "not sign", "&not;", "not negation"],
    ["∧", "logical and", "&and;", "and wedge conjunction land"],
    ["∨", "logical or", "&or;", "or vee disjunction lor"],
    ["∀", "for all", "&forall;", "for all universal quantifier"],
    ["∃", "there exists", "&exist;", "exists existential quantifier"],
    ["°", "degree sign", "&deg;", "degree degrees temperature circle"],
    ["′", "prime", "&prime;", "prime minutes feet arcminute"],
    ["″", "double prime", "&Prime;", "double prime seconds inches arcsecond"],
    ["∖", "set minus", "&setminus;", "set minus difference backslash"],
    ["⋅", "dot operator", "&sdot;", "dot multiply"],
    ["∘", "ring operator", "&compfn;", "compose ring function"],
    ["⁄", "fraction slash", "&frasl;", "fraction slash division bar"],
    ["ℵ", "alef symbol", "&alefsym;", "aleph infinity hebrew cardinal"],
    ["ℂ", "double struck capital C", "&Copf;", "complex numbers c"],
    ["ℍ", "double struck capital H", "&Hopf;", "quaternions h"],
    ["ℕ", "double struck capital N", "&Nopf;", "natural numbers n"],
    ["ℙ", "double struck capital P", "&Popf;", "primes p"],
    ["ℚ", "double struck capital Q", "&Qopf;", "rational numbers q"],
    ["ℝ", "double struck capital R", "&Ropf;", "real numbers r"],
    ["ℤ", "double struck capital Z", "&Zopf;", "integers z"],
    ["⌊", "left floor", "&lfloor;", "floor bracket down"],
    ["⌋", "right floor", "&rfloor;", "floor bracket down"],
    ["⌈", "left ceiling", "&lceil;", "ceiling bracket up"],
    ["⌉", "right ceiling", "&rceil;", "ceiling bracket up"],
    ["⟨", "mathematical left angle bracket", "&lang;", "angle bracket vector open"],
    ["⟩", "mathematical right angle bracket", "&rang;", "angle bracket vector close"],
    ["≃", "asymptotically equal to", "&simeq;", "approximately equal asymptotic"],
    ["≐", "approaches the limit", "&doteq;", "approaches limit dot equal"],
    ["∤", "does not divide", "&nmid;", "not divide"],
    ["⊣", "left tack", "&dashv;", "turnstile reverse entails"],
    ["⊨", "double vertical bar double right tack", "&vDash;", "models true entails"],
    ["⋆", "star operator", "&Star;", "star operator math"],
    ["⌢", "frown", "&frown;", "frown arc concave"],
    ["⌣", "smile", "&smile;", "smile arc convex"],
  ],

  currency: [
    ["$", "dollar sign", "&dollar;", "dollar usd money cash"],
    ["€", "euro sign", "&euro;", "euro eur money"],
    ["£", "pound sterling", "&pound;", "pound gbp money"],
    ["¥", "yen sign", "&yen;", "yen yuan jpy cny money"],
    ["¢", "cent sign", "&cent;", "cent penny copper"],
    ["¤", "currency sign", "&curren;", "currency generic scarab"],
    ["₹", "indian rupee sign", "&rupee;", "rupee inr india money"],
    ["₽", "rouble sign", "&rub;", "rouble ruble rub russia money"],
    ["₩", "won sign", "&won;", "won krw korea money"],
    ["₿", "bitcoin sign", "", "bitcoin btc crypto money"],
    ["₺", "turkish lira sign", "", "lira try turkey money"],
    ["₪", "new sheqel sign", "", "shekel ils israel money"],
    ["₫", "dong sign", "", "dong vnd vietnam money"],
    ["₭", "kip sign", "", "kip laos money"],
    ["₼", "manat sign", "", "manat azerbaijan money"],
    ["₾", "lari sign", "", "lari georgia money"],
    ["₴", "hryvnia sign", "", "hryvnia uah ukraine money"],
    ["₸", "tenge sign", "", "tenge kazakhstan money"],
    ["₡", "colon sign", "", "colon crc costa rica money"],
    ["₵", "cedi sign", "", "cedi ghana money"],
    ["₦", "naira sign", "", "naira nigeria money"],
    ["₲", "guarani sign", "", "guarani paraguay money"],
    ["₣", "french franc sign", "", "franc france money"],
    ["₨", "rupee sign", "", "rupee pakistan nepal sri lanka money"],
    ["฿", "thai baht", "", "baht thb thailand money"],
    ["៛", "khmer riel", "", "riel cambodia money"],
    ["﷼", "rial sign", "", "rial iran saudi arabia money"],
    ["₠", "euro currency sign", "", "euro legacy ecu money"],
    ["₤", "lira sign", "", "lira legacy turkey italy money"],
    ["₷", "spesmilo sign", "", "spesmilo money"],
    ["৳", "bengali rupee sign", "", "rupee taka bengali bangladesh money"],
  ],

  punctuation: [
    ["—", "em dash", "&mdash;", "em dash break sentence long"],
    ["–", "en dash", "&ndash;", "en dash range dash short"],
    ["‐", "hyphen", "&dash;", "hyphen dash compound"],
    ["‑", "non breaking hyphen", "", "non breaking hyphen dash"],
    ["―", "horizontal bar", "&horbar;", "horizontal bar quotation dash"],
    ["…", "ellipsis", "&hellip;", "ellipsis dot dot dot trailing"],
    ["‥", "two dot leader", "", "two dot leader dots"],
    ["‚", "single low quotation mark", "&sbquo;", "low quote comma german"],
    ["„", "double low quotation mark", "&bdquo;", "low double quote german quotes"],
    ["“", "left double quotation mark", "&ldquo;", "curly quote smart left open"],
    ["”", "right double quotation mark", "&rdquo;", "curly quote smart right close"],
    ["‘", "left single quotation mark", "&lsquo;", "curly single quote open apostrophe"],
    ["’", "right single quotation mark", "&rsquo;", "curly single quote close apostrophe"],
    ["«", "left guillemet", "&laquo;", "guillemet angle quote french left"],
    ["»", "right guillemet", "&raquo;", "guillemet angle quote french right"],
    ["‹", "single left guillemet", "&lsaquo;", "single guillemet angle quote left"],
    ["›", "single right guillemet", "&rsaquo;", "single guillemet angle quote right"],
    ["¡", "inverted exclamation mark", "&iexcl;", "inverted exclamation spanish"],
    ["¿", "inverted question mark", "&iquest;", "inverted question spanish"],
    ["·", "middle dot", "&middot;", "middle dot interpunct point"],
    ["•", "bullet", "&bull;", "bullet list point round"],
    ["‣", "triangular bullet", "", "triangle bullet list"],
    ["⁃", "hyphen bullet", "", "dash bullet list"],
    ["‰", "per mille sign", "&permil;", "per mille thousand promille"],
    ["‱", "per ten thousand sign", "", "basis point ten thousand"],
    ["‸", "caret insertion point", "", "caret insertion proofreading"],
    ["※", "reference mark", "", "reference mark footnote japanese korean"],
    ["⁂", "asterism", "", "asterism three stars section"],
    ["‽", "interrobang", "", "interrobang question exclamation"],
    ["❧", "rotated floral heart bullet", "", "fleuron aldus leaf ornament"],
    ["❦", "floral heart", "", "fleuron heart ornament"],
    ["、", "ideographic comma", "", "cjk chinese japanese comma tou"],
    ["。", "ideographic full stop", "", "cjk chinese japanese period maru"],
    ["「", "left corner bracket", "", "cjk japanese quote corner bracket"],
    ["」", "right corner bracket", "", "cjk japanese quote corner bracket"],
    ["『", "left white corner bracket", "", "cjk quote double corner bracket"],
    ["』", "right white corner bracket", "", "cjk quote double corner bracket"],
    ["【", "left black lenticular bracket", "", "cjk lenticular bracket title"],
    ["】", "right black lenticular bracket", "", "cjk lenticular bracket title"],
    ["《", "left double angle bracket", "", "cjk title book angle bracket"],
    ["》", "right double angle bracket", "", "cjk title book angle bracket"],
    ["〈", "left angle bracket", "", "cjk angle bracket"],
    ["〉", "right angle bracket", "", "cjk angle bracket"],
    ["؛", "arabic semicolon", "", "arabic semicolon"],
    ["؟", "arabic question mark", "", "arabic question"],
    ["々", "ideographic iteration mark", "", "cjk repeat iteration japanese"],
    ["〆", "ideographic closing mark", "", "cjk closing japanese shime"],
    ["〒", "postal mark", "", "postal japan post mark yubin"],
    ["〽", "alternation mark", "", "cjk alternation haiku japanese"],
    ["⁊", "tironian sign et", "", "tironian et and irish"],
    ["⁏", "reversed semicolon", "", "reversed semicolon"],
  ],

  technical: [
    ["⌘", "place of interest sign", "", "command key mac looped square cmd"],
    ["⌥", "option key symbol", "", "option alt key mac"],
    ["⌃", "up arrowhead", "", "control ctrl key caret"],
    ["⏎", "return symbol", "", "return enter key newline"],
    ["⎋", "broken circle with northwest arrow", "", "escape esc key"],
    ["␣", "open box", "", "space blank symbol"],
    ["⌫", "erase to the left", "", "backspace delete key"],
    ["⌦", "erase to the right", "", "forward delete key"],
    ["⌧", "x in a rectangle box", "", "clear key"],
    ["⌤", "up arrowhead between two horizontal bars", "", "enter key"],
    ["⇪", "upwards white arrow from bar", "", "caps lock key"],
    ["⇞", "upwards white double arrow", "", "page up key"],
    ["⇟", "downwards white double arrow", "", "page down key"],
    ["⎇", "alternative key symbol", "", "alt option key"],
    ["⌗", "viewdata square", "", "hash keypad key"],
    ["⌀", "diameter sign", "", "diameter engineering circle slash"],
    ["⌖", "position indication", "", "crosshair position target"],
    ["⌒", "arc", "", "arc segment"],
    ["⌬", "benzene ring", "", "benzene chemistry ring"],
    ["⏏", "eject symbol", "", "eject media button"],
    ["⏻", "power symbol", "", "power on off button"],
    ["⊞", "squared plus", "", "windows key squared plus"],
    ["⌨", "keyboard", "", "keyboard typing input"],
    ["⎓", "direct current form two", "", "direct current dc power"],
    ["⎘", "next page", "", "next page forward document"],
  ],

  music: [
    ["♩", "quarter note", "", "quarter note crotchet music"],
    ["♪", "eighth note", "&sung;", "eighth note quaver music"],
    ["♫", "beamed eighth notes", "", "two eighth notes beamed music"],
    ["♬", "beamed sixteenth notes", "", "sixteenth notes beamed music"],
    ["♭", "music flat sign", "&flat;", "flat note music"],
    ["♮", "music natural sign", "&natural;", "natural note music"],
    ["♯", "music sharp sign", "&sharp;", "sharp note music"],
    ["𝄞", "musical symbol g clef", "", "treble clef g clef music"],
    ["𝄢", "musical symbol f clef", "", "bass clef f clef music"],
  ],

  cards: [
    ["♠", "black spade suit", "&spades;", "spade card poker suit black"],
    ["♡", "white heart suit", "", "heart card suit outline"],
    ["♢", "white diamond suit", "", "diamond card suit outline"],
    ["♣", "black club suit", "&clubs;", "club card poker suit black"],
    ["♤", "white spade suit", "", "spade card suit outline"],
    ["♥", "black heart suit", "&hearts;", "heart card poker suit love"],
    ["♦", "black diamond suit", "&diams;", "diamond card poker suit"],
    ["♧", "white club suit", "", "club card suit outline"],
  ],

  check: [
    ["✓", "check mark", "&check;", "check tick yes done correct"],
    ["✔", "heavy check mark", "", "check tick bold yes done"],
    ["✕", "multiplication x", "", "cross x times close"],
    ["✖", "heavy multiplication x", "", "cross x bold close"],
    ["✗", "ballot x", "", "cross x no wrong fail"],
    ["✘", "heavy ballot x", "", "cross x bold no wrong"],
    ["☐", "ballot box", "", "checkbox empty unchecked box todo"],
    ["☑", "ballot box with check", "", "checkbox checked tick box done"],
    ["☒", "ballot box with x", "", "checkbox crossed box no"],
    ["🗸", "light check mark", "", "check tick thin yes"],
  ],

  stars: [
    ["★", "black star", "&bigstar;", "star filled solid favorite rating"],
    ["☆", "white star", "", "star outline favorite rating"],
    ["✦", "black four pointed star", "", "star sparkle four pointed"],
    ["✧", "white four pointed star", "", "star sparkle outline"],
    ["✩", "stress outlined white star", "", "star outline stress"],
    ["✪", "circled white star", "", "star circle badge"],
    ["✫", "open centre black star", "", "star open centre"],
    ["✬", "black centre white star", "", "star black centre"],
    ["✭", "outlined black star", "", "star outlined"],
    ["✮", "heavy outlined black star", "", "star heavy outlined"],
    ["✯", "pinwheel star", "", "star pinwheel"],
    ["✰", "shadowed white star", "", "star shadowed"],
    ["✱", "heavy asterisk", "", "asterisk heavy star footnote"],
    ["✳", "eight spoked asterisk", "", "asterisk spokes footnote"],
    ["✴", "eight pointed black star", "", "star eight pointed"],
    ["✵", "eight pointed pinwheel star", "", "star pinwheel eight"],
    ["✶", "six pointed black star", "", "star six pointed"],
    ["✷", "eight pointed rectilinear black star", "", "star rectilinear"],
    ["✸", "heavy eight pointed rectilinear black star", "", "star rectilinear heavy"],
    ["✺", "sixteen pointed asterisk", "", "asterisk sixteen pointed star"],
    ["✹", "twelve pointed black star", "", "star twelve pointed"],
    ["✻", "teardrop spoked asterisk", "", "asterisk teardrop flower"],
    ["✼", "open centre teardrop spoked asterisk", "", "asterisk teardrop open"],
    ["✽", "heavy teardrop spoked asterisk", "", "asterisk teardrop heavy"],
    ["✿", "black florette", "", "flower florette decoration"],
    ["✾", "six petalled black and white florette", "", "flower florette decoration"],
    ["❀", "white florette", "", "flower florette decoration outline"],
    ["❁", "eight petalled outlined florette", "", "flower florette decoration outline"],
  ],

  weather: [
    ["☀", "black sun with rays", "", "sun sunny weather hot"],
    ["☁", "cloud", "", "cloud cloudy weather overcast"],
    ["☂", "umbrella", "", "umbrella rain weather"],
    ["☔", "umbrella with rain drops", "", "umbrella rain weather"],
    ["☃", "snowman", "", "snowman snow winter weather"],
    ["☄", "comet", "", "comet shooting star space"],
    ["☇", "lightning", "", "lightning bolt storm weather"],
    ["☈", "thunderstorm", "", "thunderstorm storm weather"],
    ["☉", "sun", "", "sun astronomical circle dot"],
    ["☼", "white sun with rays", "", "sun bright sunshine weather"],
    ["☽", "first quarter moon", "", "moon crescent night waxing"],
    ["☾", "last quarter moon", "", "moon crescent night waning"],
    ["❄", "snowflake", "", "snowflake snow winter cold"],
    ["❅", "tight trifoliate snowflake", "", "snowflake winter cold"],
    ["❆", "heavy chevron snowflake", "", "snowflake winter cold"],
    ["☢", "radioactive sign", "", "radioactive nuclear hazard warning"],
    ["♨", "hot springs", "", "hot springs onsen steam"],
    ["☊", "ascending node", "", "astrology node ascending sky"],
    ["☋", "descending node", "", "astrology node descending sky"],
    ["☌", "conjunction", "", "astrology conjunction sky"],
    ["☍", "opposition", "", "astrology opposition sky"],
  ],

  law: [
    ["§", "section sign", "&sect;", "section legal law paragraph silcrow"],
    ["¶", "pilcrow", "&para;", "pilcrow paragraph mark editing"],
    ["†", "dagger", "&dagger;", "dagger footnote obelisk note"],
    ["‡", "double dagger", "&Dagger;", "double dagger diesis footnote"],
    ["©", "copyright", "&copy;", "copyright c legal"],
    ["®", "registered trade mark", "&reg;", "registered trademark legal"],
    ["™", "trade mark", "&trade;", "trademark tm legal"],
    ["℗", "sound recording copyright", "", "phonogram sound recording copyright"],
    ["℠", "service mark", "", "service mark sm legal"],
    ["№", "numero sign", "", "numero number no"],
    ["℅", "care of", "", "care of address mail"],
    ["⁋", "reversed pilcrow", "", "reversed pilcrow paragraph"],
    ["℔", "lb bar symbol", "", "pound weight lb"],
  ],

  greek: [
    ["α", "greek small letter alpha", "&alpha;", "alpha greek"],
    ["β", "greek small letter beta", "&beta;", "beta greek"],
    ["γ", "greek small letter gamma", "&gamma;", "gamma greek"],
    ["δ", "greek small letter delta", "&delta;", "delta greek"],
    ["ε", "greek small letter epsilon", "&epsilon;", "epsilon greek"],
    ["ζ", "greek small letter zeta", "&zeta;", "zeta greek"],
    ["η", "greek small letter eta", "&eta;", "eta greek"],
    ["θ", "greek small letter theta", "&theta;", "theta greek"],
    ["ι", "greek small letter iota", "&iota;", "iota greek"],
    ["κ", "greek small letter kappa", "&kappa;", "kappa greek"],
    ["λ", "greek small letter lambda", "&lambda;", "lambda greek"],
    ["μ", "greek small letter mu", "&mu;", "mu greek micro"],
    ["ν", "greek small letter nu", "&nu;", "nu greek"],
    ["ξ", "greek small letter xi", "&xi;", "xi greek"],
    ["ο", "greek small letter omicron", "&omicron;", "omicron greek"],
    ["π", "greek small letter pi", "&pi;", "pi greek"],
    ["ρ", "greek small letter rho", "&rho;", "rho greek"],
    ["σ", "greek small letter sigma", "&sigma;", "sigma greek"],
    ["ς", "greek small letter final sigma", "&sigmaf;", "final sigma greek"],
    ["τ", "greek small letter tau", "&tau;", "tau greek"],
    ["υ", "greek small letter upsilon", "&upsilon;", "upsilon greek"],
    ["φ", "greek small letter phi", "&phi;", "phi greek golden"],
    ["χ", "greek small letter chi", "&chi;", "chi greek"],
    ["ψ", "greek small letter psi", "&psi;", "psi greek"],
    ["ω", "greek small letter omega", "&omega;", "omega greek"],
    ["ϑ", "greek theta symbol", "&thetasym;", "theta variant greek"],
    ["ϖ", "greek pi symbol", "&piv;", "pi variant greek"],
    ["Γ", "greek capital letter gamma", "&Gamma;", "gamma capital greek"],
    ["Δ", "greek capital letter delta", "&Delta;", "delta capital greek change"],
    ["Θ", "greek capital letter theta", "&Theta;", "theta capital greek"],
    ["Λ", "greek capital letter lambda", "&Lambda;", "lambda capital greek"],
    ["Ξ", "greek capital letter xi", "&Xi;", "xi capital greek"],
    ["Π", "greek capital letter pi", "&Pi;", "pi capital greek product"],
    ["Σ", "greek capital letter sigma", "&Sigma;", "sigma capital greek sum"],
    ["Φ", "greek capital letter phi", "&Phi;", "phi capital greek"],
    ["Ψ", "greek capital letter psi", "&Psi;", "psi capital greek"],
    ["Ω", "greek capital letter omega", "&Omega;", "omega capital greek ohm"],
  ],

  fractions: [
    ["½", "vulgar fraction one half", "&frac12;", "half fraction one half"],
    ["⅓", "vulgar fraction one third", "&frac13;", "third fraction one"],
    ["⅔", "vulgar fraction two thirds", "&frac23;", "two thirds fraction"],
    ["¼", "vulgar fraction one quarter", "&frac14;", "quarter fraction one"],
    ["¾", "vulgar fraction three quarters", "&frac34;", "three quarters fraction"],
    ["⅕", "vulgar fraction one fifth", "&frac15;", "fifth fraction one"],
    ["⅖", "vulgar fraction two fifths", "&frac25;", "two fifths fraction"],
    ["⅗", "vulgar fraction three fifths", "&frac35;", "three fifths fraction"],
    ["⅘", "vulgar fraction four fifths", "&frac45;", "four fifths fraction"],
    ["⅙", "vulgar fraction one sixth", "&frac16;", "sixth fraction one"],
    ["⅚", "vulgar fraction five sixths", "&frac56;", "five sixths fraction"],
    ["⅛", "vulgar fraction one eighth", "&frac18;", "eighth fraction one"],
    ["⅜", "vulgar fraction three eighths", "&frac38;", "three eighths fraction"],
    ["⅝", "vulgar fraction five eighths", "&frac58;", "five eighths fraction"],
    ["⅞", "vulgar fraction seven eighths", "&frac78;", "seven eighths fraction"],
    ["⅐", "vulgar fraction one seventh", "", "seventh fraction one"],
    ["⅑", "vulgar fraction one ninth", "", "ninth fraction one"],
    ["⅒", "vulgar fraction one tenth", "", "tenth fraction one"],
  ],
};

/** Category metadata shown as section subtitles inside the library engine. */
export const SYMBOL_CATEGORY_META: Record<SymbolCategory, { name: string; blurb: string }> = {
  arrows: { name: "Arrows", blurb: "Direction, flow and implication — from keyboard glyphs (←→↑↓) to logic (⇒) and chemistry (⇌)." },
  math: { name: "Math", blurb: "Operators, set notation and number-set letters that plain ASCII cannot express." },
  currency: { name: "Currency", blurb: "World money signs: € £ ¥ ₹ ₽ ₿ and friends." },
  punctuation: { name: "Punctuation", blurb: "Typographic marks that lift text out of the typewriter era — dashes, curly quotes, ellipsis." },
  technical: { name: "Technical", blurb: "Keyboard keys (⌘ ⌥ ⇧ ⌃), controls and engineering symbols." },
  music: { name: "Music", blurb: "Notes, accidentals and clefs for lyrics, playlists and sheet markup." },
  cards: { name: "Card suits", blurb: "♠ ♥ ♦ ♣ and their hollow counterparts for games and ratings." },
  check: { name: "Check & cross", blurb: "Ticks, crosses and ballot boxes for yes/no states in text and tables." },
  stars: { name: "Stars & asterisks", blurb: "Ratings, footnotes and decoration — ★ ☆ ✦ ✧ and the whole asterisk family." },
  weather: { name: "Weather & sky", blurb: "Sun, cloud, moon and snowflake glyphs for forecasts and moods." },
  law: { name: "Law & marks", blurb: "§ ¶ † © ® ™ — the signs legal and academic text is full of." },
  greek: { name: "Greek letters", blurb: "The full lowercase alphabet plus capitals: α β γ δ … Ω." },
  fractions: { name: "Fractions", blurb: "Precomposed vulgar fractions from ½ to ⅞ — single glyphs, no markup." },
};

function build(): SymbolEntry[] {
  const out: SymbolEntry[] = [];
  for (const category of SYMBOL_CATEGORY_IDS) {
    for (const [char, name, entity, keywords] of ROWS[category]) {
      out.push({
        char,
        name,
        ...(entity ? { entity } : {}),
        category,
        keywords: keywords.split(" ").filter(Boolean),
      });
    }
  }
  return out;
}

export const SYMBOLS: SymbolEntry[] = build();

/** char → entry index (first occurrence wins; the dataset forbids duplicates anyway). */
const CHAR_INDEX = new Map<string, SymbolEntry>(SYMBOLS.map((s) => [s.char, s]));

export function symbolByChar(ch: string): SymbolEntry | undefined {
  return CHAR_INDEX.get(ch);
}

/**
 * Search the dataset by name, keyword or the character itself.
 * Empty query + no category returns the whole dataset in dataset order.
 */
export function searchSymbols(query: string, category?: SymbolCategory): SymbolEntry[] {
  const q = query.trim().toLowerCase();
  return SYMBOLS.filter((s) => {
    if (category && s.category !== category) return false;
    if (!q) return true;
    return s.char === q || s.name.toLowerCase().includes(q) || s.keywords.some((k) => k.includes(q));
  });
}

export function countByCategory(): Record<SymbolCategory, number> {
  const counts = Object.fromEntries(SYMBOL_CATEGORY_IDS.map((c) => [c, 0])) as Record<SymbolCategory, number>;
  for (const s of SYMBOLS) counts[s.category]++;
  return counts;
}
