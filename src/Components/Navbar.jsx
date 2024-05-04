import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [width, setwidth] = useState(0);
  const [dropdown, setdropdown] = useState(false);
  useEffect(() => {
    let w = window.innerWidth;
    setwidth(w);
  }, []);
  return (
    <nav className="w-full h-16  border bg-white border-b-gray-300 flex items-center justify-between px-4">
      <a href="https://www.mployee.me/" target="_blank">
        <img src="logo.png" alt="company logo" className=" w-24" />
      </a>
      <div className={twMerge(" hidden md:flex gap-x-2 ")}>
        <div className="flex gap-x-6 font-semibold text-center items-center transition-all">
          <div className="flex items-center gap-2">
            <a className="hover:bg-orange-400 rounded-full p-1">Resume Scan</a>
            <span className="text-orange-400 bg-orange-200 p-1 rounded-full text-xs">
              {" "}
              New Launch
            </span>
          </div>
          <a className="hover:bg-orange-400 rounded-full p-1">
            Resume Keywords
          </a>
          <a className="hover:bg-orange-400 rounded-full p-1">
            Resume Services
          </a>
          <a className="hover:bg-orange-400 rounded-full p-1">Career Blogs</a>
          <a className="hover:bg-orange-400 rounded-full p-1">About US</a>
        </div>
        <div className="flex bg-gray-300 px-2 py-1 gap-1 rounded-full relative items-center">
          <img
            src="hero.jpg"
            alt="user image"
            className="w-8 h-8 aspect-square object-cover  rounded-full overflow-hidden"
          />
          <span>Divyanshu</span>
          <button onClick={() => setdropdown(!dropdown)}>
            <FaAngleDown />
          </button>
          <div
            className={twMerge(
              "absolute top-full left-0 mt-2 z-10 w-full font-semibold bg-white border rounded-md p-2 transition-all duration-75",
              !dropdown && "hidden"
            )}
          >
            <button className="hover:bg-gray-300 w-full">Profile</button>
            <hr></hr>
            <button className="hover:bg-gray-300 w-full">Logout</button>
          </div>
        </div>
      </div>
      <div className="md:hidden">Open</div>
      <div
        className={twMerge(
          "flex flex-col gap-x-2 z-10 items-start justify-start md:hidden"
        )}
      >
        <div className="flex flex-col gap-x-6 font-semibold text-center  transition-all">
        <div className="flex items-center gap-2">
            <a className="hover:bg-orange-400 rounded-full p-1">Resume Scan</a>
            <span className="text-orange-400 bg-orange-200 p-1 rounded-full text-xs">
              {" "}
              New Launch
            </span>
          </div>
          <a className="hover:bg-orange-400 rounded-full p-1">
            Resume Keywords
          </a>
          <a className="hover:bg-orange-400 rounded-full p-1">
            Resume Services
          </a>
          <a className="hover:bg-orange-400 rounded-full p-1">Career Blogs</a>
          <a className="hover:bg-orange-400 rounded-full p-1">About US</a>
        </div>
        <div className="flex bg-gray-300 px-2 py-1 gap-1 rounded-full relative items-center">
          <img
            src="hero.jpg"
            alt="user image"
            className="w-8 h-8 aspect-square object-cover  rounded-full overflow-hidden"
          />
          <span>Divyanshu</span>
          <button onClick={() => setdropdown(!dropdown)}>
            <FaAngleDown />
          </button>
          <div
            className={twMerge(
              "absolute top-full left-0 mt-2 z-10 w-full font-semibold bg-white border rounded-md p-2 transition-all duration-75",
              !dropdown && "hidden"
            )}
          >
            <button className="hover:bg-gray-300 w-full">Profile</button>
            <hr></hr>
            <button className="hover:bg-gray-300 w-full">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
