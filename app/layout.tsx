import { Suspense } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Sidebar from '@/components/sidebar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-slate-800 min-h-screen flex flex-col antialiased">
        <Header />
        
        <div className="flex-1 w-full flex flex-col md:flex-row items-stretch">
          <Suspense fallback={<div className="w-64 bg-white p-4">Loading...</div>}>
            <Sidebar />
          </Suspense>
          <main className="flex-1 bg-slate-50/50 p-6 md:p-8 flex flex-col">
            {children}
          </main>
        </div>
        
        <Footer />
      </body>
    </html>
  );
}