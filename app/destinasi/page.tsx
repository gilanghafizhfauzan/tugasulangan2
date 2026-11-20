"use client";

import { useState } from "react";
import Link from "next/link";
import { ceritaList } from "@/data/cerita";

function formatHarga(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

const kategoriList = ["Semua", ...Array.from(new Set(ceritaList.map((c) => c.kategori)))];

export default function DestinasiPage() {
  const [aktif, setAktif] = useState("Semua");

  const tampil =
    aktif === "Semua"
      ? ceritaList
      : ceritaList.filter((c) => c.kategori === aktif);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-medium text-teal-700">Pilih tujuanmu</p>
      <h1 className="mt-2 font-serif text-3xl text-stone-900">Destinasi</h1>
      <p className="mt-3 max-w-xl text-stone-600">
        Klik salah satu destinasi untuk membaca ceritanya, melihat harga, dan memesan trip.
      </p>

      {/* Filter kategori */}
      <div className="mt-8 flex flex-wrap gap-2">
        {kategoriList.map((k) => (
          <button
            key={k}
            onClick={() => setAktif(k)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              aktif === k
                ? "border-teal-900 bg-teal-900 text-stone-50"
                : "border-stone-300 bg-white text-stone-700 hover:border-teal-700"
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-stone-500">{tampil.length} destinasi</p>

      {/* Grid destinasi */}
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tampil.map((c) => (
          <Link
            key={c.id}
            href={`/cerita/${c.id}`}
            className="group overflow-hidden rounded-xl border border-stone-200 bg-white transition-shadow hover:shadow-lg"
          >
            <div className="relative h-48 overflow-hidden bg-stone-200">
              <img
                src={c.gambar}
                alt={c.lokasi}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-950">
                {c.kategori}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-wide text-teal-700">{c.lokasi}</p>
              <h3 className="mt-1 font-serif text-lg text-stone-900">{c.judul}</h3>
              <p className="mt-2 text-sm text-stone-600">{c.ringkasan}</p>
              <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-4">
                <p className="text-base font-semibold text-stone-900">
                  {formatHarga(c.harga)}
                  <span className="ml-1 text-xs font-normal text-stone-500">/ orang</span>
                </p>
                <span className="text-xs text-stone-500">{c.durasi}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}