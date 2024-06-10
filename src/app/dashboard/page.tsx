"use client";

import { useSession } from "next-auth/react";
import { useUser } from "../Providers/UserProvider";
import { useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import { User } from "next-auth";
import { Stock } from "../types/types";

export default function dashboard() {
  const user = useUser();

  return (
    <div className="min-h-screen">
      <DashboardHeader />

      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />

        <div className="w-10/12">
          <div className="flex flex-row">
            <div className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6">
              <p className="text-5xl text-indigo-900">
                Welcome <br />
                <strong>{user.user?.fullName}</strong>
              </p>
              <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
                <strong>01:51</strong>
              </span>
            </div>

            <div className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6">
              <p className="text-5xl text-indigo-900">
                People <br />
                <strong>{user.user?.people.length}</strong>
              </p>
              <a
                href="/people"
                className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
              >
                <strong>See People</strong>
              </a>
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <ul className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
              <h1 className="font-bold text-[22px]">Manage Stocks</h1>
              <li>
                <div className="px-4 py-5 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {user.user?.stock?.item}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      {user.user?.stock?.quantity}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">
                      Status: <span className="text-green-600">Active</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
              <h1 className="font-bold text-[22px]">Manage People</h1>
              <li>
                <div className="px-4 py-5 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Item 1
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Description for Item 1
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">
                      Status: <span className="text-green-600">Active</span>
                    </p>
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Edit
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
              <h1 className="font-bold text-[22px]">Manage Objects</h1>
              <li>
                <div className="px-4 py-5 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Item 1
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Description for Item 1
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-500">
                      Status: <span className="text-green-600">Active</span>
                    </p>
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Edit
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
