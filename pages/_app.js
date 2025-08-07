// pages/_app.js

import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

// Impor SEMUA font yang akan digunakan di sini
import { Inter, Major_Mono_Display, Chakra_Petch } from 'next/font/google';

// Konfigurasi semua font dengan CSS Variables
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // Variabel untuk font utama
});

const majorMonoDisplay = Major_Mono_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-major-mono-display', // Variabel untuk font judul
});

const chakraPetch = Chakra_Petch({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-chakra-petch', // Variabel untuk font 'tech'
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Gabungkan semua variabel font di sini dan set font default dengan `font-sans` */}
      <main className={`${inter.variable} ${majorMonoDisplay.variable} ${chakraPetch.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}