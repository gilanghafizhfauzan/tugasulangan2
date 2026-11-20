import Link from "next/link";

const bromo = {
  judul: "Berburu sunrise di puncak Penanjakan, Bromo",
  lokasi: "Gunung Bromo, Jawa Timur",
  tanggal: "3 September 2026",
  kategori: "Gunung",
  harga: 850000,
  durasi: "2 hari 1 malam",
  gambar:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTZ2GO_W83N_KtmPxpVENv5GqfSLHkmnSUMLMEXBTVooRXl05Ic1x3_v4zYckM25SA1MpbgjGL96eUmoTFwzTFaIQD3Wb1dzzEugt1WlX9ajA4fxpnaUZ4U3Y50k_8zMGmQBV2lINI5Axvo-q70htVgBfbZv1EiHcFfmgTJtsuUDzEiZ83UdtHNwtOoauW/s1600/sunrise-bromo.jpg",
  isi: [
    "Perjalanan dimulai pukul 3 pagi dari basecamp Cemoro Lawang, menembus udara dingin yang bisa mencapai 5 derajat Celsius menjelang subuh.",
    "Dari titik pandang Penanjakan, matahari perlahan muncul di balik siluet Gunung Semeru, menyinari lautan awan yang menyelimuti kawah Bromo.",
    "Setelah sunrise, perjalanan dilanjutkan turun ke lautan pasir dan mendaki anak tangga menuju bibir kawah — pemandangan yang berbeda sama sekali dari kejauhan.",
  ],
  termasuk: [
    "Sewa jip 4x4 khusus sunrise",
    "Tiket masuk kawasan Taman Nasional Bromo",
    "Penginapan 1 malam dekat Cemoro Lawang",
    "Pemandu lokal",
    "Fotografer perjalanan + file foto digital",
    "Sarapan hangat setelah sunrise",
  ],
};

function formatHarga(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function BromoPage() {
  return (
    <>
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <img
          src={bromo.gambar}
          alt={bromo.lokasi}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-950/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-10 text-stone-50">
          <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-950">
            {bromo.kategori}
          </span>
          <h1 className="mt-4 max-w-2xl font-serif text-3xl sm:text-4xl">{bromo.judul}</h1>
          <p className="mt-2 text-sm text-stone-200">
            {bromo.lokasi} · {bromo.tanggal}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/cerita" className="text-sm text-stone-500 hover:text-teal-700">
          ← Kembali ke cerita
        </Link>

        <article className="mt-6 max-w-prose space-y-5 text-[15px] leading-relaxed text-stone-700">
          {bromo.isi.map((par, i) => (
            <p key={i} className={i === 0 ? "text-lg text-stone-800" : ""}>
              {par}
            </p>
          ))}
        </article>

        <div className="mt-10 rounded-xl border border-stone-200 bg-stone-50 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-stone-500">Harga trip</p>
              <p className="mt-1 text-2xl font-semibold text-stone-900">
                {formatHarga(bromo.harga)}
                <span className="ml-1 text-sm font-normal text-stone-500">/ orang</span>
              </p>
              <p className="mt-1 text-sm text-stone-500">Durasi: {bromo.durasi}</p>
            </div>
            <Link
              href="/pesan/sunrise-bromo"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-teal-950 hover:bg-amber-300"
            >
              Pesan trip ini
            </Link>
          </div>

          <div className="mt-6 border-t border-stone-200 pt-6">
            <p className="text-sm font-medium text-stone-900">Termasuk dalam trip</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {bromo.termasuk.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}