"use client";

import { useUser } from "../Providers/UserProvider";
import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import StockModal from "../components/StockModal";
import saveStockItemFct from "../api/auth/dashboardFunctions/saveStockItem";
import { User } from "../types/types";

const Stock = () => {
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleSaveStockItem = async (stockItem: {
    item: string;
    link: string;
    quantity: number;
    price: number;
    _id: string;
  }) => {
    user.setLoading(true);
    await saveStockItemFct(user.user || ({} as User), stockItem);
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
              <h1 className="text-xl font-bold">Stock</h1>
              <button
                className="bg-blue-500 text-white rounded-lg px-4 py-2"
                onClick={() => setShowModal(true)}
              >
                Add Stock
              </button>
            </div>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left">Name</th>
                  <th className="text-left">Link</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Price</th>
                </tr>
              </thead>
              <tbody>
                {user?.user?.stock?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.item}</td>
                    <td>{item.link}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showModal && (
        <StockModal
          onClose={() => setShowModal(false)}
          onSave={handleSaveStockItem}
        />
      )}
    </div>
  );
};

export default Stock;
