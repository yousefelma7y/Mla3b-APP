"use client";

import React, { useEffect, useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center w-full p-4 sm:p-8">
      <div className="grid w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mt-8">
        <section className="bg-gradient-to-r from-primary to-secondary rounded-3xl text-right ">
          <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-10 py-14 m-2 space-y-4">
            <h1 className="text-3xl  font-bold text-center cursor-default  text-gray-700">
              تسجيل الدخول
            </h1>
            {/* Form */}
            <div className="space-y-8">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-lg  font-medium  text-gray-700"
                >
                  : أسم المستخدم
                </label>
                <input
                  id="username"
                  className="border p-3 shadow-md dark:bg-primary dark:border-secondary border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-primary transition transform hover:scale-105 duration-300 text-right"
                  type="text"
                  placeholder="أسم المستخدم"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg  font-medium text-gray-700"
                >
                  : كلمة السر
                </label>
                <input
                  id="password"
                  className="border p-3 shadow-md dark:bg-primary  dark:border-secondary border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-primary transition transform hover:scale-105 duration-300 text-right"
                  type="password"
                  placeholder="كلمة السر"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <a
                href="#"
                className="text-primary text-sm transition hover:underline font-medium  "
              >
                هل نسيت كلمة السر ؟
              </a>
              <button
                className="w-full p-3 mt-4 text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:primary"
                type="submit"
                onClick={() =>
                  console.log({ password: password, email: email })
                }
              >
                تسجيل الدخول
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signin;
