"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background text-primary font-bold border-b-4 border-primary">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">MyLogo</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/">الرئيسية</Link>
          <Link href="/pages/playgrounds">الملاعب</Link>
          <Link href="/pages/contact">تواصل معنا</Link>
          <Link href="/pages/signin">تسجيل الدخول</Link>
        </div> 
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 pb-4  justify-center items-center text-center">
            <Link href="/">الرئيسية</Link>
            <Link href="/pages/playgrounds">الملاعب</Link>
            <Link href="/pages/contact">تواصل معنا</Link>
            <Link href="/pages/signin">تسجيل الدخول</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
