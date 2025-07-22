import React, {
  useState,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const HeaderBar = () => {
  const [playersOnline, setPlayersOnline] = useState(0);

  // Hàm tính số người online theo khung giờ UTC+7
  const getRandomPlayerCount = () => {
    const now = new Date();
    // Switch UTC+7
    const utc7Time = new Date(now.getTime() + (7 * 60 * 60 * 1000));
    const hour = utc7Time.getUTCHours();
    
    let min, max;
    
    if (hour >= 6 && hour < 9) {
    
      min = 150;
      max = 300;
    } else if (hour >= 9 && hour < 12) {

      min = 200;
      max = 350;
    } else if (hour >= 13 && hour < 17) {
     
      min = 300;
      max = 500;
    } else if (hour >= 18 && hour < 24) {
    
      min = 600;
      max = 999;
    } else {
    
      min = 500;
      max = 800;
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    // Set initial player count based on time
    setPlayersOnline(getRandomPlayerCount());
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
