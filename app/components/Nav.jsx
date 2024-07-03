"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  return (
    <div className="w-full h-20 flex flex-row justify-around text-lg items-center">
      <div className="">
        <h2>M-CONNECT</h2>
      </div>
      <div className="w-1/2 flex flex-row justify-evenly">
        <ul className="hover:border-solid rounded-full hover:border-1 hover:border-black py-1 px-10">
          <a href="/findMentor" onClick={router.push("/findMentor")}>
            Home
          </a>
        </ul>
        <ul className="hover:border-solid rounded-full hover:border-1 hover:border-black py-1 px-10">
          <a href="#service">Service</a>
        </ul>
        <ul className="hover:border-solid rounded-full hover:border-1 hover:border-black py-1 px-10">
          <a href="#about">About</a>
        </ul>
      </div>
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Nav;
