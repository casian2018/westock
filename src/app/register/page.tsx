"use client";

import { signIn } from "next-auth/react";
import register from "../api/auth/register";
import { FormEvent, use, useState } from "react";
import { redirect } from "next/dist/server/api-utils";

export default function Register() {
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (!fullName || !email || !username || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (username.length < 4) {
      setError("Username must be at least 4 characters.");
      return;
    }

    setError(null);

    const res = await register(fullName, email, username, password);

    if (res) {
      setError(res);
      return;
    }

    await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };
  return (
    <div>
      <section className="bg-white">
        <div className="w-full mx-auto max-w-xl flex flex-col justify-center py-24  relative p-8">
          <form
            className="w-full divide-neutral-200 rounded-3xl bg-white shadow-2xl border p-8 lg:p-10"
            onSubmit={onSubmit}
          >
            <h1 className="font-bold text-[22px]">Register</h1>
            <div className="py-2 space-y-3">
              {" "}
              <label className="block text-sm text-gray-700">
                Full Name
              </label>{" "}
              <input
                type="text"
                name="fullName"
                className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                placeholder="Enter your Busniess name"
              />
              <p x-show="!loginEmail" className="text-red-500 text-xs mt-1">
                Full Name is required
              </p>
            </div>

            <div className="py-2 space-y-3">
              {" "}
              <label className="block text-sm text-gray-700">
                Busniess Name
              </label>{" "}
              <input
                type="text"
                name="username"
                className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                placeholder="Enter your Busniess name"
              />
              <p x-show="!loginEmail" className="text-red-500 text-xs mt-1">
                Busniess name is required
              </p>
            </div>
            <div className="py-2 space-y-3">
              {" "}
              <label className="block text-sm text-gray-700">Email</label>{" "}
              <input
                type="email"
                name="email"
                className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
                placeholder="Enter your email"
              />
              <p x-show="!loginEmail" className="text-red-500 text-xs mt-1">
                Email is required
              </p>
            </div>
            <div className="py-2 space-y-3">
              {" "}
              <label className="block text-sm text-gray-700">Password</label>
              <div className="relative">
                {" "}
                <input
                  className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-inset text-xs"
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                />{" "}
              </div>
            </div>
            <div className="py-2 space-y-3">
              {" "}
              <label className="block text-sm text-gray-700">
                Confirm Password
              </label>
              <div className="relative">
                {" "}
                <input
                  className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-inset text-xs"
                  placeholder="Enter your password"
                  type="password"
                  name="confirmPassword"
                />{" "}
              </div>
              {error && <p>{error}</p>}
            </div>
            <div className="mt-4">
              {" "}
              <button
                type="submit"
                className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
              >
                Register
              </button>{" "}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
