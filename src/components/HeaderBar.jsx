import React, {
  useState,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const HeaderBar = () => {
  const [playersOnline, setPlayersOnline] =
    useState();

  useEffect(() => {
    // Tạo hiệu ứng số người chơi thay đổi nhẹ nhàng
    const interval = setInterval(() => {
      setPlayersOnline(
        (prev) =>
          prev +
          Math.floor(Math.random() * 5 - 2),
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='z-50 relative bg-gradient-to-r from-yellow-500 via-sky-500 to-pink-800 backdrop-blur-md border-b border-white/10 shadow-md'>
      <div className='max-w-screen-xl mx-auto flex justify-between items-center relative'>
        {/* Logo */}
        <div className='flex items-center space-x-3'>
          <img
            src={logo}
            alt='Gacha City Logo'
            className='w-20 md:w-20 drop-shadow-xl'
          />
        </div>

        {/* Player Count Centered */}
        <div className='absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2'>
          <div className='bg-amber-500 backdrop-blur-md px-6 py-2 rounded-full shadow-lg animate-pulse border border-white/20'>
            <span className='text-white font-bold text-sm md:text-base tracking-wide whitespace-nowrap'>
              👥 {playersOnline} người đang chơi
            </span>
          </div>
        </div>

        {/* Menu */}
        <nav className='space-x-6 bg-white/10 rounded-xl shadow-lg backdrop-blur-md px-4 py-2 flex items-center'>
          <Link
            to='/'
            className='text-white hover:text-red-500 transition font-medium'
          >
            Trang Chủ
          </Link>
          <Link
            to='/main'
            className='bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full shadow transition'
          >
            Tham gia ngay
          </Link>
          <Link
            to='/gachagame'
            className='text-white hover:text-red-500 transition font-medium'
          >
            GachaGame
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBar;
