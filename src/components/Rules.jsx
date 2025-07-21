export default function Rules() {
  return (
    <section className='py-10 bg-gray-900 text-white text-center'>
      <h2 className='text-2xl font-bold mb-4'>
        📜 Luật chơi & luật thành phố
      </h2>
      <p className='mb-4'>
        Vui lòng đọc kỹ luật lệ để tránh bị phạt.
      </p>
      <div className='flex justify-center gap-4'>
        <a
          href='https://docs.google.com/document/d/16HNm1xo3_oqtZdntbjsylNOTzrAda59RxEvZ-ZzYdjk/edit?usp=sharing'
          className='underline text-indigo-400'
          target='_blank'
        >
          📘 Luật Roleplay Cơ Bản
        </a>
        <a
          href='https://docs.google.com/document/d/1t7lYxQvt8Tuxv4rOfMw4ANb3twsW1f9Z_JHysV_9UJ4/edit?tab=t.0'
          className='underline text-indigo-400'
          target='_blank'
        >
          📚 Luật Thành Phố
        </a>
      </div>
    </section>
  );
}
