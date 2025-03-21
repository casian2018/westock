"use client";

import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

export default function Login(props: Props) {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  let err = props.searchParams?.error;

  if (err === "CredentialsSignin") {
    err = "Invalid username or password";
  }

  return (
    <div className="w-full mx-auto max-w-xl flex flex-col justify-center py-24  relative p-8 min-h-screen">
      <form
        className="divide-neutral-200 rounded-3xl bg-white shadow-2xl border p-8 lg:p-10"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-[22px]">Login</h1>
        <div className="py-2 space-y-3">
          {" "}
          <label className="block text-sm text-gray-700">Email</label>{" "}
          <input
            name="email"
            x-model="loginEmail"
            className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset focus:ring-2 text-xs"
            placeholder="Enter your email"
          />
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
        {err && (
          <p x-show="!loginEmail" className="text-red-500 text-xs mt-1">
            {err}
          </p>
        )}
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
