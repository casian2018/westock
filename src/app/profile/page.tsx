"use client";

import { useSession } from "next-auth/react";
import { useUser } from "../Providers/UserProvider";
import { useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

export default function Profile() {
  const session = useSession();
  const user = useUser();

  useEffect(() => {
    let fct = async () => {
      if (session.status === "authenticated") {
        await user.getUserData(session.data?.user?.email || "");
      }
      console.log(session);
    };

    fct();
  }, [session.status]);

  return (
    <main>
      <DashboardHeader />

      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />

        <div className="w-10/12">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Edit Profile
            </button>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Profile Information
            </h2>
            <div className="flex items-center gap-6 p-6 bg-white shadow-lg rounded-lg">
              <div className="flex-shrink-0">
                <img
                  src="$IMAGE_URL$"
                  alt="Account Image"
                  className="w-24 h-24 rounded-full border-2 border-gray-200"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-gray-700">Full Name</h3>
                <p className="text-gray-900">{user.fullName}</p>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-gray-700">
                  Business Name
                </h3>
                <p className="text-gray-900">$BUSINESS_NAME$</p>
              </div>
            </div>

            <div className="mt-6 p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Business Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="businessType"
                  >
                    Business Type
                  </label>
                  <input
                    type="text"
                    id="businessType"
                    name="businessType"
                    placeholder="e.g., Retail, Wholesale"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="industry"
                  >
                    Industry
                  </label>
                  <input
                    type="text"
                    id="industry"
                    name="industry"
                    placeholder="e.g., Electronics, Clothing"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="e.g., New York, NY"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="contactNumber"
                  >
                    Contact Number
                  </label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="e.g., (123) 456-7890"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};
