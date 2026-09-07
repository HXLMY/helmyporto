export const portfolioData = {
  // Indonesian Translation Data
  id: {
    nav: {
      about: "Tentang",
      projects: "Proyek",
      experience: "Pengalaman",
      contact: "Kontak",
      hireMe: "Hubungi Saya",
      toggleTheme: "Ganti Tema (Dark/Light)",
      toggleLang: "Pilih Bahasa"
    },

    personal: {
      name: "Helmy Wahyudi",
      avatar: "/helmy.jpeg",
      title: "Senior Full Stack Web Developer & SAP ABAP Specialist",
      tagline: "Menghubungkan rekayasa web modern, ekosistem enterprise SAP S/4HANA, dan aplikasi digital performa tinggi.",
      bio: "Saya adalah seorang Full Stack Web Developer (Laravel, Vue, React, Next.js) dan SAP ABAP Specialist (S/4HANA, WRICEF). Berpengalaman di PT. NextSupply Indonesia, PT. Jhonlin Group, PT. Telkom Indonesia, BPN, dan Hacktiv8 dalam membangun aplikasi web skala enterprise, otomasi data massal, serta kustomisasi proses bisnis tingkat lanjut.",
      status: "Tersedia untuk Proyek Strategis",
      location: "Kalimantan Selatan, Indonesia",
      email: "helmywahyudi0@gmail.com",
      whatsapp: "https://wa.me/6285710815159",
      phone: "085710815159",
      github: "https://github.com/HXLMY",
      linkedin: "https://www.linkedin.com/in/helmy-wahyudi-90bb64227/",
      instagram: "https://www.instagram.com/helmy.wahyudi/",
      twitter: "https://twitter.com",
      stats: [
        { label: "Pengalaman Web Dev", value: "2021", suffix: " — Sekarang" },
        { label: "Pengalaman ABAP", value: "2024", suffix: " — Sekarang" },
        { label: "Proyek & WRICEF", value: "25+", suffix: " Selesai" },
        { label: "Modul Enterprise", value: "8+", suffix: " Modul SAP" }
      ]
    },

    hero: {
      badge: "Tersedia untuk Proyek Strategis",
      headlinePrefix: "Transforming Ideas Into",
      headlineGradient: "Enterprise Web",
      headlineSuffix: "& Scalable Digital Realities.",
      greeting: "Halo, saya",
      ctaProjects: "Jelajahi Proyek",
      ctaContact: "Mulai Kolaborasi"
    },
    
    aboutBento: {
      sectionTag: "// Tentang & Pendekatan",
      sectionTitle: "Engineering Precision meets",
      sectionGradient: "Scalable Architecture",
      sectionDesc: "Menggabungkan keahlian logika enterprise (SAP & Backend) dengan fluiditas antarmuka web modern (React, Next.js, Vue) untuk melahirkan sistem yang andal.",
      principleBadge: "Prinsip Kerja",
      headline: "Membangun Solusi Enterprise & Web Modern yang Tangguh",
      philosophy: "Menggabungkan ketelitian logika enterprise (SAP ABAP & Backend PHP/Laravel) dengan fluiditas antarmuka frontend modern (React, Next.js, VueJS) untuk menghasilkan sistem yang andal dan elegan.",
      terminalConfig: "developer.config.ts",
      copyEmail: "Salin Email",
      copiedEmail: "Email Tersalin!",
      features: [
        "Clean Architecture",
        "Enterprise Logic & Security",
        "Modern 3D & High FPS"
      ],
      highlights: [
        {
          id: "fullstack",
          title: "Full Stack Mastery",
          desc: "Keahlian menyeluruh dari perancangan database relasional, API performa tinggi, hingga antarmuka interaktif yang responsif.",
          badge: "Sejak 2021"
        },
        {
          id: "enterprise",
          title: "SAP ABAP & Enterprise Logic",
          desc: "Kustomisasi WRICEF S/4HANA, modul FICOFM, MM, PP, PM, HR, PS, SD, HCM, Smartforms, dan BAdI/Exits.",
          badge: "S/4HANA & SAC"
        },
        {
          id: "speed",
          title: "Modern UI/UX & Clean Code",
          desc: "Pengembangan antarmuka cepat dengan Tailwind CSS, Bootstrap, React, Filament, dan Vue.js yang teruji dan mudah dipelihara.",
          badge: "Clean Architecture"
        }
      ]
    },

    skills: {
      sectionTag: "// Kemampuan Teknis & 3D",
      sectionTitle: "Arsenal Teknologi &",
      sectionGradient: "Spatial Engineering",
      sectionDesc: "Kombinasi teknologi mutakhir dari pipeline 3D interaktif, arsitektur frontend skala enterprise, hingga infrastruktur backend.",
      orbitTitle: "Interactive 3D Constellation",
      orbitRotate: "Putar 360°",
      orbitDesc: "Simulasi spasial 3D orbit teknologi yang terintegrasi dalam ekosistem pengembangan saya.",
      categories: [
        { id: "all", label: "Semua Tech" },
        { id: "backend", label: "Backend & ERP" },
        { id: "frontend", label: "Frontend & UI" },
        { id: "tools", label: "Database & Tools" }
      ],
      items: [
        { name: "Laravel (PHP)", level: 96, category: "backend", icon: "Server", highlight: true },
        { name: "SAP ABAP & S/4HANA", level: 92, category: "backend", icon: "Cpu", highlight: true },
        { name: "PHP", level: 95, category: "backend", icon: "FileCode", highlight: true },
        { name: "Filament & Livewire", level: 93, category: "backend", icon: "Layers", highlight: true },
        { name: "WRICEF Objects", level: 90, category: "backend", icon: "Boxes", highlight: true },
        { name: "React.js / Next.js", level: 92, category: "frontend", icon: "Code2", highlight: true },
        { name: "Vue.js", level: 90, category: "frontend", icon: "Sparkles", highlight: false },
        { name: "JavaScript / ES6+", level: 94, category: "frontend", icon: "FileCode", highlight: false },
        { name: "Tailwind CSS & Bootstrap", level: 95, category: "frontend", icon: "Palette", highlight: true },
        { name: "MySQL & MariaDB", level: 92, category: "tools", icon: "Database", highlight: false },
        { name: "Git / GitHub", level: 92, category: "tools", icon: "Gauge", highlight: false },
        { name: "SAP Signavio & SAC", level: 88, category: "backend", icon: "Terminal", highlight: false }
      ]
    },

    projects: {
      sectionTag: "// Karya & Portfolio Proyek",
      sectionTitle: "Showcase Proyek",
      sectionGradient: "Unggulan",
      sectionDesc: "Koleksi proyek sistem enterprise, platform e-learning, supply chain, dan media portal berkinerja tinggi yang telah saya bangun.",
      filterOptions: [
        { id: 'all', label: 'Semua Proyek' },
        { id: 'enterprise', label: 'Enterprise & KPI' },
        { id: 'fullstack', label: 'Full-Stack & E-Commerce' },
        { id: 'media', label: 'Media & Portal' }
      ],
      modal: {
        aboutTitle: "Tentang Proyek",
        stackTitle: "Teknologi & Stack",
        liveDemo: "Live Interactive Demo",
        sourceCode: "GitHub Repository",
        closeLabel: "Tutup Modal"
      },
      items: [
        {
          id: "kabarsiar-id",
          title: "Kabarsiar.id",
          category: "CMS & Media Portal",
          tagline: "Portal publikasi berita online dan multimedia interaktif berbasis WordPress CMS modern.",
          description: "Platform media berita online dengan integrasi multimedia, feed kategori berita dinamis, optimasi responsif lintas perangkat mobile dan desktop, serta integrasi sistem analitik pembaca.",
          image: "/projects/kabarsiar.png",
          tags: ["WordPress", "PHP", "MariaDB", "Responsive Web", "News Media"],
          featured: true,
          stats: { metric: "100%", label: "Responsive UX" },
          color: "#E11D48",
          gradient: "linear-gradient(135deg, rgba(225,29,72,0.18) 0%, rgba(124,58,237,0.15) 100%)",
          accentGlow: "rgba(225, 29, 72, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "opex-system",
          title: "OPEX (Operational Excellence System)",
          category: "Enterprise System",
          tagline: "Sistem pemantauan efisiensi operasional, continuous improvement, dan pelaporan KPI bisnis korporat.",
          description: "Aplikasi enterprise untuk mengukur efisiensi kerja, otomasi alur continuous improvement (Kaizen/Lean), audit operasional, pelacakan target divisi, serta visualisasi indikator performa utama secara real-time.",
          image: "/projects/opex.png",
          tags: ["Laravel", "Filament", "MySQL", "Chart.js", "Enterprise KPI"],
          featured: true,
          stats: { metric: "99.4%", label: "Process Precision" },
          color: "#7C3AED",
          gradient: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(219,39,119,0.15) 100%)",
          accentGlow: "rgba(124, 58, 237, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "nextsupply-id",
          title: "Nextsupply.id",
          category: "Supply Chain & E-Commerce",
          tagline: "Platform rantai pasok digital (Supply Chain & Procurement) untuk pengadaan barang dan inventori.",
          description: "Platform pengadaan B2B/B2C dan manajemen rantai pasok modern yang menghubungkan vendor rekanan, pemantauan inventaris multi-gudang, pemesanan terpusat, dan integrasi faktur digital otomatis.",
          image: "/projects/nextsupply.png",
          tags: ["Next.js", "Laravel API", "React", "Tailwind CSS", "Supply Chain"],
          featured: true,
          stats: { metric: "B2B Flow", label: "Smart Procurement" },
          color: "#2563EB",
          gradient: "linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.15) 100%)",
          accentGlow: "rgba(37, 99, 235, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "kandapp",
          title: "KandApp",
          category: "Mobile & Operations",
          tagline: "Aplikasi web operasional mobile-first untuk pencatatan dan manajemen data lapangan terpusat.",
          description: "Sistem aplikasi operasional internal yang dirancang untuk efisiensi entri data lapangan, tracking pergerakan aset dan logistik, serta sinkronisasi data terpusat secara real-time.",
          image: "/projects/kandapp.png",
          tags: ["Laravel", "Livewire", "MariaDB", "Mobile-First", "Operations"],
          featured: false,
          stats: { metric: "Real-Time", label: "Data Sync" },
          color: "#D97706",
          gradient: "linear-gradient(135deg, rgba(217,119,6,0.18) 0%, rgba(234,88,12,0.15) 100%)",
          accentGlow: "rgba(217, 119, 6, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "hse-kpi-system",
          title: "HSE KPI System",
          category: "Enterprise & Safety",
          tagline: "Platform digital monitoring kesehatan, keselamatan kerja, dan kepatuhan lingkungan (K3/HSE).",
          description: "Sistem otomasi pencatatan indikator kinerja HSE (K3), pelaporan insiden, inspeksi keselamatan lapangan, hazard observation, dan matriks pemenuhan audit regulasi keselamatan kerja secara presisi.",
          image: "/projects/hsekpi.png",
          tags: ["Laravel", "Filament", "Livewire", "MariaDB", "HSE / K3"],
          featured: true,
          stats: { metric: "Zero Harm", label: "Safety Target" },
          color: "#059669",
          gradient: "linear-gradient(135deg, rgba(5,150,105,0.18) 0%, rgba(2,132,199,0.15) 100%)",
          accentGlow: "rgba(5, 150, 105, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "lms-system",
          title: "LMS (Learning Management System)",
          category: "Full-Stack Web App",
          tagline: "Platform e-learning enterprise untuk manajemen kurikulum pelatihan, evaluasi, dan tracking kompetensi peserta.",
          description: "Sistem manajemen pembelajaran digital komprehensif yang dirancang untuk otomasi pelatihan internal, distribusi modul materi kursus interaktif, kuis otomatis, sertifikasi digital, dan pelaporan analitik perkembangan belajar peserta secara terpusat.",
          image: "/projects/lms.png",
          tags: ["Laravel", "Livewire", "MySQL", "Tailwind CSS", "E-Learning"],
          featured: false,
          stats: { metric: "1000+", label: "Active Learners" },
          color: "#0284C7",
          gradient: "linear-gradient(135deg, rgba(2,132,199,0.18) 0%, rgba(124,58,237,0.18) 100%)",
          accentGlow: "rgba(2, 132, 199, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "basemart-id",
          title: "Basemart.id",
          category: "E-Commerce & SaaS",
          tagline: "Platform katalog toko instan dan otomasi order WhatsApp untuk Seller & UMKM Indonesia.",
          description: "Sistem katalog toko online instan yang mengubah proses pemesanan manual di WhatsApp menjadi satu link pesanan terstruktur lengkap dengan kalkulasi ongkir otomatis, manajemen stok, dan integrasi pengiriman kurir langsung ke WhatsApp.",
          image: "/projects/basemart.png",
          tags: ["Next.js", "Laravel", "WhatsApp API", "E-Commerce", "SaaS"],
          featured: true,
          stats: { metric: "1 Click", label: "WhatsApp Checkout" },
          color: "#EA580C",
          gradient: "linear-gradient(135deg, rgba(234,88,12,0.18) 0%, rgba(249,115,22,0.15) 100%)",
          accentGlow: "rgba(234, 88, 12, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "jualbeli-id",
          title: "Jualbeli.id",
          category: "Automotive Marketplace",
          tagline: "Marketplace jual beli sepeda motor dan mobil terpercaya dengan verifikasi dealer & dokumen resmi.",
          description: "Platform jual beli kendaraan otomotif (mobil & motor) dengan fitur pencarian dan filter cerdas, verifikasi keaslian surat kendaraan (STNK & BPKB), simulasi pembiayaan, serta listing dealer terpercaya dengan transaksi 100% transparan.",
          image: "/projects/jualbeli.png",
          tags: ["React", "Next.js", "Laravel API", "Automotive Marketplace", "MySQL"],
          featured: true,
          stats: { metric: "100%", label: "Verified Vehicles" },
          color: "#F59E0B",
          gradient: "linear-gradient(135deg, rgba(245,158,11,0.18) 0%, rgba(234,88,12,0.15) 100%)",
          accentGlow: "rgba(245, 158, 11, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "caritau-com",
          title: "Caritau.com",
          category: "Media & Web Portal",
          tagline: "Portal media berita digital dan informasi publik dengan performa tinggi dan optimasi SEO terdepan.",
          description: "Pengembangan dan pemeliharaan platform media informasi digital Caritau.com berbasis WordPress CMS kustom, arsitektur database teroptimasi, CDN caching, dan sistem manajemen redaksi yang responsif melayani ribuan pembaca harian.",
          tags: ["WordPress", "PHP", "MySQL", "SEO Engine", "Media Portal"],
          featured: false,
          stats: { metric: "High Traffic", label: "Daily Readers" },
          color: "#EA580C",
          gradient: "linear-gradient(135deg, rgba(234,88,12,0.18) 0%, rgba(245,158,11,0.15) 100%)",
          accentGlow: "rgba(234, 88, 12, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        }
      ]
    },

    experience: {
      sectionTag: "// Rekam Jejak Karier",
      sectionTitle: "Pengalaman &",
      sectionGradient: "Milestone",
      sectionDesc: "Perjalanan profesional dalam rekayasa sistem enterprise SAP S/4HANA, arsitektur web modern, dan kepemimpinan proyek digital.",
      deliverablesHeading: "Tanggung Jawab & Hasil Kerja Utama",
      items: [
        {
          period: "Apr 2026 — Sekarang",
          role: "Partner Business & Full Stack Developer",
          company: "PT. NextSupply Indonesia",
          location: "Bandung, Jawa Barat",
          type: "Partner Bisnis",
          description: "Sebagai Partner Bisnis dan Full Stack Developer, bertanggung jawab dalam pengembangan platform Audit Assessment, perancangan alur proses audit, formulasi kalkulasi ongkos kirim pengiriman barang, serta pendirian Audit Advisor untuk Operational Excellence (OPEX).",
          points: [
            "Developed an Audit Assessment Website (Mengembangkan Website Audit Assessment).",
            "Designed the Audit Assessment process flow (Merancang alur proses Audit Assessment).",
            "Formulated shipping cost calculations for goods delivery (Memformulasikan kalkulasi ongkos kirim pengiriman barang).",
            "Established an Audit Advisor for Operational Excellence (OPEX)."
          ],
          skills: ["Full Stack Development", "Audit Assessment", "Process Flow", "Shipping Calculations", "OPEX Advisor", "Supply Chain", "Business Partner"]
        },
        {
          period: "2024 — Sekarang",
          role: "SAP ABAP Specialist",
          company: "Enterprise S/4HANA Ecosystem",
          location: "Indonesia",
          type: "Enterprise ERP",
          description: "Spesialisasi dalam pengembangan objek kustom WRICEF dan integrasi modul enterprise SAP S/4HANA, automasi migrasi data, serta business process optimization.",
          points: [
            "Mengikuti program pelatihan intensif SAP ABAP on S/4HANA.",
            "Mengembangkan custom ALV Reports interaktif dan enterprise Smartforms.",
            "Meningkatkan pengelolaan sumber daya manusia melalui pembuatan custom HR Infotypes.",
            "Membangun program Data Uploader dan Data Loader kustom untuk pemrosesan & migrasi data massal.",
            "Mengimplementasikan peningkatan sistem memanfaatkan BAdIs (Business Add-Ins) dan User/Customer Exits.",
            "Menyelesaikan objek WRICEF di berbagai modul SAP: FICOFM, MM, PP, PM, HR, PS, SD, dan HCM.",
            "Menyelesaikan pelatihan profesional SAP Signavio (Process Mining) dan SAP Analytics Cloud (SAC)."
          ],
          skills: ["SAP ABAP", "S/4HANA", "WRICEF", "ALV Reports", "Smartforms", "BAdI & Exits", "HR Infotypes", "Signavio", "SAC", "FICOFM", "MM", "PP", "PM", "SD", "HCM"]
        },
        {
          period: "Apr 2023 — Sekarang",
          role: "Staff Web Programmer",
          company: "PT. Jhonlin Group",
          location: "Batulicin, Kalimantan Selatan",
          type: "Full-time",
          description: "Bertanggung jawab atas rekayasa perangkat lunak aplikasi web korporat, arsitektur database performa tinggi, dan digitalisasi alur kerja perusahaan.",
          points: [
            "Mengembangkan proyek web skala enterprise menggunakan Laravel, Filament, dan Livewire.",
            "Berkolaborasi aktif dalam alur kerja pengembangan tim menggunakan Git/GitHub.",
            "Merancang dan mengoptimalkan struktur basis data relasional dengan MySQL & MariaDB.",
            "Mengembangkan dan memelihara portal manajemen konten menggunakan WordPress CMS.",
            "Pengembangan proyek web: SAFETY SHE, Gateway Sispro & Integra, OTIS (Order Tracking Information System), KandApp, dan Caritau.com.",
            "Pengembangan proyek web CMS WordPress: Kabarsiar.id dan Caritau.com.",
            "Pengelolaan infrastruktur Remote Desktop (konfigurasi, administrasi, dan troubleshooting)."
          ],
          skills: ["Laravel", "Filament", "Livewire", "MySQL", "MariaDB", "WordPress", "Git/GitHub", "System Admin"]
        },
        {
          period: "Oct 2022 — Mar 2023",
          role: "Management Trainee - Web Programmer",
          company: "Jhonlin Institute",
          location: "Batulicin, Kalimantan Selatan",
          type: "Management Trainee",
          description: "Program pembinaan intensif kepemimpinan manajerial, budaya perusahaan, dan spesialisasi rekayasa aplikasi web enterprise.",
          points: [
            "Mempelajari Kepemimpinan (Leadership), Public Speaking, dan Komunikasi Profesional Korporat.",
            "Mengikuti Bintalsik (Pembinaan Mental dan Fisik).",
            "Memahami secara mendalam tata kelola dan budaya operasional perusahaan.",
            "Penguasaan intensif framework pemrograman Laravel dan arsitektur aplikasi.",
            "Mengembangkan modul pelaporan kustom untuk aplikasi web OTIS (Order Tracking Information System)."
          ],
          skills: ["Laravel", "PHP", "Leadership", "Bintalsik", "OTIS Reporting", "Public Speaking"]
        },
        {
          period: "Mar 2022 — Jul 2022",
          role: "Web Developer & Squad Leader",
          company: "PT. Telkom Indonesia Tbk",
          location: "Indonesia (Regional 6 Kalimantan)",
          type: "Project Internship / SVCC",
          description: "Memimpin squad regional SVCC 6 Kalimantan, merancang antarmuka UI/UX, dan mengembangkan platform pameran virtual regional.",
          points: [
            "Merancang UI/UX wireframe dan prototipe interaktif menggunakan Figma.",
            "Membuat alur navigasi dan interaksi pengguna website.",
            "Membangun dan mengoptimasi struktur basis data menggunakan MySQL.",
            "Menjabat sebagai Squad Leader SVCC 6 (Region Kalimantan) dan mempresentasikan laporan Key Result mingguan.",
            "Mengembangkan proyek 'Digitalize Borneo Virtual Expo' berkolaborasi dengan PT Telkom Indonesia Regional 6.",
            "Mengembangkan proyek 'Borneo Education and Tourism Fair' berkolaborasi dengan Smarteye.id.",
            "Proyek Akhir: Mengembangkan dan meluncurkan Website Resmi SVCC."
          ],
          skills: ["Figma", "UI/UX", "MySQL", "JavaScript", "Squad Leader", "Virtual Expo", "Smarteye.id"]
        },
        {
          period: "Aug 2021 — Feb 2022",
          role: "Web Programmer",
          company: "PT. Hacktiv8 Indonesia",
          location: "Jakarta, Indonesia",
          type: "Immersive Program",
          description: "Program akselerasi pemrograman web front-end modern, asinkronus JavaScript, dan manipulasi DOM interaktif.",
          points: [
            "Mengembangkan landing page profil responsif dan komponen antarmuka web.",
            "Mempelajari dan menerapkan logika pemrograman JavaScript, Fetch API, dan manipulasi DOM.",
            "Membangun dan merilis proyek website 'BBTech Towards Indonesia 4.0'."
          ],
          skills: ["JavaScript", "Fetch API", "DOM Manipulation", "HTML5", "CSS3", "Landing Page"]
        },
        {
          period: "Jul 2021 — Sep 2021",
          role: "Entry Data & Arsip",
          company: "BPN Banjarbaru (Badan Pertanahan Nasional)",
          location: "Banjarbaru, Kalimantan Selatan",
          type: "Internship / Support",
          description: "Pengelolaan basis data pertanahan dan perancangan aplikasi kustom entri akta tanah untuk efisiensi birokrasi arsip.",
          points: [
            "Memproses dan memperbarui data kepemilikan tanah, sertifikasi, dan pemetaan geospasial.",
            "Mengembangkan aplikasi web 'Aplikasi Entri Data Akta Tanah' untuk Badan Pertanahan Nasional (BPN) Kota Banjarbaru."
          ],
          skills: ["Web Application", "Data Processing", "MySQL", "PHP", "Land Registry System"]
        }
      ]
    },

    testimonials: {
      sectionTag: "// Testimoni & Rekomendasi",
      sectionTitle: "Dipercaya oleh",
      sectionGradient: "Para Visioner",
      sectionDesc: "Apa yang dikatakan klien, founder, dan engineering lead mengenai hasil kolaborasi kami.",
      items: [
        {
          name: "Budi Santoso",
          role: "IT Director & Enterprise Lead",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          content: "Helmy memiliki pemahaman yang luar biasa kuat pada backend enterprise (Laravel & SAP ABAP) sekaligus mampu menghadirkan antarmuka web modern yang sangat mulus dan cepat.",
          rating: 5
        },
        {
          name: "Rina Wijaya",
          role: "Product Manager, Digital Solutions",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          content: "Proyek yang didevelop oleh Mas Helmy selalu selesai dengan standar kualitas kode yang sangat rapi, scalable, dan tepat waktu. Sangat direkomendasikan!",
          rating: 5
        }
      ]
    },

    contact: {
      sectionTag: "// Hubungi & Kolaborasi",
      sectionTitle: "Mari Buat Sesuatu yang",
      sectionGradient: "Luar Biasa",
      sectionDesc: "Punya ide proyek, kebutuhan web modern full-stack, sistem enterprise SAP, atau ingin mendiskusikan peluang kerja sama? Kirimkan pesan Anda sekarang.",
      leftTitle: "Siap mewujudkan visi digital Anda?",
      leftDesc: "Saya selalu terbuka untuk mendiskusikan proyek web inovatif, solusi enterprise, integrasi backend Laravel / SAP ABAP, atau konsultasi arsitektur sistem.",
      directWA: "WhatsApp Langsung",
      directEmail: "Email Langsung",
      phoneLabel: "085710815159",
      copyText: "Salin",
      copiedText: "Tersalin!",
      fastResponseTitle: "Respons Cepat Dijamin:",
      fastResponseDesc: "Siap terhubung dan membalas pesan Anda secara responsif.",
      successTitle: "Membuka WhatsApp...",
      successDesc: "Terima kasih telah menghubungi saya, Helmy Wahyudi. Anda akan dialihkan ke WhatsApp resmi saya untuk melanjutkan percakapan.",
      sendAnother: "Kirim Pesan Lainnya",
      nameLabel: "NAMA LENGKAP",
      namePlaceholder: "contoh: John Doe",
      emailLabel: "ALAMAT EMAIL / KONTAK",
      emailPlaceholder: "nama@perusahaan.com",
      serviceLabel: "JENIS LAYANAN / KEBUTUHAN",
      serviceOptions: [
        { value: "Full-Stack Web App", label: "Aplikasi Full-Stack Web (Laravel / React / Vue / Next.js)" },
        { value: "SAP ABAP Consulting", label: "SAP ABAP Customization & ERP Integration (S/4HANA)" },
        { value: "Consultation / Mentoring", label: "Konsultasi Arsitektur Database & Backend API" }
      ],
      messageLabel: "PESAN ATAU DETAIL PROYEK",
      messagePlaceholder: "Ceritakan gambaran proyek, target waktu, dan ekspektasi Anda...",
      submitBtn: "Kirim Pesan ke WhatsApp",
      submittingBtn: "Menghubungkan ke WhatsApp..."
    },

    footer: {
      navTitle: "Navigasi",
      socialTitle: "Sosial & Tautan",
      navItems: [
        { label: "Beranda", href: "#hero" },
        { label: "Tentang", href: "#about" },
        { label: "Koleksi Proyek", href: "#projects" },
        { label: "Pengalaman", href: "#experience" },
        { label: "Kontak", href: "#contact" }
      ],
      directEmailLabel: "Email Langsung",
      timeLabel: "WIB",
      copyright: "All rights reserved. Built with React & Three.js.",
      backToTop: "Kembali ke Atas"
    }
  },

  // English Translation Data
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      hireMe: "Contact Me",
      toggleTheme: "Switch Theme (Dark/Light)",
      toggleLang: "Switch Language"
    },

    personal: {
      name: "Helmy Wahyudi",
      avatar: "/helmy.jpeg",
      title: "Senior Full Stack Web Developer & SAP ABAP Specialist",
      tagline: "Bridging modern web engineering, enterprise SAP S/4HANA ecosystems, and high-performance digital applications.",
      bio: "I am a Full Stack Web Developer (Laravel, Vue, React, Next.js) and SAP ABAP Specialist (S/4HANA, WRICEF). Experienced across PT. NextSupply Indonesia, PT. Jhonlin Group, PT. Telkom Indonesia, BPN, and Hacktiv8 in engineering enterprise-scale web applications, mass data automation, and advanced business process customizations.",
      status: "Available for High-Impact Projects",
      location: "South Kalimantan, Indonesia",
      email: "helmywahyudi0@gmail.com",
      whatsapp: "https://wa.me/6285710815159",
      phone: "085710815159",
      github: "https://github.com/HXLMY",
      linkedin: "https://www.linkedin.com/in/helmy-wahyudi-90bb64227/",
      instagram: "https://www.instagram.com/helmy.wahyudi/",
      twitter: "https://twitter.com",
      stats: [
        { label: "Web Dev Experience", value: "2021", suffix: " — Present" },
        { label: "ABAP Experience", value: "2024", suffix: " — Present" },
        { label: "Projects & WRICEF", value: "25+", suffix: " Delivered" },
        { label: "Enterprise Modules", value: "8+", suffix: " SAP Modules" }
      ]
    },

    hero: {
      badge: "Available for High-Impact Projects",
      headlinePrefix: "Transforming Ideas Into",
      headlineGradient: "Enterprise Web",
      headlineSuffix: "& Scalable Digital Realities.",
      greeting: "Hello, I am",
      ctaProjects: "Explore Projects",
      ctaContact: "Start Collaboration"
    },
    
    aboutBento: {
      sectionTag: "// About & Approach",
      sectionTitle: "Engineering Precision meets",
      sectionGradient: "Scalable Architecture",
      sectionDesc: "Fusing enterprise logic expertise (SAP & Backend) with modern web interface fluidity (React, Next.js, Vue) to deliver robust, high-performance systems.",
      principleBadge: "Guiding Principles",
      headline: "Building Resilient Enterprise & Modern Web Solutions",
      philosophy: "Combining the rigor of enterprise logic (SAP ABAP & Backend PHP/Laravel) with the fluidity of modern frontend interfaces (React, Next.js, VueJS) to produce reliable and elegant systems.",
      terminalConfig: "developer.config.ts",
      copyEmail: "Copy Email",
      copiedEmail: "Email Copied!",
      features: [
        "Clean Architecture",
        "Enterprise Logic & Security",
        "Modern Full-Stack Engineering"
      ],
      highlights: [
        {
          id: "fullstack",
          title: "Full Stack Mastery",
          desc: "End-to-end expertise spanning relational database design, high-throughput APIs, and responsive interactive web interfaces.",
          badge: "Since 2021"
        },
        {
          id: "enterprise",
          title: "SAP ABAP & Enterprise Logic",
          desc: "S/4HANA WRICEF customizations, FICOFM, MM, PP, PM, HR, PS, SD, HCM modules, Smartforms, and BAdIs/Customer Exits.",
          badge: "S/4HANA & SAC"
        },
        {
          id: "speed",
          title: "Modern UI/UX & Clean Code",
          desc: "Fast UI engineering using Tailwind CSS, Bootstrap, React, Filament, and Vue.js with battle-tested clean code practices.",
          badge: "Clean Architecture"
        }
      ]
    },

    projects: {
      sectionTag: "// Works & Portfolio",
      sectionTitle: "Featured Project",
      sectionGradient: "Showcase",
      sectionDesc: "A curated collection of enterprise systems, e-learning platforms, supply chain solutions, and media portals I have built.",
      filterOptions: [
        { id: 'all', label: 'All Projects' },
        { id: 'enterprise', label: 'Enterprise & KPI' },
        { id: 'fullstack', label: 'Full-Stack & E-Commerce' },
        { id: 'media', label: 'Media & Portal' }
      ],
      modal: {
        aboutTitle: "About The Project",
        stackTitle: "Technologies & Stack",
        liveDemo: "Live Interactive Demo",
        sourceCode: "GitHub Repository",
        closeLabel: "Close Modal"
      },
      items: [
        {
          id: "kabarsiar-id",
          title: "Kabarsiar.id",
          category: "CMS & Media Portal",
          tagline: "Online news publishing portal and multimedia content platform built with custom modern WordPress.",
          description: "Digital news platform featuring multimedia embeds, dynamic categorized feeds, cross-device mobile responsiveness, and reader engagement analytics integration.",
          image: "/projects/kabarsiar.png",
          tags: ["WordPress", "PHP", "MariaDB", "Responsive Web", "News Media"],
          featured: true,
          stats: { metric: "100%", label: "Responsive UX" },
          color: "#E11D48",
          gradient: "linear-gradient(135deg, rgba(225,29,72,0.18) 0%, rgba(124,58,237,0.15) 100%)",
          accentGlow: "rgba(225, 29, 72, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "opex-system",
          title: "OPEX (Operational Excellence System)",
          category: "Enterprise System",
          tagline: "Operational excellence monitoring system for business efficiency, continuous improvement, and corporate KPI tracking.",
          description: "Enterprise web application designed to benchmark operational efficiency, automate continuous improvement workflows (Kaizen/Lean), operational audits, division goals tracking, and real-time KPI data visualizations.",
          image: "/projects/opex.png",
          tags: ["Laravel", "Filament", "MySQL", "Chart.js", "Enterprise KPI"],
          featured: true,
          stats: { metric: "99.4%", label: "Process Precision" },
          color: "#7C3AED",
          gradient: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(219,39,119,0.15) 100%)",
          accentGlow: "rgba(124, 58, 237, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "nextsupply-id",
          title: "Nextsupply.id",
          category: "Supply Chain & E-Commerce",
          tagline: "Digital supply chain and procurement platform for automated goods procurement and inventory flow.",
          description: "Modern B2B/B2C procurement and supply chain management platform connecting partner vendors, multi-warehouse inventory tracking, centralized purchase orders, and automated digital invoicing.",
          image: "/projects/nextsupply.png",
          tags: ["Next.js", "Laravel API", "React", "Tailwind CSS", "Supply Chain"],
          featured: true,
          stats: { metric: "B2B Flow", label: "Smart Procurement" },
          color: "#2563EB",
          gradient: "linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.15) 100%)",
          accentGlow: "rgba(37, 99, 235, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "kandapp",
          title: "KandApp",
          category: "Mobile & Operations",
          tagline: "Mobile-first operational web application for centralized field recording and asset dispatch management.",
          description: "Internal operational system engineered for streamlined field data logging, asset and dispatch movement tracking, and real-time centralized synchronization.",
          image: "/projects/kandapp.png",
          tags: ["Laravel", "Livewire", "MariaDB", "Mobile-First", "Operations"],
          featured: false,
          stats: { metric: "Real-Time", label: "Data Sync" },
          color: "#D97706",
          gradient: "linear-gradient(135deg, rgba(217,119,6,0.18) 0%, rgba(234,88,12,0.15) 100%)",
          accentGlow: "rgba(217, 119, 6, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "hse-kpi-system",
          title: "HSE KPI System",
          category: "Enterprise & Safety",
          tagline: "Digital Health, Safety, and Environment (HSE) monitoring dashboard and compliance tracking platform.",
          description: "Automated safety management suite for tracking HSE performance indicators, incident logging, field safety inspections, hazard observations, and occupational safety regulatory audit matrices with precision.",
          image: "/projects/hsekpi.png",
          tags: ["Laravel", "Filament", "Livewire", "MariaDB", "HSE / K3"],
          featured: true,
          stats: { metric: "Zero Harm", label: "Safety Target" },
          color: "#059669",
          gradient: "linear-gradient(135deg, rgba(5,150,105,0.18) 0%, rgba(2,132,199,0.15) 100%)",
          accentGlow: "rgba(5, 150, 105, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "lms-system",
          title: "LMS (Learning Management System)",
          category: "Full-Stack Web App",
          tagline: "Enterprise e-learning platform for training curriculum management, assessments, and competency tracking.",
          description: "A comprehensive digital learning management platform engineered for enterprise training automation, interactive course module distribution, automated quizzes, digital certifications, and centralized learner analytics.",
          image: "/projects/lms.png",
          tags: ["Laravel", "Livewire", "MySQL", "Tailwind CSS", "E-Learning"],
          featured: false,
          stats: { metric: "1000+", label: "Active Learners" },
          color: "#0284C7",
          gradient: "linear-gradient(135deg, rgba(2,132,199,0.18) 0%, rgba(124,58,237,0.18) 100%)",
          accentGlow: "rgba(2, 132, 199, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "basemart-id",
          title: "Basemart.id",
          category: "E-Commerce & SaaS",
          tagline: "Instant digital store catalog & automated WhatsApp ordering platform for online sellers.",
          description: "An instant online storefront platform turning manual back-and-forth WhatsApp inquiries into a single streamlined order with automated shipping rate calculation, stock management, and direct WhatsApp checkout.",
          image: "/projects/basemart.png",
          tags: ["Next.js", "Laravel", "WhatsApp API", "E-Commerce", "SaaS"],
          featured: true,
          stats: { metric: "1 Click", label: "WhatsApp Checkout" },
          color: "#EA580C",
          gradient: "linear-gradient(135deg, rgba(234,88,12,0.18) 0%, rgba(249,115,22,0.15) 100%)",
          accentGlow: "rgba(234, 88, 12, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "jualbeli-id",
          title: "Jualbeli.id",
          category: "Automotive Marketplace",
          tagline: "Trusted automotive marketplace for buying and selling certified cars and motorcycles.",
          description: "A comprehensive digital marketplace for cars and motorcycles equipped with advanced search filters, official vehicle document verification (STNK & BPKB), dealer listings, and 100% transparent transactions.",
          image: "/projects/jualbeli.png",
          tags: ["React", "Next.js", "Laravel API", "Automotive Marketplace", "MySQL"],
          featured: true,
          stats: { metric: "100%", label: "Verified Vehicles" },
          color: "#F59E0B",
          gradient: "linear-gradient(135deg, rgba(245,158,11,0.18) 0%, rgba(234,88,12,0.15) 100%)",
          accentGlow: "rgba(245, 158, 11, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        },
        {
          id: "caritau-com",
          title: "Caritau.com",
          category: "Media & Web Portal",
          tagline: "High-traffic digital news and public media portal with optimized SEO and ultra-fast caching.",
          description: "End-to-end development and maintenance of Caritau.com digital media platform utilizing a custom WordPress architecture, optimized database queries, CDN caching, and responsive editorial workflow serving thousands of daily readers.",
          tags: ["WordPress", "PHP", "MySQL", "SEO Engine", "Media Portal"],
          featured: false,
          stats: { metric: "High Traffic", label: "Daily Readers" },
          color: "#EA580C",
          gradient: "linear-gradient(135deg, rgba(234,88,12,0.18) 0%, rgba(245,158,11,0.15) 100%)",
          accentGlow: "rgba(234, 88, 12, 0.4)",
          demoUrl: "https://github.com/HXLMY",
          githubUrl: "https://github.com/HXLMY"
        }
      ]
    },

    experience: {
      sectionTag: "// Career Timeline",
      sectionTitle: "Experience &",
      sectionGradient: "Milestones",
      sectionDesc: "Professional journey across enterprise SAP S/4HANA engineering, modern full-stack web architectures, and digital leadership.",
      deliverablesHeading: "Key Responsibilities & Deliverables",
      items: [
        {
          period: "Apr 2026 — Present",
          role: "Partner Business & Full Stack Developer",
          company: "PT. NextSupply Indonesia",
          location: "Bandung, West Java",
          type: "Business Partner",
          description: "Serving as Business Partner and Full Stack Developer, responsible for engineering the Audit Assessment platform, designing streamlined audit process flows, formulating goods shipping logistics calculations, and establishing an Audit Advisor for Operational Excellence (OPEX).",
          points: [
            "Developed an Audit Assessment Website.",
            "Designed the Audit Assessment process flow.",
            "Formulated shipping cost calculations for goods delivery.",
            "Established an Audit Advisor for Operational Excellence (OPEX)."
          ],
          skills: ["Full Stack Development", "Audit Assessment", "Process Flow", "Shipping Calculations", "OPEX Advisor", "Supply Chain", "Business Partner"]
        },
        {
          period: "2024 — Present",
          role: "SAP ABAP Specialist",
          company: "Enterprise S/4HANA Ecosystem",
          location: "Indonesia",
          type: "Enterprise ERP",
          description: "Specializing in custom WRICEF object development, SAP S/4HANA enterprise module integration, mass data automation, and business process optimization.",
          points: [
            "Participated in intensive SAP ABAP on S/4HANA training programs.",
            "Developed custom interactive ALV Reports and enterprise Smartforms.",
            "Enhanced human resources management by developing custom HR Infotypes.",
            "Built custom Data Uploader and Data Loader programs for mass data processing & migration.",
            "Implemented system enhancements utilizing BAdIs (Business Add-Ins) and User/Customer Exits.",
            "Delivered WRICEF objects across various SAP modules: FICOFM, MM, PP, PM, HR, PS, SD, and HCM.",
            "Completed professional training in SAP Signavio (Process Mining) and SAP Analytics Cloud (SAC)."
          ],
          skills: ["SAP ABAP", "S/4HANA", "WRICEF", "ALV Reports", "Smartforms", "BAdI & Exits", "HR Infotypes", "Signavio", "SAC", "FICOFM", "MM", "PP", "PM", "SD", "HCM"]
        },
        {
          period: "Apr 2023 — Present",
          role: "Staff Web Programmer",
          company: "PT. Jhonlin Group",
          location: "Batulicin, South Kalimantan",
          type: "Full-time",
          description: "Responsible for engineering corporate web applications, high-throughput database architectures, and organizational workflow digitalizations.",
          points: [
            "Developed full-stack web projects using Laravel, Filament, and Livewire.",
            "Collaborated and managed source control workflows using Git/GitHub.",
            "Designed and optimized robust database structures with MySQL & MariaDB.",
            "Developed and maintained content management web portals using WordPress CMS.",
            "Developed web-based corporate projects: SAFETY SHE, Gateway Sispro & Integra, OTIS (Order Tracking Information System), KandApp, and Caritau.com.",
            "Developed WordPress CMS web projects: Kabarsiar.id and Caritau.com.",
            "Managed Remote Desktop infrastructure (configuration, administration, and troubleshooting)."
          ],
          skills: ["Laravel", "Filament", "Livewire", "MySQL", "MariaDB", "WordPress", "Git/GitHub", "System Admin"]
        },
        {
          period: "Oct 2022 — Mar 2023",
          role: "Management Trainee - Web Programmer",
          company: "Jhonlin Institute",
          location: "Batulicin, South Kalimantan",
          type: "Management Trainee",
          description: "Intensive acceleration program in managerial leadership, corporate governance, and enterprise web application engineering.",
          points: [
            "Studied Leadership, Public Speaking, and Professional Communication.",
            "Participated in Bintalsik (Mental and Physical Discipline Training).",
            "Gained comprehensive understanding of corporate culture and governance.",
            "Mastered advanced Laravel programming paradigms and clean architecture.",
            "Developed custom reporting modules for the web-based application OTIS (Order Tracking Information System)."
          ],
          skills: ["Laravel", "PHP", "Leadership", "Bintalsik", "OTIS Reporting", "Public Speaking"]
        },
        {
          period: "Mar 2022 — Jul 2022",
          role: "Web Developer & Squad Leader",
          company: "PT. Telkom Indonesia Tbk",
          location: "Indonesia (Regional 6 Kalimantan)",
          type: "Project Internship / SVCC",
          description: "Led regional SVCC 6 Kalimantan squad, designed UI/UX interfaces, and developed regional virtual expo platforms.",
          points: [
            "Designed high-fidelity UI/UX and wireframes using Figma.",
            "Created interactive website prototypes and user journey flows.",
            "Built and optimized relational database structures using MySQL.",
            "Served as Squad Leader of SVCC 6 (Kalimantan Region) and delivered weekly Key Result reports.",
            "Developed the 'Digitalize Borneo Virtual Expo' project in collaboration with PT Telkom Indonesia Regional 6.",
            "Developed the 'Borneo Education and Tourism Fair' project in collaboration with Smarteye.id.",
            "Delivered Final Project: Developed and launched the official SVCC Website."
          ],
          skills: ["Figma", "UI/UX", "MySQL", "JavaScript", "Squad Leader", "Virtual Expo", "Smarteye.id"]
        },
        {
          period: "Aug 2021 — Feb 2022",
          role: "Web Programmer",
          company: "PT. Hacktiv8 Indonesia",
          location: "Jakarta, Indonesia",
          type: "Immersive Program",
          description: "Acceleration program in modern front-end web engineering, asynchronous JavaScript, and interactive DOM manipulation.",
          points: [
            "Developed responsive profile landing pages and web components.",
            "Learned and implemented JavaScript core programming, Fetch API, and DOM manipulation.",
            "Created and published the web project 'BBTech Towards Indonesia 4.0'."
          ],
          skills: ["JavaScript", "Fetch API", "DOM Manipulation", "HTML5", "CSS3", "Landing Page"]
        },
        {
          period: "Jul 2021 — Sep 2021",
          role: "Data Entry & Archive Support",
          company: "BPN Banjarbaru (National Land Agency)",
          location: "Banjarbaru, South Kalimantan",
          type: "Internship / Support",
          description: "Land registry database administration and development of a custom land deed entry application for archival efficiency.",
          points: [
            "Processed and updated land ownership, certification, and mapping data.",
            "Developed a custom web-based application 'Land Deed Data Entry Application' for the National Land Agency (BPN) of Banjarbaru City."
          ],
          skills: ["Web Application", "Data Processing", "MySQL", "PHP", "Land Registry System"]
        }
      ]
    },

    testimonials: {
      sectionTag: "// Testimonials & Endorsements",
      sectionTitle: "Trusted by",
      sectionGradient: "Visionaries",
      sectionDesc: "What clients, founders, and engineering leaders say about collaborating with me.",
      items: [
        {
          name: "Budi Santoso",
          role: "IT Director & Enterprise Lead",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          content: "Helmy possesses an extraordinarily strong grasp of enterprise backends (Laravel & SAP ABAP) while effortlessly crafting ultra-smooth, fast modern web interfaces.",
          rating: 5
        },
        {
          name: "Rina Wijaya",
          role: "Product Manager, Digital Solutions",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          content: "Projects delivered by Helmy consistently meet clean code architecture standards, scalability, and strict deadlines. Highly recommended!",
          rating: 5
        }
      ]
    },

    contact: {
      sectionTag: "// Get In Touch",
      sectionTitle: "Let's Build Something",
      sectionGradient: "Extraordinary",
      sectionDesc: "Have a project idea, enterprise system need, full-stack web requirement, or want to discuss collaboration opportunities? Send a message today.",
      leftTitle: "Ready to bring your digital vision to life?",
      leftDesc: "I am always open to discussing innovative web projects, enterprise solutions, Laravel / SAP ABAP backend integrations, or system architecture consultations.",
      directWA: "Direct WhatsApp",
      directEmail: "Direct Email",
      phoneLabel: "+62 857-1081-5159",
      copyText: "Copy",
      copiedText: "Copied!",
      fastResponseTitle: "Fast Response Guaranteed:",
      fastResponseDesc: "Ready to connect and reply promptly to your inquiries.",
      successTitle: "Opening WhatsApp...",
      successDesc: "Thank you for reaching out to Helmy Wahyudi. You are being redirected to official WhatsApp to continue the conversation.",
      sendAnother: "Send Another Message",
      nameLabel: "FULL NAME",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "EMAIL ADDRESS / CONTACT",
      emailPlaceholder: "name@company.com",
      serviceLabel: "SERVICE / REQUIREMENT TYPE",
      serviceOptions: [
        { value: "Full-Stack Web App", label: "Full-Stack Web Application (Laravel / React / Vue / Next.js)" },
        { value: "SAP ABAP Consulting", label: "SAP ABAP Customization & ERP Integration (S/4HANA)" },
        { value: "Consultation / Mentoring", label: "Database Architecture & Backend API Consultation" }
      ],
      messageLabel: "PROJECT DETAILS OR MESSAGE",
      messagePlaceholder: "Describe your project vision, timeline, and expectations...",
      submitBtn: "Send Message to WhatsApp",
      submittingBtn: "Redirecting to WhatsApp..."
    },

    footer: {
      navTitle: "Navigation",
      socialTitle: "Social & Links",
      navItems: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" }
      ],
      directEmailLabel: "Direct Email",
      timeLabel: "WIB (UTC+7)",
      copyright: "All rights reserved. Built with React & Three.js.",
      backToTop: "Back to Top"
    }
  }
};
