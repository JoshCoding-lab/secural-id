import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Inter } from 'next/font/google';

// Inisialisasi font Inter
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    // Terapkan className dari font ke tag <main> yang membungkus seluruh aplikasi
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}