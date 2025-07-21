import logo from "../assets/images/logo.png";
import bg from "../assets/images/20.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Hero = () => {
  return (
    <div
      className='bg-black text-white h-screen overflow-hidden'
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <header className='absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-6 py-4'>
        <div className='flex items-center space-x-3'>
          <img
            src={logo}
            alt='Gacha City Logo'
            className='w-48 md:w-48 drop-shadow-xl'
          />
        </div>
        <nav className='space-x-6 bg-white/10 px-4 py-2 rounded-xl shadow-lg mb-24'>
          <a
            href='#'
            className='text-white hover:text-pink-400 transition font-medium'
          >
            Trang Chủ
          </a>
          <Link
            to='/main'
            className='bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full shadow transition'
          >
            Tham gia ngay
          </Link>
          <Link
            to='/gachagame'
            className='text-white hover:text-pink-400 transition font-medium'
          >
            GachaGame
          </Link>
        </nav>
      </header>
      {/* Hero Section */}
      <section className='relative flex items-center justify-end h-full bg-cover bg-center bg-no-repeat px-8'>
        <div className='backdrop-blur-sm bg-black/20 rounded-2xl p-6 text-left max-w-md mr-8 border border-white/10 shadow-2xl'>
          <h1
            className='text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 text-transparent 
          bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-gradient mb-4'
          >
            GACHA CITY
          </h1>

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
            <Link
              to='/Footer'
              className='inline-block bg-gradient-to-r text-white font-bold py-2 px-5 rounded-xl text-sm
                         border border-yellow-300 shadow-[0_0_10px_#facc15] transition-all duration-300 
                         hover:from-yellow-500 hover:to-orange-600 hover:scale-105 hover:shadow-[0_0_20px_#facc15]'
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>
      <div className='absolute bottom-0 left-0 w-full'>
        <Footer />
      </div>
      ;
    </div>
  );
};

export default Hero;
