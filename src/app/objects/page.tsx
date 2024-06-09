"use client";

import { useSession } from "next-auth/react";
import { useUser } from "../Providers/UserProvider";
import { useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

const objectsPage = () => {
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
    <div className="min-h-screen">
      <DashboardHeader />

      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />

        <div className="w-10/12">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Objects</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Add Object
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 mr-4"></div>
                <div>
                  <h2 className="text-lg font-bold">Object Name</h2>
                  <p className="text-gray-500">Object Description</p>
                </div>
              </div>
              <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default objectsPage;
