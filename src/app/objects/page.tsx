"use client";

import { useUser } from "../Providers/UserProvider";
import { useState } from "react";
import { ObjectsModal } from "../components/ObjectsModal";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import saveObjectsItemFct from "../api/auth/dashboardFunctions/saveObjectsItems";
import { User } from "../types/types";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import updateObjectsFct from "../api/auth/dashboardFunctions/updateObjects";
import deleteObjectsFct from "../api/auth/dashboardFunctions/deleteObjects";

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
                  <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {user?.user?.objects?.map((item, index) => (
                  <ObjectRow
                    item={item.item}
                    quantity={item.quantity}
                    price={item.price}
                    location={item.location}
                    status={item.status}
                    index={index}
                    _id={item._id}
                  ></ObjectRow>
                ))}

                {user.user?.objects.length === 0 && (
                  <p>Nu ai nimic in stock (casi pls)</p>
                )}
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

function ObjectRow({
  item,
  quantity,
  price,
  location,
  status,
  index,
  _id,
}: {
  item: string;
  quantity: number;
  price: number;
  location: string;
  status: string;
  index: number;
  _id: string;
}) {
  const user = useUser();

  const [edit, setEdit] = useState(false);

  const [nameVal, setName] = useState(item);
  const [quantityVal, setQuantity] = useState(quantity);
  const [priceVal, setPrice] = useState(price);
  const [locationVal, setLocation] = useState(location);
  const [statusVal, setStatus] = useState(status);

  return (
    <tr key={index}>
      {!edit && (
        <>
          <td className="py-4 px-6 border-b border-gray-200">{item}</td>
          <td className="py-4 px-6 border-b border-gray-200">{quantity}</td>
          <td className="py-4 px-6 border-b border-gray-200">{price}</td>
          <td className="py-4 px-6 border-b border-gray-200">{location}</td>
          <td className="py-4 px-6 border-b border-gray-200">{status}</td>
        </>
      )}

      {edit && (
        <>
          <td className="py-4 px-6 border-b border-gray-200">
            <input
              type="text"
              value={nameVal}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            <input
              type="number"
              value={quantityVal}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Quantity"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            <input
              type="number"
              value={priceVal}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Price"
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            <input
              type="text"
              value={locationVal}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            <select
              name="status"
              id="status"
              value={statusVal}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            >
              <option value="Available">Available</option>
              <option value="Sold">Sold</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </td>
        </>
      )}

      <td className="py-4 px-6 border-b border-gray-200 flex">
        {!edit && (
          <>
            <FaEdit
              className=" cursor-pointer"
              height={60}
              onClick={() => {
                setEdit(true);
              }}
            />
            <MdDelete
              className=" cursor-pointer"
              height={60}
              onClick={async () => {
                await deleteObjectsFct(user.user || ({} as User), _id);
                await user.getUserData();
              }}
            />
          </>
        )}
        {edit && (
          <TiTick
            className=" cursor-pointer"
            height={60}
            onClick={async () => {
              setEdit(false);

              await updateObjectsFct(user.user || ({} as User), {
                item: nameVal,
                quantity: quantityVal,
                price: priceVal,
                location: locationVal,
                status: statusVal,
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
