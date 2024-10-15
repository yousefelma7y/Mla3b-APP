"use client";
import Link from "next/link";
import React from "react";

const CreativeBtn = ({ lable, pass }) => {
  return (
    <Link href={pass}>
    <button
      className="relative w-[220px] h-[70px]   md:w-[300px] md:h-[80px] transition text-lg duration-100 bg-transparent border-none outline-none text-[13px] font-bold text-primary"
    >
      {lable}
      <div
        id="clip"
        className="absolute top-0 overflow-hidden w-full h-full border-[5px] border-double box-shadow-[inset_0px_0px_15px_#038f7f] polygon-clip"
      >
        <div
          id="leftTop"
          className="corner absolute w-[4em] h-[4em] top-[-1.96em] left-[-3em]"
        ></div>
        <div
          id="rightBottom"
          className="corner absolute w-[4em] h-[4em] top-[45%] left-[88%]"
        ></div>
        <div
          id="rightTop"
          className="corner absolute w-[4em] h-[4em] top-[-1.98em] left-[91%]"
        ></div>
        <div
          id="leftBottom"
          className="corner absolute w-[4em] h-[4em] top-[2.10em] left-[-2.15em]"
        ></div>
      </div>
      <span
        id="rightArrow"
        className="arrow absolute top-[35%] w-[11%] h-[30%] left-[102%] bg-secondary polygon-right-arrow"
      ></span>
      <span
        id="leftArrow"
        className="arrow absolute top-[35%] w-[11%] h-[30%] left-[-13.5%] bg-secondary polygon-left-arrow"
      ></span>
    </button>
    </Link>
  );
};

export default CreativeBtn;
