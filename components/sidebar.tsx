import Link from "next/link";
import { ceritaList } from "@/data/cerita";

const kategoriList = Array.from(new Set(ceritaList.map((c) => c.kategori)));

export default function Sidebar() {
  return (
    <aside className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-wide text-stone-400">Kategori</p>
        <ul className="mt-3 space-y-2 text-sm text-stone-600">
          {kategoriList.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-stone-400">Cerita terbaru</p>
        <ul className="mt-3 space-y-4">
          {ceritaList.slice(0, 3).map((c) => (
            <li key={c.id} className="flex gap-3">
              <img
                src={c.gambar}
                alt=""
                className="h-14 w-14 shrink-0 rounded-md object-cover"
              />
              <div>
                <Link href={`/cerita/${c.id}`} className="text-sm text-stone-800 hover:text-teal-700">
                  {c.judul}
                </Link>
                <p className="mt-1 text-xs text-stone-400">{c.tanggal}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}