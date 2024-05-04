import React, { useLayoutEffect, useState } from "react";
import { CiBookmarkMinus } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { MdCircle } from "react-icons/md";
import { twMerge } from "tailwind-merge";

const Job = (props) => {
  let normalized = () => Math.floor(props.score * 180) / 100;
  const rotate = `-${180 - normalized()}deg`;

  return (
    <div className="border rounded-md p-2 mx-auto relative flex-wrap w-80 h-80 lg:h-full lg:w-full  flex md:flex-row items-center ">
      <main className="md:flex-1 flex flex-col gap-y-2">
        <div className="flex gap-4">
          <img
            src={props.logo}
            alt="company logo"
            className="w-14 
             aspect-square object-cover border rounded-md"
          />
          <div>
            <p className="font-semibold">{props.title}</p>
            <div className="flex items-center gap-x-2">
              <span className="text-sm">{props.company.toUpperCase()}</span>
              <span className="hidden md:flex">

              <MdCircle size={8} />
              </span>
            </div>
            <p className="text-xs flex flex-row flex-wrap  items-center gap-y-2 text-gray-400">
              {props.requirements.map((req, index) => {
                // console.log(index);
                return (
                  <span
                    key={index}
                    className={twMerge(
                      ` rounded-full  py-[2px] px-2  text-center mx-1 text-xs `,
                      index === 0 && "bg-[#e0b09d] text-[#ff5f1f]",
                      index === 1 && "bg-[#cea7b2] text-[#de3163]",
                      index === 2 && "bg-[#99c8c8] text-[#088F8F]"
                    )}
                  >
                    {req}{" "}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <div className="md:flex w-full  gap-x-2 text-gray-400 hidden">
          <span className="flex items-center gap-x-1">
            <HiOutlineBriefcase />
            <span className="text-black">{props.experience} Years</span>
          </span>
          <span className="hidden md:flex">|</span>
          <span className="flex items-center gap-x-1">
            <HiOutlineClock />
            <span className="text-black">{props.type}</span>
          </span>
          <span className="hidden md:flex">|</span> Posted on: <span className="text-black"> {props.postedOn} </span>
          
        </div>
        <div className="text-gray-400 hidden md:block">
          <p>
            <span className=""></span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iste?
          </p>
          <p>
            <span className=""></span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            officia atque voluptatem? Laboriosam, nobis officia!
          </p>
        </div>
      </main>
      <div className="text-black h-full flex flex-col-reverse md:flex-col gap-y-2">
        <div className="flex gap-x-3">
          <button className="text-white bg-orange-500 px-2 py-1 rounded-md">
            Apply Now
          </button>
          <button className="flex items-center px-2 py-1 rounded-md border">
            <CiBookmarkMinus /> Save
          </button>
        </div>
        <div className="relative w-[160px] h-[80px] text-center overflow-hidden ">
          <div className=" rounded-t-full h-full flex flex-col items-center bg-gray-200 justify-end">
            <div
              style={{ rotate }}
              className={twMerge(
                " w-full h-full rounded-t-full origin-bottom absolute bottom-0 left-0 bg-yellow-300",props.score >=90 && "bg-green-500" 
              )}
            ></div>
            <div className=" absolute bottom-0 h-4/5 bg-white rounded-t-full w-4/5 ">
              <p className="text-xl">{props.score}</p>
              <p>Match Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className=" mx-auto relative flex flex-col md:flex-row flex-wrap md:flex-nowrap w-80 h-80 lg:h-full lg:w-full  ">
    //   <main className="flex-1 flex flex-col gap-y-2">
    //     <div className="flex gap-4">
    //       <img
    //         src={props.logo}
    //         alt="company logo"
    //         className="w-16 aspect-square object-cover border rounded-md"
    //       />
    //       <div>
    //         <p className="font-semibold">{props.title}</p>
    //         <div className="flex items-center gap-x-2">
    //           <span className="text-sm">{props.company.toUpperCase()}</span>
    //           <span className="hidden md:flex">

    //           <MdCircle size={8} />
    //           </span>
    //         </div>
    //         <p className="text-xs flex flex-row flex-wrap  items-center gap-2 text-gray-400">
    //           {props.requirements.map((req, index) => {
    //             // console.log(index);
    //             return (
    //               <span
    //                 key={index}
    //                 className={twMerge(
    //                   ` rounded-full  py-[2px] px-2  text-center mx-1 text-xs `,
    //                   index === 0 && "bg-[#e0b09d] text-[#ff5f1f]",
    //                   index === 1 && "bg-[#cea7b2] text-[#de3163]",
    //                   index === 2 && "bg-[#99c8c8] text-[#088F8F]"
    //                 )}
    //               >
    //                 {req}{" "}
    //               </span>
    //             );
    //           })}
    //         </p>
    //       </div>
    //     </div>
    //     <div className="hidden md:flex gap-x-2 text-gray-400">
    //       <span className="flex items-center gap-x-1">
    //         <HiOutlineBriefcase />
    //         <span className="text-black">{props.experience} Years</span>
    //       </span>
    //       <span>|</span>
    //       <span className="flex items-center gap-x-1">
    //         <HiOutlineClock />
    //         <span className="text-black">{props.type}</span>
    //       </span>
    //       <span>|</span>
    //       Posted on: <span className="text-black"> {props.postedOn} </span>
    //     </div>
    //     <article className="hidden lg:inline text-gray-400">
    //       <p>
    //         <span className=""></span>
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, iste?
    //       </p>
    //       <p>
    //         <span className=""></span>
    //         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
    //         officia atque voluptatem? Laboriosam, nobis officia!
    //       </p>
    //     </article>
    //   </main>
    //   <aside className="relative text-black h-max lg:h-full flex justify-between mx-auto lg:mx-0 flex-col gap-y-2">
    //     <div className="order-1 lg:order-none flex gap-x-3">
    //       <button className="text-white bg-orange-500 px-2 py-1 rounded-md">
    //         Apply Now
    //       </button>
    //       <button className="flex items-center px-2 py-1 rounded-md border">
    //         <CiBookmarkMinus /> Save
    //       </button>
    //     </div>
    //     <div className="relative w-[160px] h-[80px] text-center overflow-hidden ">
    //       <div className=" rounded-t-full h-full flex flex-col items-center bg-red-400 justify-end">
    //         <div
    //           className={twMerge(
    //             "bg-green-400 w-full h-full rounded-t-full rotate--5   origin-bottom absolute bottom-0 left-0",
    //             `rotate--${100 - props.score}`
    //           )}
    //         ></div>
    //         <div className=" absolute bottom-0 h-4/5 bg-white rounded-t-full w-4/5  ">
    //           <p className="text-xl">{props.score}</p>
    //           <p>Match Score</p>
    //         </div>
    //       </div>
    //     </div>
    //   </aside>
    // </div>
  );
};

export default Job;
