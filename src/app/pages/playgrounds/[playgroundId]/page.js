"use client";

import CreativeBreakLine from "@/components/CreativeBreakLine";
import CreativeBtn from "@/components/CreativeBtn";
import PlaygroundDetails from "@/components/playgroundDetails";
import BookingTable from "@/components/Table.js/Table";

export default function Contact({ params }) {
  const playgroundDetails = {
    id: 1,
    name: "Star Park",
    address: "123 Main St, City, State, ZIP",
    phone: "01022361568",
    ownerId: 155,
    photo: "",
    vodafonCashNumber: "01022361568",
    morningPrice: "150",
    eveningprice: "200",
  };

  return (
    <div className=" ">
      <div className="p-4 space-y-4">
        <div className="flex xl:hidden  justify-center">
          <CreativeBtn
            small
            pass={"/pages/playgrounds"}
            lable={"أختر ملعب آخر"}
          />
        </div>
        <div className="flex xl:justify-between justify-center items-center">
          <div className="hidden xl:flex w-1/4  justify-center">
            <CreativeBtn
              small
              pass={"/pages/playgrounds"}
              lable={"أختر ملعب آخر"}
            />
          </div>
          <PlaygroundDetails playgroundDetails={playgroundDetails} />
          <div className="hidden xl:flex w-1/4  justify-center">
            <CreativeBtn small pass={"/pages/booking"} lable={"أحجز الآن"} />
          </div>
        </div>

        <div className="flex xl:hidden  justify-center">
          <CreativeBtn small pass={"/pages/booking"} lable={"أحجز الآن"} />
        </div>
        <div className="text-center pt-4">
          <CreativeBreakLine
            title={`${playgroundDetails.name} جدول المواعيد لملعب`}
          />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <BookingTable />
      </div>
    </div>
  );
}
