import Carousel from "../components/Carousel";
import YouTubeEmbed from "../components/YouTubeEmbed";
import DiscordWidget from "../components/DiscordWidget";
import News from "../components/News";
import Rules from "../components/Rules";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const MainPage = () => {
  const [clickCount, setClickCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogoClick = (e) => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 10) setShowPopup(true);

    const plusOne = document.createElement('div');
    plusOne.textContent = '+1';
    plusOne.className = 'absolute text-pink-400 font-bold text-xl pointer-events-none animate-tapEffect';
    plusOne.style.left = `${e.nativeEvent.offsetX}px`;
    plusOne.style.top = `${e.nativeEvent.offsetY}px`;

    e.target.parentElement.appendChild(plusOne);

    setTimeout(() => {
      plusOne.remove();
    }, 1100);
  };

  const closePopup = () => {
    setShowPopup(false);
    setClickCount(0);
  };

  const handleDiscordJoin = () => {
    window.open('https://discord.gg/gachaking', '_blank');
    closePopup();
  };

  return (
    <div className="relative text-white min-h-screen flex flex-col overflow-hidden bg-fixed bg-cover bg-center bg-[url('/src/assets/images/9.png')]">
      {/* Nền blur */}
      <div className="absolute inset-0 backdrop-blur-sm brightness-75 z-0" />

      {/* Nội dung */}
      <div className="relative z-10 flex-1">
        <header className="flex justify-between items-center px-8 py-8">
          <Link
            to="/"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full shadow transition"
          >
            ← Quay lại
          </Link>

          <div className="relative">
            <img
              src={logo}
              alt="Gacha City Logo"
              className="w-40 h-40 cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 select-none"
              onClick={handleLogoClick}
            />
            {clickCount < 5 && (
              <div className="absolute -right-28 top-10 animate-pulse">
                <span className="text-yellow-400 font-semibold text-sm whitespace-nowrap drop-shadow-lg">
                  thử click vào đây
                </span>
              </div>
            )}
          </div>

          <div className="w-20"></div>
        </header>

        {/* Tap animation */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes tapEffect {
              0% { opacity: 1; transform: translateY(0) scale(1); }
              100% { opacity: 0; transform: translateY(-50px) scale(1.2); }
            }
            .animate-tapEffect {
              animation: tapEffect 1s ease-out forwards;
            }
          `
        }} />

        <div className="px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-4xl font-extrabold mb-6 text-left drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]">
                  Ảnh đẹp Thành Phố
                </h2>
                <Carousel />
              </section>

              <section>
                <h2 className="text-4xl font-extrabold mb-6 text-left drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]">
                  Giấc mơ Gacha City
                </h2>
                <div className="p-2 bg-black/20 backdrop-blur-sm rounded-xl border-2 border-white/30 shadow-2xl">
                  <YouTubeEmbed videoId="pQklkmItoL0" />
                </div>
              </section>
            </div>

            {/* Right side */}
            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-extrabold mb-4 text-left drop-shadow-[0_0_12px_rgba(34,197,94,0.5)]">
                  Tham gia cộng đồng
                </h2>
                <div className="p-2 bg-black/20 backdrop-blur-sm rounded-xl border-2 border-white/30 shadow-2xl">
                  <DiscordWidget serverId="1300050828765302784" />
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-extrabold mb-4 text-left drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]">
                  Tin tức
                </h2>
                <div className="p-2 bg-black/20 backdrop-blur-sm rounded-xl border-2 border-white/30 shadow-2xl">
                  <News />
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-extrabold mb-4 text-left drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                  Luật chơi & Bản đồ
                </h2>
                <div className="p-2 bg-black/20 backdrop-blur-sm rounded-xl border-2 border-white/30 shadow-2xl">
                  <Rules />
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl border-2 border-white/30 shadow-2xl max-w-md mx-4 text-center">
              <div className="text-white text-xl font-bold mb-6">
                Bạn đã click quá nhiều !!!😒
              </div>
              <div className="text-white text-lg mb-6">
                Tại sao bạn còn ở đây, hãy tham gia thành phố ngay đi
              </div>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleDiscordJoin}
                  className="bg-[#c0238c] hover:bg-[#a01d75] text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
                >
                  Tham gia Discord
                </button>
                <button
                  onClick={closePopup}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
