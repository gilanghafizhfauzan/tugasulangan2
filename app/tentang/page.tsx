import Link from "next/link";

const prinsip = [
  {
    nomor: "01",
    judul: "Berangkat dari cerita lokal",
    isi: "Kami ingin setiap perjalanan memberi ruang bagi pemandu dan warga setempat untuk berbagi cerita tentang tempat yang mereka kenal.",
  },
  {
    nomor: "02",
    judul: "Jelajah dengan bertanggung jawab",
    isi: "Perjalanan yang baik menghargai alam, budaya, dan kebiasaan masyarakat di setiap destinasi.",
  },
  {
    nomor: "03",
    judul: "Rencana yang jelas",
    isi: "Informasi durasi, harga, lokasi, dan fasilitas kami tampilkan agar kamu bisa memilih perjalanan dengan lebih nyaman.",
  },
];

export default function TentangPage() {
  return (
    <>
      <section className="bg-teal-950 px-6 py-20 text-stone-50">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
            Tentang kami
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
            Indonesia lebih dekat lewat cerita dan perjalanan.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-300">
            Gilang Jelajah.id adalah ruang untuk menemukan tempat baru,
            mengenal kisah di baliknya, dan merencanakan perjalanan bersama
            orang-orang lokal.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-medium text-teal-700">Misi perjalanan</p>
          <h2 className="mt-2 font-serif text-3xl text-stone-900">
            Bukan hanya sampai tujuan.
          </h2>
        </div>
        <div className="space-y-5 leading-relaxed text-stone-600">
          <p>
            Setiap daerah punya cara sendiri untuk menyambut pengunjung:
            pemandangan, kuliner, tradisi, hingga kisah orang-orang yang
            menjaganya. Kami merangkumnya menjadi inspirasi dan panduan yang
            mudah dijelajahi.
          </p>
          <p>
            Pilih destinasi untuk membaca ceritanya, lalu temukan trip yang
            sesuai dengan waktu dan minatmu. Semoga setiap perjalanan membawa
            pengalaman baru sekaligus rasa hormat pada tempat yang dikunjungi.
          </p>
        </div>
      </section>

      <section className="bg-stone-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium text-teal-700">Yang kami pegang</p>
          <h2 className="mt-2 font-serif text-3xl text-stone-900">
            Cara kami merancang perjalanan
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {prinsip.map((item) => (
              <article
                key={item.nomor}
                className="rounded-2xl border border-stone-200 bg-white p-6"
              >
                <span className="text-sm font-semibold text-amber-600">{item.nomor}</span>
                <h3 className="mt-4 font-serif text-xl text-stone-900">{item.judul}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.isi}</p>
              </article>
            ))}
          </div>
          <Link
            href="/destinasi"
            className="mt-8 inline-flex rounded-full bg-teal-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
          >
            Mulai jelajahi destinasi
          </Link>
        </div>
      </section>
    </>
  );
}
