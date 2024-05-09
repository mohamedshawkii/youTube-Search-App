import React, { useEffect } from "react";
import APIFetch from "../../Utilits/APIFetch";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";

function SearchBar() {
  const [NewData, SetNewData] = useState(null);
  const [SearchInput, SetSearchInput] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();

    if (SearchInput) {
      APIFetch(`search?maxResults=9&part=snippet&q=${SearchInput}`).then(
        (resp) => {
          SetNewData(resp.data.items);
          console.log(resp.data.items);
        }
      );
      SetSearchInput("");
    }
  };

  return (
    <>
      <div className="py-8 xtsm:max-sm:py-4 px-8 xtsm:max-sm:px-4 mt-8 flex flex-col justify-center items-center gap-6">
        <form
          onSubmit={handleSearchInput}
          className="xtsm:max-sm:w-3/4 flex flex-row justify-center items-center rounded-lg gap-4 py-4 px-8 bg-[#161C2D]"
        >
          <input
            value={SearchInput}
            onChange={(e) => SetSearchInput(e.target.value)}
            type="text"
            placeholder="search"
            className=" border-none rounded-sm box-border outline-none 
            py-2 px-6 xtsm:max-sm:rounded-xs xtsm:max-sm:w-3/4"
          />
          <button type="submit" className=" text-white">
            <ImSearch size={27} />
          </button>
        </form>
        {NewData && (
          <div>
            {NewData ? null : (
              <div className="bg-[#473BF0] rounded-lg py-1 px-6 text-white">
                <p>Loading</p>
              </div>
            )}
          </div>
        )}
        {NewData && (
          <div
            className="
          w-3/4 h-auto grid
          xtsm:max-sm:w-full
          xtsm:max-sm:grid-rows-none
          xtsm:max-sm:grid-cols-1
          sm:max-lg:grid-cols-2
          sm:max-lg:grid-rows-none
          grid-cols-3 grid-rows-3 gap-8 bg-[#d2d8ea]
          text-white p-8 xtsm:max-sm:p-4 rounded-sm"
          >
            {NewData.map((item, index) => (
              <Link
                key={index}
                to={`${
                  item.id.channelId ? `/channel/${item.id.channelId}` : `/video/${item.id.videoId}`
                }`}
              >
                <div
                  className="
                    flex flex-col justify-center items-start
                    bg-[#161C2D] text-white gap-4 p-8 
                    rounded-lg w-full h-full text-start"
                >
                  <div
                    className=" 
                    xtsm:max-sm:text-sm
                    cursor-pointer line-clamp-1 mb-4"
                  >
                    {item.snippet.channelTitle}
                  </div>
                  <div className="w-3/4 h-3/4 self-center">
                    {item.id.channelId ? (
                      <img
                        className="mx-auto w-3/4 rounded-full "
                        src={item.snippet.thumbnails.high.url}
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-auto  "
                        src={item.snippet.thumbnails.high.url}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="line-clamp-2 sm:max-xl:line-clamp-1 sm:max-lg:text-xs xtsm:max-sm:text-sm">
                    {item.id.channelId ? (
                      <div>
                        <p className="text-[#83FFA3] ">this is channel not a video</p>
                        {item.snippet.title}
                      </div>
                    ) : (
                      item.snippet.title
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
