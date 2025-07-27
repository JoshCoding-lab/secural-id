import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from "lottie-react";
import shieldAnimation from "../public/shield-animation.json";

// --- PERUBAHAN ---: Menambahkan ikon untuk bagian 'Kenapa Harus...' untuk tampilan yang lebih profesional
const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const BookIcon = () => (
  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const SparklesIcon = () => (
  <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M16 17v4m-2-2h4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m-6.364-2.364l.707.707M16.071 4.929l.707.707m-12.728 0l-.707.707M17.486 16.778l-.707.707" />
  </svg>
);
// --- AKHIR PERUBAHAN ---

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const anggota = [
    { nama: 'Joshua Barani', asal: 'Universitas XYZ', foto: '/anggota/joshua.jpg' },
    { nama: 'Anggota 2', asal: 'Universitas ABC', foto: '/anggota/anggota2.jpg' },
    { nama: 'Anggota 3', asal: 'Universitas DEF', foto: '/anggota/anggota3.jpg' },
    { nama: 'Anggota 4', asal: 'Universitas GHI', foto: '/anggota/anggota4.jpg' },
    { nama: 'Anggota 5', asal: 'Universitas JKL', foto: '/anggota/anggota5.jpg' },
    { nama: 'Anggota 6', asal: 'Universitas MNO', foto: '/anggota/anggota6.jpg' },
    { nama: 'Anggota 7', asal: 'Universitas PQR', foto: '/anggota/anggota7.jpg' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    // --- PERUBAHAN ---: Mengganti font-sans dengan font Inter (jika ditambahkan) dan overflow-x-hidden untuk keamanan layout
    <div className="font-sans bg-gray-50 text-gray-800 overflow-x-hidden antialiased">

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.h1 whileHover={{ scale: 1.05 }} className="text-2xl font-extrabold text-blue-700 cursor-pointer tracking-tight">
            Secural<span className="text-gray-900">ID</span>
            {/* --- PERUBAHAN ---: Style sub-teks yang lebih halus */}
            <span className="text-xs font-medium text-gray-400 ml-1.5 align-middle">community</span>
          </motion.h1>

          <ul className="hidden md:flex space-x-8 text-gray-600 font-medium text-sm">
            {['Beranda', 'Artikel', 'Tentang Kami', 'Hubungi Kami'].map((item) => (
              <motion.li key={item} whileHover={{ y: -2, color: '#1D4ED8' }} className="cursor-pointer hover:text-blue-800 transition-colors duration-200">
                {item}
              </motion.li>
            ))}
          </ul>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 hover:text-blue-700 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden px-6 pb-4 border-t border-gray-200/80"
            >
              <ul className="space-y-2 text-gray-600 font-medium mt-4">
                {/* --- PERUBAHAN ---: Menambahkan efek hover pada menu mobile */}
                {['Beranda', 'Artikel', 'Tentang Kami', 'Hubungi Kami'].map((item) => (
                  <li key={item} className="hover:text-blue-800 cursor-pointer py-2 px-2 rounded-md hover:bg-blue-50 transition-all duration-200">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      
      {/* HERO SECTION */}
      {/* --- PERUBAHAN ---: Gradien warna lebih modern dan pola dot lebih subtil */}
      <section className="relative bg-gradient-to-br from-blue-700 via-indigo-800 to-gray-900 text-white min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff66_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center md:text-left"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight">
              Aman & Sadar Digital bersama<br /><span className="text-cyan-300">Secural ID</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-blue-100 max-w-lg mx-auto md:mx-0 text-base md:text-lg">
              Edukasi mudah dipahami untuk melindungi data dan privasi Anda di era digital.
            </motion.p>
            <motion.div variants={itemVariants}>
              {/* --- PERUBAHAN ---: Tombol lebih menonjol dengan transisi yang halus */}
              <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-300/30 transition-all hover:scale-105 duration-300 ease-out">
                Mulai Sekarang
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
            className="w-full flex justify-center"
          >
            <Lottie animationData={shieldAnimation} loop={true} className="w-full max-w-md drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* PERKENALAN KOMUNITAS */}
      <section className="bg-white py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
            Apa itu <span className="text-blue-600">Secural ID</span>?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-16">
            <strong>Secural ID</strong> adalah komunitas edukasi digital yang berfokus pada <span className="text-blue-600 font-semibold">kesadaran keamanan data dan privasi</span>. Kami terdiri dari 7 mahasiswa dari berbagai universitas yang memiliki misi memberikan pemahaman yang mudah dipahami kepada masyarakat agar lebih aman secara digital.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-10">Tim Kami</h3>
          {/* --- PERUBAHAN ---: Animasi staggered saat scroll dan efek hover yang lebih interaktif pada kartu anggota */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 justify-center"
          >
            {anggota.map((orang, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group text-center cursor-pointer"
              >
                <div className="relative inline-block">
                  <img src={orang.foto} alt={orang.nama} className="w-24 h-24 object-cover rounded-full mx-auto mb-4 ring-4 ring-gray-200 group-hover:ring-blue-500 transition-all duration-300" />
                </div>
                <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{orang.nama}</h4>
                <p className="text-sm text-gray-500">{orang.asal}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KENAPA HARUS SECURAL ID */}
      <section className="bg-blue-50 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-900 mb-12">
            Kenapa Harus <span className="text-blue-600">Secural ID</span>?
          </h2>
          {/* --- PERUBAHAN ---: Kartu fitur lebih dinamis dengan ikon, shadow, dan efek hover yang lebih baik */}
          <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <BookIcon />
              <h4 className="text-xl font-semibold text-blue-800 mt-4 mb-2">Ringkas & Mudah Dipahami</h4>
              <p className="text-gray-600">Membantu masyarakat melindungi data pribadi agar tidak jadi korban kejahatan digital.</p>
            </div>
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CheckIcon />
              <h4 className="text-xl font-semibold text-blue-800 mt-4 mb-2">Profesional & Relevan</h4>
              <p className="text-gray-600">Solusi edukatif di tengah rendahnya kesadaran masyarakat terhadap keamanan dan privasi online.</p>
            </div>
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <SparklesIcon />
              <h4 className="text-xl font-semibold text-blue-800 mt-4 mb-2">Menggugah & Inspiratif</h4>
              <p className="text-gray-600">Di era digital, data bisa dicuri dalam hitungan detik — Secural ID hadir untuk melindungi semua orang.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-gray-900 text-white"
      >
        <div className="max-w-6xl mx-auto py-16 px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-2">
            Secural<span className="text-blue-400">ID</span>
          </h3>
          <p className="text-gray-400 max-w-md mx-auto mb-8 text-sm sm:text-base">
            Mendedukasi dan memberdayakan masyarakat untuk navigasi yang lebih aman di dunia digital.
          </p>
          
          {/* --- PERUBAHAN ---: Menambahkan ikon sosial media untuk tampilan footer yang lebih lengkap */}
          <div className="flex justify-center space-x-6 mb-10">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">Twitter</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">GitHub</span><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg></a>
          </div>

          <div className="text-sm text-gray-500 border-t border-gray-700 pt-8 mt-8">
            © {new Date().getFullYear()} Secural ID. All Rights Reserved.
          </div>
        </div>
      </motion.footer>
    </div>
  );
}