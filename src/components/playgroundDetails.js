"use client";
import Image from "next/image";
import homePhoto from "../../pubilc/assets/homephoto.webp";

export default function PlaygroundDetails({ playgroundDetails }) {
  return (
    <div
      key={playgroundDetails.id}
      className="xl:w-1/2 lg:w-3/4 md:w-2/3 sm:w-3/4 md:space-y-4 w-full rounded-2xl border-8 border-secondary bg-primary p-2 lg:flex justify-center overflow-hidden image-shadow transition-transform duration-500 ease-in-out transform hover:scale-105"
    >
      <div className="lg:w-1/2">
        <Image
          src={
            playgroundDetails && playgroundDetails.photo
              ? playgroundDetails.photo
              : homePhoto
          }
          alt="home"
          className="rounded-2xl shadow-xl w-full h-full"
        />
        <div className="absolute top-0 right-0 w-full h-10 flex justify-between items-center">
          <div className="h-full w-40 bg-primary rounded-b-xl skew-y-12 shadow-xl transform -translate-y-5"></div>
        </div>
      </div>

      <div
        dir="rtl"
        className="h-full py-4 shadowText lg:w-1/2 items-center text-white space-y-4 lg:text-lg text-base xl:text-base px-4"
      >
        <div className="flex justify-between font-bold items-center">
          <span className="lg:text-xl text-lg xl:text-lg">أسم الملعب :</span>
          <span className="">{playgroundDetails.name}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span className="">العنوان :</span>
          <span className="">{playgroundDetails.address}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span className="">رقم الهاتف :</span>
          <span className="">{playgroundDetails.phone}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span className="">محفظة فودافون كاش :</span>
          <span className="">{playgroundDetails.vodafonCashNumber}</span>
        </div>
        <div className="flex justify-between font-bold ">
          <span className="">سعر الساعة صباحاً :</span>
          <span dir="ltr" className="">
            {playgroundDetails.morningPrice} EGP
          </span>
        </div>
        <div className="flex justify-between font-bold">
          <span className="">سعر الساعة مساءً :</span>
          <span dir="ltr" className="">
            {playgroundDetails.eveningprice} EGP
          </span>
        </div>
      </div>
    </div>
  );
}
