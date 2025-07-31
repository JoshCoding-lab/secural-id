// pages/artikel.js

import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { artikelData } from '../data/artikel'; // Pastikan path dan nama file ini benar

export default function ArtikelPage() {
  return (
    // Latar belakang halaman
    <div className="font-sans bg-gradient-to-br from-slate-700 via-indigo-800 to-black text-white overflow-x-hidden antialiased">
      <Head>
        <title>Artikel - SecuraID</title>
        <meta name="description" content="Kumpulan artikel mengenai keamanan siber dari SecuraID" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-10 md:py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">Artikel Keamanan Data</h1>
          </div>
        </div>

        {/* Grid yang menampilkan semua artikel */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artikelData.map((artikel) => (
              <ArticleCard key={artikel.id} artikel={artikel} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}