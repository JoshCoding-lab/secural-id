import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head'; // Tambahkan ini

// Inisialisasi font Inter
const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
