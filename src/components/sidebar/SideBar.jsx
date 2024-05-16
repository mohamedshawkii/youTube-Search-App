import { FaRegNewspaper } from "react-icons/fa6";
import { GiMicrophone } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { GiSoccerBall } from "react-icons/gi";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineSportsBaseball } from "react-icons/md";

function SideBar({
  toggleSideBar,
  SetButtonInput,
}) {
  const Categories = [
    {
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      name: "Tedtalk",
      icon: <GiMicrophone />,
    },
    {
      name: "Coding",
      icon: <FaCode />,
    },
    {
      name: "Soccer",
      icon: <GiSoccerBall />,
    },
    {
      name: "Podcast",
      icon: <MdOutlinePodcasts />,
    },
    {
      name: "Crypto",
      icon: <FaDollarSign />,
    },
    {
      name: "Live",
      icon: <MdLiveTv />,
    },
    {
      name: "Movie",
      icon: <BiCameraMovie />,
    },
    {
      name: "Sport",
      icon: <MdOutlineSportsBaseball />,
    },
  ];

  return (
    <aside>
      <div
        className={`h-svh fixed top-[88px] left-0 
       bg-[#1A1D1F] overflow-x-hidden overflow-scroll
       ${toggleSideBar ? " w-[28rem]" : "w-[8rem]"}
        `}
      >
        <div
          className={`flex flex-col justify-center items-start 
        ${toggleSideBar ? "items-start px-8 py-6" : "items-center px-4 py-3"}`}
        >
          {Categories.map((item, index) => (
            <button
              onClick={() => SetButtonInput(item.name)}
              key={index}
              className={`flex flex-row
               items-center gap-8 w-full h-3/4 text-xl
              text-white hover:text-[#1A1D1F] hover:bg-[#BDFF38] rounded-lg 
              ${
                toggleSideBar
                  ? "justify-start px-4 py-6"
                  : "justify-center w-full h-full px-6 py-6 gap-0"
              }`}
            >
              <div className="text-3xl">{item.icon}</div>
              {toggleSideBar && (
                <div className="text-lg font-semibold">{item.name}</div>
              )}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
