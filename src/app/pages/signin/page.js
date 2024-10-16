"use client";

import React, { useEffect, useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-full w-full p-8">
      <div className="grid gap-8">
        <section className="bg-gradient-to-r from-primary to-secondary rounded-3xl">
          <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-10 m-2 space-y-4">
            <h1 className="text-3xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900">
              تسجيل الدخول
            </h1>
            {/* Form */}
            <div className="space-y-8">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-lg dark:text-gray-300"
                >
                  User Name
                </label>
                <input
                  id="username"
                  className="border p-3 shadow-md dark:bg-primary dark:text-gray-300 dark:border-secondary border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-primary transition transform hover:scale-105 duration-300"
                  type="name"
                  placeholder="أسم المستخدم"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  id="password"
                  className="border p-3 shadow-md dark:bg-primary dark:text-gray-300 dark:border-secondary border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-primary transition transform hover:scale-105 duration-300"
                  type="password"
                  placeholder="كلمة السر"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <a
                href="#"
                className="text-primary text-sm transition hover:underline"
              >
                Forget your password?
              </a>
              <button
                className="w-full p-3 mt-4 text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:primary"
                type="submit"
                onClick={() =>
                  console.log({ password: password, email: email })
                }
              >
                LOG IN
              </button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-500 ">
              <p className="space-x-1">
                <span>By signing in, you agree to our</span>
                <a
                  href="#"
                  className="text-secondary transition hover:underline"
                >
                  Terms
                </a>
                <span>and</span>
                <a
                  href="#"
                  className="text-secondary transition hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signin;
