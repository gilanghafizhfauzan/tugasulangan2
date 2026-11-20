export type Trip = {
  id: string;
  nama: string;
  lokasi: string;
  durasi: string;
  harga: number;
  deskripsi: string;
  gambar: string;
  termasuk: string[];
};

export const tripList: Trip[] = [
  {
    id: "trip-bromo-sunrise",
    nama: "Bromo Sunrise Trip",
    lokasi: "Gunung Bromo, Jawa Timur",
    durasi: "2 hari 1 malam",
    harga: 850000,
    deskripsi:
      "Naik jip dini hari ke Penanjakan, lihat sunrise di atas lautan kabut, lalu turun ke kawah dan lautan pasir.",
    gambar:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTZ2GO_W83N_KtmPxpVENv5GqfSLHkmnSUMLMEXBTVooRXl05Ic1x3_v4zYckM25SA1MpbgjGL96eUmoTFwzTFaIQD3Wb1dzzEugt1WlX9ajA4fxpnaUZ4U3Y50k_8zMGmQBV2lINI5Axvo-q70htVgBfbZv1EiHcFfmgTJtsuUDzEiZ83UdtHNwtOoauW/s1600/sunrise-bromo.jpg",
    termasuk: [
      "Sewa jip 4x4 khusus sunrise",
      "Tiket masuk kawasan Taman Nasional Bromo",
      "Penginapan 1 malam dekat Cemoro Lawang",
      "Pemandu lokal",
      "Fotografer perjalanan + file foto digital",
      "Sarapan hangat setelah sunrise",
    ],
  },
  {
    id: "trip-raja-ampat-explore",
    nama: "Raja Ampat Island Hopping",
    lokasi: "Raja Ampat, Papua Barat",
    durasi: "4 hari 3 malam",
    harga: 4500000,
    deskripsi:
      "Snorkeling di perairan jernih, island hopping ke Piaynemo dan Wayag, menginap di homestay lokal.",
    gambar:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Pulau%20Piaynemo,%20Raja%20Ampat.jpg",
    termasuk: [
      "Penginapan 3 malam di homestay lokal",
      "Perahu antar pulau selama trip",
      "Alat snorkeling lengkap",
      "Pemandu wisata bersertifikat",
      "Fotografer bawah air + file foto digital",
      "Makan 3x sehari selama trip",
      "Tiket masuk kawasan konservasi (PIN Raja Ampat)",
    ],
  },
  {
    id: "trip-penglipuran-heritage",
    nama: "Bali Heritage Village Tour",
    lokasi: "Bangli, Bali",
    durasi: "1 hari",
    harga: 350000,
    deskripsi:
      "Jalan-jalan di Desa Penglipuran, belajar arsitektur adat Bali, ditutup dengan makan siang khas desa.",
    gambar:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Penglipuran%20Village%20walkpath.jpg",
    termasuk: [
      "Transportasi AC pulang-pergi dari Denpasar",
      "Tiket masuk Desa Penglipuran",
      "Pemandu wisata lokal",
      "Fotografer + file foto digital",
      "Makan siang khas Bali",
    ],
  },
];

export function getTripById(id: string) {
  return tripList.find((t) => t.id === id);
}