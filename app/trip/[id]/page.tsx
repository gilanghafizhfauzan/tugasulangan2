import { notFound } from "next/navigation";
import Link from "next/link";
import { tripList, getTripById } from "@/data/trip";

function formatHarga(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function generateStaticParams() {
  return tripList.map((t) => ({ id: t.id }));
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const trip = getTripById(id);
  if (!trip) return notFound();

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/trip" className="text-sm text-stone-500 hover:text-teal-700">
        ← Kembali ke daftar trip
      </Link>

      <div className="mt-6 overflow-hidden rounded-xl">
        <img src={trip.gambar} alt={trip.lokasi} className="h-72 w-full object-cover" />
      </div>

      <h1 className="mt-6 font-serif text-3xl text-stone-900">{trip.nama}</h1>

      <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm">
        <div>
          <dt className="text-stone-500">Lokasi</dt>
          <dd className="font-medium text-stone-900">{trip.lokasi}</dd>
        </div>
        <div>
          <dt className="text-stone-500">Durasi</dt>
          <dd className="font-medium text-stone-900">{trip.durasi}</dd>
        </div>
        <div>
          <dt className="text-stone-500">Harga</dt>
          <dd className="font-medium text-stone-900">
            {formatHarga(trip.harga)} <span className="text-stone-500">/ orang</span>
          </dd>
        </div>
      </dl>

      <p className="mt-6 max-w-prose text-stone-700">{trip.deskripsi}</p>

      <div className="mt-8 border-t border-stone-200 pt-6">
        <h2 className="font-serif text-xl text-stone-900">Termasuk dalam trip</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {trip.termasuk.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/pesan/${trip.id}`}
        className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-teal-950 hover:bg-amber-300"
      >
        Pesan trip ini
      </Link>
    </section>
  );
}