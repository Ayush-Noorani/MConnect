"use client";
import React, { useState } from "react";
import Nav from "../components/Nav";

const HomePage = () => {
  const [isMentor, setIsMentor] = useState("");

  const handleSelection = (key) => {
    setIsMentor(key);
  };

  return (
    <div>
      <div className="flex flex-row min-w-screen min-h-screen">
        <div className="flex flex-col w-1/2 min-h-screen items-center justify-center gap-10">
          <div
            className={`${
              isMentor == "mentor"
                ? "border-solid border-2 border-cyan-500 w-4/5 h-2/5 "
                : ""
            } transition-all duration-500 ease-in-out card w-3/4 h-1/4 bg-slate-200 shadow-2xl text-center hover:cursor-pointer`}
            onClick={() => handleSelection("mentor")}
          >
            <p className="text-4xl pt-10">Are you a Mentor ?</p>
            <p
              className={`${
                isMentor == "mentor" ? "block" : "hidden"
              } text-xl pt-10`}
            >
              "The delicate balance of mentoring someone is not creating them in
              your own image, but giving them the opportunity to create
              themselves"
            </p>
          </div>
          <div
            className={`${
              isMentor == "mentee"
                ? "border-solid border-2 border-cyan-500 w-4/5 h-2/5"
                : ""
            } transition-all duration-500 ease-in-out card w-3/4 h-1/4 bg-slate-200 shadow-2xl text-center hover:cursor-pointer`}
            onClick={() => handleSelection("mentee")}
          >
            <p className="text-4xl pt-10">Are you a Mentee ?</p>
            <p
              className={`${
                isMentor == "mentee" ? "block" : "hidden"
              } text-xl pt-10`}
            >
              "The best mentees understand that mentorship is a two-way street,
              requiring effort and engagement from both sides."
            </p>
          </div>
        </div>
        <div className="w-1/2 min-h-screen">
          {isMentor == "mentor" ? (
            <div className="card w-full min-h-screen bg-base-400 shadow-2xl flex flex-col justify-center items-center">
              <div>
                <p>Name</p>
                <input type="text" onChange={(e) => handleInput("Name", e)} />
              </div>
              <div>
                <p>Email</p>
                <input type="email" onChange={(e) => handleInput("Email", e)} />
              </div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  onChange={(e) => handleInput("Password", e)}
                />
              </div>
              <div>
                <p>Date of Birth</p>
                <input type="date" />
              </div>
            </div>
          ) : (
            <div className="card w-full min-h-screen bg-base-400 shadow-2xl flex flex-col justify-center items-center">
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
