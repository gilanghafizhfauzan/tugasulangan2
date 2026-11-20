import type { Metadata } from "next";
import "./globals.css";
import AuthGuard from "@/components/authguard";

export const metadata: Metadata = {
  title: "Gilang Jelajah.id",
  description: "Cerita perjalanan dan destinasi wisata di seluruh Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-stone-50 text-stone-900">
        <AuthGuard>{children}</AuthGuard>
      </body>
    </html>
  );
}