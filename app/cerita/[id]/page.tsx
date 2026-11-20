import { notFound } from "next/navigation";
import Link from "next/link";
import { ceritaList, getCeritaById } from "@/data/cerita";

function formatHarga(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function generateStaticParams() {
  return ceritaList.map((c) => ({ id: c.id }));
}

export default async function CeritaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const destinasi = getCeritaById(id);
  if (!destinasi) return notFound();

  const lainnya = ceritaList.filter((c) => c.id !== destinasi.id).slice(0, 3);

  return (
    <>
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[340px] w-full overflow-hidden bg-stone-300">
          <img
            src={destinasi.gambar}
            alt={destinasi.lokasi}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-teal-950/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-10 text-stone-50">
            <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-950">
              {destinasi.kategori}
            </span>
            <h1 className="mt-4 max-w-2xl font-serif text-3xl sm:text-4xl">
              {destinasi.judul}
            </h1>
            <p className="mt-2 text-sm text-stone-200">
              {destinasi.lokasi} · {destinasi.tanggal}
            </p>
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <Link
            href="/destinasi"
            className="text-sm text-stone-500 hover:text-teal-700"
          >
            ← Kembali ke semua destinasi
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[2fr_1fr]">
            {/* Kolom kiri: cerita */}
            <article>
              <p className="text-xs font-medium uppercase tracking-wide text-teal-700">
                Cerita perjalanan
              </p>
              <div className="mt-4 max-w-prose space-y-5 text-[15px] leading-relaxed text-stone-700">
                {destinasi.isi.map((par, i) => (
                  <p key={i} className={i === 0 ? "text-lg text-stone-800" : ""}>
                    {par}
                  </p>
                ))}
              </div>
            </article>

            {/* Kolom kanan: harga & fasilitas */}
            <aside className="h-fit rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-stone-500">
                Harga trip
              </p>
              <p className="mt-1 text-2xl font-semibold text-stone-900">
                {formatHarga(destinasi.harga)}
                <span className="ml-1 text-sm font-normal text-stone-500">
                  / orang
                </span>
              </p>
              <p className="mt-1 text-sm text-stone-500">
                Durasi: {destinasi.durasi}
              </p>
              <p className="text-sm text-stone-500">Lokasi: {destinasi.lokasi}</p>

              <Link
                href={`/pesan/${destinasi.id}`}
                className="mt-5 inline-flex w-full justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-teal-950 transition-colors hover:bg-amber-300"
              >
                Pesan trip ini
              </Link>

              <div className="mt-6 border-t border-stone-200 pt-5">
                <p className="text-sm font-medium text-stone-900">
                  Yang kamu dapat
                </p>
                <ul className="mt-3 space-y-2">
                  {destinasi.termasuk.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-stone-700"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs text-teal-700">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <section className="mt-16 border-t border-stone-200 pt-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-teal-700">
                  Momen perjalanan
                </p>
                <h2 className="mt-1 font-serif text-2xl text-stone-900">
                  Dokumentasi foto
                </h2>
              </div>
              <a
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`${destinasi.lokasi} perjalanan wisata`)}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-teal-800 px-5 py-2.5 text-sm font-medium text-teal-900 transition-colors hover:bg-teal-900 hover:text-white"
              >
                Cari video perjalanan ↗
              </a>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(destinasi.dokumentasi ?? [destinasi.gambar]).map(
                (gambar, index) => (
                  <figure
                    key={gambar}
                    className="overflow-hidden rounded-xl border border-stone-200 bg-white"
                  >
                    <img
                      src={gambar}
                      alt={`Dokumentasi ${destinasi.lokasi} ${index + 1}`}
                      className="h-56 w-full object-cover"
                    />
                    <figcaption className="px-4 py-3 text-sm text-stone-600">
                      {destinasi.lokasi} · Foto {index + 1}
                    </figcaption>
                  </figure>
                ),
              )}
            </div>
          </section>

          {/* Destinasi lainnya */}
          <div className="mt-16 border-t border-stone-200 pt-10">
            <h2 className="font-serif text-2xl text-stone-900">
              Destinasi lainnya
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {lainnya.map((c) => (
                <Link
                  key={c.id}
                  href={`/cerita/${c.id}`}
                  className="group overflow-hidden rounded-xl border border-stone-200 bg-white transition-shadow hover:shadow-lg"
                >
                  <div className="h-36 overflow-hidden bg-stone-200">
                    <img
                      src={c.gambar}
                      alt={c.lokasi}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-wide text-teal-700">
                      {c.lokasi}
                    </p>
                    <h3 className="mt-1 font-serif text-base text-stone-900">
                      {c.judul}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-stone-900">
                      {formatHarga(c.harga)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
    </>
  );
}