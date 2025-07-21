import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import bgImage from "../assets/images/9.png";
import chestImage from "../assets/minigame/toppng.com-irate-chest-png-treasure-chest-transparent-background-323x337.png";
import keyImage from "../assets/minigame/toppng.com-key-clipart-golden-key-brass-601x481.png";
import spinningSound from "../assets/sound/spinning-wheel.mp3";
import HeaderBar from "../components/HeaderBar";

// Import các hình ảnh gacha
//

// Import 10 xe common từ thư mục item common
import mercedes300 from "../assets/minigame/item common/1972 Mercedes-Benz 300.png";
import datsunFairladyZ2 from "../assets/minigame/item common/Datsun Fairlady 240Z (2).png";
import datsunFairladyZ from "../assets/minigame/item common/Datsun Fairlady 240Z.png";
import dinkaHakumai from "../assets/minigame/item common/Dinka Hakumai.png";
import hondaCivicEK9 from "../assets/minigame/item common/Honda Civic EK9.png";
import jb700 from "../assets/minigame/item common/JB 700 Fully Decommissioned.png";
import nissanSkyline from "../assets/minigame/item common/Nissan Skyline 2000GT.png";
import stanierTaxi from "../assets/minigame/item common/San Andreas Stanier Taxi.png";
import tofasSerge from "../assets/minigame/item common/Tofaş Serçe.png";
import volkswagenGol from "../assets/minigame/item common/Volkswagen Gol GL.png";

// Import 5 xe rare từ thư mục item rare
import audiQ5 from "../assets/minigame/item rare/Audi Q5 Quattro SLine.png";
import kiaStinger from "../assets/minigame/item rare/Kia Stinger 2022.png";
import suzukiLiana from "../assets/minigame/item rare/Suzuki Liana Glx.png";
import toyotaLandCruiser from "../assets/minigame/item rare/Toyota Land Cruiser.png";
import toyotaTundra from "../assets/minigame/item rare/Toyota Tundra TRD Pro 2020.png";

// Import 4 xe epic từ thư mục item epic
import fordMustangHoonicorn from "../assets/minigame/item epic/Ford Mustang Hoonicorn.png";
import koenigseggJesko from "../assets/minigame/item epic/Koenigsegg Jesko Attack Limited.png";
import lampadatiVayra from "../assets/minigame/item epic/Lampadati Vayra.png";
import lightningMcQueen from "../assets/minigame/item epic/Lightning McQueen Cars 3.png";

// Import 3 xe legendary từ thư mục item legendary
import astonMartinValhalla from "../assets/minigame/item legendary/Aston Martin Valhalla.png";
import koenigseggRegera from "../assets/minigame/item legendary/Koenigsegg Regera.png";
import modLucky from "../assets/minigame/item legendary/MOD Lucky.png";

