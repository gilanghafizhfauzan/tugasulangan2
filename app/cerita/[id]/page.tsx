import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { dataCerita } from '@/data/cerita';

interface DetailProps {
  params: Promise<{ id: string }>;
}

export default async function DetailProdukPage({ params }: DetailProps) {
  const { id } = await params;
  const produk = dataCerita.find((item) => item.id === id);

  if (!produk) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-emerald-600 transition-colors"
      >
        ← Kembali ke Beranda
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
        <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
          <Image
            src={produk.gambar}
            alt={produk.nama}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md uppercase">
              {produk.kategori}
            </span>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              {produk.nama}
            </h1>
            <p className="text-2xl font-black text-emerald-600">
              Rp {produk.harga.toLocaleString('id-ID')}
            </p>
            <div className="border-t border-slate-100 pt-3">
              <h2 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                Deskripsi Produk
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {produk.deskripsi}
              </p>
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-emerald-500/20 transition-all text-sm text-center">
              Beli Sekarang
            </button>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-4 rounded-xl transition-all text-sm">
              + Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}