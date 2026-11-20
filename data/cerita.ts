export type Cerita = {
  id: string;
  judul: string;
  ringkasan: string;
  isi: string[];
  lokasi: string;
  tanggal: string;
  kategori: string;
  gambar: string;
  dokumentasi?: string[];
  harga: number;
  durasi: string;
  termasuk: string[];
};

export const ceritaList: Cerita[] = [
  {
    id: "sunrise-bromo",
    judul: "Berburu sunrise di puncak Penanjakan, Bromo",
    ringkasan:
      "Perjalanan dini hari menembus dinginnya udara pegunungan untuk melihat matahari terbit di atas lautan kabut Bromo.",
    lokasi: "Gunung Bromo, Jawa Timur",
    tanggal: "3 September 2026",
    kategori: "Gunung",
    gambar:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTZ2GO_W83N_KtmPxpVENv5GqfSLHkmnSUMLMEXBTVooRXl05Ic1x3_v4zYckM25SA1MpbgjGL96eUmoTFwzTFaIQD3Wb1dzzEugt1WlX9ajA4fxpnaUZ4U3Y50k_8zMGmQBV2lINI5Axvo-q70htVgBfbZv1EiHcFfmgTJtsuUDzEiZ83UdtHNwtOoauW/s1600/sunrise-bromo.jpg",
    harga: 850000,
    durasi: "2 hari 1 malam",
    termasuk: [
      "Sewa jip 4x4 khusus sunrise",
      "Tiket masuk kawasan Taman Nasional Bromo",
      "Penginapan 1 malam dekat Cemoro Lawang",
      "Pemandu lokal",
      "Fotografer perjalanan + file foto digital",
      "Sarapan hangat setelah sunrise",
    ],
    isi: [
      "Perjalanan dimulai pukul 3 pagi dari basecamp Cemoro Lawang, menembus udara dingin yang bisa mencapai 5 derajat Celsius menjelang subuh.",
      "Dari titik pandang Penanjakan, matahari perlahan muncul di balik siluet Gunung Semeru, menyinari lautan awan yang menyelimuti kawah Bromo.",
      "Setelah sunrise, perjalanan dilanjutkan turun ke lautan pasir dan mendaki anak tangga menuju bibir kawah, pemandangan yang berbeda sama sekali dari kejauhan.",
    ],
  },
  {
    id: "snorkeling-raja-ampat",
    judul: "Snorkeling di perairan jernih Raja Ampat",
    ringkasan:
      "Menjelajahi salah satu titik terumbu karang paling kaya di dunia, dengan visibilitas air yang nyaris sempurna.",
    lokasi: "Raja Ampat, Papua Barat",
    tanggal: "22 Agustus 2026",
    kategori: "Bahari",
    gambar:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pulau%20Piaynemo,%20Raja%20Ampat.jpg",
    harga: 4500000,
    durasi: "4 hari 3 malam",
    termasuk: [
      "Penginapan 3 malam di homestay lokal",
      "Perahu antar pulau selama trip",
      "Alat snorkeling lengkap",
      "Pemandu wisata bersertifikat",
      "Fotografer bawah air + file foto digital",
      "Makan 3x sehari selama trip",
      "Tiket masuk kawasan konservasi (PIN Raja Ampat)",
    ],
    isi: [
      "Perairan di sekitar Piaynemo dan Wayag dikenal sebagai rumah bagi ribuan spesies ikan karang, salah satu keanekaragaman hayati laut tertinggi di dunia.",
      "Dari atas perahu, warna air berubah dari biru tua ke toska jernih saat mendekati gugusan karang dangkal, pertanda spot snorkeling terbaik.",
      "Selain terumbu karang, kawasan ini juga jadi tempat singgah penyu dan berbagai jenis ikan pari yang cukup jinak terhadap perahu.",
    ],
  },
  {
    id: "desa-wisata-penglipuran",
    judul: "Menyusuri jalan bebatuan Desa Penglipuran",
    ringkasan:
      "Desa adat di Bali ini menjaga tata ruang tradisional dan kebersihan lingkungan yang membuatnya dikenal hingga mancanegara.",
    lokasi: "Bangli, Bali",
    tanggal: "10 Agustus 2026",
    kategori: "Budaya",
    gambar:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Penglipuran%20Village%20walkpath.jpg",
    harga: 350000,
    durasi: "1 hari",
    termasuk: [
      "Transportasi AC pulang-pergi dari Denpasar",
      "Tiket masuk Desa Penglipuran",
      "Pemandu wisata lokal",
      "Fotografer + file foto digital",
      "Makan siang khas Bali",
    ],
    isi: [
      "Desa Penglipuran menerapkan tata ruang Tri Mandala, membagi wilayah desa menjadi tiga zona: suci, hunian, dan kuburan, sesuai filosofi Hindu Bali.",
      "Setiap rumah memiliki gapura (angkul-angkul) dengan bentuk yang seragam, menciptakan pemandangan jalan utama yang rapi dan khas.",
      "Warga desa juga menerapkan aturan ketat soal kendaraan bermotor. Jalan utama hanya bisa dilalui pejalan kaki, menjaga suasana desa tetap tenang.",
    ],
  },
  {
    id: "borobudur-sunrise",
    judul: "Pagi hari di Candi Borobudur, Magelang",
    ringkasan:
      "Menyaksikan candi Buddha terbesar di dunia perlahan terlihat dari balik kabut pagi, lalu menyusuri relief dan stupa-stupanya.",
    lokasi: "Magelang, Jawa Tengah",
    tanggal: "28 Juli 2026",
    kategori: "Budaya",
    gambar:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Borobudur-Nothwest-view.jpg",
    harga: 600000,
    durasi: "1 hari",
    termasuk: [
      "Transportasi dari Yogyakarta pulang-pergi",
      "Tiket masuk kawasan Candi Borobudur",
      "Pemandu sejarah berlisensi",
      "Fotografer + file foto digital",
      "Sarapan pagi di sekitar candi",
    ],
    isi: [
      "Borobudur dibangun pada abad ke-9 dan merupakan candi Buddha Mahayana terbesar di dunia. Datang di pagi hari membuat suasananya jauh lebih tenang dan cahayanya lebih bagus untuk foto.",
      "Pemandu akan menjelaskan relief di dinding candi yang menceritakan ajaran Buddha dan kehidupan masyarakat Jawa kuno pada masa itu.",
      "Perjalanan ditutup dengan naik ke teras atas untuk melihat deretan stupa berlubang dan pemandangan perbukitan di sekeliling candi.",
    ],
  },
  {
    id: "labuan-bajo-padar",
    judul: "Berlayar ke Pulau Padar dan Komodo, Labuan Bajo",
    ringkasan:
      "Pelayaran santai antar pulau, mendaki bukit Padar untuk pemandangan teluk berwarna-warni, dan bertemu komodo di habitat aslinya.",
    lokasi: "Labuan Bajo, Nusa Tenggara Timur",
    tanggal: "15 Juli 2026",
    kategori: "Bahari",
    gambar:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Komodo%20National%20Park%20Indonesia%2001.jpg",
    harga: 2750000,
    durasi: "3 hari 2 malam",
    termasuk: [
      "Kapal phinisi dengan kabin selama pelayaran",
      "Tiket masuk Taman Nasional Komodo",
      "Pemandu dan ranger lokal",
      "Alat snorkeling",
      "Fotografer drone + file foto digital",
      "Makan 3x sehari di atas kapal",
    ],
    isi: [
      "Taman Nasional Komodo mencakup beberapa pulau besar dan puluhan pulau kecil, dan dikenal sebagai habitat komodo, kadal terbesar di dunia.",
      "Pendakian singkat ke puncak Pulau Padar memberi pemandangan tiga teluk dengan warna pasir yang berbeda, salah satu sudut foto paling terkenal di Indonesia.",
      "Di sela pelayaran, ada waktu untuk snorkeling di perairan jernih dan singgah di pantai-pantai kecil yang hanya bisa dicapai dengan kapal.",
    ],
  },
  {
    id: "danau-toba-samosir",
    judul: "Bermalam di tepi Danau Toba, Pulau Samosir",
    ringkasan:
      "Menyeberang ke Samosir, mengenal budaya Batak, dan menikmati danau vulkanik terbesar di Asia Tenggara dari dekat.",
    lokasi: "Samosir, Sumatera Utara",
    tanggal: "2 Juli 2026",
    kategori: "Alam",
    gambar:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Toba.jpg",
    harga: 1850000,
    durasi: "3 hari 2 malam",
    termasuk: [
      "Penginapan 2 malam di tepi danau",
      "Penyeberangan kapal ke Pulau Samosir",
      "Sewa motor atau mobil keliling pulau",
      "Pemandu lokal berbahasa Batak dan Indonesia",
      "Fotografer + file foto digital",
      "Makan malam khas Batak",
    ],
    isi: [
      "Danau Toba terbentuk dari letusan gunung api purba dan menjadi danau vulkanik terbesar di Asia Tenggara. Di tengahnya berdiri Pulau Samosir, pusat budaya Batak Toba.",
      "Di Samosir, kamu bisa mengunjungi desa-desa adat dengan rumah tradisional Batak, melihat situs batu kuno, dan belajar tentang tradisi tenun ulos.",
      "Sore hari paling menyenangkan dihabiskan di tepi danau, menunggu matahari tenggelam sambil menikmati kopi lokal.",
    ],
  },
  {
    id: "tana-toraja-tongkonan",
    judul: "Mengenal rumah Tongkonan dan budaya Tana Toraja",
    ringkasan:
      "Menjelajahi desa adat dengan atap melengkung khas, tebing makam, dan lanskap sawah berundak di dataran tinggi Sulawesi Selatan.",
    lokasi: "Tana Toraja, Sulawesi Selatan",
    tanggal: "20 Juni 2026",
    kategori: "Budaya",
    gambar:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Toraja%20house.jpg",
    harga: 2200000,
    durasi: "3 hari 2 malam",
    termasuk: [
      "Penginapan 2 malam di Rantepao",
      "Mobil dengan sopir selama di Toraja",
      "Pemandu budaya lokal",
      "Tiket masuk desa adat dan situs makam",
      "Fotografer + file foto digital",
      "Makan siang khas Toraja",
    ],
    isi: [
      "Tongkonan adalah rumah adat Toraja dengan atap melengkung seperti perahu. Letaknya biasanya menghadap utara dan dihiasi ukiran warna merah, hitam, dan kuning.",
      "Masyarakat Toraja terkenal dengan upacara adat dan tradisi pemakamannya yang unik, termasuk makam di tebing batu yang bisa dikunjungi wisatawan.",
      "Selain budaya, daerah ini punya pemandangan pegunungan dan sawah berundak yang indah, terutama dilihat dari kawasan Batutumonga.",
    ],
  },
  {
    id: "kawah-ijen",
    judul: "Mendaki dini hari menuju Kawah Ijen",
    ringkasan:
      "Menyusuri jalur pendakian saat langit masih gelap dan menyambut pagi di tepi kawah berwarna biru kehijauan.",
    lokasi: "Kawah Ijen, Banyuwangi",
    tanggal: "12 Juni 2026",
    kategori: "Gunung",
    gambar:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 950000,
    durasi: "2 hari 1 malam",
    termasuk: [
      "Pemandu pendakian lokal",
      "Tiket masuk kawasan Kawah Ijen",
      "Masker keselamatan",
      "Transportasi lokal dari Banyuwangi",
      "Sarapan setelah pendakian",
    ],
    isi: [
      "Pendakian biasanya dimulai sebelum tengah malam agar perjalanan menuju bibir kawah terasa lebih sejuk. Pemandu lokal menemani perjalanan dan membantu mengatur waktu istirahat.",
      "Saat fajar, pemandangan kawah dan danau berwarna toska perlahan terlihat dari jalur pendakian. Udara pegunungan yang segar membuat perjalanan terasa berbeda dari aktivitas sehari-hari.",
      "Setelah menikmati matahari terbit, perjalanan dilanjutkan turun sambil melihat lanskap pegunungan Banyuwangi dari sudut yang lebih luas.",
    ],
  },
  {
    id: "nusa-penida-kelingking",
    judul: "Menikmati tebing dan pantai Nusa Penida",
    ringkasan:
      "Mengunjungi tebing Kelingking dan beberapa pantai Nusa Penida dengan pemandangan laut biru dari atas bukit.",
    lokasi: "Nusa Penida, Bali",
    tanggal: "5 Juni 2026",
    kategori: "Bahari",
    gambar:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 750000,
    durasi: "1 hari",
    termasuk: [
      "Tiket kapal pulang-pergi dari Bali",
      "Transportasi selama di Nusa Penida",
      "Pemandu wisata lokal",
      "Tiket masuk destinasi",
      "Makan siang",
    ],
    isi: [
      "Perjalanan dimulai dengan menyeberang dari Bali menuju Nusa Penida. Setelah tiba, pemandu lokal mengajak menjelajahi beberapa sudut pulau yang terkenal dengan tebing dan garis pantainya.",
      "Dari atas tebing Kelingking, laut terbuka terlihat membentang di bawah tebing kapur. Pengunjung dapat menikmati pemandangan dari area aman tanpa harus turun ke pantai.",
      "Sebelum kembali ke Bali, perjalanan singgah di pantai lain untuk menikmati suasana pulau dan beristirahat setelah berkeliling.",
    ],
  },
  {
    id: "wakatobi-snorkeling",
    judul: "Snorkeling dan mengenal pesisir Wakatobi",
    ringkasan:
      "Menghabiskan waktu di perairan jernih Wakatobi, menikmati terumbu karang, dan berkenalan dengan kehidupan pesisir.",
    lokasi: "Wakatobi, Sulawesi Tenggara",
    tanggal: "29 Mei 2026",
    kategori: "Bahari",
    gambar:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 3200000,
    durasi: "3 hari 2 malam",
    termasuk: [
      "Penginapan 2 malam",
      "Perahu menuju titik snorkeling",
      "Alat snorkeling",
      "Pemandu lokal",
      "Makan selama perjalanan",
    ],
    isi: [
      "Wakatobi dikenal dengan kehidupan bawah lautnya yang beragam. Perjalanan perahu membawa peserta ke beberapa titik snorkeling dengan arahan pemandu lokal.",
      "Di sela kegiatan laut, peserta dapat beristirahat di pesisir dan mengenal kehidupan masyarakat setempat yang dekat dengan laut.",
      "Perjalanan ditutup dengan menikmati suasana sore di pulau sebelum kembali ke penginapan.",
    ],
  },
  {
    id: "pantai-tiga-warna-malang",
    judul: "Menjelajahi Pantai Tiga Warna di Malang Selatan",
    ringkasan:
      "Menikmati pantai dengan gradasi warna laut dan kawasan konservasi pesisir di Malang Selatan.",
    lokasi: "Pantai Tiga Warna, Malang, Jawa Timur",
    tanggal: "18 Mei 2026",
    kategori: "Bahari",
    gambar:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 450000,
    durasi: "1 hari",
    termasuk: [
      "Pemandu lokal",
      "Tiket masuk kawasan pantai",
      "Perahu menuju area snorkeling",
      "Alat snorkeling",
      "Makan siang",
    ],
    isi: [
      "Pantai Tiga Warna berada di pesisir Malang Selatan dan dikenal dengan perbedaan warna air laut yang terlihat dari area pantai. Perjalanan menuju kawasan ini melewati jalur pesisir yang hijau.",
      "Kawasan pantai menerapkan aturan konservasi dan pembatasan pengunjung. Pemandu membantu menjelaskan aturan serta menjaga agar kegiatan wisata tetap tertib.",
      "Selain menikmati pemandangan, pengunjung dapat mengikuti kegiatan snorkeling di area yang diizinkan dan beristirahat sebelum kembali ke kota.",
    ],
  },
  {
    id: "kampung-warna-warni-malang",
    judul: "Berjalan menyusuri Kampung Warna-Warni Jodipan",
    ringkasan:
      "Menjelajahi gang-gang penuh warna dan sudut kreatif di kawasan tepi Sungai Brantas, Kota Malang.",
    lokasi: "Kampung Jodipan, Kota Malang, Jawa Timur",
    tanggal: "14 Mei 2026",
    kategori: "Budaya",
    gambar:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 150000,
    durasi: "Setengah hari",
    termasuk: [
      "Pemandu jalan kaki",
      "Tiket masuk kampung wisata",
      "Air mineral",
      "Rekomendasi kuliner lokal",
    ],
    isi: [
      "Kampung Jodipan menawarkan pengalaman jalan kaki melewati gang-gang dengan dinding berwarna cerah dan beragam karya visual. Suasananya memperlihatkan sisi kreatif kehidupan warga Kota Malang.",
      "Di beberapa titik, pengunjung dapat melihat kawasan kampung dari jembatan dan berfoto dengan latar warna-warni. Pemandu lokal membantu menunjukkan jalur yang nyaman untuk dijelajahi.",
      "Wisata ini cocok dipadukan dengan mencicipi jajanan dan kuliner khas Malang di sekitar pusat kota.",
    ],
  },
  {
    id: "coban-rondo-malang",
    judul: "Menikmati udara sejuk di Coban Rondo",
    ringkasan:
      "Menghabiskan waktu di kawasan air terjun dan hutan pinus sejuk di wilayah Pujon, Kabupaten Malang.",
    lokasi: "Coban Rondo, Kabupaten Malang, Jawa Timur",
    tanggal: "9 Mei 2026",
    kategori: "Alam",
    gambar:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 300000,
    durasi: "1 hari",
    termasuk: [
      "Transportasi dari Kota Malang",
      "Tiket masuk kawasan",
      "Pemandu lokal",
      "Air mineral",
    ],
    isi: [
      "Perjalanan menuju Coban Rondo melewati kawasan perbukitan yang berhawa sejuk. Setibanya di area wisata, pengunjung dapat berjalan santai menuju air terjun.",
      "Suara air dan pepohonan di sekitar jalur memberikan suasana yang tenang untuk melepas penat. Tetap ikuti jalur yang tersedia dan berhati-hati di area yang licin.",
      "Sebelum kembali ke Kota Malang, perjalanan dapat dilanjutkan dengan menikmati pemandangan kawasan Pujon dan kuliner hangat setempat.",
    ],
  },
  {
    id: "dataran-tinggi-dieng",
    judul: "Menyambut pagi di dataran tinggi Dieng",
    ringkasan:
      "Menjelajahi lanskap pegunungan, telaga, dan kompleks candi di dataran tinggi Dieng, Jawa Tengah.",
    lokasi: "Dieng, Wonosobo, Jawa Tengah",
    tanggal: "2 Mei 2026",
    kategori: "Alam",
    gambar:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 650000,
    durasi: "2 hari 1 malam",
    termasuk: [
      "Transportasi lokal",
      "Tiket masuk objek wisata",
      "Pemandu wisata",
      "Penginapan 1 malam",
      "Sarapan",
    ],
    isi: [
      "Udara dingin dan pemandangan pegunungan menyambut perjalanan di dataran tinggi Dieng. Beberapa titik pandang dapat dikunjungi sejak pagi untuk melihat lanskap kawasan dari ketinggian.",
      "Perjalanan berlanjut ke telaga dan kompleks candi yang menjadi bagian penting dari sejarah kawasan Dieng. Pemandu membantu menjelaskan kisah dan suasana setiap lokasi.",
      "Di sela perjalanan, pengunjung dapat mencicipi hidangan hangat dan hasil pertanian lokal sebelum kembali ke penginapan.",
    ],
  },
  {
    id: "karimunjawa-jepara",
    judul: "Berlayar dan snorkeling di Karimunjawa",
    ringkasan:
      "Menyusuri pulau-pulau kecil, menikmati pantai, dan melihat kehidupan bawah laut di Kepulauan Karimunjawa.",
    lokasi: "Karimunjawa, Jepara, Jawa Tengah",
    tanggal: "25 April 2026",
    kategori: "Bahari",
    gambar:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 1950000,
    durasi: "3 hari 2 malam",
    termasuk: [
      "Penginapan 2 malam",
      "Perahu wisata antarpulau",
      "Alat snorkeling",
      "Pemandu lokal",
      "Makan selama trip",
    ],
    isi: [
      "Perjalanan ke Karimunjawa mengajak pengunjung menikmati suasana kepulauan di utara Jepara. Perahu menjadi sarana utama untuk berpindah dari satu pulau ke pulau lain.",
      "Saat cuaca mendukung, kegiatan snorkeling memberi kesempatan melihat terumbu karang dan ikan di perairan dangkal. Pemandu akan mengarahkan pengunjung untuk menjaga lingkungan laut.",
      "Waktu sore dapat diisi dengan berjalan di tepi pantai dan menikmati matahari terbenam sebelum kembali ke penginapan.",
    ],
  },
  {
    id: "candi-prambanan",
    judul: "Menelusuri kisah relief Candi Prambanan",
    ringkasan:
      "Mengagumi kompleks candi Hindu dan relief Ramayana di salah satu landmark bersejarah Yogyakarta.",
    lokasi: "Candi Prambanan, Sleman, DI Yogyakarta",
    tanggal: "18 April 2026",
    kategori: "Budaya",
    gambar:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 500000,
    durasi: "1 hari",
    termasuk: [
      "Transportasi dari Kota Yogyakarta",
      "Tiket masuk kawasan",
      "Pemandu sejarah",
      "Air mineral",
    ],
    isi: [
      "Kompleks Prambanan terdiri dari candi-candi dengan arsitektur yang menjulang dan relief yang menyimpan kisah dari masa lampau. Mengunjungi area ini bersama pemandu membuat detail sejarahnya lebih mudah dipahami.",
      "Pengunjung dapat berjalan mengikuti jalur kunjungan resmi sambil mengamati bentuk candi dan relief yang menghiasi dindingnya.",
      "Sisihkan waktu untuk menikmati suasana kawasan dan mengambil foto dari titik yang diperbolehkan sebelum kembali ke Yogyakarta.",
    ],
  },
  {
    id: "belitung-tanjung-tinggi",
    judul: "Island hopping di pantai granit Belitung",
    ringkasan:
      "Berlayar menyusuri pulau kecil dan pantai berpasir putih dengan formasi batu granit khas Belitung.",
    lokasi: "Tanjung Tinggi, Belitung, Kepulauan Bangka Belitung",
    tanggal: "11 April 2026",
    kategori: "Bahari",
    gambar:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 1250000,
    durasi: "2 hari 1 malam",
    termasuk: [
      "Transportasi lokal",
      "Perahu island hopping",
      "Pemandu wisata",
      "Makan siang",
      "Perlengkapan snorkeling",
    ],
    isi: [
      "Pantai di Belitung terkenal dengan pasir cerah dan bongkahan granit yang tersebar di tepi laut. Pemandangan pantai dapat dinikmati dari darat maupun dari atas perahu.",
      "Island hopping membawa pengunjung singgah ke beberapa pulau kecil. Waktu di setiap lokasi dapat digunakan untuk berenang, snorkeling, atau sekadar menikmati pemandangan.",
      "Perjalanan ditutup dengan menikmati suasana pantai saat sore sebelum kembali ke penginapan.",
    ],
  },
  {
    id: "bunaken-manado",
    judul: "Menyelami keindahan laut Taman Nasional Bunaken",
    ringkasan:
      "Menjelajahi perairan Bunaken dan terumbu karangnya bersama pemandu laut dari Manado.",
    lokasi: "Taman Nasional Bunaken, Manado, Sulawesi Utara",
    tanggal: "4 April 2026",
    kategori: "Bahari",
    gambar:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 1750000,
    durasi: "2 hari 1 malam",
    termasuk: [
      "Perahu dari Manado",
      "Pemandu snorkeling",
      "Alat snorkeling",
      "Tiket kawasan konservasi",
      "Makan siang",
    ],
    isi: [
      "Bunaken dapat dijangkau dengan perahu dari Manado. Pemandu lokal membantu memilih kegiatan yang sesuai, mulai dari menikmati pantai hingga snorkeling.",
      "Kawasan taman nasional memiliki ekosistem laut yang perlu dijaga. Pengunjung diajak mengikuti arahan pemandu dan tidak menyentuh atau mengambil biota laut.",
      "Setelah kegiatan di air, perjalanan dilanjutkan dengan waktu santai di pulau sebelum kembali ke Manado.",
    ],
  },
  {
    id: "pulau-derawan",
    judul: "Menjelajahi pulau dan laguna Derawan",
    ringkasan:
      "Menikmati suasana kepulauan Derawan, menjelajahi laguna, dan mengenal kehidupan laut Kalimantan Timur.",
    lokasi: "Kepulauan Derawan, Berau, Kalimantan Timur",
    tanggal: "28 Maret 2026",
    kategori: "Bahari",
    gambar:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 2800000,
    durasi: "3 hari 2 malam",
    termasuk: [
      "Penginapan 2 malam",
      "Perahu antarpulau",
      "Pemandu lokal",
      "Alat snorkeling",
      "Makan selama perjalanan",
    ],
    isi: [
      "Kepulauan Derawan menawarkan perjalanan laut dengan pemandangan pulau-pulau kecil dan pesisir yang tenang. Perjalanan perahu menjadi bagian penting dari pengalaman menjelajahi kawasan ini.",
      "Pengunjung dapat memilih aktivitas snorkeling atau menikmati suasana pantai sesuai kondisi laut dan arahan pemandu.",
      "Di sela kegiatan, waktu dapat digunakan untuk mengenal kehidupan masyarakat pesisir dan menikmati hidangan laut setempat.",
    ],
  },
  {
    id: "banda-neira-maluku",
    judul: "Menyusuri jejak sejarah Banda Neira",
    ringkasan:
      "Mengenal benteng, jejak perdagangan rempah, dan pemandangan laut yang mengelilingi Kepulauan Banda.",
    lokasi: "Banda Neira, Maluku Tengah, Maluku",
    tanggal: "21 Maret 2026",
    kategori: "Sejarah",
    gambar:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 3500000,
    durasi: "4 hari 3 malam",
    termasuk: [
      "Penginapan 3 malam",
      "Pemandu sejarah lokal",
      "Transportasi lokal",
      "Perahu untuk kunjungan pulau",
      "Makan selama trip",
    ],
    isi: [
      "Banda Neira menyimpan banyak cerita tentang perdagangan rempah dan pertemuan berbagai budaya. Berjalan kaki di sekitar kawasan bersejarah membantu pengunjung mengenal lapisan sejarah kepulauan ini.",
      "Perjalanan dapat mencakup kunjungan ke benteng dan bangunan bersejarah bersama pemandu lokal yang mengenal kisah setempat.",
      "Di luar wisata sejarah, pemandangan laut dan pulau-pulau di sekitarnya menjadi latar perjalanan yang tenang.",
    ],
  },
  {
    id: "ujung-kulon-banten",
    judul: "Mengenal alam liar Taman Nasional Ujung Kulon",
    ringkasan:
      "Menjelajahi kawasan konservasi pesisir dan hutan tropis di ujung barat Pulau Jawa bersama pemandu.",
    lokasi: "Taman Nasional Ujung Kulon, Banten",
    tanggal: "14 Maret 2026",
    kategori: "Alam",
    gambar:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 2400000,
    durasi: "3 hari 2 malam",
    termasuk: [
      "Pemandu kawasan konservasi",
      "Perahu lokal",
      "Penginapan 2 malam",
      "Tiket dan izin masuk kawasan",
      "Makan selama perjalanan",
    ],
    isi: [
      "Ujung Kulon merupakan kawasan konservasi dengan hutan dan pesisir yang menjadi habitat berbagai satwa liar. Kegiatan wisata harus mengikuti aturan taman nasional dan didampingi pemandu.",
      "Perjalanan menyusuri kawasan dilakukan dengan memperhatikan keselamatan serta menjaga jarak dari satwa. Tidak semua area dapat dimasuki pengunjung.",
      "Pengalaman ini mengajak pengunjung mengenal pentingnya konservasi sambil menikmati alam pesisir Banten.",
    ],
  },
  {
    id: "baluran-situbondo",
    judul: "Bersafari di savana Taman Nasional Baluran",
    ringkasan:
      "Menyusuri savana, hutan, dan pesisir Baluran untuk melihat keragaman lanskap di Jawa Timur.",
    lokasi: "Taman Nasional Baluran, Situbondo, Jawa Timur",
    tanggal: "7 Maret 2026",
    kategori: "Alam",
    gambar:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
    dokumentasi: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",
    ],
    harga: 700000,
    durasi: "1 hari",
    termasuk: [
      "Transportasi lokal",
      "Tiket masuk taman nasional",
      "Pemandu wisata",
      "Air mineral",
      "Makan siang",
    ],
    isi: [
      "Taman Nasional Baluran memiliki lanskap yang beragam, mulai dari savana hingga kawasan hutan dan pantai. Perjalanan menggunakan jalur yang telah ditentukan di dalam taman nasional.",
      "Pengunjung dapat mengamati satwa liar dari jarak aman. Pemandu membantu menjelaskan ekosistem serta aturan untuk menjaga habitat alami.",
      "Sebelum meninggalkan kawasan, perjalanan dapat singgah di area pesisir sesuai kondisi dan peraturan yang berlaku.",
    ],
  },
];

export function getCeritaById(id: string) {
  return ceritaList.find((c) => c.id === id);
}