const MinigameGacha = () => {
  const [isAnimating, setIsAnimating] =
    useState(false);
  const [showSpinPopup, setShowSpinPopup] =
    useState(false);
  const [isSpinning, setIsSpinning] =
    useState(false);
  const [spinOffset, setSpinOffset] = useState(0);
  const [wonItem, setWonItem] = useState(null);
  const [showCongrats, setShowCongrats] =
    useState(false);
  const [shuffledItems, setShuffledItems] =
    useState([]);

  // Ref cho audio
  const audioRef = useRef(null);

  // Danh sách các vật phẩm gacha
  const gachaItems = [
    // 10 xe common
    {
      id: 1,
      image: mercedes300,
      name: "Mercedes-Benz 300",
      rarity: "common",
    },
    {
      id: 2,
      image: datsunFairladyZ2,
      name: "Datsun Fairlady 240Z",
      rarity: "common",
    },
    {
      id: 3,
      image: datsunFairladyZ,
      name: "Datsun Fairlady Z",
      rarity: "common",
    },
    {
      id: 4,
      image: dinkaHakumai,
      name: "Dinka Hakumai",
      rarity: "common",
    },
    {
      id: 5,
      image: hondaCivicEK9,
      name: "Honda Civic EK9",
      rarity: "common",
    },
    {
      id: 6,
      image: jb700,
      name: "JB 700",
      rarity: "common",
    },
    {
      id: 7,
      image: nissanSkyline,
      name: "Nissan Skyline 2000GT",
      rarity: "common",
    },
    {
      id: 8,
      image: stanierTaxi,
      name: "Stanier Taxi",
      rarity: "common",
    },
    {
      id: 9,
      image: tofasSerge,
      name: "Tofaş Serçe",
      rarity: "common",
    },
    {
      id: 10,
      image: volkswagenGol,
      name: "Volkswagen Gol GL",
      rarity: "common",
    },

    // 5 xe rare
    {
      id: 11,
      image: audiQ5,
      name: "Audi Q5 Quattro SLine",
      rarity: "rare",
    },
    {
      id: 12,
      image: kiaStinger,
      name: "Kia Stinger 2022",
      rarity: "rare",
    },
    {
      id: 13,
      image: suzukiLiana,
      name: "Suzuki Liana GLX",
      rarity: "rare",
    },
    {
      id: 14,
      image: toyotaLandCruiser,
      name: "Toyota Land Cruiser",
      rarity: "rare",
    },
    {
      id: 15,
      image: toyotaTundra,
      name: "Toyota Tundra TRD Pro",
      rarity: "rare",
    },

    // 4 xe epic
    {
      id: 16,
      image: fordMustangHoonicorn,
      name: "Ford Mustang Hoonicorn",
      rarity: "epic",
    },
    {
      id: 17,
      image: koenigseggJesko,
      name: "Koenigsegg Jesko Attack",
      rarity: "epic",
    },
    {
      id: 18,
      image: lampadatiVayra,
      name: "Lampadati Vayra",
      rarity: "epic",
    },
    {
      id: 19,
      image: lightningMcQueen,
      name: "Lightning McQueen",
      rarity: "epic",
    },

    // 3 xe legendary
    {
      id: 20,
      image: astonMartinValhalla,
      name: "Aston Martin Valhalla",
      rarity: "legendary",
    },
    {
      id: 21,
      image: koenigseggRegera,
      name: "Koenigsegg Regera",
      rarity: "legendary",
    },
    {
      id: 22,
      image: modLucky,
      name: "MOD Lucky",
      rarity: "legendary",
    },
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "common":
        return "border-gray-400 bg-gray-100";
      case "rare":
        return "border-blue-400 bg-blue-100";
      case "epic":
        return "border-purple-400 bg-purple-100";
      case "legendary":
        return "border-yellow-400 bg-yellow-100";
      default:
        return "border-gray-400 bg-gray-100";
    }
  };

  const getRarityTextColor = (rarity) => {
    switch (rarity) {
      case "common":
        return "text-blue-600";
      case "rare":
        return "text-green-600";
      case "epic":
        return "text-purple-600";
      case "legendary":
        return "text-orange-600";
      default:
        return "text-gray-600";
    }
  };

  const getRarityAnimation = (rarity) => {
    switch (rarity) {
      case "common":
        return "animate-pulse-slow";
      case "rare":
        return "animate-pulse-slow animate-bounce-gentle";
      case "epic":
        return "animate-pulse-slow animate-glow-epic";
      case "legendary":
        return "animate-pulse-slow animate-glow-legendary animate-float";
      default:
        return "animate-pulse-slow";
    }
  };

  // Hàm shuffle array để xáo trộn vị trí items
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (
      let i = shuffled.length - 1;
      i > 0;
      i--
    ) {
      const j = Math.floor(
        Math.random() * (i + 1),
      );
      [shuffled[i], shuffled[j]] = [
        shuffled[j],
        shuffled[i],
      ];
    }
    return shuffled;
  };

  const handleGachaClick = () => {
    setIsAnimating(true);

    // Sau khi animation chest kết thúc, hiển thị popup và tự động bắt đầu quay
    setTimeout(() => {
      setIsAnimating(false);
      setShowSpinPopup(true);
      // Tự động bắt đầu quay luôn
      setTimeout(() => {
        startSpin();
      }, 500); // Delay nhỏ để popup hiển thị mượt
    }, 2000);
  };

  const startSpin = () => {
    // Reset tất cả state trước khi bắt đầu quay mới
    setIsSpinning(false);
    setShowCongrats(false);
    setWonItem(null);

    // Xáo trộn vị trí items mỗi lần quay để tạo tính bất ngờ
    const newShuffledItems =
      shuffleArray(gachaItems);
    setShuffledItems(newShuffledItems);

    // Dừng âm thanh cũ nếu có
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Reset về vị trí 0 để đảm bảo tính toán chính xác
    setSpinOffset(0);

    // Delay nhỏ để reset animation hoàn tất
    setTimeout(() => {
      setIsSpinning(true);

      // Phát âm thanh spinning
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }

      // Tính toán đơn giản và chính xác
      const itemWidth = 122; // 120px width + 2px margin
      const randomSpins =
        Math.floor(Math.random() * 5) + 10; // 10-14 vòng để quay nhanh

      // Chọn item thắng cuộc ngẫu nhiên từ danh sách đã xáo trộn
      const wonItemIndex = Math.floor(
        Math.random() * newShuffledItems.length,
      );
      const wonItem =
        newShuffledItems[wonItemIndex];

      // Logic tính toán offset chính xác:
      // - Container có width tầm 896px (max-w-4xl), center tại 448px
      // - Mỗi item 120px + 2px gap = 122px
      // - Để item center khớp với vạch đỏ: item left edge + 60px = container center
      const containerWidth = 896;
      const containerCenter = containerWidth / 2; // 448px
      const itemCenterInItem = 60; // center của item (120px/2)

      // Tổng khoảng cách cần quay (nhiều vòng + dừng tại item thắng)
      const totalItemsToScroll =
        randomSpins * newShuffledItems.length +
        wonItemIndex;

      // Offset cuối = -(tổng khoảng cách - điều chỉnh để center item khớp với vạch đỏ)
      const rawOffset =
        totalItemsToScroll * itemWidth;
      const adjustmentForCenter =
        containerCenter - itemCenterInItem;
      const finalOffset = -(
        rawOffset - adjustmentForCenter
      );

      setSpinOffset(finalOffset);
      setWonItem(wonItem); // Set item thắng ngay từ đầu

      // Kết thúc spin sau 11 giây (10s animation + 1s effect trúng thưởng)
      setTimeout(() => {
        setIsSpinning(false);
        setShowCongrats(true);

        // Dừng âm thanh nếu còn đang phát
        if (audioRef.current) {
          audioRef.current.pause();
        }

        // Tự động đóng popup sau 4 giây nữa
        setTimeout(() => {
          closePopup();
        }, 4000); // 4 giây sau khi hiển thị trúng thưởng
      }, 11000); // 11 giây tổng (10s chạm vạch + 1s hiệu ứng)
    }, 50); // Giảm delay để nhanh hơn
  };

  const closePopup = () => {
    // Reset tất cả state về ban đầu
    setShowSpinPopup(false);
    setShowCongrats(false);
    setIsSpinning(false);
    setSpinOffset(0); // Reset về 0 khi đóng popup
    setWonItem(null);
    setShuffledItems([]); // Reset danh sách đã xáo trộn

    // Dừng âm thanh khi đóng popup
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };
  return (
    <>
      {/* Custom CSS cho animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px
              rgba(255, 215, 0, 0.6);
          }
          50% {
            box-shadow: 0 0 30px
                rgba(255, 215, 0, 0.9),
              0 0 40px rgba(255, 215, 0, 0.6);
          }
        }

        @keyframes glow-success {
          0%,
          100% {
            box-shadow: 0 0 20px
              rgba(34, 197, 94, 0.6);
          }
          50% {
            box-shadow: 0 0 30px
                rgba(34, 197, 94, 0.9),
              0 0 40px rgba(255, 215, 0, 0.6);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes glow-epic {
          0%,
          100% {
            box-shadow: 0 0 15px
              rgba(147, 51, 234, 0.5);
          }
          50% {
            box-shadow: 0 0 25px
                rgba(147, 51, 234, 0.8),
              0 0 35px rgba(147, 51, 234, 0.4);
          }
        }

        @keyframes glow-legendary {
          0%,
          100% {
            box-shadow: 0 0 20px
              rgba(249, 115, 22, 0.6);
          }
          50% {
            box-shadow: 0 0 30px
                rgba(249, 115, 22, 0.9),
              0 0 40px rgba(255, 215, 0, 0.6);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px)
              rotate(0deg);
          }
          25% {
            transform: translateY(-2px)
              rotate(0.5deg);
          }
          50% {
            transform: translateY(-4px)
              rotate(0deg);
          }
          75% {
            transform: translateY(-2px)
              rotate(-0.5deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-glow-success {
          animation: glow-success 1.5s ease-in-out
            infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out
            infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out
            infinite;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 1.5s
            ease-in-out infinite;
        }
        .animate-glow-epic {
          animation: glow-epic 2s ease-in-out
            infinite;
        }
        .animate-glow-legendary {
          animation: glow-legendary 1.5s
            ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div
        className='text-white min-h-screen relative'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Header */}
        <HeaderBar />

        <div className='relative z-10 px-4 py-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1
              className='text-6xl font-extrabold mb-8 text-white drop-shadow-2xl'
              style={{
                textShadow:
                  "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)",
                fontFamily:
                  '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              }}
            >
              Gacha Game Ver1.0
            </h1>

            <div className='p-8 bg-black/20 backdrop-blur-sm rounded-xl border-2 border-white/30 shadow-2xl'>
              <div className='flex justify-center items-center gap-8 mb-8 relative'>
                <img
                  src={chestImage}
                  alt='Treasure Chest'
                  className={`w-24 h-24 object-contain transition-all duration-1000 ${
                    isAnimating
                      ? "transform translate-x-4"
                      : ""
                  }`}
                />
                <img
                  src={keyImage}
                  alt='Golden Key'
                  className={`w-16 h-16 object-contain transition-all duration-1000 ${
                    isAnimating
                      ? "transform -translate-x-4 rotate-45"
                      : ""
                  }`}
                />
              </div>
              <button
                onClick={handleGachaClick}
                disabled={isAnimating}
                className={`bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-200 ${
                  isAnimating
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isAnimating
                  ? "🔄 Đang mở..."
                  : "🎲 GACHA 🎲"}
              </button>
            </div>
          </div>
        </div>

        {/* Popup Quay Số */}
        {showSpinPopup && (
          <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fadeIn'>
            <div className='bg-gray-900 rounded-xl p-6 max-w-4xl w-full mx-4 relative transform transition-all duration-500 ease-out animate-slideInUp shadow-2xl border border-gray-600'>
              <button
                onClick={closePopup}
                className='absolute top-4 right-4 text-white text-2xl hover:text-red-400 transition-colors duration-200 hover:scale-110 transform'
              >
                ✕
              </button>

              <h2
                className='text-3xl font-bold text-white text-center mb-6 animate-pulse'
                style={{
                  textShadow:
                    "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)",
                }}
              >
                🎰 GACHA SPIN 🎰
              </h2>

              {/* Container quay số */}
              <div className='relative overflow-hidden border-4 border-yellow-400 rounded-lg mb-6 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 h-36 shadow-inner animate-glow'>
                {/* Vạch chỉ giữa */}
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-500 z-10 shadow-lg animate-pulse'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full z-10 shadow-lg animate-ping'></div>

                {/* Gradient overlay effects */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer'></div>

                {/* Dải items quay */}
                <div
                  className={`flex transition-transform items-center h-full ${
                    isSpinning
                      ? "duration-[10000ms] ease-out"
                      : "duration-300"
                  }`}
                  style={{
                    transform: `translateX(${spinOffset}px)`,
                    gap: "2px",
                  }}
                >
                  {/* Lặp lại items nhiều lần để tạo hiệu ứng vô hạn */}
                  {Array.from(
                    { length: 50 },
                    (_, i) => (
                      <React.Fragment key={i}>
                        {(shuffledItems.length > 0
                          ? shuffledItems
                          : gachaItems
                        ).map((item, index) => (
                          <div
                            key={`${i}-${index}`}
                            className={`w-[120px] h-28 border-2 ${getRarityColor(
                              item.rarity,
                            )} flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-300 hover:scale-105 shadow-lg`}
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className='w-16 h-16 object-contain transition-transform duration-300'
                            />
                          </div>
                        ))}
                      </React.Fragment>
                    ),
                  )}
                </div>
              </div>

              {/* Không còn nút quay riêng, tự động quay khi popup hiện */}

              {/* Hiển thị đang quay */}
              {isSpinning && (
                <div className='text-center animate-fadeIn'>
                  <p className='text-white text-xl animate-pulse bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-bold'>
                    🌟 Đang quay... 🌟
                  </p>
                  <div className='mt-2 flex justify-center space-x-1'>
                    <div className='w-2 h-2 bg-yellow-400 rounded-full animate-bounce'></div>
                    <div
                      className='w-2 h-2 bg-red-500 rounded-full animate-bounce'
                      style={{
                        animationDelay: "0.1s",
                      }}
                    ></div>
                    <div
                      className='w-2 h-2 bg-pink-500 rounded-full animate-bounce'
                      style={{
                        animationDelay: "0.2s",
                      }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Thông báo chúc mừng */}
              {showCongrats && wonItem && (
                <div className='text-center animate-slideInUp'>
                  <div className='bg-gradient-to-r from-green-500 via-emerald-600 to-green-500 rounded-lg p-6 mb-4 shadow-2xl border-2 border-yellow-400 animate-glow-success'>
                    <h3
                      className='text-2xl font-bold text-white mb-4 animate-bounce'
                      style={{
                        textShadow:
                          "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 215, 0, 0.6)",
                      }}
                    >
                      🎉 CHÚC MỪNG BẠN ĐÃ TRÚNG
                      THƯỞNG! 🎉
                    </h3>
                    <div
                      className={`inline-block border-4 ${getRarityColor(
                        wonItem.rarity,
                      )} rounded-lg p-4 transform hover:scale-105 transition-all duration-300 shadow-xl ${getRarityAnimation(
                        wonItem.rarity,
                      )}`}
                    >
                      <img
                        src={wonItem.image}
                        alt={wonItem.name}
                        className='w-24 h-24 object-contain mx-auto mb-2'
                      />
                      <p className='text-lg font-semibold text-gray-800'>
                        {wonItem.name}
                      </p>
                      <p
                        className={`text-sm font-bold uppercase tracking-wider ${getRarityTextColor(
                          wonItem.rarity,
                        )}`}
                      >
                        {wonItem.rarity}
                      </p>
                    </div>
                  </div>
                  {/* Removed buttons - popup will auto close */}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Audio element cho spinning sound */}
        <audio
          ref={audioRef}
          preload='auto'
          loop={false}
        >
          <source
            src={spinningSound}
            type='audio/mpeg'
          />
          Your browser does not support the audio
          element.
        </audio>
      </div>
    </>
  );
};

export default MinigameGacha;
