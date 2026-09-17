export interface Produk {
  id: string;
  nama: string;
  harga: number;
  deskripsi: string;
  gambar: string;
  kategori: string;
}

export const dataCerita: Produk[] = [
  // --- KAOS & T-SHIRT ---
  {
    id: '1',
    nama: 'Kaos Oversize Bromo Series',
    harga: 129000,
    deskripsi: 'Bahan katun combed 24s adem dengan sablon grafik Bromo minimalis.',
    gambar: '/Image/gunung-bromo.jpg',
    kategori: 'Kaos',
  },
  {
    id: '101',
    nama: 'Kaos Polos Heavyweight Cotton',
    harga: 89000,
    deskripsi: 'Kaos polos katun combed 20s tebal, tidak menerawang, dan potongan boxy fit.',
    gambar: '/Image/gunung-bromo.jpg',
    kategori: 'Kaos',
  },
  {
    id: '102',
    nama: 'Kaos Graphic Vintage Graphic Tee',
    harga: 135000,
    deskripsi: 'Design grafik washed vintage dengan bahan katun lembut dan sablon discharge.',
    gambar: '/Image/gunung-bromo.jpg',
    kategori: 'Kaos',
  },
  {
    id: '103',
    nama: 'Kaos Stripe Horizontal Retro',
    harga: 99000,
    deskripsi: 'Kaos motif garis-garis gaya retro bahan katun adem dan tidak mudah melar.',
    gambar: '/Image/gunung-bromo.jpg',
    kategori: 'Kaos',
  },

  // --- JAKET & OUTER ---
  {
    id: '2',
    nama: 'Jaket STONE ISLAND ',
    harga: 2850000,
    deskripsi: 'Stone Island adalah merek outerwear premium asal Italia yang sangat terkenal di dunia fashion, streetwear, hingga terrace culture. Didirikan pada tahun 1982 oleh Massimo Osti, Stone Island terkenal karena inovasi material tekstil dan teknik pewarnaan fabric (garment dyeing) yang highly advanced..',
    gambar: '/Image/si.jpg',
    kategori: 'Jaket',
  },

  // --- SEPATU & SNEAKERS ---
  {
    id: '3',
    nama: 'adidas bali ',
    harga: 2000000,
    deskripsi: 'Adidas Bali adalah salah satu seri sepatu ikonik dari lini Adidas Island Series yang pertama kali diperkenalkan pada tahun 1977. Sepatu ini dirancang sebagai penghormatan terhadap keindahan pulau Bali, Indonesia, dan menjadi favorit para kolektor serta pecinta sneaker terrace culture & casuals..',
    gambar: '/Image/adidas bali.jpg',
    kategori: 'Sepatu',
  },

  // --- AKSESORIS ---
  {
    id: '4',
    nama: 'adidas backpack',
    harga: 1750000,
    deskripsi: 'Tas ransel berkapasitas besar dengan kompartemen khusus laptop 15 inci.',
    gambar: '/Image/adidas bp.webp',
    kategori: 'Aksesoris',
  },
];