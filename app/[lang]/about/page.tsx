import { dict } from "@/lib/i18n";
import { isLocale, LOCALES, type Locale } from "@/lib/site";
import { ALL_TOOLS } from "@/tools/registry";
import { Container, Prose, SectionHead } from "@/components/ui";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

const CONTENT: Partial<Record<Locale, string[]>> = {
  en: [
    "Symbly is a Unicode symbol reference built for one job: getting the right character onto your clipboard fast. Four hundred hand-picked symbols in thirteen categories — arrows, math, currency, punctuation, technical keys, music, cards, checks, stars, weather, law, Greek and fractions — each with its name, codepoint and HTML entity.",
    "Everything runs in your browser. Search, favorites and copy-to-clipboard happen locally in JavaScript; nothing you type or click is sent to a server. Favorites live in your browser's localStorage and stay on your device.",
    "Precision is the point. Look-alike characters are different code points — – (U+2013) is not — (U+2014), ★ (U+2605) is not ☆ (U+2606) — so every tile shows its exact codepoint on hover, and the Unicode Lookup breaks any pasted character into codepoint, entity and UTF-8 bytes.",
  ],
  zh: [
    "Symbly 是一个只为一件事而生的 Unicode 符号参考站:让你最快拿到想要的那个字符。十三个类别、四百个精选符号——箭头、数学、货币、标点、按键、音乐、花色、对勾、星星、天气、法律、希腊字母和分数——每个都带名称、码点和 HTML 实体。",
    "一切都在浏览器里完成。搜索、收藏、复制都在本地 JavaScript 中发生;你输入和点击的任何内容都不会发往服务器。收藏保存在浏览器的 localStorage 里,只留在你的设备上。",
    "精确是这里的重点。形近字符是不同的码点——–(U+2013)不是—(U+2014),★(U+2605)不是☆(U+2606)——所以每个方块悬停都会显示精确码点,Unicode 查询工具还能把任意粘贴的字符拆成码点、实体和 UTF-8 字节。",
  ],
  ja: [
    "Symbly は、欲しい文字を最速でクリップボードに届けるための Unicode 記号リファレンスです。13 カテゴリ・400 個の厳選記号——矢印・数学・通貨・約物・キー・音楽・トランプ・チェック・星・天気・法律・ギリシャ文字・分数——に、名前・コードポイント・HTML 実体が付いています。",
    "すべてブラウザ内で動きます。検索もお気に入りもコピーもローカルの JavaScript で行われ、入力やクリックがサーバーに送られることはありません。お気に入りはブラウザの localStorage に保存され、デバイスから出ません。",
    "正確さが核です。似ている文字は別のコードポイント——–(U+2013)と—(U+2014)、★(U+2605)と☆(U+2606)は別物——なので、どのタイルもホバーで正確なコードポイントを表示し、Unicode 検索は貼り付けた文字をコードポイント・実体・UTF-8 バイトに分解します。",
  ],
  es: [
    "Symbly es una referencia de símbolos Unicode construida para un solo trabajo: poner el carácter correcto en tu portapapeles rápido. Cuatrocientos símbolos seleccionados en trece categorías — flechas, mates, monedas, puntuación, teclas, música, palos, marcas, estrellas, clima, derecho, griego y fracciones — cada uno con su nombre, código y entidad HTML.",
    "Todo funciona en tu navegador. Buscar, guardar favoritos y copiar ocurre en JavaScript local; nada de lo que escribes o pulsas se envía a un servidor. Los favoritos viven en el localStorage de tu navegador y se quedan en tu dispositivo.",
    "La precisión es el punto. Los caracteres parecidos son códigos distintos — – (U+2013) no es — (U+2014), ★ (U+2605) no es ☆ (U+2606) — así que cada casilla muestra su código exacto al pasar el ratón, y el Buscador Unicode descompone cualquier carácter pegado en código, entidad y bytes UTF-8.",
  ],
  pt: [
    "O Symbly é uma referência de símbolos Unicode feita para um único trabalho: colocar o caractere certo na sua área de transferência rápido. Quatrocentos símbolos selecionados em treze categorias — setas, matemática, moedas, pontuação, teclas, música, naipes, marcações, estrelas, clima, direito, grego e frações — cada um com nome, codepoint e entidade HTML.",
    "Tudo roda no seu navegador. Pesquisa, favoritos e cópia acontecem em JavaScript local; nada do que você digita ou clica é enviado a um servidor. Os favoritos ficam no localStorage do navegador e permanecem no seu dispositivo.",
    "Precisão é o ponto. Caracteres parecidos são codepoints distintos — – (U+2013) não é — (U+2014), ★ (U+2605) não é ☆ (U+2606) — então cada bloco mostra o codepoint exato ao passar o mouse, e a Consulta Unicode decompõe qualquer caractere colado em codepoint, entidade e bytes UTF-8.",
  ],
};

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) return null;
  const t = dict(lang as Locale);
  return (
    <Container className="max-w-3xl py-12">
      <SectionHead title={t.nav.about} />
      <Prose paragraphs={CONTENT[lang as Locale] ?? CONTENT.en!} />
      <p className="mt-6 text-[14px] text-[var(--color-sub)]">
        {ALL_TOOLS.length} tools · {LOCALES.length} languages
      </p>
    </Container>
  );
}
