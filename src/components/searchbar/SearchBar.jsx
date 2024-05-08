import React, { useEffect } from "react";
import APIFetch from "../../Utilits/APIFetch";
import { useState } from "react";
import { ImSearch } from "react-icons/im";

function SearchBar() {
  const [NewData, SetNewData] = useState(null);
  const [SearchInput, SetSearchInput] = useState("");

  // useEffect(() => {
  //   APIFetch(`search?maxResults=3&part=snippet&q=${SearchInput}`).then(
  //     (res) => {
  //       SetNewData(res?.data?.items);
  //       console.log(res.data.items);
  //     }
  //   );
  // }, []);

  const handleSearchInput = (e) => {
    e.preventDefault();

    if (SearchInput) {
      // APIFetch(
      //   `search?maxResults=3&part=snippet&q=${SearchInput}`
      // ).then((resp)=>SetNewData(resp?.data?.items))
      SetSearchInput("");
    }
  };

  return (
    <>
      <div className="h-svh flex flex-col justify-center items-center gap-6">
        <form
          onSubmit={handleSearchInput}
          className="flex flex-row justify-center items-center rounded-lg gap-4 py-4 px-8 bg-[#161C2D]"
        >
          <input
            value={SearchInput}
            onChange={(e) => SetSearchInput(e.target.value)}
            type="text"
            placeholder="search"
            className=" border-none rounded-sm box-border outline-none py-2 px-6 "
          />
          <button type="submit" className=" text-white">
            <ImSearch size={27} />
          </button>
        </form>
        <div className="bg-[#473BF0] rounded-lg py-1 px-6 text-white">
          {NewData ? null : <p>Loading</p>}
        </div>
        <div className="w-3/4 flex felx-col gap-8 bg-[#d2d8ea] text-white p-8 rounded-lg">
          {NewData &&
            NewData.map((item, index) => (
              <div
                className="bg-[#161C2D] text-white p-8 rounded-sm flex-1"
                key={index}
              >
                <div className=" cursor-pointer">
                  {item?.snippet?.channelTitle}
                </div>
                <div className="">
                  <img src={item?.snippet?.thumbnails?.high?.url} alt="" />
                </div>
                <div>{item?.snippet?.title}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
