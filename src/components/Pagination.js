"use client";

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onLimitChange,
  limit,
}) => {
  const pageNumbers = [];
  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(currentPage + 2, totalPages);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center rounded-b-lg p-2 text-primary w-full md:w-3/4">
      {/* Pagination Section */}
      <div className="flex items-center w-full  justify-between space-x-2 md:space-x-4 rounded-3xl  bg-backgroundColor p-2 ">
        <div className="flex items-center justify-center space-x-2 md:space-x-4 text-center w-full">
          {/* First Page Button */}
          <button
            className="rounded-full border border-primary p-1 md:p-2 text-md md:text-base text-primary hover:bg-secondary hover:border-secondary hover:text-white disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => onPageChange(1)}
          >
            <ChevronDoubleLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 md:w-7 md:h-7" />
          </button>

          {/* Previous Page Button */}
          <button
            className="rounded-full border border-primary p-1 md:p-2 text-md md:text-base text-primary hover:bg-secondary hover:border-secondary hover:text-white disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 md:w-7 md:h-7" />
          </button>

          {/* Page Numbers */}
          <div className="space-x-1">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                className={`relative z-0 h-6 w-6 sm:h-8 sm:w-8 md:w-10 md:h-10 text-base sm:text-lg ${
                  pageNumber === currentPage &&
                  "text-white before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-full before:bg-primary"
                } ${
                  pageNumber !== currentPage &&
                  "rounded-full hover:bg-secondary hover:text-white"
                }`}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>

          {/* Next Page Button */}
          <button
            className="rounded-full border border-primary p-1 md:p-2 text-lg  text-primary hover:bg-secondary hover:border-secondary hover:text-white disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 md:w-7 md:h-7" />
          </button>

          {/* Last Page Button */}
          <button
            className="rounded-full border border-primary p-1 md:p-2 text-lg  text-primary hover:bg-secondary hover:border-secondary hover:text-white disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(totalPages)}
          >
            <ChevronDoubleRightIcon className="h-5 w-5 sm:h-6 sm:w-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
