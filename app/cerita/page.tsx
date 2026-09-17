import Link from 'next/link';
import Image from 'next/image';
import { dataCerita } from '@/data/cerita';

export default function CeritaPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Semua Produk</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {dataCerita.map((item) => (
          <div key={item.id} className="border border-slate-200 rounded-xl p-4 flex gap-4 bg-white shadow-xs">
            <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-100">
              <Image src={item.gambar} alt={item.nama} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase">
                  {item.kategori}
                </span>
                <h3 className="font-bold text-sm text-slate-800 mt-1">{item.nama}</h3>
                <p className="text-emerald-600 font-extrabold text-sm">
                  Rp {item.harga.toLocaleString('id-ID')}
                </p>
              </div>
              <Link href={`/cerita/${item.id}`} className="text-xs font-semibold text-emerald-600 hover:underline mt-2">
                Detail ➔
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}