"use client";
import Image from "next/image";
import homePhoto from "../../pubilc/assets/homephoto.webp";
import test from "../../pubilc/assets/download.png";

import CreativeBreakLine from "@/components/CreativeBreakLine";

import {
  ClockIcon,
  CreditCardIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import PlaygroundsCard from "@/components/PlaygroundsCard";
import CreativeCard from "@/components/CreativeCard";
import CreativeBtn from "@/components/CreativeBtn";

const data = [
  { id: 1, name: "Star Park", photo: "" },
  { id: 2, name: "Star Park", photo: "" },
  { id: 3, name: "Star Park", photo: "" },
  { id: 4, name: "Star Park", photo: "" },
  { id: 5, name: "Star Park", photo: "" },
  { id: 6, name: "Star Park", photo: "" },
];
export default function Home() {
  return (
    <div className="space-y-8">
      {/* First Section */}
      <div className="p-8 py-10  flex justify-center ">
        <div className="md:w-3/4 justify-center flex flex-col lg:flex-row items-center  space-y-8 lg:space-x-16 lg:space-y-0 ">
          {/* Image Section */}
          <div className="flex justify-center ">
            <Image
              src={homePhoto}
              alt="home"
              width={550}
              height={550}
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col items-center justify-center space-y-4  p-4 lg:p-0 ">
            {/* Title */}
            <h1 className="shadowText text-xl md:text-2xl text-center  font-bold text-black">
              اختر ملعبك و احجز مباراة بضغطة زر
            </h1>

            {/* Description */}
            <p className=" text-md  text-gray-400 font-bold text-center ">
              الأن يمكن لأصحاب الملاعب تسجيل ملعبهم وأضافه كل معلومات الملعب
              الخاص بهم ليراها جميع المستخدمين وأختيار الميعاد المناسب لهم وحجزه
              بكل سهولة
            </p>

            {/* Call to Action Button */}
            <div className="flex justify-center w-full">
              <CreativeBtn pass={"/pages/signin"} lable={"سجل ملعبك الأن"} />
            </div>
          </div>
        </div>
      </div>
      {/* Secound Section */}
      <div className="p-4 flex flex-col justify-center text-center items-center space-y-12">
        {/* Section Title */}
        <CreativeBreakLine title="كيف تحجز ملعب" />
        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center xl:space-x-8 lg:space-x-4 space-y-4 lg:space-y-0 w-5/6 md:w-full xl:w-3/4">
          {/* Card 1: Vodafone Cash */}
          <CreativeCard
            title="أكد حجزك عن طريق فودافون كاش"
            icon={<CreditCardIcon className="size-12 text-primary" />}
          />

          {/* Card 2: Match Time */}
          <CreativeCard
            title="اختر موعد المباراة المناسب"
            icon={<ClockIcon className="size-12 text-primary" />}
          />

          {/* Card 3: Select Field */}
          <CreativeCard
            title="أختر ملعب من الملاعب"
            icon={<ShoppingBagIcon className="size-12 text-primary" />}
          />
        </div>
      </div>
      {/* Third Section */}
      <div className="p-4 py-8 flex flex-col justify-center text-center items-center space-y-12 w-full">
        <CreativeBreakLine title="الملاعب المتاحة" />
        <PlaygroundsCard data={data} demoImage={homePhoto} />
        <CreativeBtn pass={"/pages/playgrounds"} lable={"لجميع الملاعب"} />
      </div>
    </div>
  );
}
