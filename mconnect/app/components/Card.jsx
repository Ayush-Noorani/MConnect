"use client";
import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { useRouter } from "next/router";

const CardComponent = ({ mentors }) => {
  const router = useRouter();

  const handleMentorClick = (name) => {
    if (name) {
      useRouter.push(`/mentor/${name}`);
    }
  };

  return (
    <div className="w-3/5 hflex flex-col gap-10 justify-center items-center">
      {mentors.map((item, index) => {
        return (
          <div className="h-[40vh]" key={index}>
            <Card
              className="h-[80%] py-4 pt-10 w-full flex flex-row gap-12 pl-5 border-solid border-2 border-black rounded-xl"
              key={index}
            >
              <CardHeader className="w-1/2 pb-0 pt-2 px-4 flex-col items-start relative">
                <Image
                  src="/photo.jpg"
                  alt="image"
                  objectFit="cover"
                  layout="fill"
                />
              </CardHeader>
              <CardBody className="overflow-visible py-2 gap-5 mt-4 w-3/4">
                <div>
                  <h4 className="font-bold text-4xl">{item.Name}</h4>
                  <p className="text-xl">
                    {item.Designation} - {item.Company}
                  </p>
                </div>
                <div>
                  <button
                    className="btn text-orange-600 font-bold text-2xl left-0"
                    onClick={() => handleMentorClick(item.Name)}
                  >
                    Read More
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CardComponent;
