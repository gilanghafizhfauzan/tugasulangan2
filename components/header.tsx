import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80">
      <div className="w-full px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-9 h-9 overflow-hidden rounded-lg">
            <Image
              src="/Image/logo.png"
              alt="Logo Toko"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="font-bold text-slate-800 text-lg tracking-tight">
            GHF <div className="text-emerald-500">.store</div>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <div className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200/60">
           Keranjang (0)
          </div>
        </div>
      </div>
    </header>
  );
}