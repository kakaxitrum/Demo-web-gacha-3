import {
  FaCity,
  FaGun,
  FaCarCrash,
  FaMoneyBillWave,
  FaTheaterMasks,
  FaCrossedSwords,
} from "react-icons/fa";

const features = [
  {
    icon: (
      <FaCity className='text-cyan-400 text-4xl drop-shadow-glow' />
    ),
    title: "Thành phố tội phạm",
    description:
      "Từ những con hẻm tối tăm đến các căn cứ bí mật, mọi góc phố đều ẩn chứa nguy hiểm.",
  },
  {
    icon: (
      <FaGun className='text-green-400 text-4xl drop-shadow-glow' />
    ),
    title: "Băng đảng & Phi vụ",
    description:
      "Gia nhập các băng đảng khét tiếng, thực hiện những phi vụ táo bạo để làm giàu.",
  },
  {
    icon: (
      <FaCarCrash className='text-pink-400 text-4xl drop-shadow-glow' />
    ),
    title: "Xe độ & Rượt đuổi",
    description:
      "Siêu xe độ, xe tăng bọc thép và những cuộc rượt đuổi nghẹt thở với police.",
  },
  {
    icon: (
      <FaMoneyBillWave className='text-orange-400 text-4xl drop-shadow-glow' />
    ),
    title: "Đế chế tội phạm",
    description:
      "Xây dựng đế chế ma túy, rửa tiền và thống trị underworld của thành phố.",
  },
  {
    icon: (
      <FaTheaterMasks className='text-blue-400 text-4xl drop-shadow-glow' />
    ),
    title: "Nhân vật độc đáo",
    description:
      "Tạo nhân vật với background sâu sắc, phát triển storyline cá nhân trong thế giới roleplay.",
  },
  {
    icon: (
      <FaCrossedSwords className='text-purple-400 text-4xl drop-shadow-glow' />
    ),
    title: "Chiến tranh băng đảng",
    description:
      "Tham gia các cuộc chiến epic giữa các băng đảng, giành quyền kiểm soát lãnh thổ.",
  },
];

export default function FeaturesSection() {
  return (
    <section className='py-20 px-4 bg-gradient-to-b from-black via-zinc-900 to-black text-white'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-red-500 tracking-wider mb-12 drop-shadow-glow'>
          TÍNH NĂNG NỔI BẬT
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feat, index) => (
            <div
              key={index}
              className='bg-black bg-opacity-30 border border-red-800 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#ff004c] cursor-pointer group'
            >
              <div className='mb-4 group-hover:scale-110 transition-transform duration-200'>
                {feat.icon}
              </div>
              <h3 className='text-xl font-bold text-red-500 mb-2 drop-shadow-glow group-hover:text-red-400'>
                {feat.title}
              </h3>
              <p className='text-gray-300 text-sm'>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
