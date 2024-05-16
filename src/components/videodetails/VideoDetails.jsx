import ReactPlayer from "react-player";
import BackToHome from "../../Utilits/BackToHome";

function VideoDetails({ videoId }) {
  return (
    <div>
      <div
        className="
        flex flex-col justify-center items-center
      bg-[#161C2D] text-white gap-4 p-8
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
        <BackToHome />
      </div>
    </div>
  );
}

export default VideoDetails;
