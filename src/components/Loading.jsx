import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import Car from "../assets/images/car.png"; // Ensure this path is correct
import Intro from "../assets/Sound/loading.mp3"; // Ensure this path is correct

const Loading = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const audio = new Audio(Intro);
    audio.volume = 0.6;
    audio.play().catch((e) => {
      console.warn("Playback failed:", e);
    });

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFadingOut(true);
          setTimeout(() => {
            onFinish();
          }, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen bg-[radial-gradient(circle,_rgba(255,192,203,0.15)_0%,_rgba(50,0,70,1)_90%)] text-white relative overflow-hidden transition-opacity duration-700 border-4 border-pink-500 shadow-[0_0_25px_#ec4899] animate-[borderFlash_2s_infinite] ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo Gacha City */}
      <img
        src={Logo}
        alt='Gacha City Logo'
        className='w-72 mb-32 drop-shadow-lg animate-pulse'
      />

      <div className='relative w-96 h-16 mb-4'>
        {/* Xe */}
        <img
          src={Car}
          alt='Car'
          className='w-16 h-auto absolute top-0 transition-transform duration-100'
          style={{
            left: `${progress}%`,
            transform: "translateX(-50%)",
          }}
        />

        {/* Thanh progress đẹp */}
        <div className='absolute bottom-0 left-0 w-full h-5 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-700 shadow-inner border border-fuchsia-400 overflow-hidden'>
          <div
            className='h-full transition-all duration-100 bg-gradient-to-r from-yellow-400 via-rose-500 to-pink-500 animate-[pulse_2s_infinite] shadow-[0_0_10px_2px_rgba(255,200,100,0.7)]'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className='mt-6 px-6 py-2 rounded-full bg-orange-600 border border-pink-500 text-pink-300 font-extrabold text-2xl tracking-widest shadow-[0_0_12px_#ec4899] animate-pulse backdrop-blur-md'>
        {progress}%
      </div>
    </div>
  );
};

export default Loading;
