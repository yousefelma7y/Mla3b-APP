import Link from "next/link";
import NoData from "./NoData";

export default function PlaygroundsCard({ data, demoImage }) {
  return data.length > 0 ? (
    <div className="  grid lg:grid-cols-3 grid-cols-1 gap-8 justify-between items-center  lg:w-5/6 sm:w-3/4 w-full">
      {data.map((playground) => (
        <div
          style={{
            backgroundImage: `url(${
              playground.photo ? playground.photo : demoImage.src
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "#ccc",
          }}
          className="relative card border-4 shadow-xl md:h-[300px] h-[250px] border-secondary rounded-2xl p-4 w-full group transition-transform duration-300 transform hover:scale-105"
          key={playground.id}
        >
          {/* Overlay Element */}
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

          <div className="relative flex flex-col space-y-20 items-center h-full w-full">
            <h1 className="text-3xl shadowText text-white font-bold pt-10">
              {playground.name}
            </h1>
            <Link
              href={`/pages/playgrounds/${playground.id}`}
              className="shadowText cursor-pointer bg-secondary text-white p-4 xl:px-10 rounded-2xl w-3/4"
            >
              لمعلومات أكثر
            </Link>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex w-full items-center justify-center ">
      <NoData data={"ملاعب"} />
    </div>
  );
}
