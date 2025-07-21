import {
  FaCity,
  FaCarCrash,
  FaMoneyBillWave,
  FaTheaterMasks,
} from "react-icons/fa";
import { FcIdea } from "react-icons/fc";

import { RiCriminalFill } from "react-icons/ri";
import {
  GiTeamUpgrade,
  GiCrossedSwords,
  GiPerspectiveDiceSixFacesRandom,
} from "react-icons/gi";

const features = [
  {
    icon: (
      <FaCity className='text-cyan-400 text-4xl drop-shadow-glow' />
    ),
    title: "Thành phố khởi nghiệp",
    description:
      "Khởi nghiệp thực sự và bạn sẽ học được bài học quý giá như khởi nghiệp ngoài đời thực.",
  },
  {
    icon: (
      <GiTeamUpgrade className='text-green-400 text-4xl drop-shadow-glow' />
    ),
    title: "Team work - làm việc nhóm",
    description:
      "Sống và chơi trong thế giới ảo như những gì bạn học về làm việc nhóm không khác gì tham dự một khóa học thực tế về kỹ năng mềm.",
  },
  {
    icon: (
      <FaCarCrash className='text-sky-500 text-4xl drop-shadow-glow' />
    ),
    title: "Đam mê tốc độ và độ xe",
    description:
      "Mỗi một chiếc xe sẽ tạo cảm hứng cho bạn, độ xe và tham gia các cuộc đua đường phố sẽ tạo cho bạn sự hứng khởi đầy sáng tạo.",
  },
  {
    icon: (
      <RiCriminalFill className='text-orange-400 text-4xl drop-shadow-glow' />
    ),
    title: "Hóa thân tội phạm",
    description:
      "Một hệ thống - series nhiệm vụ đa dạng, nhiều bí mật và thử thách, sự kiên trì và sáng tạo sẽ giúp bạn trở thành một tội phạm xuất sắc.",
  },
  {
    icon: (
      <FcIdea className='text-blue-400 text-4xl drop-shadow-glow' />
    ),
    title: "Thỏa sức sáng tạo content",
    description:
      "Thành phố tạo cơ hội cho bạn thỏa sức sáng tạo nội dung, vao, dân số thành phố  online cùng lúc có thể lên tới 1000 người, tổng dân số thành phố trên 10.000 người",
  },
  {
    icon: (
      <GiPerspectiveDiceSixFacesRandom className='text-yellow-500 text-4xl drop-shadow-glow' />
    ),
    title: "Hệ thống gacha lôi cuốn",
    description:
      "Hệ thống gacha đa dạng, từ nhân vật, trang phục đến vũ khí cận chiến, mang đến trải nghiệm chơi game phong phú và hấp dẫn.",
  },
];

export default function FeaturesSection() {
  return (
    <section className='py-20 px-4 bg-gradient-to-tr from-red-300/20 to-purple-500/20 backdrop-blur-md text-white'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-yellow-400 tracking-wider mb-12 drop-shadow-glow'>
          GAME PLAY
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feat, index) => (
            <div
              key={index}
              className='
            bg-pink-700 bg-opacity-30 
            border border-yellow-400 
            rounded-3xl p-6 
            transition-all duration-300 
            hover:scale-105 
            hover:shadow-[0_0_40px_#ff007f] 
            hover:bg-pink-500 hover:bg-opacity-40 
            hover:border-pink-300 
            cursor-pointer group
          '
            >
              <div className='mb-4 group-hover:scale-110 transition-transform duration-200'>
                {feat.icon}
              </div>
              <h3 className='text-xl font-bold text-white mb-2 drop-shadow-glow group-hover:text-yellow-300 transition-colors duration-200'>
                {feat.title}
              </h3>
              <p className='text-gray-300 text-sm group-hover:text-white transition-colors duration-200'>
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
