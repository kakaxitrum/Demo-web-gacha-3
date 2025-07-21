const YouTubeEmbed = ({ videoId }) => (
  <div className="w-full aspect-video mt-10">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="Trailer Gacha City"
      className="w-full h-full rounded-lg"
      allowFullScreen
    ></iframe>
  </div>
)

export default YouTubeEmbed
