"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import TypingEffect from "../components/TypingEffect";

const FindMentor = () => {
  const [mentors, setMentors] = useState([]);
  const texts = ["Marketing", "Design", "Resume", "Career"];

  useEffect(() => {
    const getMentorData = async () => {
      console.log("Fetching data ..... ");
      const response = await fetch("http://localhost:8080/getMentors", {
        method: "GET",
      });

      const data = await response.json();
      if (data && data.status == 200) {
        console.log("Inside validation now");
        setMentors(data.data);
      }
    };
    getMentorData();
  }, []);

  return (
    <div className="w-full min-h-screen items-center flex flex-col justify-center">
      <div className="w-100 md:w-3/5 h-[75vh] flex items-center justify-center">
        <TypingEffect texts={texts} />
      </div>
      <Card mentors={mentors} />
    </div>
  );
};

export default FindMentor;
