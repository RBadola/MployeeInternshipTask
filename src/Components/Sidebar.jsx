import React, { useState } from "react";
import { BiBookmarks } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { CiGrid31 } from "react-icons/ci";
import { GrTask } from "react-icons/gr";
import { IoIosArrowUp, IoMdHelpCircleOutline } from "react-icons/io";
import { MdAttachMoney, MdCircle, MdKeyboardArrowRight } from "react-icons/md";
import { RiSettings3Line, RiTeamLine } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

const Sidebar = () => {
  const [savedJobs, setSavedJobs] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const dropDownItems = [
    { item: "UI/UX Designer", icon: <MdCircle size={10} /> },
    { item: "Web Developer", icon: <MdCircle size={10} /> },
    { item: "Analyst", icon: <MdCircle size={10} /> },
    { item: "Lorem Ipsum", icon: <MdCircle size={10} /> },
  ];
  return (
    <div className=" w-1/5  flex flex-col bg-white p-2 justify-between h-full px-6">
      <main className="flex flex-col gap-y-2 ">
        <p className="dropdown-item ">
          <CiGrid31 />
          <a>Job Recommendation Tool</a>
        </p>
        <p className="dropdown-item ">
          <GrTask />
          <a>History</a>
        </p>
        <p
          onClick={() => setSavedJobs(!savedJobs)}
          className=" group select-none flex items-center justify-between gap-1 bg-gray-900 hover:bg-orange-400 transition-all  text-white hover:text-gray-900 rounded-md p-1 px-1  relative cursor-pointer"
        >
          <span className="first:text-orange-400 group-hover:text-white">
            <BiBookmarks />
          </span>
          <a>Saved Jobs</a>
          <span className={twMerge("rotate-0", savedJobs && "rotate-180")}>
            <IoIosArrowUp />
          </span>
        </p>
        <div
          className={twMerge(
            "overflow-hidden flex flex-col gap-y-2 h-0 transition-all duration-100 ",
            savedJobs && "h-max"
          )}
        >
          {dropDownItems.map((item, index) => {
            return (
              <p
                key={index}
                className={twMerge(
                  "dropdown-item",
                  index === activeItem && "dropdown-item-active"
                )}
                onClick={() => setActiveItem(index)}
              >
                {item.icon}
                <a>{item.item}</a>
              </p>
            );
          })}
        </div>
        <p className="dropdown-item">
          <MdAttachMoney />
          <a>
            Plans <span>(Current: Free)</span>
          </a>
        </p>
        <p className="dropdown-item">
          <RiTeamLine />
          <a>Manage Profiles</a>
        </p>
      </main>
      <footer>
        <div className="text-black font-semibold">
          <p className="select relative cursor-pointer font-light text-gray-400">
            Help & Support
          </p>
          <p className="flex items-center gap-1 select relative cursor-pointer">
            <RiSettings3Line /> Settings
          </p>
          <p className="flex items-center gap-1 select relative cursor-pointer">
            <IoMdHelpCircleOutline /> Help Center
          </p>
        </div>
        <div className="flex flex-col w-max gap-y-2">
          <button className="p-2 border rounded-md font-semibold text-left">
            Current Plan: Free
          </button>
          <button className="p-2 border text-xl rounded-md border-orange-400 flex gap-2 items-center">
            <div className=" bg-orange-400 w-max h-max p-2 text-white rounded-full flex items-center justify-center ">
              <BsStars size={45} />
            </div>
            <p className="flex flex-col items-start">
              <span>Current Plan: Free</span>
              <span className="text-gray-400">Get all features</span>
            </p>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
