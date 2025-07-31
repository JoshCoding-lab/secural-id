// components/ArticleCard.js

import Image from "next/image";

export default function ArticleCard({ artikel }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden flex flex-col border border-blue-300/20">
      <div className="relative w-full h-52">
        <Image
          src={artikel.gambar}
          alt={`Gambar untuk artikel ${artikel.judul}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 flex-grow">
          {artikel.judul}
        </h3>
        <p className="text-blue-200 text-sm mb-6">{artikel.deskripsi}</p>
        
        {/* Tombol ini sekarang menggunakan tag <a> biasa */}
        <div className="mt-auto">
          <a
            href={artikel.link} // Mengarah ke link eksternal
            target="_blank"     // Membuka di tab baru
            rel="noopener noreferrer" // Praktik keamanan untuk link eksternal
            className="inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
}