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
      <div className="p-8 py-10 flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-x-16 lg:space-y-0">
        {/* Image Section */}
        <div className="flex justify-center ">
          <Image
            src={homePhoto}
            alt="home"
            width={650}
            height={550}
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-end justify-center space-y-4  p-4 lg:p-0">
          {/* Title */}
          <h1 className="shadowText text-xl lg:text-3xl text-center lg:text-end font-bold text-black">
            اختر ملعبك و احجز مباراة بضغطة زر
          </h1>

          {/* Description */}
          <p className=" text-md  text-gray-400 font-bold text-center lg:text-end">
            الأن يمكن لأصحاب الملاعب تسجيل ملعبهم وأضافه كل معلومات الملعب الخاص
            بهم ليراها جميع المستخدمين وأختيار الميعاد المناسب لهم وحجزه بكل
            سهولة
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center lg:justify-end w-full">
            <Link
              href={`/pages/signin`}
              className="rounded-2xl cursor-pointer hover:bg-primary bg-secondary text-white p-3 text-center w-1/2 lg:w-1/2"
            >
              سجل ملعبك الان
            </Link>
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
          <div className="bg-white p-4 w-full h-[200px] rounded-xl space-y-4 lg:space-y-8 shadow">
            <h2 className="text-gray-400 font-bold text-lg pt-4">
              أكد حجزك عن طريق فودافون كاش
            </h2>
            <div className="w-full flex items-start justify-center text-center">
              <CreditCardIcon className="size-12 text-primary" />
            </div>
          </div>

          {/* Card 2: Match Time */}
          <div className="bg-white p-4 w-full h-[200px]  rounded-xl space-y-4 lg:space-y-8 shadow">
            <h2 className="text-gray-400 font-bold text-lg pt-4">
              اختر موعد المباراة المناسب
            </h2>
            <div className="w-full flex items-start justify-center text-center">
              <ClockIcon className="size-12 text-primary" />
            </div>
          </div>

          {/* Card 3: Select Field */}
          <div className="bg-white p-4 w-full h-[200px] rounded-xl space-y-4 lg:space-y-8 shadow">
            <h2 className="text-gray-400 font-bold text-lg pt-4">
              اختر ملعب من الملاعب
            </h2>
            <div className="w-full flex items-start justify-center text-center">
              <ShoppingBagIcon className="size-12 text-primary" />
            </div>
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="p-4 py-8 flex flex-col justify-center text-center items-center space-y-12 w-full">
        <CreativeBreakLine title="الملاعب المتاحة" />
        <PlaygroundsCard data={data} demoImage={homePhoto} />

        <Link
          href={`/pages/playgrounds`}
          className="rounded-2xl cursor-pointer hover:bg-secondary bg-primary text-white p-4 px-10 text-center w-3/4 sm:1/2 lg:w-1/4"
        >
          لجميع الملاعب
        </Link>
      </div>
    </div>
  );
}
