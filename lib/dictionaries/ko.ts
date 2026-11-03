import type { Dictionary } from "../i18n";

// 한국어(ko) — 합니다체로 통일, 불필요한 외래어 표기 지양.
// 계약: 키 구조는 en과 완전히 동일(tests/seo.test.ts), 값은 한국어로 번역.
const ko: Dictionary = {
  brand: "Symbly",
  tagline: "모든 기호가 클립보드까지 클릭 한 번 거리입니다.",
  metaDesc: "복사해서 붙여넣을 수 있는 400개 이상의 기호 검색 — 화살표, 수학 기호, 통화, 별, 그리스 문자 등. 한 번의 클릭으로 복사하고 즐겨찾기는 로컬에 저장, 무료·회원가입 없이 이용하세요.",

  nav: {
    tools: "전체 도구",
    categories: "카테고리",
    about: "소개",
    menu: "메뉴",
    language: "언어",
  },

  home: {
    heroTitle: "필요한 모든 기호 — 검색하고, 클릭하고, 붙여넣기",
    heroSub: "13개 카테고리에 엄선된 유니코드 기호 399개: 화살표, 수학, 통화, 문장부호, 별, 그리스 문자 등. 이름이나 키워드로 검색하고 한 번의 클릭으로 복사하세요. 무료, 회원가입 불필요.",
    browseAll: "전체 도구 보기",
    pinned: "고정됨",
    pin: "상단에 고정",
    unpin: "고정 해제",
    popular: "인기 도구",
    categoriesTitle: "카테고리",
    featuredTitle: "인기 도구",
    trustLocal: "모든 처리가 브라우저 안에서",
    trustFree: "무료, 계정 불필요",
    trustFast: "즉시 사용, 오프라인 가능",
    rotating: [
      "화살표, 수학, 통화 — 모든 기호가 클립보드까지 클릭 한 번",
      "“체크”, “유로”, “알파”로 검색해 정확히 원했던 글리프를 복사",
      "타일에 마우스를 올리면 코드포인트 표시 — 하이픈이 아닌 진짜 U+2212",
      "즐겨찾기는 브라우저에만 저장. 업로드는 절대 없습니다",
    ],
    statsLabels: { tools: "도구", languages: "개 언어", uploads: "업로드", accounts: "계정" },
    eyebrow: "평생 무료",
    heroCtaSecondary: "이용 방법",
    statsTools: "도구 {n}개",
    statsLanguages: "{n}개 언어",
    statsUploads: "업로드 0건",
    statsAccounts: "계정 0개",
    categoriesSub: "하나의 라이브러리, 열세 개의 기호 계열, 모두 복사 준비 완료.",
    popularSub: "기호 사냥의 대부분이 끝나는 곳.",
    privacyTitle: "기호는 기기를 떠나지 않습니다.",
    privacySub: "계정도, 업로드 단계도 없습니다. 라이브러리는 브라우저 안의 데이터일 뿐 — 클릭하면 기호가 로컬로 클립보드에 들어갑니다.",
    privacyPoint1T: "설계부터 로컬",
    privacyPoint1D: "검색, 즐겨찾기, 복사가 모두 브라우저에서 일어납니다. 서버는 키 입력 하나도 보지 못합니다.",
    privacyPoint2T: "계정 없음",
    privacyPoint2D: "가입도, 이메일도, 동기화 걱정도 없습니다. 페이지를 열고 바로 복사하세요.",
    privacyPoint3T: "정확하게, 대충이 아니라",
    privacyPoint3D: "모든 타일은 정확한 코드포인트와 엔티티를 보여줍니다 — 닮은 글자가 절대 헷갈리지 않습니다.",
    privacyLink: "전체 개인정보 노트 읽기",
    endTitle: "기호를 찾고, 복사하고, 끝.",
    endSub: "13개 카테고리, 400개 이상의 글리프, 업로드 0건.",
  },

  tools: {
    title: "전체 도구",
    subtitle: "기호 라이브러리를 검색하세요. 한 번의 클릭으로 복사, 가입 불필요.",
    filterPlaceholder: "도구 검색…",
    count: "도구 {count}개",
    empty: "“{query}”에 해당하는 도구가 없습니다.",
  },

  categories: {
    pdf: { name: "PDF", desc: "어디에도 업로드하지 않고 PDF를 합치고, 나누고, 변환하고, 편집합니다." },
    image: { name: "이미지", desc: "브라우저 안에서 이미지를 압축하고, 크기를 조정하고, 자르고, 변환합니다." },
    text: { name: "기호와 유니코드", desc: "화살표, 수학, 통화, 별 등 모든 글리프 — 검색하고, 클릭하고, 바로 붙여넣으세요." },
    developer: { name: "개발", desc: "매일 쓰는 포매터, 인코더, 디코더, 생성기 모음." },
    seo: { name: "SEO", desc: "메타 태그, 스키마 마크업, SERP 미리보기 등 온페이지 SEO 도우미." },
    security: { name: "보안", desc: "비밀번호, 해시, 조회 도구 — 기기에서 생성하고 확인합니다." },
    utility: { name: "생활", desc: "단위 변환기, 계산기 등 생활 속 도우미." },
  },

  tool: {
    howTo: "사용 방법",
    faq: "자주 묻는 질문",
    related: "관련 도구",
    nextStep: "다음 단계",
    copyLink: "링크 복사",
    privacyNote:
      "이 도구는 전부 브라우저 안에서 실행됩니다. 데이터는 기기를 떠나지 않으며 어떤 서버로도 업로드되지 않습니다.",
    inCategory: "{category}의 다른 도구",
    backToCategory: "{category} 전체 도구",
  },

  common: {
    openTool: "도구 열기",
    copy: "복사",
    copied: "복사됨",
    download: "다운로드",
    reset: "초기화",
    swap: "바꾸기",
    clear: "지우기",
    error: "문제가 발생했습니다. 입력값을 확인하고 다시 시도해 주세요.",
    input: "입력",
    output: "결과",
    settings: "옵션",
    dropFiles: "파일을 끌어다 놓거나 클릭해서 선택하세요",
    dropFile: "파일을 끌어다 놓거나 클릭해서 선택하세요",
    processing: "처리 중…",
    fileSize: "크기",
    sample: "예시로 써보기",
    uppercase: "대문자",
  },

  unit: {
    from: "변환 전",
    to: "변환 후",
    amount: "값",
    result: "결과",
    common: "자주 쓰는 변환",
    formula: "계산식",
    allUnits: "전체 단위",
  },

  text: {
    stats: {
      words: "단어",
      characters: "글자",
      charsNoSpaces: "공백 제외",
      sentences: "문장",
      paragraphs: "단락",
      lines: "줄",
      readingTime: "읽는 시간",
      readingMinutes: "약 {n}분",
    },
  },

  footer: {
    line: "무료 유니코드 기호, 클립보드까지 한 번의 클릭. 여기서 하는 모든 일은 브라우저를 떠나지 않습니다.",
    privacy: "개인정보",
    terms: "약관",
    about: "소개",
    badges: "배지",
    language: "언어",
  },

  badge: {
    title: "Symbly 배지",
    desc: "Symbly 배지를 사이트, README, 문서에 달아 보세요. 이곳으로 연결되며 기호가 클릭 한 번 거리에 있음을 알려 줍니다.",
    voluntary: "배지 삽입은 완전히 자율입니다 — 마음에 드는 배지를 골라 쓰세요. 허락받을 필요 없습니다.",
    md: "Markdown (README)",
    html: "HTML (웹사이트)",
    thanks: "널리 알려 주셔서 감사합니다 — 모든 삽입이 더 많은 사람이 올바른 글리프를 더 빨리 찾도록 돕습니다.",
  },

  embed: {
    title: "도구 삽입",
    desc: "한 줄로 사이트에 도구를 넣으세요. 방문자의 브라우저에서 실행됩니다.",
  },

    mcp: {
    title: "MCP 서버 — AI가 호출하는 도구",
    desc1: "Symbly는 MCP(Model Context Protocol) 서버를 제공합니다: Claude, Cursor 같은 AI 어시스턴트가 사이트와 동일한 검증된 로직으로 같은 기호 라이브러리를 검색하고 문자를 조회할 수 있습니다.",
    desc2: "이 도구들은 사이트의 순수 함수(기호 검색, 문자 정보, 텍스트 장식)를 실행합니다. npx를 통해 AI 클라이언트의 머신에서 실행되며 우리 서버로는 아무것도 전송되지 않습니다.",
    toolsTitle: "실행 가능한 도구({n}개)",
    requiresNode: "Node.js 18+ 필요. 서버는 stdio로 로컬 실행되며, 호출한 도구 계산만 로컬에서 이루어집니다.",
    privacy: "Node.js 18+ 필요. 서버는 stdio로 로컬 실행되며, 호출한 도구 계산만 로컬에서 이루어집니다.",
  },

    notFound: {
    title: "페이지를 찾을 수 없습니다",
    body: "찾으시는 도구가 존재하지 않습니다. 전체 도구를 둘러보세요.",
    home: "홈으로 가기",
  },
};

export default ko;
