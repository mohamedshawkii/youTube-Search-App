import { Link } from "react-router-dom";
const VideosFeed = ({NewData}) => {
  return (
    <div>
      {NewData && (
        <div
          className="
        
          grid-cols-3 grid-rows-3 gap-6 bg-none
          text-white p-4 rounded-sm
          xtsm:max-sm:p-6
          w-auto h-auto grid
          xtsm:max-sm:w-full
          xtsm:max-sm:grid-rows-none
          xtsm:max-sm:grid-cols-1
          sm:max-lg:grid-cols-2
          sm:max-lg:grid-rows-none"
        >
          {NewData.map((item, index) => (
            <Link
              key={index}
              to={`${
                item.id.channelId
                  ? `/channel/${item.id.channelId}`
                  : `/video/${item.id.videoId}`
              }`}
            >
              <div
                className={`
                  flex flex-col justify-center items-start
                  bg-none text-white gap-6
                  w-full h-full text-start
                  ${
                    item.id.channelId
                      ? "flex flex-col justify-center items-center"
                      : null
                  }`}
              >
                <div className="self-center">
                  {item.id.channelId ? (
                    <img
                      className="w-2/4 h-auto rounded-full mx-auto"
                      src={
                        item.snippet.thumbnails.high.url
                          ? item.snippet.thumbnails.high.url
                          : item.snippet.thumbnails.medium.url
                      }
                      alt="channel thumbnail"
                    />
                  ) : (
                    <img
                      className="w-full h-full rounded-3xl "
                      src={item.snippet.thumbnails.high.url}
                      alt="video thumbnail"
                    />
                  )}
                </div>
                <div
                  className={`ml-4 ${
                    item.id.channelId
                      ? "flex flex-col justify-center items-center ml-0"
                      : null
                  }`}
                >
                  <div className="line-clamp-2 mb-2 leading-5 sm:max-xl:line-clamp-1 sm:max-lg:text-xs xtsm:max-sm:text-sm">
                    {item.id.channelId && (
                      <div>
                        <p className="text-[#83FFA3] ">the is a channel</p>
                      </div>
                    )}
                    {item.id.channelId ? null : <div>{item.snippet.title}</div>}
                  </div>
                  <div
                    className=" 
                    xtsm:max-sm:text-sm
                    cursor-pointer line-clamp-1 mb-1 text-[#ffffff8d]"
                  >
                    {item.snippet.channelTitle}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default VideosFeed;
