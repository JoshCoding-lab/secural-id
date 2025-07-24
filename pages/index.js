export default function Home() {
  const articles = [
    {
      title: "Cara Mengenali dan Menghindari Email Phishing Seperti Profesional",
      desc: "Pelajari tanda-tanda email penipuan yang canggih dan lindungi data pribadi Anda dari serangan siber.",
      author: "Budi Santoso",
      date: "23 Juli 2025",
      image: "/phishing.jpg",
    },
    {
      title: "Cara Mengenali dan Menghindari Email Phishing Seperti Profesional",
      desc: "Pelajari tanda-tanda email penipuan yang canggih dan lindungi data pribadi Anda dari serangan siber.",
      author: "Budi Santoso",
      date: "23 Juli 2025",
      image: "/phishing.jpg",
    },
  ];

  return (
    <div className="font-sans">
      {/* NAVBAR */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Secural<span className="text-gray-800">ID</span></h1>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Beranda</li>
            <li className="hover:text-blue-600 cursor-pointer">Artikel</li>
            <li className="hover:text-blue-600 cursor-pointer">Tentang Kami</li>
            <li className="hover:text-blue-600 cursor-pointer">Hubungi Kami</li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-300 min-h-[80vh] flex items-center justify-between px-10">
        <div className="max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Keamanan Digital Anda</h1>
          <p className="text-lg mb-6">
            Bersama Sebarkan Literasi Seputar Keamanan Digital.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition">
            Mulai Sekarang
          </button>
        </div>
        <div className="hidden md:block">
          <img src="/illustration.png" alt="ilustrasi" className="max-w-md rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ARTIKEL */}
      <section className="py-16 bg-white px-4 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600">Artikel Terbaru Kami</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Update terus wawasanmu dengan tulisan terbaru seputar keamanan digital, privasi online, dan dunia siber lainnya.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <img src={item.image} alt="artikel" className="rounded-md mb-4" />
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <div className="text-sm text-gray-500 border-t pt-2">
                Oleh {item.author} &nbsp; | &nbsp; {item.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Secural<span className="text-blue-500">ID</span>
            </h3>
            <p className="text-gray-400">
              Mendedukasi dan memberdayakan masyarakat untuk navigasi yang lebih aman di dunia digital.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Navigasi</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Beranda</li>
              <li>Artikel</li>
              <li>Tentang Kami</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Follow Kami</h4>
            <div className="flex space-x-4 text-gray-300 text-xl">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-10 border-t pt-4">
          © 2025 Secural ID. Sebuah inisiatif dari program magang Kominfo.
        </div>
      </footer>
    </div>
  );
}
