import Image from 'next/image';
import Link from 'next/link';
import { dataCerita } from '@/data/cerita';

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ kategori?: string }> | { kategori?: string };
}) {
  const resolvedParams = await searchParams;
  const kategori = resolvedParams?.kategori;

  const isFilterActive = Boolean(kategori && kategori.toLowerCase() !== 'semua');

  const produkTersaring = isFilterActive
    ? dataCerita.filter((item) => item.kategori.toLowerCase() === kategori!.toLowerCase())
    : dataCerita;

  return (
    <div className="space-y-8">
      {!isFilterActive && (
        <div className="relative overflow-hidden rounded-2xl text-white p-8 md:p-12 shadow-lg min-h-[260px] flex items-center">
          <Image
            src="/Image/logorvs.png"
            alt="Banner Promo"
            fill
            priority
            className="object-cover object-center -z-10"
          />
          <div className="absolute inset-0 bg-black/40 -z-10"></div>
          <div className="relative z-10 max-w-xl space-y-3">
            <div className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md inline-block">
              Koleksi Terbaru 
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Outfit & Apparel Fashion Lengkap
            </h1>
            <p className="text-slate-200 text-sm leading-relaxed">
              Temukan koleksi kaos, jaket, sepatu, dan aksesoris terbaik dengan harga terjangkau.
            </p>
          </div>
        </div>
      )}

      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          {isFilterActive ? `Kategori: ${kategori}` : 'Semua Produk'}
        </h2>

        {produkTersaring.length === 0 ? (
          <p className="text-sm text-slate-500 py-8 text-center bg-white border border-slate-200 rounded-xl">
            Produk untuk kategori ini belum tersedia.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {produkTersaring.map((item) => (
              <div key={item.id} className="border border-slate-200 rounded-xl p-4 flex gap-4 bg-white hover:shadow-md transition-all">
                <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-100">
                  <Image 
                    src={item.gambar} 
                    alt={item.nama} 
                    fill
                    className="object-cover" 
                  />
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase">
                      {item.kategori}
                    </div>
                    <h3 className="font-bold text-sm text-slate-800 mt-1 line-clamp-1">{item.nama}</h3>
                    <p className="text-emerald-600 font-extrabold text-sm mt-0.5">
                      Rp {item.harga.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <Link 
                      href={`/cerita/${item.id}`} 
                      className="text-xs font-semibold text-slate-500 hover:text-emerald-600"
                    >
                      Detail ➔
                    </Link>
                    <button className="text-xs bg-emerald-500 text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-emerald-600 transition-colors shrink-0 ml-2">
                      + Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}