import React from "react";

const Details = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <img src="/location.png" className="w-[4%]" />
        <span className="text-lg">Goa | India</span>
      </div>
      <div className="flex gap-3">
        <img src="/mail.png" className="w-[4%]" />
        <span className="text-lg">ayushnoorani6@gmail.com</span>
      </div>
      <div className="flex gap-3">
        <img src="/telephone.png" className="w-[4%]" />
        <span className="text-lg">+91 7709786655</span>
      </div>
    </div>
  );
};

export default Details;
