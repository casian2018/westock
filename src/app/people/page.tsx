"use client";

import { useUser } from "../Providers/UserProvider";
import { useState } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import PeopleModal from "../components/PeopleModal";
import savePeople from "../api/auth/dashboardFunctions/savePeople";
import { User } from "../types/types";

export default function PeoplePage() {
  const [showModal, setShowModal] = useState(false);

  const user = useUser();

  const handleSavePeople = async (person: {
    name: string;
    email: string;
    location: string;
    function: string;
    _id: string;
  }) => {
    user.setLoading(true);
    await savePeople(user.user || ({} as User), person);
    await user.getUserData();
    user.setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <DashboardHeader />

      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />

        <div className="w-10/12">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold text-lg">People List</div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowModal(true)}
            >
              Add Person
            </button>
          </div>

          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Name
                </th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Email
                </th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Location
                </th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Function
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {user.user?.people.map((pers) => (
                <TableRow
                  name={pers.name}
                  email={pers.email}
                  location={pers.location}
                  fct={pers.function}
                ></TableRow>
              ))}

              {user.user?.people.length === 0 && (
                <p>Nu ai nimic in stock (casi pls)</p>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <PeopleModal
          onSave={handleSavePeople}
          onClose={() => setShowModal(false)}
        ></PeopleModal>
      )}
    </div>
  );
}

function TableRow({
  name,
  email,
  location,
  fct,
}: {
  name: string;
  email: string;
  location: string;
  fct: string;
}) {
  return (
    <tr>
      <td className="py-4 px-6 border-b border-gray-200">{name}</td>
      <td className="py-4 px-6 border-b border-gray-200 truncate">{email}</td>
      <td className="py-4 px-6 border-b border-gray-200">{location}</td>
      <td className="py-4 px-6 border-b border-gray-200">{fct}</td>
    </tr>
  );
}
