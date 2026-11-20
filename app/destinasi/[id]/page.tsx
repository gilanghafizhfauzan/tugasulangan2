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

export default async function DestinasiDetailPage({
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

          {/* Kolom kanan: harga & termasuk */}
          <aside className="h-fit rounded-xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
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

        {/* Destinasi lainnya */}
        <div className="mt-16 border-t border-stone-200 pt-10">
          <h2 className="font-serif text-2xl text-stone-900">
            Destinasi lainnya
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {lainnya.map((c) => (
              <Link
                key={c.id}
                href={`/destinasi/${c.id}`}
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