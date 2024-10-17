"use client";

import CreativeBreakLine from "@/components/CreativeBreakLine";
import homePhoto from "../../../../pubilc/assets/homephoto.webp";
import PlaygroundsCard from "@/components/PlaygroundsCard";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import SearchInput from "@/components/SearchInput";
import CustomComboBox from "@/components/ComboBox";

const data = [
  { id: 1, name: "Star Park", photo: "" },
  { id: 2, name: "San Sero", photo: "" },
  { id: 3, name: "Elshrouk", photo: "" },
  { id: 4, name: "Anfild", photo: "" },
  { id: 5, name: "Arena Park", photo: "" },
  { id: 6, name: "Santiago", photo: "" },
];
const countries = [
  { id: 1, name: "القاهرة" },
  { id: 2, name: "الجيزة" },
  { id: 3, name: "الأسكندرية" },
  { id: 4, name: "البحيرة" },
  { id: 5, name: "المنصورة" },
  { id: 6, name: "طنطا" },
];

export default function Playgrounds() {
  const [page, setPage] = useState(30);
  const [limit, setLimit] = useState(80);
  const [totalPages, setTotalPages] = useState(100);

  const [searchValue, setsearchValue] = useState("");

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);
  return (
    <div className="p-4 py-8 flex flex-col justify-between text-center items-center space-y-12 w-full ">
      <div className="flex justify-center items-center space-x-1  sm:space-x-4 ">
        <SearchInput search={searchValue} setSearch={setsearchValue} />
        <CustomComboBox items={countries} />
      </div>
      <CreativeBreakLine title="الملاعب المتاحة" />
      <PlaygroundsCard data={data} demoImage={homePhoto} />
      <Pagination
        currentPage={20}
        page={page}
        limit={limit}
        totalPages={totalPages}
        onPageChange={(p) => setPage(p)}
        onLimitChange={(l) => setLimit(l)}
      />
    </div>
  );
}
