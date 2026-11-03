import type { Dictionary } from "../i18n";

const pt: Dictionary = {
  brand: "Symbly",
  tagline: "Todo símbolo está a um clique da área de transferência.",
  metaDesc: "Pesquise mais de 400 símbolos para copiar e colar: setas, sinais matemáticos, moedas, estrelas, letras gregas e mais. Um clique para copiar, favoritos locais, grátis e sem cadastro.",

  nav: {
    tools: "Todas as ferramentas",
    categories: "Categorias",
    about: "Sobre",
    menu: "Menu",
    language: "Idioma",
  },

  home: {
    heroTitle: "Todos os símbolos de que você vai precisar — pesquise, clique, cole",
    heroSub: "399 símbolos Unicode selecionados em 13 categorias: setas, matemática, moedas, pontuação, estrelas, grego e mais. Pesquise por nome ou palavra-chave e copie com um clique. Grátis, sem cadastro.",
    browseAll: "Ver todas as ferramentas",
    categoriesTitle: "Categorias",
    featuredTitle: "Ferramentas populares",
    trustLocal: "Tudo roda no seu navegador",
    trustFree: "Grátis, sem conta",
    trustFast: "Instantâneo, funciona offline",
    rotating: [
      "Setas, matemática, moedas — cada símbolo a um clique da área de transferência",
      "Pesquise “euro”, “certo” ou “alfa” e copie o glifo exato que você quis",
      "Passe o mouse em qualquer bloco e leia o codepoint — U+2212, não um hífen",
      "Favoritos ficam no seu navegador. Nada é enviado, nunca",
    ],
    statsLabels: { tools: "ferramentas", languages: "idiomas", uploads: "envios", accounts: "contas" },
    eyebrow: "Grátis sempre",
    heroCtaSecondary: "Como funciona",
    statsTools: "{n} ferramentas",
    statsLanguages: "{n} idiomas",
    statsUploads: "0 envios",
    statsAccounts: "0 contas",
    categoriesSub: "Uma biblioteca, treze famílias de símbolos, todas prontas para copiar.",
    popularSub: "Onde a maioria das caçadas a símbolos termina.",
    privacyTitle: "Seus símbolos nunca saem do seu dispositivo.",
    privacySub: "Não existe conta nem etapa de envio. A biblioteca é dado no seu navegador — você clica e o símbolo está na área de transferência, localmente.",
    privacyPoint1T: "Local por design",
    privacyPoint1D: "Pesquisar, favoritar e copiar acontecem no seu navegador. Nenhum servidor vê uma tecla sequer.",
    privacyPoint2T: "Sem contas",
    privacyPoint2D: "Sem cadastro, sem e-mail, sem sincronização para cuidar. Abriu a página, começou a copiar.",
    privacyPoint3T: "Preciso, não aproximado",
    privacyPoint3D: "Cada bloco mostra o codepoint e a entidade exatos — caracteres parecidos nunca se confundem.",
    privacyLink: "Ler a nota de privacidade",
    endTitle: "Ache o símbolo. Copie. Pronto.",
    endSub: "Treze categorias, mais de 400 glifos, zero envios.",
  },

  tools: {
    title: "Todas as ferramentas",
    subtitle: "Pesquise na biblioteca de símbolos. Um clique para copiar, sem cadastro.",
    filterPlaceholder: "Pesquisar ferramentas…",
    count: "{count} ferramentas",
    empty: "Nenhuma ferramenta corresponde a “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Junte, divida, converta e edite PDFs sem enviar nada para servidores." },
    image: { name: "Imagem", desc: "Comprima, redimensione, recorte e converta imagens no navegador." },
    text: { name: "Símbolos e Unicode", desc: "Setas, matemática, moedas, estrelas e todo outro glifo — pesquisáveis, clicáveis, prontos para colar." },
    developer: { name: "Desenvolvedor", desc: "Formatadores, codificadores, decodificadores e geradores para o dia a dia." },
    seo: { name: "SEO", desc: "Meta tags, dados estruturados, prévia de SERP e outros auxiliares de SEO." },
    security: { name: "Segurança", desc: "Senhas, hashes e consultas — gerados e verificados no seu dispositivo." },
    utility: { name: "Utilidades", desc: "Conversores de unidades, calculadoras e ajudas do cotidiano." },
  },

  tool: {
    howTo: "Como usar",
    faq: "Perguntas frequentes",
    related: "Ferramentas relacionadas",
    privacyNote:
      "Esta ferramenta roda inteiramente no seu navegador. Seus dados nunca saem do seu dispositivo e não são enviados a nenhum servidor.",
    inCategory: "Mais em {category}",
    backToCategory: "Todas as ferramentas de {category}",
  },

  common: {
    openTool: "Abrir ferramenta",
    copy: "Copiar",
    copied: "Copiado",
    download: "Baixar",
    reset: "Redefinir",
    swap: "Inverter",
    clear: "Limpar",
    error: "Algo deu errado. Verifique os dados e tente novamente.",
    input: "Entrada",
    output: "Resultado",
    settings: "Opções",
    dropFiles: "Arraste arquivos aqui ou clique para escolher",
    dropFile: "Arraste um arquivo aqui ou clique para escolher",
    processing: "Processando…",
    fileSize: "Tamanho",
    sample: "Testar um exemplo",
    uppercase: "MAIÚSCULAS",
  },

  unit: {
    from: "De",
    to: "Para",
    amount: "Quantidade",
    result: "Resultado",
    common: "Conversões comuns",
    formula: "Fórmula",
    allUnits: "Todas as unidades",
  },

  text: {
    stats: {
      words: "Palavras",
      characters: "Caracteres",
      charsNoSpaces: "Sem espaços",
      sentences: "Frases",
      paragraphs: "Parágrafos",
      lines: "Linhas",
      readingTime: "Tempo de leitura",
      readingMinutes: "{n} min de leitura",
    },
  },

  footer: {
    line: "Símbolos Unicode grátis, a um clique da área de transferência. Nada do que você faz aqui sai do navegador.",
    privacy: "Privacidade",
    terms: "Termos",
    about: "Sobre",
    badges: "Selos",
    language: "Idioma",
  },

  badge: {
    title: "Selos do Symbly",
    desc: "Coloque um selo do Symbly no seu site, README ou documentação. Ele volta para cá e conta que os símbolos estão a um clique.",
    voluntary: "Incorporar é totalmente voluntário — escolha um selo se gostar do projeto. Não precisa de permissão.",
    md: "Markdown (README)",
    html: "HTML (site)",
    thanks: "Obrigado por espalhar — cada inserção ajuda mais gente a achar o glifo certo mais rápido.",
  },

    embed: {
    title: "Incorporar esta ferramenta",
    desc: "Coloque esta ferramenta no seu site com uma linha — ela roda no navegador do visitante.",
  },

    mcp: {
    title: "Servidor MCP — ferramentas acessíveis para IA",
    desc1: "O Symbly oferece um servidor MCP (Model Context Protocol): assistentes de IA como Claude ou Cursor podem buscar a mesma biblioteca de símbolos e inspecionar caracteres com a mesma lógica testada do site.",
    desc2: "As ferramentas executam as funções puras do próprio site — busca de símbolos, informações de caracteres e decoração de texto. Rodam na máquina do cliente de IA via npx — nada chega aos nossos servidores.",
    toolsTitle: "Ferramentas executáveis ({n})",
    requiresNode: "Requer Node.js 18+. O servidor roda localmente via stdio; apenas as chamadas que você fizer são calculadas na sua máquina.",
    privacy: "Requer Node.js 18+. O servidor roda localmente via stdio; apenas as chamadas que você fizer são calculadas na sua máquina.",
  },

    notFound: {
    title: "Página não encontrada",
    body: "A ferramenta que você procura não existe. Explore todas as ferramentas.",
    home: "Ir para a página inicial",
  },
};

export default pt;
