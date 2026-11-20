"use client";

import { useState } from "react";

const CONTACT_EMAIL = "gilanghffx@gmail.com";

type BookingRequestFormProps = {
  tripName: string;
  location: string;
  duration: string;
  pricePerPerson: number;
};

function formatHarga(harga: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(harga);
}

function getLocalDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function BookingRequestForm({
  tripName,
  location,
  duration,
  pricePerPerson,
}: BookingRequestFormProps) {
  const [participants, setParticipants] = useState(1);
  const total = pricePerPerson * participants;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name"));
    const email = String(formData.get("email"));
    const phone = String(formData.get("phone"));
    const date = String(formData.get("date"));
    const notes = String(formData.get("notes") || "-");
    const subject = `Permintaan pemesanan: ${tripName}`;
    const body = [
      "Halo Gilang Jelajah, saya ingin menanyakan ketersediaan trip berikut:",
      "",
      `Trip: ${tripName}`,
      `Lokasi: ${location}`,
      `Durasi: ${duration}`,
      `Tanggal rencana: ${date}`,
      `Jumlah peserta: ${participants} orang`,
      `Perkiraan total: ${formatHarga(total)}`,
      "",
      `Nama: ${name}`,
      `Email: ${email}`,
      `Nomor WhatsApp: ${phone}`,
      `Catatan: ${notes}`,
      "",
      "Mohon konfirmasi ketersediaan dan langkah selanjutnya. Terima kasih.",
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="mb-7">
        <p className="text-sm font-medium text-teal-700">Permintaan pemesanan</p>
        <h2 className="mt-1 font-serif text-2xl text-stone-900">
          Rencanakan perjalananmu
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          Isi detail di bawah. Draf email akan dibuka agar kamu bisa mengirim
          permintaan langsung ke tim kami.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="booking-name" className="text-sm font-medium text-stone-700">
            Nama lengkap
          </label>
          <input
            id="booking-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
            placeholder="Nama sesuai identitas"
          />
        </div>

        <div>
          <label htmlFor="booking-email" className="text-sm font-medium text-stone-700">
            Alamat email
          </label>
          <input
            id="booking-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
            placeholder="nama@email.com"
          />
        </div>

        <div>
          <label htmlFor="booking-phone" className="text-sm font-medium text-stone-700">
            Nomor WhatsApp
          </label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={30}
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
            placeholder="Contoh: 081234567890"
          />
        </div>

        <div>
          <label htmlFor="booking-date" className="text-sm font-medium text-stone-700">
            Tanggal rencana
          </label>
          <input
            id="booking-date"
            name="date"
            type="date"
            min={getLocalDate()}
            required
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div>
          <label htmlFor="booking-participants" className="text-sm font-medium text-stone-700">
            Jumlah peserta
          </label>
          <input
            id="booking-participants"
            name="participants"
            type="number"
            min={1}
            max={20}
            value={participants}
            onChange={(event) => setParticipants(Number(event.target.value))}
            required
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
          />
        </div>

        <div>
          <label htmlFor="booking-notes" className="text-sm font-medium text-stone-700">
            Catatan tambahan <span className="font-normal text-stone-500">(opsional)</span>
          </label>
          <input
            id="booking-notes"
            name="notes"
            maxLength={500}
            className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
            placeholder="Permintaan khusus atau pertanyaan"
          />
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-end justify-between gap-4 rounded-xl bg-stone-50 p-4">
        <div>
          <p className="text-sm text-stone-600">
            {formatHarga(pricePerPerson)} × {participants} peserta
          </p>
          <p className="mt-1 text-xs text-stone-500">
            Perkiraan total, belum termasuk biaya tambahan jika ada.
          </p>
        </div>
        <p className="text-xl font-semibold text-stone-900">{formatHarga(total)}</p>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-teal-950 transition-colors hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2"
      >
        Lanjutkan lewat email
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-stone-500">
        Permintaan belum menjadi pemesanan terkonfirmasi. Tim kami akan
        menghubungi kamu untuk mengecek ketersediaan dan detail pembayaran.
      </p>
    </form>
  );
}
