"use client";

import CreativeBreakLine from "@/components/CreativeBreakLine";
import homePhoto from "../../../../pubilc/assets/homephoto.webp";
import PlaygroundsCard from "@/components/PlaygroundsCard";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { useState } from "react";

const data = [
  { id: 1, name: "Star Park", photo: "" },
  { id: 2, name: "Star Park", photo: "" },
  { id: 3, name: "Star Park", photo: "" },
  { id: 4, name: "Star Park", photo: "" },
  { id: 5, name: "Star Park", photo: "" },
  { id: 6, name: "Star Park", photo: "" },
];

export default function Playgrounds() {
  const [page, setPage] = useState(30);
  const [limit, setLimit] = useState(80);
  const [totalPages, setTotalPages] = useState(100);

  return (
    <div className="p-4 py-8 flex flex-col justify-center text-center items-center space-y-12 w-full">
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
