import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import APIFetch from "../../Utilits/APIFetch";

function ChannelProfile() {
  const [newRes, SetnewRes] = useState(null);
  let { channelId } = useParams();
  const options = { maximumFractionDigits: 2 };
  const formattedsubscriberCount = Intl.NumberFormat("en-US", options).format(
    newRes && newRes[0]?.statistics?.subscriberCount
  );
  const formattedvideoCount = Intl.NumberFormat("en-US", options).format(
    newRes && newRes[0]?.statistics?.videoCount
  );

  useEffect(() => {
    APIFetch(`channels?part=snippet,statistics&id=${channelId}`).then((Res) => {
      SetnewRes(Res.data.items);
      console.log(Res.data.items);
    });
  }, [channelId]);

  function paddingLeft() {
    document.body.style.paddingLeft = "0rem";
    document.body.style.paddingTop = "0rem";
  }
  paddingLeft();

  return (
    <div className="flex flex-col justify-start items-center w-full h-svh text-[#dddddd]">
      <div className="bg-[#343a3d] w-full h-1/4"></div>
      {newRes && (
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center gap-6 w-3/4 ">
            <div className="flex flex-row gap-6 justify-start items-center w-full mt-[-4rem] ">
              <img
                className="w-2/12 rounded-full"
                src={
                  newRes[0]?.snippet?.thumbnails?.high?.url
                    ? newRes[0]?.snippet?.thumbnails?.high?.url
                    : newRes[0]?.snippet?.thumbnails?.medium.url
                }
                alt="channel thumbnail"
              />
              <div className="flex flex-col justify-center items-start">
                <p className=" text-3xl font-bold mb-1">{newRes[0]?.snippet?.title}</p>
                <p className=" text-xs font-thin mt-1">
                  Subscriber Count
                  <br />
                  <span className="text-[#a0a0a0]">
                    {formattedsubscriberCount}
                  </span>
                </p>
                <p className=" text-xs font-thin mt-1">
                  Video Count
                  <br />
                  <span className="text-[#a0a0a0]">{formattedvideoCount}</span>
                </p>
              </div>
            </div>
            <p className=" line-clamp-4 ">{newRes[0]?.snippet?.description}</p>
          </div>

          {/* <div className="flex flex-row justify-center items-center gap-6 ">
            <p>subscriberCount:{newRes[0]?.statistics?.subscriberCount}</p>
            <p>videoCount:{newRes[0]?.statistics?.videoCount}</p>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default ChannelProfile;
