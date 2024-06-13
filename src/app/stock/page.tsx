"use client";

import { useUser } from "../Providers/UserProvider";
import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import StockModal from "../components/StockModal";
import saveStockItemFct from "../api/auth/dashboardFunctions/saveStockItem";
import { User } from "../types/types";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import updateStockItemFct from "../api/auth/dashboardFunctions/updateStock";
import deleteStockItemFct from "../api/auth/dashboardFunctions/deleteStock";

export default function Stock() {
  const user = useUser();
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          Add Stock
        </button>
      </div>
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
              Name
            </th>
            <th className="w-2/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
              Link
            </th>
            <th className="w-1/10 py-4 px-6 text-left text-gray-600 font-bold uppercase">
              Quantity
            </th>
            <th className="w-1/10 py-4 px-6 text-left text-gray-600 font-bold uppercase">
              Price
            </th>
            <th className="w-1/10 py-4 px-6 text-left text-gray-600 font-bold uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {user.user?.stock.map((stock, index) => (
            <TableRow
              key={index}
              _id={stock._id}
              name={stock.item}
              link={stock.link}
              quantity={stock.quantity}
              price={stock.price}
            />
          ))}
          {user.user?.stock.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="py-4 px-6 text-center text-gray-600 font-bold uppercase"
              >
                Nu ai adaugat nici un obiect in stock.
              </td>
            </tr>
          )}
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
}

function TableRow({
  _id,
  name,
  link,
  quantity,
  price,
}: {
  _id: string;
  name: string;
  link: string;
  quantity: number;
  price: number;
}) {
  const user = useUser();

  const [edit, setEdit] = useState(false);

  const [nameVal, setName] = useState(name);
  const [linkVal, setLink] = useState(link);
  const [quantityVal, setQuantity] = useState(quantity);
  const [priceVal, setPrice] = useState(price);

  return (
        <tr>
        {!edit ? (
          <>
            <td className="py-4 px-6 border-b border-gray-200">{name}</td>
            <td className="py-4 px-6 border-b border-gray-200 truncate">
              <a href={link} className="text-blue-400 underline">
                {link}
              </a>
            </td>
            <td className="py-4 px-6 border-b border-gray-200">{quantity}</td>
            <td className="py-4 px-6 border-b border-gray-200">{price}</td>
          </>
        ) : (
          <>
            <td className="py-4 px-6 border-b border-gray-200">
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={nameVal}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </td>
            <td className="py-4 px-6 border-b border-gray-200 truncate">
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={linkVal}
                placeholder="Link"
                onChange={(e) => setLink(e.target.value)}
                required
              />
            </td>
            <td className="py-4 px-6 border-b border-gray-200">
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={quantityVal}
                placeholder="Quantity"
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
              />
            </td>
            <td className="py-4 px-6 border-b border-gray-200">
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={priceVal}
                placeholder="Price"
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              />
            </td>
          </>
        )}
        <td className="py-4 px-6 border-b border-gray-200 flex items-center space-x-4">
          {!edit ? (
            <>
              <FaEdit
                className="cursor-pointer text-blue-500"
                size={20}
                onClick={() => setEdit(true)}
              />
              <MdDelete
                className="cursor-pointer text-red-500"
                size={20}
                onClick={async () => {
                  await deleteStockItemFct(user.user || ({} as User), _id);
                  await user.getUserData();
                }}
              />
            </>
          ) : (
            <TiTick
              className="cursor-pointer text-green-500"
              size={20}
              onClick={async () => {
                setEdit(false);
                await updateStockItemFct(user.user || ({} as User), {
                  item: nameVal,
                  link: linkVal,
                  quantity: quantityVal,
                  price: priceVal,
                  _id: _id,
                });
                await user.getUserData();
              }}
            />
          )}
        </td>
      </tr>
  );
}
