import { Link } from "react-router-dom";
const VideosFeed = ({ NewData, SetVideoId }) => {
  return (
    <div>
      {NewData && (
        <div
          className="
          grid-cols-3 grid-rows-3 gap-6 bg-none
          justify-center items-center
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
                item.id.channelId ? `/channel/${item.id.channelId}` : `/`
              }`}
            >
              <button className="w-full h-full" onClick={() => SetVideoId(item.id.videoId)}>
                <div
                  className={`
                  flex flex-col justify-center items-center
                  bg-none text-white gap-4
                  w-full h-full text-start
                  ${
                    item.id.channelId
                      ? "flex flex-col justify-center items-center"
                      : null
                  }`}
                >
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    {item.id.channelId ? (
                      <img
                        className="w-2/4 rounded-full"
                        src={
                          item.snippet.thumbnails.high.url
                            ? item.snippet.thumbnails.high.url
                            : item.snippet.thumbnails.medium.url
                        }
                        alt="channel thumbnail"
                      />
                    ) : (
                      <img
                        className="w-full h-full rounded-3xl object-cover"
                        src={item.snippet.thumbnails.high.url}
                        alt="video thumbnail"
                      />
                    )}
                  </div>
                  <div
                    className={`w-full h-full ${
                      item.id.channelId
                        ? "flex flex-col justify-center items-center gap-2"
                        : null
                    }`}
                  >
                    <div className="w-3/4 line-clamp-2 leading-5 sm:max-xl:line-clamp-1 sm:max-lg:text-xs xtsm:max-sm:text-sm ml-6">
                      {item.id.channelId ? null : (
                        <div>{item.snippet.title}</div>
                      )}
                    </div>
                    <div>
                      {item.id.channelId && (
                        <p className="text-[#83FFA3]">the is a channel</p>
                      )}
                    </div>
                    <div>
                      {item.id.channelId && (
                        <div>{item.snippet.channelTitle}</div>
                      )}
                    </div>
                    <div
                      className="
                    mt-1 ml-6
                    xtsm:max-sm:text-sm
                    cursor-pointer line-clamp-1 text-[#ffffff8d] "
                    >
                      {item.id.channelId ? null : (
                        <div>{item.snippet.channelTitle}</div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default VideosFeed;
