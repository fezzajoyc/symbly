import { defineTool } from "../_lib/types";
import { UnicodeLookupEngine } from "../_engines/unicode-lookup";

export default defineTool({
  slug: "unicode-lookup",
  category: "text",
  icon: "search",
  engine: { component: UnicodeLookupEngine, props: {} },
  copy: {
    en: {
      name: "Unicode Lookup",
      h1: "Unicode Character Lookup — Codepoint, Entity & UTF-8",
      tagline:
        "Paste any character and get its Unicode codepoint, decimal value, HTML entity, UTF-8 bytes and block. Emoji handled as single code points — free, no upload.",
      intro: [
        "This is the magnifying glass for the symbol library: paste or type anything — a letter, ★, ✓, 中文 or an emoji — and every character is broken down into the numbers a developer or typesetter actually needs.",
        "For each character you get its codepoint in U+XXXX notation, the decimal and hex value, the HTML entity (a named one like &copy; when the WHATWG table defines it, the numeric form &#169; otherwise), the raw UTF-8 bytes, and a best-effort Unicode block guess.",
        "Emoji are counted correctly: characters above U+FFFF are stored as UTF-16 surrogate pairs, which is why many length checks report 👍 as two characters. This tool walks code points, so an emoji is one row — flagged as astral.",
        "The block name is a range-based guess, not a full Unicode Character Database lookup — good enough to tell Basic Latin from CJK Unified Ideographs or Miscellaneous Symbols, which is what the question usually is.",
      ],
      steps: [
        "Type or paste a character — or a whole string — into the input box.",
        "Read the table: one row per character with codepoint, decimal, HTML entity, UTF-8 bytes and block.",
        "Click through long pastes with the truncation notice; the first 128 characters are shown per paste.",
        "Combine with the Symbol Library to find look-alike characters and their exact codepoints.",
      ],
      faqs: [
        {
          q: "Why does my emoji show as two characters here and in JavaScript?",
          a: "It does not — the row is one code point. What is confusing is UTF-16: characters above U+FFFF are encoded as a surrogate pair, so naive string indexing (and .length) counts two units. This tool uses code point iteration, the correct way.",
        },
        {
          q: "When does the tool show a named entity instead of &#NNN;?",
          a: "Only when the WHATWG HTML entity table defines a name for that exact character — e.g. &copy; for ©, &mdash; for —, &euro; for €. Most of the world's characters have no name, so the numeric form &#NNN; is the honest default.",
        },
        {
          q: "What is the 'Unicode block' column based on?",
          a: "On the official block ranges (start–end code point). It is a guess by range, not a per-character UCD query, so a few rarely used characters near block borders may sit in a neighbouring block — the codepoint itself is always exact.",
        },
      ],
    },
    zh: {
      name: "Unicode 查询",
      h1: "Unicode 字符查询 — 码点、HTML 实体与 UTF-8",
      tagline:
        "粘贴任意字符，立刻得到它的 Unicode 码点、十进制值、HTML 实体、UTF-8 字节和所属区块。emoji 按单个码点正确处理，全部在浏览器本地完成。",
      intro: [
        "这是符号库的放大镜：粘贴或输入任何内容——字母、★、✓、中文或 emoji——每个字符都会被拆解成开发者和排版真正需要的数字。",
        "每个字符都能看到 U+XXXX 码点、十进制与十六进制值、HTML 实体（WHATWG 表里有名字的用 &copy; 这样的命名实体，否则用 &#169; 数字形式）、原始 UTF-8 字节，以及尽力推测的 Unicode 区块。",
        "emoji 计数正确：U+FFFF 以上的字符在 UTF-16 里以代理对存储，所以很多长度检查会把 👍 算成两个字符。本工具按码点遍历，emoji 就是一行——并标注为星面（astral）字符。",
        "区块名基于官方区块范围的推测，不是完整的 Unicode 字符数据库查询——足以分清 Basic Latin、CJK 统一表意文字和杂项符号，而这通常正是你想知道的事。",
      ],
      steps: [
        "在输入框中输入或粘贴单个字符，也可以粘贴整段文本。",
        "查看表格：每个字符一行，包含码点、十进制、HTML 实体、UTF-8 字节和区块。",
        "长文本会显示截断提示，每次最多展示前 128 个字符。",
        "配合符号库使用，可以快速找到形近字符及其精确码点。",
      ],
      faqs: [
        {
          q: "为什么 emoji 在这里和 JavaScript 里显示为两个字符？",
          a: "这里其实是一行一个码点。容易混淆的是 UTF-16：U+FFFF 以上的字符会被编码成代理对，所以朴素的字符串下标（以及 .length）会数成两个单元。本工具使用码点遍历，这才是正确的做法。",
        },
        {
          q: "什么时候显示命名实体而不是 &#NNN;？",
          a: "只有当 WHATWG HTML 实体表为该字符定义了名字时——比如 © 对应 &copy;，— 对应 &mdash;，€ 对应 &euro;。世界上大多数字符没有名字，所以 &#NNN; 数字形式才是诚实的默认值。",
        },
        {
          q: "“Unicode 区块”一列的依据是什么？",
          a: "依据官方区块的码点范围（起止值）。这是按范围推测，不是逐字符的 UCD 查询，所以区块边界附近个别罕见字符可能落在相邻区块——但码点本身永远是精确的。",
        },
      ],
    },
    ja: {
      name: "Unicode 検索",
      h1: "Unicode 文字検索 — コードポイント・実体参照・UTF-8",
      tagline:
        "任意の文字を貼り付けると、Unicode のコードポイント・10 進値・HTML 実体・UTF-8 バイト・ブロックを即座に表示。絵文字も 1 コードポイントとして正しく処理します。",
      intro: [
        "記号ライブラリの拡大鏡です。文字・★・✓・日本語・絵文字——何を貼り付けても、開発者や組版に必要な数値に分解して表示します。",
        "各文字について、U+XXXX 表記のコードポイント、10 進と 16 進の値、HTML 実体（WHATWG の表に名前があれば &copy; のような名前付き実体、なければ数値文字参照 &#169;）、生の UTF-8 バイト列、そして可能な範囲で Unicode ブロックの推定を表示します。",
        "絵文字も正しく数えます。U+FFFF を超える文字は UTF-16 のサロゲートペアで格納されるため、多くの文字数チェックは 👍 を 2 文字と数えます。このツールはコードポイント単位で走査するので、絵文字は 1 行——星面文字として表示されます。",
        "ブロック名は公式のブロック範囲による推定であり、Unicode Character Database の完全な照会ではありません。Basic Latin と CJK 統合漢字や記号類の区別には十分で、コードポイント自体は常に正確です。",
      ],
      steps: [
        "入力ボックスに 1 文字、または文字列全体を入力・貼り付けします。",
        "表を読みます。1 文字 1 行で、コードポイント・10 進・HTML 実体・UTF-8 バイト・ブロックを表示。",
        "長い貼り付けは切り詰め通知とともに表示され、先頭 128 文字まで処理します。",
        "記号ライブラリと組み合わせると、似た文字と正確なコードポイントを見つけられます。",
      ],
      faqs: [
        {
          q: "絵文字が 2 文字に見えるのはなぜ？",
          a: "ここでは 1 行 = 1 コードポイントです。混乱の元は UTF-16 で、U+FFFF を超える文字はサロゲートペアとして符号化されるため、素朴な添字アクセスや .length は 2 単位と数えます。このツールはコードポイント単位の走査で、それが正しい方法です。",
        },
        {
          q: "&#NNN; ではなく名前付き実体が表示されるのはいつ？",
          a: "WHATWG の HTML 実体表がその文字に名前を定めている場合だけです。例：© は &copy;、— は &mdash;、€ は &euro;。ほとんどの文字には名前がないため、数値形式 &#NNN; が正直なデフォルトです。",
        },
        {
          q: "「Unicode ブロック」列の根拠は？",
          a: "公式のブロック範囲（開始・終了コードポイント）に基づく推定です。文字ごとの UCD 照会ではないため、ブロック境界付近の稀な文字は隣のブロックと判定されることがあります。コードポイント自体は常に正確です。",
        },
      ],
    },
    es: {
      name: "Buscador Unicode",
      h1: "Buscador de caracteres Unicode — código, entidad y UTF-8",
      tagline:
        "Pega cualquier carácter y obtén su código Unicode, valor decimal, entidad HTML, bytes UTF-8 y bloque. Los emoji se tratan como un solo punto de código. Gratis.",
      intro: [
        "Es la lupa de la biblioteca de símbolos: pega o escribe lo que sea — una letra, ★, ✓, 中文 o un emoji — y cada carácter se descompone en los números que un desarrollador o maquetador necesita de verdad.",
        "Para cada carácter verás su código en notación U+XXXX, el valor decimal y hexadecimal, la entidad HTML (una con nombre como &copy; cuando la tabla WHATWG lo define, o la forma numérica &#169; en caso contrario), los bytes UTF-8 sin procesar y una estimación del bloque Unicode.",
        "Los emoji se cuentan bien: los caracteres por encima de U+FFFF se guardan como pares sustitutos UTF-16, y por eso muchas comprobaciones de longitud dicen que 👍 son dos caracteres. Esta herramienta recorre puntos de código, así que un emoji es una sola fila — marcada como astral.",
        "El nombre del bloque es una estimación por rangos, no una consulta completa a la base de datos Unicode — suficiente para distinguir Basic Latin de CJK Unified Ideographs o Miscellaneous Symbols, que suele ser la pregunta real.",
      ],
      steps: [
        "Escribe o pega un carácter — o una cadena completa — en el cuadro de entrada.",
        "Lee la tabla: una fila por carácter con código, decimal, entidad HTML, bytes UTF-8 y bloque.",
        "Los textos largos muestran un aviso de truncado: se procesan los primeros 128 caracteres.",
        "Combínalo con la Biblioteca de símbolos para encontrar caracteres parecidos y sus códigos exactos.",
      ],
      faqs: [
        {
          q: "¿Por qué mi emoji aparece como dos caracteres aquí y en JavaScript?",
          a: "Aquí no: la fila es un punto de código. La confusión viene de UTF-16 — los caracteres por encima de U+FFFF se codifican como par sustituto, así que el indexado ingenuo (y .length) cuenta dos unidades. Esta herramienta itera por puntos de código, que es lo correcto.",
        },
        {
          q: "¿Cuándo muestra una entidad con nombre en vez de &#NNN;?",
          a: "Solo cuando la tabla de entidades HTML del WHATWG define un nombre para ese carácter exacto — p. ej. &copy; para ©, &mdash; para —, &euro; para €. La mayoría de los caracteres del mundo no tienen nombre, así que la forma numérica &#NNN; es el valor honesto por defecto.",
        },
        {
          q: "¿En qué se basa la columna de bloque Unicode?",
          a: "En los rangos oficiales de bloques (código inicial y final). Es una estimación por rango, no una consulta carácter a carácter a la UCD, así que algún carácter raro junto a un borde puede caer en el bloque vecino — el código en sí siempre es exacto.",
        },
      ],
    },
    pt: {
      name: "Consulta Unicode",
      h1: "Consulta de caracteres Unicode — codepoint, entidade e UTF-8",
      tagline:
        "Cole qualquer caractere e veja o codepoint, valor decimal, entidade HTML, bytes UTF-8 e bloco. Emoji como um único code point. Grátis.",
      intro: [
        "É a lupa da biblioteca de símbolos: cole ou digite qualquer coisa — uma letra, ★, ✓, 中文 ou um emoji — e cada caractere é decomposto nos números que um desenvolvedor ou diagramador realmente precisa.",
        "Para cada caractere você vê o codepoint em notação U+XXXX, o valor decimal e hexadecimal, a entidade HTML (uma nomeada como &copy; quando a tabela WHATWG define, ou a forma numérica &#169; caso contrário), os bytes UTF-8 brutos e uma estimativa do bloco Unicode.",
        "Emoji são contados certo: caracteres acima de U+FFFF são guardados como pares substitutos UTF-16, e por isso muitas checagens de tamanho dizem que 👍 são dois caracteres. Esta ferramenta percorre code points, então um emoji é uma linha só — marcada como astral.",
        "O nome do bloco é uma estimativa por faixas, não uma consulta completa ao banco de dados Unicode — o suficiente para separar Basic Latin de CJK Unified Ideographs ou Miscellaneous Symbols, que normalmente é a dúvida real.",
      ],
      steps: [
        "Digite ou cole um caractere — ou uma string inteira — no campo de entrada.",
        "Leia a tabela: uma linha por caractere com codepoint, decimal, entidade HTML, bytes UTF-8 e bloco.",
        "Textos longos mostram um aviso de truncamento: os primeiros 128 caracteres são processados.",
        "Combine com a Biblioteca de símbolos para achar caracteres parecidos e seus codepoints exatos.",
      ],
      faqs: [
        {
          q: "Por que meu emoji aparece como dois caracteres aqui e no JavaScript?",
          a: "Aqui não: a linha é um code point. A confusão vem do UTF-16 — caracteres acima de U+FFFF são codificados como par substituto, então indexação ingênua (e .length) conta duas unidades. Esta ferramenta itera por code points, o jeito correto.",
        },
        {
          q: "Quando a ferramenta mostra entidade nomeada em vez de &#NNN;?",
          a: "Somente quando a tabela de entidades HTML do WHATWG define um nome para aquele caractere exato — p. ex. &copy; para ©, &mdash; para —, &euro; para €. A maioria dos caracteres do mundo não tem nome, então a forma numérica &#NNN; é o padrão honesto.",
        },
        {
          q: "De que vem a coluna de bloco Unicode?",
          a: "Das faixas oficiais de blocos (codepoint inicial e final). É uma estimativa por faixa, não uma consulta caractere a caractere à UCD, então algum caractere raro perto de uma borda pode cair no bloco vizinho — o codepoint em si é sempre exato.",
        },
      ],
    },
  },
  related: ["symbol-library", "text-decorator"],
});
