import Link from "next/link";
import { ceritaList } from "@/data/cerita";

export default function HomePage() {
  const unggulan = ceritaList[0];

  return (
    <>
      {/* Hero full-bleed */}
      <section className="relative flex h-[80vh] min-h-[520px] items-end overflow-hidden">
        <img
          src={unggulan.gambar}
          alt={unggulan.lokasi}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/60 to-teal-950/10" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 text-stone-50">
          <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-950">
            {unggulan.kategori}
          </span>
          <h1 className="mt-5 max-w-2xl font-serif text-4xl leading-[1.1] sm:text-5xl">
            {unggulan.judul}
          </h1>
          <p className="mt-4 max-w-xl text-stone-200">{unggulan.ringkasan}</p>
          <Link
            href={`/cerita/${unggulan.id}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-50 px-6 py-3 text-sm font-medium text-teal-950 transition-colors hover:bg-amber-400"
          >
            Baca cerita lengkap
          </Link>
        </div>
      </section>

      {/* CTA banner: buka trip ke seluruh Nusantara */}
      <section className="bg-teal-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-14 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-serif text-2xl text-stone-50">
              Buka trip ke seluruh Nusantara
            </h2>
            <p className="mt-2 max-w-lg text-sm text-stone-300">
              Dari gunung, laut, hingga desa adat, kami bantu susun perjalananmu
              ke destinasi mana pun di Indonesia.
            </p>
          </div>
          <Link
            href="/destinasi"
            className="shrink-0 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-teal-950 transition-colors hover:bg-amber-300"
          >
            Jelajahi destinasi
          </Link>
        </div>
      </section>
    </>
  );
}