import Link from "next/link";
import { ceritaList } from "@/data/cerita";
import Sidebar from "@/components/sidebar";

function formatHarga(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function CeritaPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-medium text-teal-700">Jurnal perjalanan</p>
      <h1 className="mt-2 font-serif text-3xl text-stone-900">Cerita & Destinasi</h1>
      <p className="mt-3 max-w-xl text-stone-600">
        Kumpulan cerita perjalanan sekaligus trip yang bisa langsung kamu pesan.
      </p>

      <div className="mt-10 grid gap-12 sm:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          {ceritaList.map((c) => (
            <Link
              key={c.id}
              href={`/cerita/${c.id}`}
              className="group flex gap-5 border-b border-stone-200 pb-8 last:border-none"
            >
              <img
                src={c.gambar}
                alt={c.lokasi}
                className="h-28 w-40 shrink-0 rounded-lg object-cover"
              />
              <div>
                <p className="text-xs uppercase tracking-wide text-stone-400">
                  {c.kategori} · {c.lokasi} · {c.tanggal}
                </p>
                <h2 className="mt-2 font-serif text-xl text-stone-900 group-hover:text-teal-700">
                  {c.judul}
                </h2>
                <p className="mt-2 text-sm text-stone-600">{c.ringkasan}</p>
                <p className="mt-2 text-sm font-semibold text-stone-900">
                  {formatHarga(c.harga)}
                  <span className="ml-1 text-xs font-normal text-stone-500">
                    / orang · {c.durasi}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Sidebar />
      </div>
    </section>
  );
}