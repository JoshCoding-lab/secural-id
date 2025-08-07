import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Lottie from "lottie-react";
import talkingAnimation from "../src/animations/Talking Character.json";
import NaratorPlayer from '../components/NaratorPlayer';
import BacksoundPlayer from '../components/BacksoundPlayer';


const CheckIcon = () => (
  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  </div>
);

const BookIcon = () => (
  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  </div>
);

const SparklesIcon = () => (
  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  </div>
);

export default function Home() {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('features-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { scrollYProgress } = useScroll();
  const skew = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  const anggota = [
    { nama: 'Joshua Barani', jobdesk: 'Kordinator Projek', asal: 'Aki University', foto: '/anggota/joshua.jpg' },
    { nama: 'Yosia Agus Permana', jobdesk: 'Frontend Developer', asal: 'Aki University', foto: '/anggota/Yosia.jpg' },
    { nama: 'Hendrik Prayoga', jobdesk: 'UI/UX Designer', asal: 'Telkom University', foto: '/anggota/Hendrik.jpg' },
    { nama: 'Muhamad Dimas N.', jobdesk: 'UI/UX Designer', asal: 'Telkom University', foto: '/anggota/Dimas.jpg' },
    { nama: 'Rifki Aditya Hariyanto', jobdesk: 'Backend Developer', asal: 'Telkom University', foto: '/anggota/Rifki.jpg' },
    { nama: 'Arif Pramudia W.', jobdesk: 'Backend Developer', asal: 'Telkom University', foto: '/anggota/Arif.jpg' },
    { nama: 'Irgi', jobdesk: 'Asisten Koordinator', asal: 'Aki University', foto: '/anggota/Irgi.jpg' },
     { nama: 'Timotius Paskah', jobdesk: 'Frontend Developer', asal: 'Aki University', foto: '/anggota/Timo.jpg' },
  ];

  return (
    <div className="font-sans bg-slate-50 text-slate-800 overflow-x-hidden antialiased">
      <Navbar />
      <NaratorPlayer />
      <BacksoundPlayer />
      
      {/* === HERO SECTION (BIRU) === */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="absolute top-10 left-20 w-48 h-48 rounded-full bg-blue-400/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl"></div>
        
        {/* Glowing particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-200 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-blue-300 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="flex-1 space-y-8">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
              >
                <span className="block text-white">
                  <motion.span 
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-100"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: '0 0 15px rgba(147, 197, 253, 0.7)'
                    }}
                  >
                    Aman & Sadar Digital
                  </motion.span>
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="block mt-6 text-2xl md:text-3xl lg:text-4xl text-white/90 font-light"
                >
                  Bersama <span className="font-semibold text-cyan-300 drop-shadow">Secural ID</span>
                </motion.span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-blue-100 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl leading-relaxed"
            >
              Platform edukasi yang mudah dipahami untuk melindungi data dan privasi Anda di era digital. 
              Kami menyederhanakan konsep keamanan siber menjadi panduan praktis.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0, 100, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-50"
              >
                Mulai Sekarang
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-xl opacity-40 animate-pulse"></div>
              <div className="bg-white/10 backdrop-blur-md p-1 rounded-3xl shadow-2xl overflow-hidden relative z-10 border border-white/20">
                <img 
                  src="/gambar-baru.png" 
                  alt="Secural ID Hero Image" 
                  className="w-full max-w-md rounded-2xl mx-auto transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            
          
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-cyan-400/30 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-400/30 blur-xl"></div>
          </motion.div>
        </div>
        
        <motion.div 
          onClick={handleScrollDown} 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center cursor-pointer group" 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity">Scroll untuk lanjut</span>
          <svg className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

     
     <section
  id="features-section"
  className="relative py-24 sm:py-32 bg-white text-slate-800 overflow-hidden"
>
  
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50"></div>
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(59, 130, 246, 0.2),
          rgba(59, 130, 246, 0.2) 10px,
          transparent 10px,
          transparent 20px
        )`,
        animation: 'moveBackground 30s linear infinite',
        backgroundSize: '200% 200%',
      }}
    />
  </div>
  
  {/* Style untuk animasi */}
  <style jsx>{`
    @keyframes moveBackground {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }
  `}</style>

  {/* Konten Utama */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
    {/* JUDUL */}
    <div className="inline-block mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2"
      >
        <span className="relative inline-block">
          <span className="absolute inset-x-0 bottom-0 h-4 bg-blue-100/50 z-0 transform -rotate-1"></span>
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Kenapa Harus Secural ID?
          </span>
        </span>
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mt-2"
      />
    </div>

    {/* DESKRIPSI DAN FITUR */}
    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
      Kami menyederhanakan konsep keamanan siber yang kompleks menjadi panduan
      yang praktis dan dapat diakses siapa saja.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <BookIcon />
        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          Ringkas & Mudah Dipahami
        </h4>
        <p className="text-gray-600">
          Membantu masyarakat melindungi data pribadi agar tidak jadi korban
          kejahatan digital.
        </p>
      </div>
      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <CheckIcon />
        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          Profesional & Relevan
        </h4>
        <p className="text-gray-600">
          Solusi edukatif di tengah rendahnya kesadaran masyarakat terhadap
          keamanan dan privasi online.
        </p>
      </div>
      <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        <SparklesIcon />
        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          Menggugah & Inspiratif
        </h4>
        <p className="text-gray-600">
          Di era digital, data adalah aset. Secural ID hadir untuk membantu Anda
          melindunginya.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* === TIM SECTION === */}
      <section className="py-24 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4 text-sm font-medium"
            >
              Tim Kami
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              Kolaborasi Profesional
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-blue-100 max-w-3xl mx-auto text-lg"
            >
              Tim ahli dari berbagai universitas, berdedikasi menciptakan platform keamanan digital terbaik untuk Anda.
            </motion.p>
          </div>
          
          <div className="px-4 md:px-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="teamSwiper"
            >
              {anggota.map((orang, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden h-full flex flex-col border border-white/20 transform transition-transform duration-300 hover:-translate-y-2 group">
                      <div className="h-80 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-700/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img 
                          src={orang.foto} 
                          alt={orang.nama} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6 text-center flex-grow">
                        <h3 className="text-xl font-semibold text-white">{orang.nama}</h3>
                        <p className="text-blue-200 font-medium mt-1">{orang.jobdesk}</p>
                        <p className="text-sm text-blue-100 mt-3 flex items-center justify-center">
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {orang.asal}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <motion.div 
        className="fixed bottom-6 left-6 z-50 w-48 md:w-52 pointer-events-none"
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <Lottie animationData={talkingAnimation} loop={true} />
      </motion.div>

      <Footer />
    </div>
  );
}