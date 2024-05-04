import React, { useEffect, useState } from "react";
import Job from "./Job";
import { twMerge } from "tailwind-merge";

const Jobs = () => {
  const [totalpages, setTotalpages] = useState(0);
  const [active, setactive] = useState(1);
  const [first, setfirstIndex] = useState(1)
  const [last, setlastIndex] = useState(20)
  const data = [
    
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 60,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 99,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 78,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 87,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 99,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 78,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 87,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 99,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 78,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 87,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 99,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 78,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 87,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 99,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 78,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 87,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 99,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 97,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 78,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 50,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 60,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 99,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 78,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 87,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 99,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 78,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 87,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
    
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 99,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 78,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 87,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 99,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 90,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 78,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 87,
    },
    {
      title: "UI/UX Designer",
      company: "google",
      requirements: ["Figma", "Prototyping", "User Interface"],
      experience: "0-3",
      type: "Full Time",
      postedOn: "02 April 2024",
      logo: "google.webp",
      score: 95,
    },
  ];
  const [currentData, setcurrentData] = useState(data.slice(0, 20));
  const chnageData = (ind) => {
    let first =  ind * 20;
    let last = (ind + 1) * 20;
    setcurrentData(data.slice(first, last));
    console.log(first,last);
    setfirstIndex(first + 1);
    setlastIndex(last);
    
  };
  
  useEffect(() => {
    let n = Math.ceil(data.length / 20);
    setTotalpages(n);
  }, []);
  const setActiveData = (ind) => {
  
    setactive(ind + 1);
    chnageData(ind);
  };
  return (
    <div className=" border  w-full relative rounded-t-md p-2 pb-0  bg-white mx-3 mt-4  overflow-y-scroll overflow-x-hidden custom-scroll ">
      <p> Jobs ({data.length})</p>
      <section className="flex flex-col gap-y-3">
        {currentData.map((job, index) => {
          
          return (
            <Job
              key={index + Math.random() * 4}
              logo={job.logo}
              index={index}
              score={job.score}
              title={job.title}
              company={job.company}
              requirements={job.requirements}
              experience={job.experience}
              type={job.type}
              postedOn={job.postedOn}
            />
          );
        })}
      </section>
      <footer className="h-16  w-full bg-white sticky bottom-0  flex items-center justify-between p-4 mt-1 border rounded-md">
        <div>
          <p className="text-gray-400">
            Showing{" "}
            <span className="text-black">{`${first}-${last >data.length ? data.length :last}`} </span>
            from
            <span className="text-black">{data.length} </span>
            data{" "}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalpages }, (_, index) => {
            return (
              <div
                key={index}
                onClick={() => setActiveData(index)}
                className={twMerge(
                  "w-7 h-7 border  text-center rounded-md cursor-pointer  bg-gray-500 text-white",
                  active === index + 1 && "bg-black text-white"
                )}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </footer>
    </div>
  );
};

export default Jobs;
