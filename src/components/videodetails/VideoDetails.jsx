import ReactPlayer from "react-player";
import BackToFeed from "../../Utilits/BackToFeed";

function VideoDetails({ videoId }) {
  return (
    <div>
      <div
        className="
        flex flex-col justify-center items-center
      bg-none text-white gap-4 p-8
        w-full text-start h-svh"
      >
        <div
          controls
          className="w-auto flex flex-col justify-center items-center"
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
          />
        </div>
        <BackToFeed />
      </div>
    </div>
  );
}

export default VideoDetails;
