"use client";

import React from "react";

const CreativeCard = ({ icon, title }) => {
  return (
    <div className="relative w-full h-[200px] bg-white rounded-xl flex justify-center items-center overflow-hidden shadow ">
      <div className="card-bg absolute w-[120px] h-[250%] animate-rotBGimg"></div>
      <div className="card-overlay absolute inset-1 bg-white rounded-[15px] space-y-8 pt-5">
        <h2 className="text-gray-400 font-bold text-lg md:text-xl pt-4">{title}</h2>
        <div className="w-full flex items-start justify-center text-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default CreativeCard;
