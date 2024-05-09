import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import APIFetch from "../../Utilits/APIFetch";
import ReactPlayer from 'react-player';
import BackToHome from "../../Utilits/BackToHome";

function VideoDetails() {
  const [VideoDetails, setVideoDetails] = useState();

  const id = useParams();
  console.log(id.videoCode);

  useEffect(() => {
    APIFetch(`videos?part=snippet,statistics&id=${id}`).then((res) => {
      setVideoDetails(res.data.items);
      // console.log(res.data.items);
    });

    //   APIFetch(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
    //     (res) => {
    //       setVideoDetails(res.data.items);
    //       // console.log(res.data.items);
    //     }
    //   );
  }, [id]);

  return (
    <div>
      <div className="
        flex flex-col justify-center items-center
      bg-[#161C2D] text-white gap-4 p-8
        w-full text-start h-svh"
      >
        <div controls className="w-auto flex flex-col justify-center items-center">
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id.videoCode}`} controls/>
        </div >
       <BackToHome/>
      </div>
    </div>
  );
}

export default VideoDetails;
