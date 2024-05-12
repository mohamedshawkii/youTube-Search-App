import APIFetch from "../../Utilits/APIFetch";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import Logo from "../../assets/Logo.svg";
import { Link, Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";

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
      <div className="">
        <nav>
          <div className="bg-[#1A1D1F] py-4 flex flex-row justify-between items-center gap-6 ">
            <img className="w-[10rem] ml-8" src={Logo} alt="Brand logo" />
            <form
              onSubmit={handleSearchInput}
              className="flex flex-row justify-between items-center gap-8 py-2 px-4 rounded-lg bg-[#ffffff] mr-8"
            >
              <input
                value={SearchInput}
                onChange={(e) => SetSearchInput(e.target.value)}
                type="text"
                placeholder="search"
                className=" border-none rounded-sm box-border outline-none"
              />
              {/* <Link to="/feed"> */}
              <button type="submit" className=" text-[#BDFF38]">
                <ImSearch size={24} />
              </button>
              {/* </Link> */}
            </form>
          </div>
          {NewData && (
            <div>
              <Outlet context={NewData} />
            </div>
          )}
        </nav>
        <SideBar />
      </div>
    </>
  );
}

export default SearchBar;
