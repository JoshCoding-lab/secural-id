import { useState, useEffect } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Deteksi perangkat mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      window.removeEventListener('scroll', handleScroll);
    };
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
          <div className="md:hidden px-4 pb-4">
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Keamanan Digital <span className="text-blue-200">Anda</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Bersama Sebarkan Literasi Seputar Keamanan Digital.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-colors duration-300">
            Mulai Sekarang
          </button>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-center items-center py-10">
          {isMobile ? (
            // Fallback untuk mobile: gambar statis
            <div className="bg-blue-500 rounded-full p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          ) : (
            // Animasi untuk desktop
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-4 border-blue-300 border-opacity-50"></div>
                <div className="w-5/6 h-5/6 rounded-full border-4 border-blue-300 border-opacity-30"></div>
                <div className="w-2/3 h-2/3 rounded-full border-4 border-blue-300 border-opacity-20"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ARTIKEL */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Artikel Terbaru Kami</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-xl mx-auto px-4">
              Update terus wawasanmu dengan tulisan terbaru seputar keamanan digital, privasi online, dan dunia siber lainnya.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="h-48 bg-gray-200 border-2 border-dashed w-full"></div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <div className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      Keamanan
                    </div>
                    <div className="text-xs text-gray-500 ml-3">
                      {item.date}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-8 h-8"></div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{item.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-300">
              Lihat Semua Artikel
            </button>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Dalam Angka</h2>
            <div className="w-16 h-1 bg-white bg-opacity-50 mx-auto mb-4"></div>
            <p className="max-w-xl mx-auto text-blue-100">
              Data dan fakta tentang pentingnya keamanan digital di Indonesia
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 text-center">
            {[
              { value: "76%", label: "Pengguna Internet" },
              { value: "42%", label: "Korban Cybercrime" },
              { value: "200M+", label: "Serangan per Tahun" },
              { value: "87%", label: "Perusahaan Rentan" }
            ].map((stat, index) => (
              <div key={index} className="p-4 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20">
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 bg-white rounded-xl shadow-md p-8 border border-blue-100">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Tetap Update</h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              Dapatkan pembaruan keamanan digital langsung ke email Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Alamat email Anda" 
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 transition-colors duration-300 text-sm">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-12 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              Secural<span className="text-blue-500">ID</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Mendedukasi dan memberdayakan masyarakat untuk navigasi yang lebih aman di dunia digital.
            </p>
            <div className="flex space-x-3 text-gray-300">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Navigasi</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-300">Beranda</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Artikel</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-300">Hubungi Kami</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Kontak</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Jl. Digital No. 123, Jakarta</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-0.5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>info@securalid.co.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-xs text-gray-400 mt-10 pt-6 border-t border-gray-800 max-w-7xl mx-auto">
          © 2025 Secural ID. Sebuah inisiatif dari program magang Kominfo.
        </div>
      </footer>
    </div>
  );
}