import { notFound } from "next/navigation";
import Link from "next/link";
import BookingRequestForm from "@/components/booking-request-form";
import { ceritaList, getCeritaById } from "@/data/cerita";
import { getTripById, tripList } from "@/data/trip";

export function generateStaticParams() {
  return [
    ...tripList.map((trip) => ({ id: trip.id })),
    ...ceritaList.map((cerita) => ({ id: cerita.id })),
  ];
}

export default async function PesanTripPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const trip = getTripById(id);
  const cerita = trip ? undefined : getCeritaById(id);
  const perjalanan = trip
    ? {
        id: trip.id,
        nama: trip.nama,
        lokasi: trip.lokasi,
        durasi: trip.durasi,
        harga: trip.harga,
      }
    : cerita
      ? {
          id: cerita.id,
          nama: cerita.judul,
          lokasi: cerita.lokasi,
          durasi: cerita.durasi,
          harga: cerita.harga,
        }
      : undefined;

  if (!perjalanan) notFound();

  return (
    <section className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <Link
        href={trip ? `/trip/${trip.id}` : `/cerita/${perjalanan.id}`}
        className="text-sm font-medium text-stone-500 transition-colors hover:text-teal-800"
      >
        ← Kembali ke detail perjalanan
      </Link>

      <div className="mb-8 mt-7">
        <p className="text-sm font-medium text-teal-700">{perjalanan.lokasi}</p>
        <h1 className="mt-2 font-serif text-3xl text-stone-900 sm:text-4xl">
          {perjalanan.nama}
        </h1>
        <p className="mt-2 text-sm text-stone-600">
          {perjalanan.durasi} · Isi formulir untuk meminta pengecekan
          ketersediaan.
        </p>
      </div>

      <BookingRequestForm
        tripName={perjalanan.nama}
        location={perjalanan.lokasi}
        duration={perjalanan.durasi}
        pricePerPerson={perjalanan.harga}
      />
    </section>
  );
}
