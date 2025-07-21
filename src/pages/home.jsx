import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import YouTubeEmbed from "../components/YouTubeEmbed";
import DiscordWidget from "../components/DiscordWidget";

const Home = () => (
  <div>
    <Hero />
    <section className='max-w-4xl mx-auto px-4'>
      <h2 className='text-3xl font-bold mt-10'>Giao diện server</h2>
      <Carousel />
      <h2 className='text-3xl font-bold mt-10'>Trailer</h2>
      <YouTubeEmbed videoId='mM8bNIndTbw' />{" "}
      {/* Replace with your trailer ID */}
      <h2 className='text-3xl font-bold mt-10'>Tham gia cộng đồng</h2>
      <DiscordWidget serverId='1300050828765302784' />
    </section>
  </div>
);

export default Home;
