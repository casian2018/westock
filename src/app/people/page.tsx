"use client";

import { useSession } from "next-auth/react";
import { useUser } from "../Providers/UserProvider";
import { useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

const peoplePage = () => {
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

        <div className="mt-4 w-10/12">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold text-lg">People List</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
                  Phone
                </th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {user.user?.people.map((pers) => (
                <TableRow
                  name={pers.name}
                  email={pers.email}
                  location={pers.location}
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function TableRow({
  name,
  email,
  location,
}: {
  name: string;
  email: string;
  location: string;
}) {
  return (
    <tr>
      <td className="py-4 px-6 border-b border-gray-200">{name}</td>
      <td className="py-4 px-6 border-b border-gray-200 truncate">{email}</td>
      <td className="py-4 px-6 border-b border-gray-200">{location}</td>
      <td className="py-4 px-6 border-b border-gray-200">
        <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
          Inactive
        </span>
      </td>
    </tr>
  );
}
