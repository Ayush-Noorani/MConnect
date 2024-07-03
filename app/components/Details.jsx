import React from "react";
import Image from "next/image";

const Details = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <Image src="/location.png" width="25" height="5" alt="" />
        <span className="text-lg">Goa | India</span>
      </div>
      <div className="flex gap-3">
        <Image src="/mail.png" width="25" height="5" alt="" />
        <span className="text-lg">ayushnoorani6@gmail.com</span>
      </div>
      <div className="flex gap-3">
        <Image src="/telephone.png" width="25" height="5" alt="" />
        <span className="text-lg">+91 7709786655</span>
      </div>
    </div>
  );
};

export default Details;
