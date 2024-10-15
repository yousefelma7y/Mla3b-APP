"use client"; // If you're using this in Next.js and need client-side features

import React from "react";

const CreativePlayGroundsCard = () => {
  return React.createElement(
    "div",
    {
      className:
        "relative w-[190px] h-[254px] bg-black flex flex-col justify-end p-3 gap-3 cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group",
    },
    React.createElement("div", {
      className:
        "absolute inset-0 -left-1 mx-auto w-[200px] h-[264px] rounded-lg bg-gradient-to-br from-pink-500 to-cyan-500 z-[-10] transition-transform duration-600 ease-[cubic-bezier(0.175, 0.885, 0.32, 1.275)] group-hover:rotate-[-90deg] group-hover:scale-[1.34] group-hover:scale-y-[0.77]",
    }),
    React.createElement("div", {
      className:
        "absolute inset-0 bg-gradient-to-br from-pink-500 to-cyan-500 z-[-1] transition-all duration-200 ease-in-out blur-[20px] scale-95 group-hover:blur-[30px]",
    }),
    React.createElement(
      "p",
      { className: "text-2xl capitalize font-bold" },
      "Popular this month"
    ),
    React.createElement("p", { className: "text-sm" }, "Powered By"),
    React.createElement(
      "p",
      { className: "text-sm text-pink-500 font-semibold" },
      "Uiverse"
    )
  );
};

export default CreativePlayGroundsCard;
