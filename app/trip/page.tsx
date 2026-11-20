import Link from "next/link";
import { tripList } from "@/data/trip";

function formatHarga(harga: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(harga);
}

export default function TripPage() {
  return (
    <>
      <section className="bg-teal-950 px-6 py-16 text-stone-50 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
            Perjalanan pilihan
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl sm:text-5xl">
            Trip yang dirancang untuk jadi cerita
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-stone-300">
            Pilih perjalanan yang paling cocok. Setiap trip ditemani pemandu
            lokal dan dirancang agar kamu bisa menikmati tempatnya dengan lebih
            dekat.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-teal-700">Mulai menjelajah</p>
            <h2 className="mt-1 font-serif text-3xl text-stone-900">
              Pilihan trip untukmu
            </h2>
          </div>
          <p className="text-sm text-stone-500">{tripList.length} perjalanan tersedia</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tripList.map((trip) => (
            <article
              key={trip.id}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-shadow hover:shadow-xl"
            >
              <Link href={`/trip/${trip.id}`} className="block">
                <div className="h-52 overflow-hidden bg-stone-200">
                  <img
                    src={trip.gambar}
                    alt={trip.lokasi}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-teal-700">
                    {trip.lokasi}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-stone-900 group-hover:text-teal-800">
                    {trip.nama}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone-600">
                    {trip.deskripsi}
                  </p>
                  <div className="mt-5 flex items-end justify-between border-t border-stone-100 pt-4">
                    <div>
                      <p className="text-xs text-stone-500">Mulai dari</p>
                      <p className="mt-1 font-semibold text-stone-900">
                        {formatHarga(trip.harga)}
                        <span className="ml-1 text-xs font-normal text-stone-500">
                          / orang
                        </span>
                      </p>
                    </div>
                    <span className="text-sm text-stone-500">{trip.durasi}</span>
                  </div>
                </div>
              </Link>
              <div className="px-5 pb-5">
                <Link
                  href={`/trip/${trip.id}`}
                  className="inline-flex rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-amber-300"
                >
                  Lihat detail trip
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
