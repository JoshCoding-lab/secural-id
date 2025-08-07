// pages/artikel.js
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { artikelData } from '../data/artikel';
import { motion } from 'framer-motion';

export default function ArtikelPage() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(artikelData);
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', 'Keamanan Data', 'Privasi Digital', 'Tips & Trik', 'Berita Terkini'];

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let result = artikelData;

    if (searchTerm) {
      result = result.filter((artikel) =>
        artikel.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artikel.deskripsi.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'Semua') {
      result = result.filter((artikel) => artikel.kategori === selectedCategory);
    }

    setFilteredArticles(result);
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        setIsPlaying(true);
      })
      .catch(error => {
        console.log("Autoplay was prevented:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <div className="font-sans bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-x-hidden antialiased min-h-screen">
      <Head>
        <title>Artikel - SecuraID</title>
        <meta name="description" content="Kumpulan artikel mengenai keamanan siber dari SecuraID" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">
        {/* Banner */}
        <div className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
            <div className="absolute top-10 left-1/4 w-64 h-64 bg-indigo-700/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Artikel Keamanan Digital
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Temukan panduan, tips, dan berita terbaru untuk melindungi data Anda di dunia digital
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="max-w-2xl mx-auto relative">
              <input type="text" placeholder="Cari artikel..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full py-4 px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <svg className="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Filter kategori */}
        <motion.div className="container mx-auto px-6 py-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setSelectedCategory(category)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' : 'bg-white/10 text-blue-100 hover:bg-white/20'}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }}>
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid artikel */}
        <div className="container mx-auto px-6 py-12">
          {filteredArticles.length > 0 ? (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}>
              {filteredArticles.map((artikel, index) => (
                <motion.div key={artikel.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index + 0.2, duration: 0.5 }} whileHover={{ y: -10 }}>
                  <ArticleCard artikel={artikel} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}>
              <div className="inline-block p-6 bg-blue-900/30 rounded-2xl backdrop-blur-sm border border-blue-700/50">
                <svg className="w-16 h-16 mx-auto text-blue-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-blue-200 mb-2">Artikel Tidak Ditemukan</h3>
                <p className="text-blue-300">Tidak ada artikel yang sesuai dengan pencarian Anda</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-700/30 to-indigo-800/30 backdrop-blur-sm border-y border-white/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Bantu kami Update dengan Artikel/Berita Terbaru
                </span>
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Login terlebih dahulu untuk menambah artikel atau berita di web ini.
              </p>
              <div className="max-w-xl mx-auto flex justify-center">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30">
                  LOGIN SEKAKRANG
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />

      <audio ref={audioRef} loop preload="auto" autoPlay>
        <source src="/musik-latar.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={toggleMusic} className="fixed bottom-6 left-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition duration-300 focus:outline-none" title={isPlaying ? 'Pause Musik' : 'Putar Musik'}>
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z" />
          </svg>
        )}
      </button>
    </div>
  );
}