"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [isNewUser, setIsNewUser] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    setIsNewUser((prev) => !prev);
  };

  const handleInput = (key, event) => {
    console.log("Handling key input");
    switch (key) {
      case "Name":
        setName(event.target.value);
        break;
      case "Email":
        setEmail(event.target.value);
        break;
      case "Password":
        setPassword(event.target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    console.log("INSIDE SUBMIT");
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data && data.status == 200) {
        console.log("Inisde validation");
        router.push("/home");
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <div className="card w-1/2 h-3/4 bg-base-400 shadow-2xl flex flex-col justify-center items-center">
      <div
        className={`${
          !isNewUser ? "gap-6" : "gap-4"
        } w-3/4 h-3/4 flex flex-col pt-10 justify-center text-xl`}
      >
        <label className="input input-bordered flex items-center gap-2 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow w-full max-w-xl"
            placeholder="Email"
            onChange={(e) => handleInput("Email", e)}
          />
        </label>
        <label
          className={`${
            !isNewUser ? "hidden" : "block"
          } input input-bordered flex items-center gap-2 h-10`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            onChange={(e) => handleInput("Name", e)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 h-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            onChange={(e) => handleInput("Password", e)}
          />
        </label>

        <button
          className="bg-blue-500 w-1/2 text-white rounded-full px-4 py-2"
          onClick={handleSubmit}
        >
          {!isNewUser ? "Log In" : "Sign Up"}
        </button>
      </div>

      <div className="w-3/4 h-1/4 flex flex-col justify-center items-center">
        <p>{!isNewUser ? "Don't have an account ?" : "Already registered ?"}</p>
        <button onClick={handleSignUp}>
          {!isNewUser ? "Sign up" : "Log in"}
        </button>
      </div>
    </div>
  );
};

export default Login;
