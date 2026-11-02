// vi — từ điển tiếng Việt. Hình dạng khóa phải khớp en chính xác (tests/seo.test.ts).
// Giữ nguyên "Symbly", các placeholder {n}/{count}/{query}/{category} và token kỹ thuật.
const vi = {
  brand: "Symbly",
  tagline: "Mọi ký hiệu chỉ cách clipboard một cú nhấp.",
  metaDesc: "Tìm trong hơn 400 ký hiệu để sao chép và dán: mũi tên, toán học, tiền tệ, ngôi sao, chữ Hy Lạp và hơn nữa. Một cú nhấp để sao chép, yêu thích lưu cục bộ, miễn phí không cần đăng ký.",

  nav: {
    tools: "Tất cả công cụ",
    categories: "Danh mục",
    about: "Giới thiệu",
    menu: "Menu",
    language: "Ngôn ngữ",
  },

  home: {
    heroTitle: "Mọi ký hiệu bạn sẽ cần — tìm, nhấp, dán",
    heroSub: "399 ký hiệu Unicode tuyển chọn trong 13 nhóm: mũi tên, toán học, tiền tệ, dấu câu, ngôi sao, Hy Lạp và hơn nữa. Tìm theo tên hoặc từ khóa, sao chép bằng một cú nhấp. Miễn phí, không cần tài khoản.",
    browseAll: "Xem tất cả công cụ",
    categoriesTitle: "Danh mục",
    featuredTitle: "Công cụ phổ biến",
    trustLocal: "Mọi thứ chạy ngay trong trình duyệt",
    trustFree: "Miễn phí, không cần tài khoản",
    trustFast: "Tức thì, dùng được offline",
    rotating: [
      "Mũi tên, toán học, tiền tệ — mỗi ký hiệu chỉ cách clipboard một cú nhấp",
      "Tìm “euro”, “dấu tích” hay “alpha” và sao chép đúng glyph bạn cần",
      "Rê chuột lên ô bất kỳ để đọc mã ký tự — U+2212 thật, không phải gạch nối",
      "Mục yêu thích nằm trong trình duyệt của bạn. Không upload, không bao giờ",
    ],
    statsLabels: { tools: "công cụ", languages: "ngôn ngữ", uploads: "lượt tải lên", accounts: "tài khoản" },
    eyebrow: "Miễn phí mãi mãi",
    heroCtaSecondary: "Cách hoạt động",
    statsTools: "{n} công cụ",
    statsLanguages: "{n} ngôn ngữ",
    statsUploads: "0 lượt tải lên",
    statsAccounts: "0 tài khoản",
    categoriesSub: "Một thư viện, mười ba họ ký hiệu, tất cả sẵn sàng để sao chép.",
    popularSub: "Nơi phần lớn cuộc săn ký hiệu kết thúc.",
    privacyTitle: "Ký hiệu của bạn không bao giờ rời thiết bị.",
    privacySub: "Không tài khoản, không bước tải lên. Thư viện là dữ liệu trong trình duyệt — nhấp một cái là ký hiệu đã nằm trong clipboard, ngay tại máy.",
    privacyPoint1T: "Cục bộ ngay từ thiết kế",
    privacyPoint1D: "Tìm kiếm, yêu thích và sao chép đều diễn ra trong trình duyệt. Máy chủ không thấy một phím bấm nào.",
    privacyPoint2T: "Không tài khoản",
    privacyPoint2D: "Không đăng ký, không email, không đồng bộ phải lo. Mở trang lên và bắt đầu sao chép.",
    privacyPoint3T: "Chính xác, không xấp xỉ",
    privacyPoint3D: "Mỗi ô hiển thị đúng mã ký tự và thực thể của nó — các ký tự giống nhau không bao giờ bị nhầm.",
    privacyLink: "Đọc ghi chú riêng tư đầy đủ",
    endTitle: "Tìm ký hiệu. Sao chép. Xong.",
    endSub: "Mười ba nhóm, hơn 400 glyph, không một lần tải lên.",
  },

  tools: {
    title: "Tất cả công cụ",
    subtitle: "Tìm trong thư viện ký hiệu. Một cú nhấp để sao chép, không cần đăng ký.",
    filterPlaceholder: "Tìm công cụ…",
    count: "{count} công cụ",
    empty: "Không có công cụ nào khớp với “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Gộp, tách, chuyển đổi và chỉnh sửa file PDF mà không cần tải lên bất cứ đâu." },
    image: { name: "Ảnh", desc: "Nén, đổi kích thước, cắt và chuyển đổi ảnh ngay trong trình duyệt của bạn." },
    text: { name: "Ký hiệu & Unicode", desc: "Mũi tên, toán học, tiền tệ, ngôi sao và mọi glyph khác — tìm được, nhấp được, dán được ngay." },
    developer: { name: "Lập trình viên", desc: "Trình định dạng, bộ mã hóa, bộ giải mã và trình tạo cho công việc dev hằng ngày." },
    seo: { name: "SEO", desc: "Thẻ meta, dữ liệu có cấu trúc, xem trước SERP và các trợ thủ SEO trên trang." },
    security: { name: "Bảo mật", desc: "Mật khẩu, hàm băm và tra cứu — tạo và kiểm tra ngay trên thiết bị của bạn." },
    utility: { name: "Tiện ích", desc: "Bộ chuyển đổi đơn vị, máy tính và các trợ thủ hằng ngày." },
  },

  tool: {
    howTo: "Cách sử dụng",
    faq: "Câu hỏi thường gặp",
    related: "Công cụ liên quan",
    privacyNote:
      "Công cụ này chạy hoàn toàn trong trình duyệt của bạn. Dữ liệu không bao giờ rời khỏi thiết bị — không được tải lên bất kỳ máy chủ nào.",
    inCategory: "Xem thêm trong {category}",
    backToCategory: "Tất cả công cụ {category}",
  },

  common: {
    copy: "Sao chép",
    copied: "Đã sao chép",
    download: "Tải xuống",
    reset: "Đặt lại",
    swap: "Đảo chiều",
    clear: "Xóa",
    error: "Đã xảy ra lỗi. Kiểm tra dữ liệu nhập và thử lại.",
    input: "Đầu vào",
    output: "Kết quả",
    settings: "Tùy chọn",
    dropFiles: "Kéo thả file vào đây hoặc bấm để chọn",
    dropFile: "Kéo thả file vào đây hoặc bấm để chọn",
    processing: "Đang xử lý…",
    fileSize: "Dung lượng",
    sample: "Dùng thử ví dụ",
    uppercase: "CHỮ IN HOA",
  },

  unit: {
    from: "Từ",
    to: "Sang",
    amount: "Số lượng",
    result: "Kết quả",
    common: "Chuyển đổi thường dùng",
    formula: "Công thức",
    allUnits: "Tất cả đơn vị",
  },

  text: {
    stats: {
      words: "Từ",
      characters: "Ký tự",
      charsNoSpaces: "Không khoảng trắng",
      sentences: "Câu",
      paragraphs: "Đoạn",
      lines: "Dòng",
      readingTime: "Thời gian đọc",
      readingMinutes: "{n} phút đọc",
    },
  },

  footer: {
    line: "Ký hiệu Unicode miễn phí, cách clipboard một cú nhấp. Không gì bạn làm ở đây rời khỏi trình duyệt.",
    privacy: "Quyền riêng tư",
    terms: "Điều khoản",
    about: "Giới thiệu",
    badges: "Huy hiệu",
    language: "Ngôn ngữ",
  },

  badge: {
    title: "Huy hiệu Symbly",
    desc: "Đặt huy hiệu Symbly lên trang web, README hay tài liệu của bạn. Nó dẫn về đây và cho biết các ký hiệu chỉ cách một cú nhấp.",
    voluntary: "Việc nhúng hoàn toàn tự nguyện — chọn một huy hiệu nếu bạn thích dự án này. Không cần xin phép ai.",
    md: "Markdown (README)",
    html: "HTML (trang web)",
    thanks: "Cảm ơn bạn đã lan toả — mỗi lần nhúng giúp nhiều người hơn tìm đúng glyph nhanh hơn.",
  },

  embed: {
    title: "Nhúng công cụ này",
    desc: "Đưa công cụ này vào trang của bạn bằng một dòng — nó chạy trong trình duyệt của khách.",
  },

    mcp: {
    title: "Máy chủ MCP — công cụ cho AI gọi trực tiếp",
    desc1: "Symbly cung cấp máy chủ MCP (Model Context Protocol): trợ lý AI như Claude hay Cursor có thể tìm kiếm cùng thư viện ký hiệu và tra cứu ký tự bằng cùng logic đã kiểm thử như trên trang này.",
    desc2: "Các công cụ chạy chính các hàm thuần của trang — tìm ký hiệu, thông tin ký tự và trang trí văn bản. Việc thực thi diễn ra trên máy của AI client qua npx — không gửi gì tới máy chủ của chúng tôi.",
    toolsTitle: "Công cụ chạy được ({n})",
    requiresNode: "Cần Node.js 18+. Máy chủ chạy cục bộ qua stdio; chỉ các lệnh bạn gọi được tính trên máy của bạn.",
    privacy: "Cần Node.js 18+. Máy chủ chạy cục bộ qua stdio; chỉ các lệnh bạn gọi được tính trên máy của bạn.",
  },

    notFound: {
    title: "Không tìm thấy trang",
    body: "Công cụ bạn tìm không tồn tại. Hãy xem tất cả công cụ thay thế.",
    home: "Về trang chủ",
  },
};

export default vi;
