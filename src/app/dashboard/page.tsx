"use client";

import { useSession } from "next-auth/react";

export default function dashboard() {
  const session = useSession();

  return (
    <div className="bg-orange-100 min-h-screen">
      <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
        <div className="flex items-center justify-between py-2 text-5x1">
          <div className="font-bold text-blue-900 text-xl">
            We<span className="text-orange-600">Stock</span>
          </div>
          <div className="flex items-center text-gray-500">
            <input
              className="material-icons-outlined p-2"
              placeholder="Search"
            />
            <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row pt-24 px-10 pb-4">
        <div className="w-2/12 mr-6">
          <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <a
              href="/stock"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              Stock
            </a>
            <a
              href="/people"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              People
            </a>
            <a
              href="/objects"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              Objects
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <a
              href="/profile"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              Profile
            </a>
            <a
              href="/settings"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              Settings
            </a>
            <a
              href="/logout"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              Log out
            </a>
          </div>
        </div>

        <div className="w-10/12">
          <div className="flex flex-row">
            <div className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6">
              <p className="text-5xl text-indigo-900">
                Welcome <br />
                <strong>{session.data?.user?.email}</strong>
              </p>
              <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
                <strong>01:51</strong>
              </span>
            </div>

            <div className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6">
              <p className="text-5xl text-indigo-900">
                People <br />
                <strong>23</strong>
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
