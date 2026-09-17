'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Sidebar() {
  const searchParams = useSearchParams();
  const currentKategori = searchParams.get('kategori') || 'semua';

  const menu = [
    { name: 'Semua Produk', slug: 'semua', },
    { name: 'Kaos & T-Shirt', slug: 'Kaos' },
    { name: 'Jaket & Outer', slug: 'Jaket', },
    { name: 'Sepatu & Sneakers', slug: 'Sepatu', },
    { name: 'Aksesoris', slug: 'Aksesoris',},
  ];

  return (
    <aside className="w-full md:w-64 shrink-0 bg-white border-r border-slate-200/80 p-4 flex flex-col">
      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2">
        KATEGORI TOKO
      </p>
      <nav className="flex flex-col gap-1.5 mt-1">
        {menu.map((item) => {
          const isActive = currentKategori.toLowerCase() === item.slug.toLowerCase();
          const href = item.slug === 'semua' ? '/' : `/?kategori=${item.slug}`;

          return (
            <Link
              key={item.slug}
              href={href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? 'bg-slate-100 text-slate-900 font-bold'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
             
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}