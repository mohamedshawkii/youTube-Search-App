import { useEffect, useState } from "react";
import Loader from "../../Utilits/Loader";
import VideoDetails from "../videodetails/VideoDetails";
import VideosFeed from "../videosfeed/VideosFeed";
import { useOutletContext } from "react-router-dom";

const Feed = () => {
  // const [videoId, SetVideoId] = useState("");
  // const [NewData,] = useOutletContext();

  // useEffect(() => {
  //   SetVideoId("");
  // }, [NewData]);

  return (
    <div>
      <Loader NewData={NewData} />
      {/* <VideoDetails videoId={videoId}/> */}
      {/* <VideosFeed NewData={NewData} SetVideoId={SetVideoId}/> */}
      {/* {videoId ? (
        <VideoDetails videoId={videoId} />
      ) : (
        <VideosFeed NewData={NewData} SetVideoId={SetVideoId} />
      )} */}
    </div>
  );
};
export default Feed;
