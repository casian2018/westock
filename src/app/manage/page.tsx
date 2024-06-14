"use client";
import React, { useState, useEffect } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";
import { useUser } from "../Providers/UserProvider";
import UserInfoModal from "../components/UserInfoModal";
import saveInvitedUser from "../api/auth/dashboardFunctions/saveInvitedUser";

const UserRow = ({
  userInfo,
}: {
  userInfo: {
    _id: string;
    password: string;
    name: string;
    email: string;
    dateCreated: string;
    permissions: string;
    manager: string;
  };
}) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [login, setLogin] = useState(userInfo.password);

  return (
    <tr>
      {!edit ? (
        <>
          <td className="py-4 px-6 border-b border-gray-200">
            {userInfo.name}
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            {userInfo.email}
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            {userInfo.password}
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            {userInfo.dateCreated}
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            {userInfo.permissions}
          </td>
        </>
      ) : (
        <>
          <td className="py-4 px-6 border-b border-gray-200">
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={login}
              placeholder="Login"
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </td>
          <td className="py-4 px-6 border-b border-gray-200">
            {user.creationDate}
          </td>
        </>
      )}
      <td className="py-4 px-6 border-b border-gray-200 flex items-center space-x-4">
        {!edit ? (
          <>
            <button className="text-blue-500" onClick={() => setEdit(true)}>
              Edit
            </button>
            <button className="text-red-500" onClick={() => onDelete(user.id)}>
              Delete
            </button>
          </>
        ) : (
          <button
            className="text-green-500"
            onClick={() => {
              // onEdit(user.id, { login, name, email });
              setEdit(false);
            }}
          >
            Save
          </button>
        )}
      </td>
    </tr>
  );
};

const ManageUsers = () => {
  const user = useUser();

  const [showModal, setShowModal] = useState(false);

  const onSave = async (userInfo: {
    name: string;
    email: string;
    password: string;
    permissions: string;
    dateCreated: string;
    manager: string;
  }) => {
    await saveInvitedUser(userInfo);
  };

  return (
    <>
      <DashboardHeader />
      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />

        <div className="w-10/12">
          <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold">Manage Users</h1>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowModal(true)}
              >
                Add User
              </button>
            </div>
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gray-100">
                  <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Name
                  </th>
                  <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Email
                  </th>
                  <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Password
                  </th>
                  <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Date Created
                  </th>
                  <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Permissions
                  </th>
                  <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {/* {users.map((user) => (
                  <UserRow key={user.id} userInfo={user} />
                ))}
                {users.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-4 px-6 text-center text-gray-600 font-bold uppercase"
                    >
                      No users found.
                    </td>
                  </tr>
                )} */}

                {user.invitedUsers.map((user) => (
                  <UserRow key={user.email} userInfo={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {showModal && (
          <UserInfoModal
            onClose={() => setShowModal(false)}
            onSave={onSave}
          ></UserInfoModal>
        )}
      </div>
    </>
  );
};

export default ManageUsers;
