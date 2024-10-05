"use client";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import logo from "../../pubilc/assets/logo.webp";
import { HomeIcon } from "@heroicons/react/24/solid";

import { IoMdFootball } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";
import { GoSignIn } from "react-icons/go";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background text-primary  font-bold border-b-4 border-primary">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">
            <Image src={logo} alt="logo" className="h-12 w-36 " />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 ">
          <Link
            href="/"
            className="hover:text-secondary flex justify-center space-x-2 items-center"
          >
            الرئيسية <HomeIcon className="size-5" />
          </Link>
          <Link
            href="/pages/playgrounds"
            className="hover:text-secondary flex justify-center space-x-2 items-center"
          >
            الملاعب <IoMdFootball className="size-5" />
          </Link>
          <Link
            href="/pages/contact"
            className="hover:text-secondary flex justify-center space-x-2 items-center"
          >
            تواصل معنا <IoIosContacts className="size-5" />
          </Link>
          <Link
            href="/pages/signin"
            className="hover:text-secondary flex justify-center space-x-2 items-center"
          >
            تسجيل الدخول
            <GoSignIn className="size-5" />
          </Link>
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
            <Link
              href="/"
              className="hover:text-secondary flex justify-center space-x-2 items-center"
            >
              الرئيسية
              <HomeIcon className="size-5" />
            </Link>
            <Link
              href="/pages/playgrounds"
              className="hover:text-secondary flex justify-center space-x-2 items-center"
            >
              الملاعب
              <IoMdFootball className="size-5" />
            </Link>
            <Link
              href="/pages/contact"
              className="hover:text-secondary flex justify-center space-x-2 items-center"
            >
              تواصل معنا <IoIosContacts className="size-5" />
            </Link>
            <Link
              href="/pages/signin"
              className="hover:text-secondary flex justify-center space-x-2 items-center"
            >
              تسجيل الدخول
              <GoSignIn className="size-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
