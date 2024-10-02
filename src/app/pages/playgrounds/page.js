"use client";

// import { useRouter } from "next/compat/router";

export default function Playgrounds() {
  const playGrounds = [
    { id: 1, name: "Star Park", Phone: "01022361565" },
    { id: 2, name: "Santos Round", Phone: "" },
    { id: 3, name: "National Park", Phone: "01022361565" },
  ];
  return (
    <div className="">
      {playGrounds.map((ground) => (
        <div key={ground.id} className="p-2 items-center flex justify-center">
          <div
            onClick={() =>
              (window.location.href = `/pages/playgrounds/${ground.id}`)
            }
            className="border-primary border-2 rounded-3xl shadow p-4 text-center cursor-pointer w-1/2 hover:bg-primary hover:text-white"
          >
            {ground.name}
          </div>
        </div>
      ))}
    </div>
  );
}
