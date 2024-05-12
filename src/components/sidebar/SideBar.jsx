import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";

function SideBar() {
    const Categories = [
        {
            name:'News',
            icon: <FaRegNewspaper />,
        },
        {
            name:'Tedtalk',
            icon: ,
        },
        {
            name:'Coding',
            icon: ,
        },
        {
            name:'Soccer',
            icon: ,
        },
        {
            name:'Podcast',
            icon: ,
        },
        {
            name:'Crypto',
            icon: ,
        },
        {
            name:'Live',
            icon: ,
        },
        {
            name:'Movie',
            icon: ,
        },
        {
            name:'Sport',
            icon: ,
        },
    ]

  return (
    <aside>
      <div className="h-svh w-[24rem] bg-[#32383c8c]">
        <div>
            {Categories}
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
