"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { userData } from "@/data/user";
import { ceritaList } from "@/data/cerita";
import { toast, Toaster } from "sonner";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userFound = userData.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", userFound.name);
      toast.success(`Berhasil Login! Selamat datang, ${userFound.name}`);
      setTimeout(() => router.push("/"), 900);
    } else {
      toast.error("Username atau password salah");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-teal-950 px-4 py-12 sm:px-6">
      <Toaster position="top-center" richColors />

      <img
        src={ceritaList[0].gambar}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/90 via-teal-950/80 to-teal-950/95" />

      <div className="relative grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="hidden text-stone-50 lg:block">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            Gilang Jelajah.id
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-5xl leading-tight">
            Temukan cerita di setiap perjalanan.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-200">
            Masuk untuk menjelajahi destinasi, membaca kisah perjalanan, dan
            menemukan trip pilihan dari berbagai daerah di Indonesia.
          </p>
          <div className="mt-9 grid max-w-lg grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <p className="font-serif text-2xl text-amber-300">Jelajahi</p>
              <p className="mt-1 text-sm text-stone-200">Destinasi Nusantara</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <p className="font-serif text-2xl text-amber-300">Kenali</p>
              <p className="mt-1 text-sm text-stone-200">Cerita masyarakat lokal</p>
            </div>
          </div>
        </section>

        <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/60 bg-stone-50 px-7 pb-8 pt-16 shadow-2xl sm:px-9">
          <div className="absolute -top-12 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full border-4 border-amber-400 bg-stone-100 shadow-lg">
            <Image
              src="/image/images.jpg"
              alt="Logo Gilang Jelajah"
              width={96}
              height={96}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <p className="text-center text-xs font-medium uppercase tracking-widest text-teal-700">
            Gilang Jelajah.id
          </p>
          <h2 className="mt-2 text-center font-serif text-3xl text-stone-900">
            Selamat datang
          </h2>
          <p className="mb-7 mt-1 text-center text-sm text-stone-500">
            Masuk untuk mulai menjelajah destinasi
          </p>

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="username"
                className="pl-1 text-xs font-semibold text-stone-600"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Masukkan username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-all placeholder:text-stone-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="pl-1 text-xs font-semibold text-stone-600"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 outline-none transition-all placeholder:text-stone-400 focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-3 w-full cursor-pointer rounded-full bg-amber-400 py-3.5 text-sm font-semibold text-teal-950 shadow-md transition-all duration-200 hover:bg-amber-300 active:scale-[0.98]"
            >
              MASUK
            </button>
          </form>
          <p className="mt-6 text-center text-xs leading-relaxed text-stone-500">
            Dengan masuk, kamu bisa melanjutkan menjelajahi cerita dan trip
            pilihan kami.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;