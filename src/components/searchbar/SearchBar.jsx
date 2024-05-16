import APIFetch from "../../Utilits/APIFetch";
import { useEffect, useState,} from "react";
import { ImSearch } from "react-icons/im";
import Logo from "../../assets/Logo.svg";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";
import { IoMenu } from "react-icons/io5";

function SearchBar() {
  const [NewData, SetNewData] = useState(null);
  const [SearchInput, SetSearchInput] = useState("");
  const [buttonInput, SetButtonInput] = useState("football");
  const [toggleSideBar, SetToggleSideBar] = useState(true);

  const handleSearchInput = (e) => {
    e.preventDefault();
    if (SearchInput) {
      APIFetch(`search?maxResults=9&part=snippet&q=${SearchInput}`).then(
        (resp) => {
          SetNewData(resp.data.items);
          // console.log(resp.data.items);
        }
      );
      // SetSearchInput("");
    }
  };

  useEffect(() => {
    if(buttonInput){
    APIFetch(`search?maxResults=9&part=snippet&q=${buttonInput}`).then(
      (resp) => {
        SetNewData(resp.data.items);
        // console.log(resp.data.items);
        // SetSearchInput("");
      }
    );
  }
  }, [buttonInput]);

  useEffect(() => {
    function paddingLeft() {
      if (toggleSideBar) {
        document.body.style.paddingLeft = "28rem";
      } else {
        document.body.style.paddingLeft = "8rem";
      }
    }
    paddingLeft();
  }, [toggleSideBar]);

  return (
    <>
      <div>
        <nav>
          <div className="bg-[#1A1D1F] py-4 left-0 flex flex-row justify-start items-center gap-6 fixed top-0 w-full">
            <button
              onClick={() => SetToggleSideBar((prev) => !prev)}
              className="text-white text-4xl ml-8"
            >
              <IoMenu siz={50} />
            </button>
            <img className="w-[10rem] ml-2" src={Logo} alt="Brand logo" />
            <form
              onSubmit={handleSearchInput}
              className="flex flex-row justify-between items-center gap-8 py-2 px-4 rounded-lg bg-[#ffffff] ml-auto mr-8"
            >
              <input
                value={SearchInput}
                onChange={(e) => SetSearchInput(e.target.value)}
                type="text"
                placeholder="search"
                className=" border-none rounded-sm box-border outline-none"
              />
              <button type="submit" className=" text-[#a4a4a39e]">
                <ImSearch size={24} />
              </button>
            </form>
          </div>
          {NewData && <Outlet context={[NewData]}/>}
        </nav>
        <SideBar
          toggleSideBar={toggleSideBar}
          SetButtonInput={SetButtonInput}
        />
      </div>
    </>
  );
}

export default SearchBar;
