"use client";

import { useSession } from "next-auth/react";
import { useUser } from "../Providers/UserProvider";
import { useEffect, useState } from "react";
import { ObjectsModal } from "../components/ObjectsModal";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import { User } from "next-auth";

const objectsPage = () => {
  const session = useSession();
  const user = useUser();
  const [showModal, setShowModal] = useState(false);

  const handleSaveObjectsItem = async (stockItem: {
    item: string;
    link: string;
    quantity: number;
    price: number;
    _id: string;
  }) => {
    user.setLoading(true);
    await saveObjectsItemFct(user.user || ({} as User), stockItem);
    await user.getUserData();
    user.setLoading(false);
  };

  useEffect(() => {
    let fct = async () => {
      if (session.status === "authenticated") {
        await user.getUserData(session.data?.user?.email || "");
      }
      console.log(session);
    };

    fct();
  }, [session.status]);

  // Remove the duplicate function declaration

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
            {/* <table className="w-full mt-4">
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
            </table> */}
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Name
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Link
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Quantity
                  </th>
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
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
        {showModal && (
          <ObjectsModal
            onClose={() => setShowModal(false)}
            onSave={handleSaveObjectsItem}
          />
        )}
      </div>
    </div>
  );
};

function TableRow({
  name,
  link,
  quantity,
  price,
}: {
  name: string;
  link: string;
  quantity: number;
  price: number;
}) {
  return (
    <tr>
      <td className="py-4 px-6 border-b border-gray-200">{name}</td>
      <td className="py-4 px-6 border-b border-gray-200 truncate">{link}</td>
      <td className="py-4 px-6 border-b border-gray-200">{quantity}</td>
      <td className="py-4 px-6 border-b border-gray-200">{price}</td>
    </tr>
  );
}
function saveObjectsItemFct(
  arg0: import("../types/types").User | User,
  ObjectsItem: {
    item: string;
    link: string;
    quantity: number;
    price: number;
    _id: string;
  }
) {
  throw new Error("Function not implemented.");
}
