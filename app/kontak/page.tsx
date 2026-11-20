import Link from "next/link";

const topik = [
  {
    pertanyaan: "Bagaimana cara memilih trip?",
    jawaban:
      "Buka halaman Trip untuk membandingkan lokasi, durasi, harga, dan fasilitas setiap perjalanan.",
  },
  {
    pertanyaan: "Apakah harga ditampilkan per orang?",
    jawaban:
      "Ya. Harga pada daftar trip ditampilkan per orang. Detail perjalanan memuat informasi fasilitas yang termasuk.",
  },
  {
    pertanyaan: "Ke mana saya mengirim pertanyaan?",
    jawaban:
      "Kirim email ke gilanghffx@gmail.com. Sertakan nama trip atau destinasi agar kami bisa membantu dengan lebih tepat.",
  },
];

export default function KontakPage() {
  return (
    <>
      <section className="bg-teal-950 px-6 py-16 text-stone-50 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
            Kontak
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            Ada yang ingin ditanyakan?
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-stone-300">
            Kami siap membantu kamu mencari informasi sebelum menentukan
            perjalanan.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="h-fit rounded-2xl bg-white p-7 shadow-sm ring-1 ring-stone-200">
          <p className="text-sm font-medium text-teal-700">Tim Gilang Jelajah</p>
          <h2 className="mt-2 font-serif text-2xl text-stone-900">
            Hubungi kami
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Tanyakan tentang destinasi, fasilitas trip, atau hal lain yang
            membantu persiapan perjalananmu.
          </p>
          <a
            href="mailto:gilanghffx@gmail.com?subject=Pertanyaan%20Gilang%20Jelajah"
            className="mt-6 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-teal-950 transition-colors hover:bg-amber-300"
          >
            Kirim email
          </a>
          <div className="mt-7 border-t border-stone-200 pt-5 text-sm">
            <p className="font-medium text-stone-900">Email</p>
            <p className="mt-1 text-stone-600">gilanghffx@gmail.com</p>
            <p className="mt-4 font-medium text-stone-900">Jam layanan</p>
            <p className="mt-1 text-stone-600">Senin–Jumat, 09.00–17.00 WIB</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-teal-700">Bantuan singkat</p>
          <h2 className="mt-2 font-serif text-3xl text-stone-900">
            Pertanyaan yang sering muncul
          </h2>
          <div className="mt-6 divide-y divide-stone-200 border-y border-stone-200">
            {topik.map((item) => (
              <article key={item.pertanyaan} className="py-5">
                <h3 className="font-semibold text-stone-900">{item.pertanyaan}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.jawaban}
                </p>
              </article>
            ))}
          </div>
          <Link
            href="/trip"
            className="mt-6 inline-flex text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 hover:text-teal-950"
          >
            Lihat daftar trip
          </Link>
        </div>
      </section>
    </>
  );
}
