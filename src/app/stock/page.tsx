"use client";

import { useSession } from "next-auth/react";
import { useUser } from "../Providers/UserProvider";
import { useEffect, useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import StockModal from "../components/StockModal";
import axios from "axios";

const Stock = () => {
  const session = useSession();
  const { user, getUserData } = useUser();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (session.status === "authenticated") {
        const email = session.data?.user?.email || "";
        await getUserData(email);
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, [session.status]);

  const handleSaveStockItem = async (stockItem: any) => {
    if (session.status === "authenticated") {
      const email = session.data?.user?.email || "";
      try {
        await axios.post('/api/user/stock', {
          email,
          stockItem
        });
        await getUserData(email); // Refresh user data
      } catch (error) {
        console.error('Error saving stock item', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading state until data is fetched
  }

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
                {user?.stock?.map((item, index) => (
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
