import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from "lottie-react"; // --- BARU: Import Lottie
import shieldAnimation from "../public/shield-animation.json";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Data artikel Anda
  const articles = [
    {
      title: "Cara Mengenali dan Menghindari Email Phishing",
      desc: "Pelajari tanda-tanda email penipuan dan lindungi data pribadi Anda dari serangan siber.",
      author: "Budi Santoso",
      date: "23 Juli 2025",
      image: "/phishing.jpg",
    },
  
    {
      title: "5 Langkah Membuat Password yang Kuat & Sulit Ditebak",
      desc: "Tinggalkan 'password123'. Ikuti panduan praktis untuk membuat kata sandi yang kokoh.",
      author: "Andi Wijaya",
      date: "21 Juli 2025",
      image: "/password.jpg",
    },
  ];

  // Varian animasi untuk Hero Section
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="font-sans bg-gray-50 overflow-x-hidden"> {/* Perbaikan 1: overflow-x-hidden */}
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-blue-600 cursor-pointer"
          >
            Secural<span className="text-gray-800">ID</span>
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {['Beranda', 'Artikel', 'Tentang Kami', 'Hubungi Kami'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -2, color: '#2563EB' }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden px-6 pb-4 border-t border-gray-200"
            >
              <ul className="space-y-2 text-gray-700 font-medium mt-2">
                <li className="hover:text-blue-600 cursor-pointer py-1">Beranda</li>
                <li className="hover:text-blue-600 cursor-pointer py-1">Artikel</li>
                <li className="hover:text-blue-600 cursor-pointer py-1">Tentang Kami</li>
                <li className="hover:text-blue-600 cursor-pointer py-1">Hubungi Kami</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-400 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-white text-center md:text-left"
          >
            <motion.h1 
              variants={heroItemVariants} 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight" // Perbaikan 4: Ukuran font responsif
            >
              Menjaga Jejak Digital Anda Tetap Aman
            </motion.h1>
            <motion.p 
              variants={heroItemVariants} 
              className="text-base sm:text-lg md:text-xl text-blue-100 mb-8" // Perbaikan 4: Ukuran font responsif
            >
              Bersama Sebarkan Literasi Seputar Keamanan Digital.
            </motion.p>
            <motion.div variants={heroItemVariants}>
              <button className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-3 rounded-full font-bold shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto"> {/* Perbaikan 5: Tombol responsif */}
                Mulai Sekarang
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="w-full flex justify-center mt-8 md:mt-0"
          >
            {/* Mengganti <img> dengan komponen Lottie */}
            <Lottie 
              animationData={shieldAnimation} 
              loop={true} 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </motion.div>
          {/* --- AKHIR BAGIAN YANG DIUBAH --- */}

        </div>
      </section>
      {/* ARTIKEL */}
      <section className="py-16 sm:py-20 bg-gray-50"> {/* Perbaikan 2: Padding vertikal responsif */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 sm:mb-12" // Perbaikan 2: Margin responsif
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Artikel Terbaru</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base"> {/* Perbaikan 4: Ukuran font responsif */}
              Wawasan terkini dari dunia keamanan siber untuk menjaga Anda tetap terdepan dan aman.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {/* Perbaikan 3: Gap responsif */}
            {articles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover" 
                  />
                </div>
                <div className="p-5 sm:p-6"> {/* Perbaikan 2: Padding responsif */}
                  <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2">{item.title}</h3> {/* Perbaikan 4: Ukuran font responsif */}
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">{item.desc}</p>
                  <div className="text-xs text-gray-500 border-t border-gray-100 pt-3 flex justify-between">
                    <span>Oleh <strong>{item.author}</strong></span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-gray-800 text-white"
      >
         <div className="max-w-6xl mx-auto py-10 sm:py-12 px-4 sm:px-6 lg:px-8 text-center"> {/* Perbaikan 2: Padding responsif */}
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Secural<span className="text-blue-400">ID</span>
          </h3>
          <p className="text-gray-400 max-w-md mx-auto mb-6 text-sm sm:text-base"> {/* Perbaikan 4: Ukuran font responsif */}
            Mendedukasi dan memberdayakan masyarakat untuk navigasi yang lebih aman di dunia digital.
          </p>
          <div className="text-xs sm:text-sm text-gray-500 border-t border-gray-700 pt-6 mt-8">
            © {new Date().getFullYear()} Secural ID. All Rights Reserved.
          </div>
        </div>
      </motion.footer>
    </div>
  );
}