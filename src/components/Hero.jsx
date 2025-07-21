import logo from "../assets/images/logo.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "./HeaderBar";
import Features from "./Features";
const Hero = () => {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className='relative min-h-screen text-white bg-black flex flex-col'>
      {/* Ảnh nền với hiệu ứng mờ */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed blur brightness-75 z-0'
        style={{
          backgroundImage:
            "url('/src/assets/images/377.jpeg')",
        }}
      />
      {/* Header */}
      <div className='relative z-10'>
        <Header />
      </div>
      {/* Hero Section */}
      <section className='relative z-10 flex items-center justify-center h-full mt-60 px-8'>
        {/* Viền chạy màu ngoài cùng */}
        <div className='relative rounded-2xl p-[2px] bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 animate-border mr-8 max-w-lg shadow-2xl'>
          {/* Nội dung bên trong viền */}
          <div className='backdrop-blur-sm bg-black/80 rounded-[14px] p-6 text-left'>
            {/* Dòng GACHA CITY có mũi nhọn hai bên */}
            <div className='flex items-center justify-center gap-4 mb-4'>
              {/* Mũi nhọn trái */}
              <div className='w-0 h-0 border-t-[10px] border-b-[10px] border-r-[30px] border-t-transparent border-b-transparent border-r-white' />

              {/* Tiêu đề */}
              <h1 className='text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-gradient text-center'>
                GACHA CITY
              </h1>

              {/* Mũi nhọn phải */}
              <div className='w-0 h-0 border-t-[10px] border-b-[10px] border-l-[30px] border-t-transparent border-b-transparent border-l-white' />
            </div>

            <div className='text-sm md:text-base text-gray-100 leading-relaxed space-y-3'>
              <span className='block'>
                Thành phố văn minh với{" "}
                <span className='text-yellow-400 font-semibold'>
                  content không ở đâu có
                </span>
                , các tuyến{" "}
                <span className='text-yellow-400 font-semibold'>
                  storymode tuyệt đối điện ảnh
                </span>
                .
              </span>
              <span className='block'>
                Lấy Roleplay làm gốc, phát triển
                nhân vật{" "}
                <span className='text-yellow-400 font-semibold'>
                  đúng luật
                </span>
                .
              </span>
              <span className='block'>
                Nền kinh tế thị trường với nhiều
                doanh nghiệp phụ thuộc lẫn nhau.
              </span>
              <span className='block'>
                Không thành phố nào có{" "}
                <span className='text-yellow-400 font-semibold'>
                  60 doanh nghiệp
                </span>{" "}
                <span className='text-yellow-400 font-semibold'>
                  như Gacha City
                </span>
                .
              </span>
              <span className='block'>
                <span className='text-yellow-400 font-semibold'>
                  Bí ẩn sẽ dần bật mí
                </span>
                . Hãy sống và hóa thân thành nhân
                vật mong muốn.
              </span>
            </div>

            <div
              className='mt-6 flex gap-x-12 justify-center items-center flex-wrap'
              id='join'
            >
              <Link
                to='/main'
                className='inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-2 px-5 
            rounded-xl text-sm border border-yellow-300 shadow-[0_0_10px_#facc15] transition-all duration-300  
            hover:from-yellow-500 hover:to-orange-600 hover:scale-105 hover:shadow-[0_0_20px_#facc15]'
              >
                Vào Server Ngay
              </Link>
              <button
                onClick={scrollToFeatures}
                className='inline-block text-white font-bold py-2 px-5 rounded-xl text-sm
            border border-yellow-300 shadow-[0_0_10px_#facc15] transition-all duration-300 
            hover:from-yellow-500 hover:to-orange-600 hover:scale-105 hover:shadow-[0_0_20px_#facc15]'
              >
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        className='relative z-10 mt-28'
        ref={featuresRef}
      >
        <Features />
      </div>
      <div className='absolute bottom-0 left-0 w-full z-10'>
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
