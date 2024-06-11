"use client";

import { useUser } from "../Providers/UserProvider";
import { useState } from "react";
import { ObjectsModal } from "../components/ObjectsModal";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import saveObjectsItemFct from "../api/auth/dashboardFunctions/saveObjectsItems";
import { User } from "../types/types";

export default function ObjectsPage() {
  const user = useUser();
  const [showModal, setShowModal] = useState(false);

  const handleSaveObjectsItem = async (objectsItem: {
    item: string;
    location: string;
    quantity: number;
    price: number;
    status: string;
    _id: string;
  }) => {
    user.setLoading(true);
    await saveObjectsItemFct(user.user || ({} as User), objectsItem);
    await user.getUserData();
    user.setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader />

      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />

        <div className="w-10/12">
          <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Objects</h1>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowModal(true)}
              >
                Add Objects
              </button>
            </div>
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Name
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Quantity
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Price
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Location
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {user?.user?.objects?.map((item, index) => (
                  <tr key={index}>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item.item}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item.quantity}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item.price}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item.location}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-200">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {showModal && (
          <ObjectsModal
            onClose={() => setShowModal(false)}
            onSave={handleSaveObjectsItem}
          />
        )}
      </div>
    </div>
  );
}
