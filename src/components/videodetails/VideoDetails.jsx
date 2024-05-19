import ReactPlayer from "react-player";
import BackToFeed from "../../Utilits/BackToFeed";
import { Navigate, useOutletContext } from "react-router-dom";

function VideoDetails() {
  const [NewData, videoId,] = useOutletContext();
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
      </div>
      { !NewData  && <Navigate to='/VideosFeed'/>}
    </div>
  );
}

export default VideoDetails;
