// tr — Türkçe sözlük. Anahtar şekli en ile birebir aynıdır (tests/seo.test.ts derin karşılaştırır).
const tr = {
  brand: "Symbly",
  tagline: "Her simge panodan bir tık ötede.",
  metaDesc: "400'ten fazla kopyalanabilir simge arayın: oklar, matematik, para birimleri, yıldızlar, Yunan harfleri ve daha fazlası. Tek tıkla kopyalama, yerel favoriler, ücretsiz ve kayıt yok.",

  nav: {
    tools: "Tüm araçlar",
    categories: "Kategoriler",
    about: "Hakkında",
    menu: "Menü",
    language: "Dil",
  },

  home: {
    heroTitle: "İhtiyacın olacak her simge — ara, tıkla, yapıştır",
    heroSub: "399 özenle seçilmiş Unicode simgesi, 13 kategoride: oklar, matematik, para birimleri, noktalama, yıldızlar, Yunanca ve daha fazlası. Ada ya da anahtar kelimeyle ara, tek tıkla kopyala. Ücretsiz, kayıtsız.",
    browseAll: "Tüm araçlara göz at",
    pinned: "Sabitlenen",
    pin: "Üste sabitle",
    unpin: "Sabitlemeyi kaldır",
    popular: "Şu anda popüler",
    categoriesTitle: "Kategoriler",
    featuredTitle: "Popüler araçlar",
    trustLocal: "Her şey tarayıcında çalışır",
    trustFree: "Ücretsiz, hesap yok",
    trustFast: "Anında, çevrimdışı çalışır",
    rotating: [
      "Oklar, matematik, para birimleri — her simge panodan bir tık ötede",
      "“tik”, “euro” ya da “alfa” diye ara ve tam istediğin karakteri kopyala",
      "Herhangi bir karenin üzerine gel ve kod noktasını oku — U+2212, tire değil",
      "Favoriler tarayıcında kalır. Hiçbir şey yüklenmez, asla",
    ],
    statsLabels: { tools: "araç", languages: "dil", uploads: "yükleme", accounts: "hesap" },
    eyebrow: "Sonsuza kadar ücretsiz",
    heroCtaSecondary: "Nasıl çalışır",
    statsTools: "{n} araç",
    statsLanguages: "{n} dil",
    statsUploads: "0 yükleme",
    statsAccounts: "0 hesap",
    categoriesSub: "Tek bir kütüphane, on üç simge ailesi, hepsi kopyalamaya hazır.",
    popularSub: "Simge avlarının çoğunun bittiği yer.",
    privacyTitle: "Simgelerin cihazından asla çıkmaz.",
    privacySub: "Hesap yok, yükleme adımı yok. Kütüphane senin tarayıcındaki veridir — tıklarsın, simge yerel olarak panoya geçer.",
    privacyPoint1T: "Tasarımdan yerel",
    privacyPoint1D: "Arama, favoriler ve kopyalama tarayıcında gerçekleşir. Sunucu tek bir tuşa bile bakmaz.",
    privacyPoint2T: "Hesap yok",
    privacyPoint2D: "Kayıt yok, e-posta yok, eşitleme derdi yok. Sayfayı aç, kopyalamaya başla.",
    privacyPoint3T: "Yaklaşık değil, kesin",
    privacyPoint3D: "Her kare tam kod noktasını ve varlığını gösterir — benzer karakterler asla karışmaz.",
    privacyLink: "Tüm gizlilik notunu oku",
    endTitle: "Simgeyi bul. Kopyala. Bitti.",
    endSub: "On üç kategori, 400+ karakter, sıfır yükleme.",
  },

  tools: {
    title: "Tüm araçlar",
    subtitle: "Simge kütüphanesinde ara. Tek tıkla kopyala, kayıt yok.",
    filterPlaceholder: "Araçlarda ara…",
    count: "{count} araç",
    empty: "“{query}” ile eşleşen araç yok.",
  },

  categories: {
    pdf: { name: "PDF", desc: "PDF dosyalarını hiçbir yere yüklemeden birleştir, böl, dönüştür ve düzenle." },
    image: { name: "Görsel", desc: "Görselleri doğrudan tarayıcında sıkıştır, yeniden boyutlandır, kırp ve dönüştür." },
    text: { name: "Simgeler ve Unicode", desc: "Oklar, matematik, para birimleri, yıldızlar ve her başka karakter — aranabilir, tıklanabilir, yapıştırmaya hazır." },
    developer: { name: "Geliştirici", desc: "Günlük geliştirici işleri için biçimlendiriciler, kodlayıcılar, çözücüler ve üreteçler." },
    seo: { name: "SEO", desc: "Meta etiketleri, schema işaretlemesi, SERP önizlemesi ve diğer sayfa içi SEO yardımcıları." },
    security: { name: "Güvenlik", desc: "Şifreler, karma (hash) değerleri ve sorgular — cihazında üretilir, cihazında denetlenir." },
    utility: { name: "Yardımcı Araçlar", desc: "Birim dönüştürücüler, hesap makineleri ve günlük yardımcılar." },
  },

  tool: {
    howTo: "Nasıl kullanılır",
    faq: "Sık sorulan sorular",
    related: "İlgili araçlar",
    nextStep: "Sonraki adımlar",
    copyLink: "Bağlantıyı kopyala",
    privacyNote:
      "Bu araç tamamen tarayıcında çalışır. Verilerin asla cihazından çıkmaz — hiçbir sunucuya yüklenmez.",
    inCategory: "{category} kategorisinde daha fazlası",
    backToCategory: "Tüm {category} araçları",
  },

  common: {
    openTool: "Aracı aç",
    copy: "Kopyala",
    copied: "Kopyalandı",
    download: "İndir",
    reset: "Sıfırla",
    swap: "Değiştir",
    clear: "Temizle",
    error: "Bir şeyler ters gitti. Girdini kontrol edip tekrar dene.",
    input: "Girdi",
    output: "Sonuç",
    settings: "Seçenekler",
    dropFiles: "Dosyaları buraya bırak veya tıklayarak seç",
    dropFile: "Dosyayı buraya bırak veya tıklayarak seç",
    processing: "İşleniyor…",
    fileSize: "Boyut",
    sample: "Örneği dene",
    uppercase: "BÜYÜKHARF",
  },

  unit: {
    from: "Kaynak",
    to: "Hedef",
    amount: "Miktar",
    result: "Sonuç",
    common: "Sık kullanılan dönüşümler",
    formula: "Formül",
    allUnits: "Tüm birimler",
  },

  text: {
    stats: {
      words: "Kelime",
      characters: "Karakter",
      charsNoSpaces: "Boşluksuz",
      sentences: "Cümle",
      paragraphs: "Paragraf",
      lines: "Satır",
      readingTime: "Okuma süresi",
      readingMinutes: "{n} dk okuma",
    },
  },

  footer: {
    line: "Ücretsiz Unicode simgeleri, panodan bir tık ötede. Burada yaptığın hiçbir şey tarayıcıdan çıkmaz.",
    privacy: "Gizlilik",
    terms: "Kullanım Koşulları",
    about: "Hakkında",
    badges: "Rozetler",
    language: "Dil",
  },

  badge: {
    title: "Symbly rozetleri",
    desc: "Symbly rozetini sitene, README'ne ya da dokümanına ekle. Buraya bağlanır ve simgelerin bir tık ötede olduğunu söyler.",
    voluntary: "Yerleştirme tamamen isteğe bağlıdır — projeyi seviyorsan bir rozet seç. İzin almaya gerek yok.",
    md: "Markdown (README)",
    html: "HTML (web sitesi)",
    thanks: "Duyurduğun için teşekkürler — her gömme, daha çok kişinin doğru karakteri daha hızlı bulmasını sağlar.",
  },

  embed: {
    title: "Bu aracı gömün",
    desc: "Tek satırla bu aracı sitenize ekleyin — ziyaretçinin tarayıcısında çalışır.",
  },

    mcp: {
    title: "MCP sunucusu — AI erişimli araçlar",
    desc1: "Symbly bir MCP (Model Context Protocol) sunucusuyla gelir: Claude ya da Cursor gibi yapay zekâ asistanları aynı simge kütüphanesini arayabilir ve karakterleri sitenin test edilmiş aynı mantığıyla inceleyebilir.",
    desc2: "Araçlar sitenin kendi saf işlevlerini çalıştırır — simge arama, karakter bilgisi ve metin süsleme. Yürütme, npx üzerinden yapay zekâ istemcisinin makinesinde olur — sunucularımıza hiçbir şey gönderilmez.",
    toolsTitle: "Çalıştırılabilir araçlar ({n})",
    requiresNode: "Node.js 18+ gerekir. Sunucu stdio üzerinden yerel çalışır; yalnızca yaptığınız çağrılar makinenizde hesaplanır.",
    privacy: "Node.js 18+ gerekir. Sunucu stdio üzerinden yerel çalışır; yalnızca yaptığınız çağrılar makinenizde hesaplanır.",
  },

    notFound: {
    title: "Sayfa bulunamadı",
    body: "Aradığın araç mevcut değil. Onun yerine tüm araçlara göz at.",
    home: "Ana sayfaya git",
  },
};

export default tr;
