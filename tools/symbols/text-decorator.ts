import { defineTool } from "../_lib/types";
import { TextDecoratorEngine } from "../_engines/text-decorator";

export default defineTool({
  slug: "text-decorator",
  category: "text",
  icon: "text",
  engine: { component: TextDecoratorEngine, props: {} },
  copy: {
    en: {
      name: "Text Decorator",
      h1: "Fancy Text Decorator — Frames, Sparkles & Gothic Letters",
      tagline:
        "Wrap any text in decorative frames, sparkles, arrows and star dividers, or turn letters into 𝖌𝖔𝖙𝖍𝖎𝖈 fraktur. Five styles, live preview, one-click copy.",
      intro: [
        "Decorated text gets a message noticed in places plain text blends into the background: group-chat announcements, stream titles, social bios, birthday posts. This tool wraps your text in flourishes made of real Unicode characters — no images, no styling, nothing that breaks when it is pasted.",
        "The five styles: a double-line box-drawing frame (╔═╗) for names and labels; the ✧･ﾟ sparkle flourish for a soft, dreamy look; dashed arrows (⇢) pointing in from both sides; star dividers (★·.·´¯`·.·★) for chapter and section titles; and a gothic style that remaps A–Z and a–z to Mathematical Bold Fraktur letters (𝕬𝖇𝖈…).",
        "The gothic mapping is character-level, not a font: your original letters are replaced by their fraktur counterparts from the Mathematical Alphanumeric Symbols block. Every other character — numbers, punctuation, 中文, العربية — passes through untouched, so mixed-language text keeps working.",
        "A note on honesty: decorated text is still plain text, so screen readers may read the frame characters aloud and search engines index the words, not the decoration. It is best for short display text, not body copy.",
      ],
      steps: [
        "Type or paste the text you want to decorate.",
        "Pick one of the five styles — the preview updates live, with a sample shown before you type.",
        "Copy the result and paste it anywhere Unicode text is accepted.",
        "Switch styles to compare; the character counter shows the output length, including the decoration.",
      ],
      faqs: [
        {
          q: "Will the decorated text look right everywhere?",
          a: "It works wherever real Unicode text works — chat apps, social bios, document titles. Exactly how the box-drawing and fraktur characters render depends on each platform's font, so expect small differences between devices.",
        },
        {
          q: "Does the gothic style change my accented letters or 中文?",
          a: "No. Only the basic A–Z and a–z Latin letters are remapped to fraktur counterparts. Accented letters, digits, punctuation, CJK and Arabic text pass through unchanged — the mapping only exists for the 52 ASCII letters.",
        },
        {
          q: "Is this the same as the fancy-font generators?",
          a: "Those tools usually offer dozens of style variants with heavier pages. This one does five styles well, shows the raw output as text, and runs entirely in your browser — nothing is sent anywhere.",
        },
      ],
    },
    zh: {
      name: "文字装饰器",
      h1: "花式文字装饰 — 边框、闪光与哥特字体",
      tagline:
        "用装饰边框、闪光、箭头和星星分隔线包裹文字，或把字母转换成哥特体 𝕱𝖗𝖆𝖐𝖙𝖚𝖗。五种样式、实时预览、一键复制，纯浏览器本地运行。",
      intro: [
        "在群公告、直播标题、社交签名和生日祝福里，装饰过的文字比普通文字更抓眼球。这个工具用真正的 Unicode 字符为你的文字加上装饰——不是图片，不是样式，粘贴到哪里都不会坏。",
        "五种样式：双线制表符边框（╔═╗），适合名字和标签；✧･ﾟ 闪光花饰，柔和梦幻；两侧向内的虚线箭头（⇢）；星星分隔线（★·.·´¯`·.·★），适合章节标题；以及把 A–Z、a–z 映射为数学粗体哥特字母（𝕬𝖇𝖈…）的哥特样式。",
        "哥特样式是字符级映射，不是字体：原始字母被替换成 Mathematical Alphanumeric Symbols 区块里的对应字形。其余字符——数字、标点、中文、阿拉伯文——原样保留，混排文本不受影响。",
        "一句实话：装饰后的文本仍是纯文本，读屏软件可能会把框线字符读出来，搜索引擎索引的是词语而不是装饰。它适合短的展示性文字，不适合正文。",
      ],
      steps: [
        "输入或粘贴要装饰的文字。",
        "选择五种样式之一——预览实时更新，未输入前会用示例文字展示效果。",
        "复制结果，粘贴到任何接受 Unicode 文本的地方。",
        "切换样式对比效果；字符计数显示含装饰在内的输出长度。",
      ],
      faqs: [
        {
          q: "装饰后的文字在哪里都能正常显示吗？",
          a: "在所有支持真实 Unicode 文本的地方都有效——聊天应用、社交签名、文档标题。制表符和哥特字母的具体显示效果取决于各平台的字体，不同设备间会有细微差别。",
        },
        {
          q: "哥特样式会改变带声调的字母或中文吗？",
          a: "不会。只有基本的 A–Z、a–z 拉丁字母会被映射成哥特字形。带声调的字母、数字、标点、中文和阿拉伯文原样通过——映射只覆盖 52 个 ASCII 字母。",
        },
        {
          q: "这和那些花式字体生成器一样吗？",
          a: "那些工具通常提供几十种样式，页面也更重。这里只把五种样式做好、直接展示纯文本输出，而且完全在浏览器里运行——不发送任何数据。",
        },
      ],
    },
    ja: {
      name: "文字デコレーター",
      h1: "文字を飾る — 枠・きらきら・フラクトゥール",
      tagline:
        "装飾枠・きらきら・矢印・星の区切り線でテキストを囲む、または字母をフラクトゥール体 𝕱𝖗𝖆𝖐𝖙𝖚𝖗 に変換。5 スタイル、ライブプレビュー、ワンクリック コピー。",
      intro: [
        "飾りのある文字は、グループチャットの告知、配信タイトル、SNS の bio、誕生日メッセージで目を引きます。このツールは本物の Unicode 文字で飾りを付けるだけ——画像でも CSS でもないので、どこに貼っても壊れません。",
        "5 つのスタイル：罫線の二重枠（╔═╗）は名前やラベルに。✧･ﾟ のきらきらは柔らかい雰囲気に。両側から差し込む破線矢印（⇢）。章見出しに合う星の区切り（★·.·´¯`·.·★）。そして A–Z・a–z を数学用フラクトゥール太字（𝕬𝖇𝖈…）に写像するゴシック調。",
        "ゴシック調は文字レベルの写像であってフォントではありません。元の字母が数学英数字記号ブロックの対応文字に置き換わります。それ以外——数字・記号・日本語・アラビア文字——はそのまま通るので、混在テキストも壊れません。",
        "正直な注意点：飾り付きテキストも普通のテキストです。スクリーンリーダーは枠文字を読み上げるかもしれませんし、検索エンジンが索引するのは飾りではなく言葉です。短い見出し向きで、本文には向きません。",
      ],
      steps: [
        "飾りたいテキストを入力または貼り付けします。",
        "5 つのスタイルから選ぶと、プレビューが即座に更新されます（未入力時はサンプルを表示）。",
        "結果をコピーして、Unicode テキストを受け付ける場所に貼り付けます。",
        "スタイルを切り替えて比較できます。文字数カウンターは飾り込み後の長さを表示します。",
      ],
      faqs: [
        {
          q: "飾ったテキストはどこでも正しく表示されますか？",
          a: "本物の Unicode テキストが通る場所——チャット、SNS の bio、文書タイトル——なら機能します。罫線やフラクトゥール文字の見た目は各プラットフォームのフォント次第なので、デバイス間で多少の差はあります。",
        },
        {
          q: "ゴシック調でアクセント付き文字や日本語は変わりますか？",
          a: "変わりません。基本ラテン字母の A–Z・a–z の 52 文字だけを写像します。アクセント付き文字、数字、記号、日本語、アラビア文字はそのままです。",
        },
        {
          q: "いわゆる「装飾フォント生成器」と同じものですか？",
          a: "あちらは数十バリエーションを重いページで提供しがちです。こちらは 5 スタイルをきちんと、出力を素のテキストとして見せ、完全にブラウザ内で動きます。データは一切送信しません。",
        },
      ],
    },
    es: {
      name: "Decorador de texto",
      h1: "Decorador de texto — marcos, destellos y letra gótica",
      tagline:
        "Enmarca tu texto con marcos, destellos, flechas y estrellas, o convierte las letras a fraktur. Cinco estilos, vista previa en vivo y copia al instante.",
      intro: [
        "El texto decorado llama la atención donde el texto plano pasa desapercibido: anuncios en grupos de chat, títulos de streams, bios sociales, felicitaciones. Esta herramienta envuelve tu texto con adornos hechos de caracteres Unicode reales — sin imágenes, sin estilos, nada que se rompa al pegarlo.",
        "Los cinco estilos: un marco de doble línea (╔═╗) para nombres y etiquetas; el adorno de destellos ✧･ﾟ para un aire soñador; flechas punteadas (⇢) apuntando desde los dos lados; separadores de estrellas (★·.·´¯`·.·★) para títulos de capítulo; y un estilo gótico que reasigna la A–Z y la a–z a letras fraktur (𝕬𝖇𝖈…).",
        "La asignación gótica es a nivel de carácter, no de fuente: tus letras se sustituyen por sus equivalentes del bloque de símbolos alfanuméricos matemáticos. Todo lo demás — números, puntuación, 中文, العربية — pasa sin cambios, así que el texto mixto sigue funcionando.",
        "Una nota honesta: el texto decorado sigue siendo texto plano, así que los lectores de pantalla pueden leer los caracteres del marco en voz alta y los buscadores indexan las palabras, no el adorno. Va bien para textos cortos de display, no para el cuerpo.",
      ],
      steps: [
        "Escribe o pega el texto que quieres decorar.",
        "Elige uno de los cinco estilos — la vista previa se actualiza en vivo, con un ejemplo antes de escribir.",
        "Copia el resultado y pégalo donde se acepte texto Unicode.",
        "Cambia de estilo para comparar; el contador muestra la longitud de salida, adorno incluido.",
      ],
      faqs: [
        {
          q: "¿El texto decorado se verá bien en todas partes?",
          a: "Funciona donde funciona el texto Unicode real — chats, bios sociales, títulos de documentos. Cómo se dibujan los caracteres de marco y fraktur depende de la fuente de cada plataforma, así que espera pequeñas diferencias entre dispositivos.",
        },
        {
          q: "¿El estilo gótico cambia mis letras acentuadas o el chino?",
          a: "No. Solo las letras latinas básicas A–Z y a–z se reasignan a fraktur. Las letras acentuadas, los dígitos, la puntuación, el chino y el árabe pasan intactos — la asignación solo cubre las 52 letras ASCII.",
        },
        {
          q: "¿Es lo mismo que los generadores de letras bonitas?",
          a: "Esos suelen ofrecer docenas de variantes con páginas más pesadas. Aquí hay cinco estilos bien hechos, la salida cruda como texto y todo corre en tu navegador — nada se envía a ningún sitio.",
        },
      ],
    },
    pt: {
      name: "Decorador de texto",
      h1: "Decorador de texto — molduras, brilhos e letras góticas",
      tagline:
        "Envolva seu texto com molduras, brilhos, setas e estrelas, ou transforme as letras em fraktur 𝖌𝖔𝖙𝖍𝖎𝖈. Cinco estilos, prévia ao vivo e cópia em um clique.",
      intro: [
        "Texto decorado chama atenção onde texto simples some no meio da multidão: avisos em grupos, títulos de stream, bios sociais, mensagens de aniversário. Esta ferramenta envolve seu texto com enfeites feitos de caracteres Unicode de verdade — sem imagens, sem estilo, nada que quebre ao colar.",
        "Os cinco estilos: moldura de linha dupla (╔═╗) para nomes e etiquetas; o brilho ✧･ﾟ para um ar sonhador; setas tracejadas (⇢) apontando dos dois lados; divisórias de estrelas (★·.·´¯`·.·★) para títulos de capítulo; e um estilo gótico que remapeia A–Z e a–z para letras fraktur (𝕬𝖇𝖈…).",
        "O mapeamento gótico é no nível do caractere, não da fonte: suas letras originais são trocadas pelas equivalentes do bloco de símbolos alfanuméricos matemáticos. Todo o resto — números, pontuação, 中文, العربية — passa intacto, então texto misto continua funcionando.",
        "Uma nota honesta: texto decorado continua sendo texto simples, então leitores de tela podem ler os caracteres da moldura em voz alta, e mecanismos de busca indexam as palavras, não o enfeite. É melhor para textos curtos de destaque, não para o corpo do texto.",
      ],
      steps: [
        "Digite ou cole o texto que quer decorar.",
        "Escolha um dos cinco estilos — a prévia atualiza ao vivo, com um exemplo antes de você digitar.",
        "Copie o resultado e cole em qualquer lugar que aceite texto Unicode.",
        "Troque de estilo para comparar; o contador mostra o tamanho da saída, enfeite incluído.",
      ],
      faqs: [
        {
          q: "O texto decorado vai aparecer certo em qualquer lugar?",
          a: "Funciona onde texto Unicode real funciona — apps de mensagem, bios, títulos de documentos. O desenho exato dos caracteres de moldura e fraktur depende da fonte de cada plataforma, então espere pequenas diferenças entre aparelhos.",
        },
        {
          q: "O estilo gótico muda minhas letras acentuadas ou o chinês?",
          a: "Não. Só as letras latinas básicas A–Z e a–z são remapeadas para fraktur. Letras acentuadas, dígitos, pontuação, chinês e árabe passam sem mudança — o mapeamento cobre apenas as 52 letras ASCII.",
        },
        {
          q: "É a mesma coisa que os geradores de letra enfeitada?",
          a: "Esses costumam oferecer dezenas de variantes em páginas mais pesadas. Aqui são cinco estilos bem feitos, a saída crua como texto, e tudo roda no seu navegador — nada é enviado a servidores.",
        },
      ],
    },
  },
  related: ["symbol-library", "unicode-lookup"],
});
