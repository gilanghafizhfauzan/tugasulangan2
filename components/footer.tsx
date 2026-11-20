import Link from "next/link";

const kategori = ["Gunung", "Bahari", "Budaya", "Kuliner"];

export default function Footer() {
  return (
    <footer className="border-t border-teal-800 bg-teal-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl text-stone-50">Gilang Jelajah.id</p>
          <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-stone-400">
            Cerita dan panduan perjalanan dari gunung, laut, hingga desa adat
            di seluruh Indonesia.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-stone-200">Jelajahi</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li><Link href="/destinasi" className="hover:text-amber-400">Destinasi</Link></li>
            <li><Link href="/cerita" className="hover:text-amber-400">Cerita perjalanan</Link></li>
            <li><Link href="/trip" className="hover:text-amber-400">Paket trip</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-stone-200">Kategori</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            {kategori.map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-stone-200">Kontak</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li><a href="mailto:gilanghffx@gmail.com" className="hover:text-amber-400">gilanghffx@gmail.com</a></li>
            <li>Senin–Jumat, 09.00–17.00 WIB</li>
            <li><Link href="/kontak" className="hover:text-amber-400">Hubungi kami</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-teal-800 px-6 py-5 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Gilang Jelajah.id.
      </div>
    </footer>
  );
}