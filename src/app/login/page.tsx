"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";

export default function Login() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    await signIn("credentials", {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="w-full mx-auto max-w-xl flex flex-col justify-center py-24  relative p-8 min-h-screen">
      <form className="divide-neutral-200 rounded-3xl bg-white shadow-2xl border p-8 lg:p-10">
        <div className="py-2 space-y-3">
          {" "}
          <label className="block text-sm text-gray-700">Username</label>{" "}
          <input
            name="username"
            x-model="loginEmail"
            className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
            placeholder="Enter your email"
          />
          <p x-show="!loginEmail" className="text-red-500 text-xs mt-1">
            Username is required
          </p>
        </div>
        <div className="py-2 space-y-3">
          {" "}
          <label className="block text-sm text-gray-700">Password</label>
          <div className="relative">
            {" "}
            <input
              name="password"
              className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-2 focus:ring-inset text-xs"
              placeholder="Enter your password"
              type="password"
            />{" "}
            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-xs text-gray-400 cursor-pointer">
              Show
            </span>{" "}
          </div>
        </div>
        <div className="mt-4">
          {" "}
          <button
            type="submit"
            className="rounded-full bg-blue-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full"
          >
            Login
          </button>{" "}
        </div>
      </form>
    </div>
  );
}
