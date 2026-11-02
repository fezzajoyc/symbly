import { defineTool } from "../_lib/types";
import { SymbolLibraryEngine } from "../_engines/symbol-library";

export default defineTool({
  slug: "symbol-library",
  category: "text",
  icon: "sparkle",
  featured: true,
  engine: { component: SymbolLibraryEngine, props: {} },
  copy: {
    en: {
      name: "Symbol Library",
      h1: "Copy Paste Symbols — Arrows, Math, Stars & More",
      tagline:
        "400+ copy-paste symbols: arrows, math signs, currency, stars, Greek letters and more. Search, click once to copy, keep favorites — free, no signup.",
      intro: [
        "Four hundred hand-picked Unicode symbols in thirteen categories, each one click from your clipboard. No dropdown hunting in Word, no digging through character maps — search by name or keyword, click the tile, paste anywhere.",
        "The punctuation marks worth knowing: an en dash (–) joins ranges like 1990–95 and scores like 2–1, an em dash (—) sets off a break in thought, curly quotes (“ ” ‘ ’) are the typographic default for print while straight quotes stay in code, and the ellipsis (…) is one character, not three periods.",
        "Math and logic: use − (the true minus sign, U+2212) rather than a hyphen in equations, × and ÷ instead of the letter x, ⇒ for logical implication and ⇔ for equivalence. Set builders get ∈ ∉ ∪ ∩ ⊂ ⊃, and ℝ ℤ ℕ ℚ name the number sets in one glyph each.",
        "Practical marks: € £ ¥ ₹ ₽ ₿ cover most money contexts; © ® ™ belong in legal and credit lines; § ¶ cite statutes and paragraphs; † ‡ mark footnotes in academic writing. Card suits ♠ ♥ ♦ ♣ and the star family ★ ☆ ✦ ✧ do the decorative work ratings, games and bios need.",
        "Favorites live in your browser via localStorage — nothing you click here is uploaded. Every tile's hover tooltip and the info panel show the character's codepoint (U+XXXX), HTML entity and UTF-8 bytes, so the exact same symbol is easy to reuse in code later.",
      ],
      steps: [
        "Search by name (“arrow”, “star”), keyword (“euro”, “tick”) or paste a symbol straight into the search box.",
        "Click a tile — the symbol is on your clipboard instantly, confirmed by a toast.",
        "Click ☆ on any tile to save it to favorites; they persist in your browser between visits.",
        "Click a tile to also open its info panel: codepoint, HTML entity, UTF-8 bytes and Unicode block.",
      ],
      faqs: [
        {
          q: "How do I paste these symbols into Word, Instagram or my code editor?",
          a: "Click a symbol tile — Symbly copies it to your clipboard — then paste with Ctrl/Cmd+V wherever text is accepted. The characters are plain Unicode text, so they work in Word, Google Docs, social bios, HTML and source code alike.",
        },
        {
          q: "What is the difference between the similar-looking stars and dashes?",
          a: "They are distinct Unicode code points. ★ (U+2605) is a filled five-pointed star and ☆ (U+2606) its outline; ✦ and ✧ are four-pointed. – (U+2013) is the en dash for ranges, — (U+2014) the em dash for breaks. The info panel shows each character's exact codepoint so you can always tell them apart.",
        },
        {
          q: "Are my favorites synced between devices?",
          a: "No — favorites are kept in your browser's localStorage on this device only. Nothing is uploaded to a server, which is also why the page keeps working offline once loaded.",
        },
        {
          q: "Why does an emoji show as two characters in some editors?",
          a: "Emoji and other characters above U+FFFF are stored as surrogate pairs in UTF-16 environments. Symbly counts code points, so 👍 is one character here even when a length check elsewhere reports two.",
        },
      ],
    },
    zh: {
      name: "符号库",
      h1: "特殊符号复制大全 — 箭头、数学、货币、星星",
      tagline:
        "400 多个可复制的特殊符号：箭头、数学符号、货币、星星、希腊字母等。支持搜索和关键词，点一下即复制，还能收藏常用符号，全部在浏览器本地完成。",
      intro: [
        "十三个分类、四百个精选 Unicode 符号，每个都离剪贴板只有一次点击。不用在 Word 里翻下拉框，也不用打开系统字符表——按名称或关键词搜索，点一下方块，直接粘贴。",
        "值得记住的标点：en 破折号（–）连接年份区间（1990–95）和比分（2–1）；em 破折号（—）表示语义转折；弯引号（“ ” ‘ ’）是印刷排版的标准，直引号留给代码；省略号（…）是单个字符，不是三个句点。",
        "数学与逻辑：等式里用真正的减号 −（U+2212）而不是连字符；乘除用 × 和 ÷；逻辑蕴含用 ⇒，等价用 ⇔。集合论有 ∈ ∉ ∪ ∩ ⊂ ⊃，数集 ℝ ℤ ℕ ℚ 各占一个字符。",
        "常用标记：€ £ ¥ ₹ ₽ ₿ 覆盖主要货币场景；© ® ™ 用于版权与署名；§ ¶ 引用法条与段落；† ‡ 是学术脚注符号。扑克花色 ♠ ♥ ♦ ♣ 和星星家族 ★ ☆ ✦ ✧ 负责评分、游戏和个性签名的装饰工作。",
        "收藏保存在浏览器的 localStorage 里——点击的任何内容都不会上传。每个方块悬停提示和信息面板都会显示码点（U+XXXX）、HTML 实体和 UTF-8 字节，方便日后在代码里复用同一个符号。",
      ],
      steps: [
        "按名称（“箭头”“星星”）、关键词（“欧元”）搜索，或直接把符号粘贴进搜索框。",
        "点击方块，符号立即复制到剪贴板，并弹出确认提示。",
        "点击方块右上角的 ☆ 收藏符号，收藏会在浏览器中持久保存。",
        "点击方块同时打开信息面板：码点、HTML 实体、UTF-8 字节和所在 Unicode 区块。",
      ],
      faqs: [
        {
          q: "怎么把这些符号粘贴到 Word、社交签名或代码编辑器里？",
          a: "点击符号方块（Symbly 会自动复制到剪贴板），再到任意接受文本的地方 Ctrl/Cmd+V 粘贴。这些都是普通 Unicode 字符，Word、Google Docs、社交资料、HTML 和源代码里都能正常使用。",
        },
        {
          q: "长得差不多的星星和破折号有什么区别？",
          a: "它们是不同的 Unicode 码点。★（U+2605）是实心五角星，☆（U+2606）是空心；✦ ✧ 是四角星。–（U+2013）是用于区间的 en 破折号，—（U+2014）是用于语气的 em 破折号。信息面板会显示每个字符的精确码点，不会认错。",
        },
        {
          q: "收藏能在不同设备间同步吗？",
          a: "不能——收藏只保存在当前设备浏览器的 localStorage 里。任何数据都不上传服务器，这也是页面加载后可以离线使用的原因。",
        },
        {
          q: "为什么 emoji 在某些编辑器里算两个字符？",
          a: "U+FFFF 以上的字符（包括 emoji）在 UTF-16 环境中以代理对形式存储。Symbly 按码点计数，所以 👍 在这里是 1 个字符，即使别处的长度检查报 2。",
        },
      ],
    },
    ja: {
      name: "記号ライブラリ",
      h1: "コピペできる特殊記号 — 矢印・数学・通貨・星",
      tagline:
        "400 種類以上のコピペ用 Unicode 記号。矢印・数学記号・通貨・星・ギリシャ文字などを名前やキーワードで検索、クリック一つでコピー、よく使う記号はお気に入りに保存できます。",
      intro: [
        "13 カテゴリ・400 個の厳選 Unicode 記号を、クリック 1 回でクリップボードへ。Word のドロップダウンを探すことも、OS の文字パレットを開くことも不要です。名前やキーワードで検索して、タイルをクリックするだけ。",
        "知っておきたい約物：en ダッシュ（–）は 1990–95 のような範囲、em ダッシュ（—）は文の流れの転換に。印刷物では曲がった引用符（“ ” ‘ ’）が標準で、ストレート引用符はコード用。三点リーダー（…）は 1 文字です。",
        "数学と論理：等式ではハイフンでなく本物のマイナス −（U+2212）を、掛け算と割り算は × と ÷ を。論理包含は ⇔ や ⇒、集合は ∈ ∉ ∪ ∩ ⊂、数体系は ℝ ℤ ℕ ℚ で 1 文字で表せます。",
        "実用マーク：€ £ ¥ ₹ ₽ ₿ が主要通貨をカバーし、© ® ™ は著作権表記、§ ¶ は条文引用、† ‡ は学術の脚注に。トランプの ♠ ♥ ♦ ♣ と星のファミリー ★ ☆ ✦ ✧ が評価・ゲーム・bio の装飾を担当します。",
        "お気に入りはブラウザの localStorage に保存され、クリックした内容がサーバーに送られることはありません。各タイルのツールチップと情報パネルにコードポイント（U+XXXX）・HTML 実体・UTF-8 バイトを表示するので、コードでの再利用も簡単です。",
      ],
      steps: [
        "名前（「矢印」「星」）やキーワード（「ユーロ」）で検索、または記号を検索ボックスに直接貼り付け。",
        "タイルをクリックすると即座にコピーされ、トーストで確認できます。",
        "タイル右上の ☆ でお気に入りに追加。ブラウザに永続保存されます。",
        "タイルをクリックすると情報パネルも開きます：コードポイント・HTML 実体・UTF-8 バイト・Unicode ブロック。",
      ],
      faqs: [
        {
          q: "Word や SNS のプロフィール、コードエディタに貼るには？",
          a: "記号タイルをクリックすると Symbly がクリップボードにコピーします。あとはテキストを入力できる場所ならどこでも Ctrl/Cmd+V で貼り付け可能。プレーンな Unicode テキストなので、Word・Google ドキュメント・SNS・HTML・ソースコードでそのまま使えます。",
        },
        {
          q: "似ている星やダッシュの違いは？",
          a: "すべて別の Unicode コードポイントです。★（U+2605）は塗りつぶし五芒星、☆（U+2606）は白抜き、✦ ✧ は四つ星。–（U+2013）は範囲の en ダッシュ、—（U+2014）は転換の em ダッシュ。情報パネルに正確なコードポイントを表示するので見分けられます。",
        },
        {
          q: "お気に入りはデバイス間で同期されますか？",
          a: "されません。お気に入りはこのデバイスのブラウザ localStorage のみに保存されます。サーバーへの送信は一切なく、これがページ読み込み後はオフラインでも動く理由です。",
        },
        {
          q: "絵文字が一部のエディタで 2 文字扱いされるのはなぜ？",
          a: "U+FFFF を超える文字（絵文字など）は UTF-16 環境ではサロゲートペアで格納されます。Symbly はコードポイント単位で数えるので、👍 はここでは 1 文字です。",
        },
      ],
    },
    es: {
      name: "Biblioteca de símbolos",
      h1: "Símbolos para copiar y pegar — flechas, mates, estrellas y más",
      tagline:
        "Más de 400 símbolos Unicode para copiar: flechas, mates, monedas, estrellas, letras griegas y más. Un clic para copiar y guardar favoritos.",
      intro: [
        "Cuatrocientos símbolos Unicode seleccionados a mano en trece categorías, cada uno a un clic del portapapeles. Sin desplegables en Word ni mapas de caracteres del sistema: busca por nombre o palabra clave, haz clic en la casilla y pega donde quieras.",
        "Los signos de puntuación que conviene conocer: el guion medio (–) une rangos como 1990–95 y marcadores como 2–1; la raya (—) abre un paréntesis en el pensamiento; las comillas tipográficas (“ ” ‘ ’) son el estándar impreso, mientras que las rectas se quedan en el código; y los puntos suspensivos (…) son un solo carácter, no tres puntos.",
        "Matemáticas y lógica: usa − (el signo menos de verdad, U+2212) en vez del guion en las ecuaciones, × y ÷ en lugar de la letra x, ⇒ para la implicación lógica y ⇔ para la equivalencia. Para conjuntos tienes ∈ ∉ ∪ ∩ ⊂ ⊃, y ℝ ℤ ℕ ℚ nombran los conjuntos numéricos con un solo glifo.",
        "Marcas prácticas: € £ ¥ ₹ ₽ ₿ cubren la mayoría de contextos de dinero; © ® ™ van en líneas legales y de crédito; § ¶ citan leyes y párrafos; † ‡ señalan notas al pie académicas. Los palos ♠ ♥ ♦ ♣ y la familia de estrellas ★ ☆ ✦ ✧ hacen el trabajo decorativo de valoraciones, juegos y biografías.",
        "Los favoritos se guardan en tu navegador con localStorage — nada de lo que hagas aquí se sube a ningún servidor. La información al pasar el ratón y el panel de datos muestran el código (U+XXXX), la entidad HTML y los bytes UTF-8 de cada carácter.",
      ],
      steps: [
        "Busca por nombre (“flecha”, “estrella”), palabra clave (“euro”) o pega el símbolo directamente en el buscador.",
        "Haz clic en una casilla: el símbolo queda copiado al instante, con un aviso de confirmación.",
        "Pulsa ☆ en cualquier casilla para guardarlo en favoritos; se conservan en tu navegador entre visitas.",
        "Al hacer clic también se abre el panel con el código, la entidad HTML, los bytes UTF-8 y el bloque Unicode.",
      ],
      faqs: [
        {
          q: "¿Cómo pego estos símbolos en Word, Instagram o mi editor de código?",
          a: "Haz clic en la casilla del símbolo — Symbly lo copia al portapapeles — y pega con Ctrl/Cmd+V en cualquier sitio que acepte texto. Son caracteres Unicode normales: funcionan en Word, Google Docs, biografías sociales, HTML y código fuente.",
        },
        {
          q: "¿En qué se diferencian las estrellas y los guiones que se parecen tanto?",
          a: "Son puntos de código Unicode distintos. ★ (U+2605) es una estrella de cinco puntas rellena y ☆ (U+2606) su versión vacía; ✦ y ✧ son de cuatro puntas. – (U+2013) es el guion medio para rangos y — (U+2014) la raya para incisos. El panel muestra el código exacto de cada carácter.",
        },
        {
          q: "¿Se sincronizan mis favoritos entre dispositivos?",
          a: "No — los favoritos viven en el localStorage de este navegador y dispositivo. No se sube nada a ningún servidor; por eso la página sigue funcionando sin conexión una vez cargada.",
        },
        {
          q: "¿Por qué un emoji cuenta como dos caracteres en algunos editores?",
          a: "Los caracteres por encima de U+FFFF (los emoji, entre otros) se guardan como pares sustitutos en entornos UTF-16. Symbly cuenta puntos de código, así que 👍 es un solo carácter aquí aunque otra comprobación diga que son dos.",
        },
      ],
    },
    pt: {
      name: "Biblioteca de símbolos",
      h1: "Símbolos para copiar e colar — setas, matemática, moedas e mais",
      tagline:
        "Mais de 400 símbolos Unicode para copiar: setas, matemática, moedas, estrelas, letras gregas e mais. Um clique para copiar e salvar favoritos.",
      intro: [
        "Quatrocentos símbolos Unicode escolhidos a dedo em treze categorias, cada um a um clique da área de transferência. Sem caixas suspensas no Word, sem mapa de caracteres do sistema: pesquise por nome ou palavra-chave, clique no bloco e cole em qualquer lugar.",
        "Os sinais de pontuação que valem a pena conhecer: o travessão médio (–) liga intervalos como 1990–95 e placares como 2–1; o travessão (—) marca uma pausa de pensamento; as aspas tipográficas (“ ” ‘ ’) são o padrão no impresso, enquanto as retas ficam no código; e as reticências (…) são um único caractere, não três pontos.",
        "Matemática e lógica: use − (o sinal de menos de verdade, U+2212) em vez do hífen nas equações, × e ÷ no lugar da letra x, ⇒ para implicação lógica e ⇔ para equivalência. Para conjuntos há ∈ ∉ ∪ ∩ ⊂ ⊃, e ℝ ℤ ℕ ℚ nomeiam os conjuntos numéricos com um glifo cada.",
        "Marcas práticas: € £ ¥ ₹ ₽ ₿ cobrem a maioria dos contextos de dinheiro; © ® ™ pertencem a linhas legais e créditos; § ¶ citam leis e parágrafos; † ‡ marcam notas de rodapé acadêmicas. Os naipes ♠ ♥ ♦ ♣ e a família de estrelas ★ ☆ ✦ ✧ fazem o trabalho decorativo de avaliações, jogos e bios.",
        "Os favoritos ficam no seu navegador via localStorage — nada do que você clica aqui é enviado para servidores. A dica ao passar o mouse e o painel de informações mostram o codepoint (U+XXXX), a entidade HTML e os bytes UTF-8 de cada caractere.",
      ],
      steps: [
        "Pesquise por nome (“seta”, “estrela”), palavra-chave (“euro”) ou cole o símbolo direto na busca.",
        "Clique num bloco — o símbolo vai para a área de transferência na hora, com um aviso de confirmação.",
        "Clique em ☆ para salvar nos favoritos; eles ficam guardados no seu navegador entre visitas.",
        "O clique também abre o painel de informações: codepoint, entidade HTML, bytes UTF-8 e bloco Unicode.",
      ],
      faqs: [
        {
          q: "Como colo esses símbolos no Word, no Instagram ou no meu editor de código?",
          a: "Clique no bloco do símbolo — o Symbly copia para a área de transferência — e cole com Ctrl/Cmd+V em qualquer lugar que aceite texto. São caracteres Unicode comuns: funcionam no Word, Google Docs, bios sociais, HTML e código-fonte.",
        },
        {
          q: "Qual a diferença entre as estrelas e os travessões que parecem iguais?",
          a: "São pontos de código Unicode distintos. ★ (U+2605) é uma estrela de cinco pontas preenchida e ☆ (U+2606) é a vazada; ✦ e ✧ têm quatro pontas. – (U+2013) é o travessão médio para intervalos, — (U+2014) o travessão para pausas. O painel mostra o codepoint exato de cada um.",
        },
        {
          q: "Meus favoritos sincronizam entre dispositivos?",
          a: "Não — os favoritos ficam no localStorage deste navegador e dispositivo. Nada é enviado a servidores; por isso a página continua funcionando offline depois de carregada.",
        },
        {
          q: "Por que um emoji aparece como dois caracteres em alguns editores?",
          a: "Caracteres acima de U+FFFF (emoji incluídos) são guardados como pares substitutos em ambientes UTF-16. O Symbly conta pontos de código, então 👍 é um caractere aqui mesmo quando outra verificação diz que são dois.",
        },
      ],
    },
  },
  related: ["unicode-lookup", "text-decorator"],
});
