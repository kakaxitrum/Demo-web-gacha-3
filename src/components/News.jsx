export default function News() {
  return (
    <section className="py-10 bg-gray-800 text-white px-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📰 Tin tức mới nhất</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">🎉 Khai trương Gacha City</h3>
          <p>Server chính thức mở cửa vào ngày 01/08/2025 – tặng quà cho người chơi đầu tiên!</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">🚓 Cập nhật hệ thống Police</h3>
          <p>MDT, radar, bodycam,... được nâng cấp toàn diện trong bản update v1.2.</p>
        </div>
      </div>
    </section>
  )
}