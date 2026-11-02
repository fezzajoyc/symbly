import type { Dictionary } from "../i18n";

const ja: Dictionary = {
  brand: "Symbly",
  tagline: "どの記号もクリック一つでコピーできます。",
  metaDesc: "400 種類以上のコピペ用記号を検索——矢印・数学記号・通貨・星・ギリシャ文字など。ワンクリックでコピー、お気に入りはローカル保存。完全無料・登録不要。",

  nav: {
    tools: "すべてのツール",
    categories: "カテゴリー",
    about: "このサイトについて",
    menu: "メニュー",
    language: "言語",
  },

  home: {
    heroTitle: "必要な記号はすべてここに — 検索、クリック、ペースト",
    heroSub: "399 個の厳選 Unicode 記号を 13 カテゴリで収録:矢印・数学・通貨・約物・星・ギリシャ文字など。名前やキーワードで検索して、クリック一つでコピー。無料・登録不要。",
    browseAll: "すべてのツールを見る",
    categoriesTitle: "カテゴリー",
    featuredTitle: "人気のツール",
    trustLocal: "すべてブラウザ内で完結",
    trustFree: "無料・アカウント不要",
    trustFast: "即コピー、オフライン対応",
    rotating: [
      "矢印・数学・通貨——どの記号もクリップボードまでクリック 1 回",
      "「チェック」「ユーロ」「アルファ」で検索すれば、欲しい文字にピンポイントで届く",
      "タイルにカーソルを合わせればコードポイントを表示——ハイフンではなく本物の U+2212",
      "お気に入りはブラウザに保存。アップロードは一切ありません",
    ],
    statsLabels: { tools: "ツール", languages: "言語", uploads: "アップロード", accounts: "アカウント" },
    eyebrow: "ずっと無料",
    heroCtaSecondary: "仕組みを見る",
    statsTools: "{n} 個のツール",
    statsLanguages: "{n} 言語",
    statsUploads: "アップロード 0 回",
    statsAccounts: "アカウント 0 個",
    categoriesSub: "ひとつのライブラリ、13 の記号ファミリー、すべてコピー可能。",
    popularSub: "記号探しの旅は、たいていここで終わります。",
    privacyTitle: "記号はあなたのデバイスから出ません。",
    privacySub: "アカウントもアップロードもありません。ライブラリはブラウザの中のデータ——クリックすれば、記号はローカルのままクリップボードへ。",
    privacyPoint1T: "ローカル動作",
    privacyPoint1D: "検索・お気に入り・コピーはすべてブラウザ内で完結。サーバーは 1 文字も見ません。",
    privacyPoint2T: "アカウント不要",
    privacyPoint2D: "登録もメールも同期の心配も不要。ページを開けばすぐコピーできます。",
    privacyPoint3T: "曖昧さなし",
    privacyPoint3D: "どのタイルも正確なコードポイントと実体を表示するので、似た文字を間違えません。",
    privacyLink: "プライバシーの詳細を読む",
    endTitle: "記号を見つけて、コピー、完了。",
    endSub: "13 カテゴリ、400+ 文字、アップロード 0。",
  },

  tools: {
    title: "すべてのツール",
    subtitle: "記号ライブラリを検索。ワンクリックでコピー、登録不要。",
    filterPlaceholder: "ツールを検索…",
    count: "{count} 個のツール",
    empty: "「{query}」に一致するツールはありません。",
  },

  categories: {
    pdf: { name: "PDF", desc: "PDF の結合・分割・変換・編集をどこにもアップロードせずに行えます。" },
    image: { name: "画像", desc: "画像の圧縮・リサイズ・切り抜き・形式変換をブラウザ内で。" },
    text: { name: "記号と Unicode", desc: "矢印・数学・通貨・星などあらゆる文字——検索して、クリックして、すぐコピー。" },
    developer: { name: "開発者", desc: "日々の開発に使うフォーマッタ・エンコーダ・ジェネレータ。" },
    seo: { name: "SEO", desc: "メタタグ・構造化データ・SERP プレビューなどの SEO ヘルパー。" },
    security: { name: "セキュリティ", desc: "パスワード・ハッシュ・各種ルックアップを端末内で生成・検証。" },
    utility: { name: "ユーティリティ", desc: "単位変換・電卓・日常のちょっとしたツール。" },
  },

  tool: {
    howTo: "使い方",
    faq: "よくある質問",
    related: "関連ツール",
    privacyNote:
      "このツールは完全にブラウザ内で動作します。データは端末から出ず、サーバーへアップロードされることはありません。",
    inCategory: "{category}のその他のツール",
    backToCategory: "{category}のすべてのツール",
  },

  common: {
    copy: "コピー",
    copied: "コピーしました",
    download: "ダウンロード",
    reset: "リセット",
    swap: "入れ替え",
    clear: "クリア",
    error: "エラーが発生しました。入力を確認して再試行してください。",
    input: "入力",
    output: "結果",
    settings: "オプション",
    dropFiles: "ここにファイルをドロップ、またはクリックして選択",
    dropFile: "ここにファイルをドロップ、またはクリックして選択",
    processing: "処理中…",
    fileSize: "サイズ",
    sample: "サンプルを試す",
    uppercase: "大文字",
  },

  unit: {
    from: "変換前",
    to: "変換後",
    amount: "数値",
    result: "結果",
    common: "よく使う変換",
    formula: "計算式",
    allUnits: "すべての単位",
  },

  text: {
    stats: {
      words: "単語数",
      characters: "文字数",
      charsNoSpaces: "空白除く",
      sentences: "文の数",
      paragraphs: "段落",
      lines: "行数",
      readingTime: "読了時間",
      readingMinutes: "約 {n} 分",
    },
  },

  footer: {
    line: "無料の Unicode 記号をワンクリックでクリップボードへ。ここでの操作はブラウザから出ません。",
    privacy: "プライバシー",
    terms: "利用規約",
    about: "このサイトについて",
    badges: "バッジ",
    language: "言語",
  },

  badge: {
    title: "Symbly バッジ",
    desc: "Symbly バッジをサイトや README、ドキュメントに。このサイトへリンクし、記号がワンクリック先にあることを伝えます。",
    voluntary: "設置は完全に任意です。プロジェクトを気に入ったらお好きなバッジをどうぞ。許可は不要です。",
    md: "Markdown(README)",
    html: "HTML(ウェブサイト)",
    thanks: "拡散に感謝します——すべての埋め込みが、より多くの人を正しい文字への近道にします。",
  },

    embed: {
    title: "ツールを埋め込む",
    desc: "1 行であなたのサイトにツールを。訪問者のブラウザ内で動きます。",
  },

    mcp: {
    title: "MCP サーバー——AI から呼び出せるツール",
    desc1: "Symbly は MCP(Model Context Protocol)サーバーを提供します:Claude や Cursor などの AI アシスタントが、このサイトと同じテスト済みロジックで記号ライブラリを検索し、文字を調べられます。",
    desc2: "これらのツールはサイト独自の純関数(記号検索・文字情報・文字装飾)を実行します。npx 経由で AI クライアント側のマシン上で動き、当社サーバーには何も送信されません。",
    toolsTitle: "実行可能なツール({n} 個)",
    requiresNode: "Node.js 18+ が必要です。サーバーは stdio でローカル実行。呼び出したツール計算のみローカルで行われます。",
    privacy: "Node.js 18+ が必要です。サーバーは stdio でローカル実行。呼び出したツール計算のみローカルで行われます。",
  },

    notFound: {
    title: "ページが見つかりません",
    body: "お探しのツールは存在しません。すべてのツールからお探しください。",
    home: "ホームへ戻る",
  },
};

export default ja;
