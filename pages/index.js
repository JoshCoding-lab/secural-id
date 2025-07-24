import { useState, useEffect } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const articles = [
    {
      title: "Cara Mengenali dan Menghindari Email Phishing Seperti Profesional",
      desc: "Pelajari tanda-tanda email penipuan yang canggih dan lindungi data pribadi Anda dari serangan siber.",
      author: "Budi Santoso",
      date: "23 Juli 2025",
      image: "/phishing.jpg",
    },
    {
      title: "5 Langkah Mudah Mengamankan Akun Media Sosial Anda",
      desc: "Jangan biarkan akun media sosial Anda diretas. Ikuti tips keamanan sederhana ini.",
      author: "Siti Rahayu",
      date: "22 Juli 2025",
      image: "/social-media.jpg",
    },
    {
      title: "Memahami Pentingnya Two-Factor Authentication (2FA)",
      desc: "Tingkatkan keamanan akun Anda dengan metode verifikasi dua langkah yang kuat.",
      author: "Ahmad Fauzi",
      date: "21 Juli 2025",
      image: "/2fa.jpg",
    },
  ];

  return (
    <div className="font-sans bg-gray-50">
      {/* NAVBAR */}
      <nav className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            Secural<span className="text-gray-800">ID</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer transition-colors duration-300 relative group">
              Beranda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors duration-300 relative group">
              Artikel
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors duration-300 relative group">
              Tentang Kami
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors duration-300 relative group">
              Hubungi Kami
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 animate-fadeIn">
            <ul className="space-y-3 text-gray-700 font-medium">
              <li className="hover:text-blue-600 cursor-pointer py-2 transition-colors duration-300">Beranda</li>
              <li className="hover:text-blue-600 cursor-pointer py-2 transition-colors duration-300">Artikel</li>
              <li className="hover:text-blue-600 cursor-pointer py-2 transition-colors duration-300">Tentang Kami</li>
              <li className="hover:text-blue-600 cursor-pointer py-2 transition-colors duration-300">Hubungi Kami</li>
            </ul>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-10 overflow-hidden">
        <div className="relative z-10 text-white text-center md:text-left mt-6 md:mt-0 md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeInUp">
            Keamanan Digital <span className="text-blue-200">Anda</span>
          </h1>
          <p className="text-xl mb-8 max-w-xl animate-fadeInUp animation-delay-200">
            Bersama Sebarkan Literasi Seputar Keamanan Digital.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 transform animate-fadeInUp animation-delay-300">
            Mulai Sekarang
          </button>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center items-center py-10">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Shield Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full border-4 border-blue-300 border-opacity-50 animate-ping absolute"></div>
              <div className="w-5/6 h-5/6 rounded-full border-4 border-blue-300 border-opacity-30 animate-ping animation-delay-1000 absolute"></div>
              <div className="w-2/3 h-2/3 rounded-full border-4 border-blue-300 border-opacity-20 animate-ping animation-delay-2000 absolute"></div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center animate-bounce-slow">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-0 left-10 w-8 h-8 bg-blue-400 rounded-full animate-float"></div>
            <div className="absolute bottom-5 right-5 w-6 h-6 bg-blue-300 rounded-full animate-float animation-delay-2000"></div>
            <div className="absolute top-10 right-0 w-5 h-5 bg-blue-200 rounded-full animate-float animation-delay-1000"></div>
          </div>
        </div>
      </section>

      {/* ARTIKEL */}
      <section className="py-20 bg-gray-50 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Artikel Terbaru Kami</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg">
              Update terus wawasanmu dengan tulisan terbaru seputar keamanan digital, privasi online, dan dunia siber lainnya.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <div className="h-48 bg-gray-200 border-2 border-dashed rounded-t-xl w-full animate-pulse"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      Keamanan Digital
                    </div>
                    <div className="text-sm text-gray-500 ml-4">
                      {item.date}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-3 hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 mb-5">{item.desc}</p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-10 h-10"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{item.author}</p>
                      <p className="text-xs text-gray-500">Cybersecurity Expert</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
              Lihat Semua Artikel
            </button>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dalam Angka</h2>
            <div className="w-24 h-1 bg-white bg-opacity-50 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-blue-100">
              Data dan fakta tentang pentingnya keamanan digital di Indonesia
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "76%", label: "Pengguna Internet" },
              { value: "42%", label: "Korban Cybercrime" },
              { value: "200M+", label: "Serangan per Tahun" },
              { value: "87%", label: "Perusahaan Rentan" }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-3 animate-countup">
                  {stat.value}
                </div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 bg-white rounded-2xl shadow-xl p-10 border border-blue-100">
          <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Tetap Update</h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Dapatkan pembaruan keamanan digital langsung ke email Anda. Berlangganan newsletter kami sekarang!
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Alamat email Anda" 
                className="flex-1 px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Secural<span className="text-blue-500">ID</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Mendedukasi dan memberdayakan masyarakat untuk navigasi yang lebih aman di dunia digital.
            </p>
            <div className="flex space-x-4 text-gray-300 text-xl">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Navigasi</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Beranda</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Artikel</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Sumber Daya</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Kategori</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Keamanan Data</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Privasi Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Cyber Crime</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Tips & Trik</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Berita Terkini</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-5">Kontak</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Jl. Digital No. 123, Jakarta</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@securalid.co.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm text-gray-400 mt-16 pt-6 border-t border-gray-800">
          © 2025 Secural ID. Sebuah inisiatif dari program magang Kominfo.
        </div>
      </footer>
      
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </div>
  );
}