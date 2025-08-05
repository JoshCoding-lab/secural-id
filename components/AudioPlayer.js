// components/AudioPlayer.js

"use client"; 

import { useState, useRef, useEffect } from 'react';

// Ikon untuk tombol (Tidak ada perubahan)
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.72-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
  </svg>
);

const PauseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75zm9 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>
);


export default function AudioPlayer({ autoPlay = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  // State untuk melacak apakah pengguna sudah berinteraksi
  const [hasInteracted, setHasInteracted] = useState(false);

  // Fungsi untuk mencoba memutar audio
  const tryPlay = () => {
    const audio = audioRef.current;
    if (audio && !isPlaying) { // Hanya coba putar jika belum berputar
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(error => console.log("Autoplay failed, waiting for user interaction."));
      }
    }
  };

  // Efek untuk mendeteksi interaksi pertama pengguna
  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      // Hapus listener setelah interaksi pertama agar tidak berjalan terus-menerus
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    // Tambahkan listener untuk berbagai jenis interaksi
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);

    // Cleanup function untuk menghapus listener jika komponen di-unmount
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, []); // Array kosong berarti efek ini hanya berjalan sekali saat komponen dimuat

  // Efek untuk memutar audio jika autoplay diaktifkan dan pengguna sudah berinteraksi
  useEffect(() => {
    if (autoPlay && hasInteracted) {
      tryPlay();
    }
  }, [autoPlay, hasInteracted]); // Jalankan efek ini jika autoPlay atau hasInteracted berubah

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/background-music.mp3" loop />
      <button
        onClick={togglePlayPause}
        className="fixed bottom-5 right-5 z-50 bg-white/20 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
    </>
  );
}