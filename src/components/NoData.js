import React from "react";
import noData from "../../pubilc/assets/no-data.svg";
import Image from "next/image";

const NoData = ({ data = "data", size = "sm" }) => {
  const getSize = () => {
    switch (size) {
      case "sm":
        return "w-10 h-10";
      case "md":
        return "w-20 h-20";
      case "lg":
        return "w-32 h-32";
      default:
        return "w-10 h-10";
    }
  };

  const getTextSize = () => {
    switch (size) {
      case "sm":
        return "text-base";
      case "md":
        return "text-xl";
      case "lg":
        return "text-3xl";
      default:
        return "text-sm";
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <h1 className={`text-xl lg:text-3xl font-bold text-gray-500`}>
        لا يوجد {data} حتي الآن
      </h1>
      <Image
        src={noData}
        alt="no-data"
        className={`w-20 md:h-20 lg:w-32 lg:h-32 object-contain`}
      />
    </div>
  );
};

export default NoData;
