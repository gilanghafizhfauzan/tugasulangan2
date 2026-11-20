"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const isLoginPage = pathname === "/login";

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!loggedIn && !isLoginPage) {
      setReady(false);
      router.replace("/login");
    } else if (loggedIn && isLoginPage) {
      setReady(false);
      router.replace("/");
    } else {
      setReady(true);
    }
  }, [pathname, isLoginPage, router]);

  // Tahan tampilan sampai pengecekan selesai (supaya tidak berkedip)
  if (!ready) {
    return <div className="min-h-screen bg-stone-50" />;
  }

  // Halaman login: tanpa header & footer
  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}