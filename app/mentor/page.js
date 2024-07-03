import React from "react";
import Timeline from "../components/Timeline";
import Details from "../components/Details";

const Mentor = () => {
  const skills = [
    "Java",
    "Python",
    "C++",
    "ReactJs",
    "Nextjs",
    "Docker",
    "AWS",
    "Kubernetes",
  ];
  return (
    <div className="w-full min-h-screen flex flex-col mt-10 p-10 gap-5">
      <div className="avatar">
        <div className="w-1/4 rounded-full">
          <img src="/photo.jpg" />
        </div>
      </div>
      <div className="w-full mt-10 flex flex-row gap-5">
        <div className="w-2/6">
          <div>
            <h4 className="font-bold text-4xl">Ayush Noorani</h4>
            <p className="text-xl mt-2">Software Developer - Oqton</p>
          </div>
          <p className="mt-5">
            Exeprienced in working in docker , kubernetes, cloud services and
            microservices
          </p>
          <div className="flex items-start pt-10">
            <Details />
          </div>
        </div>
        <div className="w-2/6">
          <div>
            <p className="text-2xl">Skills</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-5">
            {skills.map((item, index) => (
              <button className="bg-gray-200 text-black py-2 px-4 rounded-3xl text-xl">
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="w-2/6 flex flex-col">
          <p className="text-2xl">Work Exeprience</p>
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default Mentor;
