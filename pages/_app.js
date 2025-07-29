import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

// Inisialisasi font Inter
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
     <ThemeProvider attribute="class">
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
    // --- AKHIR PERUBAHAN ---
  );
}