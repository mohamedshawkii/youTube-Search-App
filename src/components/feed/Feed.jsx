import { useEffect, useState } from "react";
import Loader from "../../Utilits/Loader";
import VideoDetails from "../videodetails/VideoDetails";
import VideosFeed from "../videosfeed/VideosFeed";
import { useOutletContext } from "react-router-dom";

const Feed = () => {
  const [videoId, SetVideoId] = useState("");
  const [NewData, buttonInput,] = useOutletContext();

  useEffect(() => {
    SetVideoId("");
  }, [NewData]);

  useEffect(() => {
    SetVideoId("");
  }, [buttonInput]);

  return (
    <div>
      <Loader NewData={NewData} />
      {videoId ? (
        <VideoDetails videoId={videoId} />
      ) : (
        <VideosFeed NewData={NewData} SetVideoId={SetVideoId} />
      )}
    </div>
  );
};
export default Feed;
