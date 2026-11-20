"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/destinasi", label: "Destinasi" },
  { href: "/cerita", label: "Cerita" },
  { href: "/trip", label: "Trip" },
  { href: "/tentang", label: "Tentang" },
  { href: "/kontak", label: "Kontak" },
];

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    router.replace("/login");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-teal-800 bg-teal-950/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl tracking-tight text-stone-50">
          Gilang Jelajah.id
        </Link>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-teal-700 px-3 py-2 text-sm text-stone-100 md:hidden"
        >
          {menuOpen ? "Tutup" : "Menu"}
        </button>
        <nav
          id="primary-navigation"
          className={`${
            menuOpen
              ? "absolute inset-x-0 top-full flex flex-col border-t border-teal-800 bg-teal-950 px-6 py-4"
              : "hidden"
          } gap-4 text-sm text-stone-300 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="transition-colors hover:text-amber-400"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            type="button"
            className="rounded-full border border-stone-500 px-4 py-1.5 text-xs text-stone-200 transition-colors hover:border-amber-400 hover:text-amber-400"
          >
            Keluar
          </button>
        </nav>
      </div>
    </header>
  );
}