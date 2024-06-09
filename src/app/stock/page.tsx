"use client";

import { useSession } from "next-auth/react";
import { useUser } from "../Providers/UserProvider";
import { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import axios from "axios";

const Stock = () => {
  const session = useSession();
  const [userData, setUserData] = useState<{ stock?: any[] } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (session.status === "authenticated") {
        const email = session.data?.user?.email || "";
        try {
          const response = await axios.get(`/api/user`, {
            params: { email },
          });
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      }
    };

    fetchData();
  }, [session.status]);

  return (
    <div className="min-h-screen">
      <DashboardHeader />

      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />

        <div className="w-10/12">
          <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Stock</h1>
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                Add Stock
              </button>
            </div>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left">Name</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userData?.stock?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.item}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white rounded-lg px-4 py-2 ml-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
