"use client";
import React, { useState, useEffect } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";

const UserRow = ({ user, onEdit, onDelete }: { user: { id: number; login: string; name: string; email: string; creationDate: string; }; onEdit: (id: number, updatedUser: any) => void; onDelete: (id: number) => void; }) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [login, setLogin] = useState(user.login);

  return (
    <tr>
      {!edit ? (
        <>
          <td className="py-4 px-6 border-b border-gray-200">{user.login}</td>
          <td className="py-4 px-6 border-b border-gray-200">{user.name}</td>
          <td className="py-4 px-6 border-b border-gray-200">{user.email}</td>
          <td className="py-4 px-6 border-b border-gray-200">{user.creationDate}</td>
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
            <button
              className="text-blue-500"
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
            <button
              className="text-red-500"
              onClick={() => onDelete(user.id)}
            >
              Delete
            </button>
          </>
        ) : (
          <button
            className="text-green-500"
            onClick={() => {
              onEdit(user.id, { login, name, email });
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
  const [users, setUsers] = useState<{ id: number; login: string; name: string; email: string; creationDate: string; }[]>([]);

  useEffect(() => {
    // Fetch users from the API or database
    setUsers([
      { id: 1, login: 'johndoe', name: 'John Doe', email: 'john@example.com', creationDate: '2023-01-01' },
      { id: 2, login: 'janedoe', name: 'Jane Doe', email: 'jane@example.com', creationDate: '2023-02-01' },
    ]);
  }, []);

  const handleEdit = (id: number, updatedUser: any) => {
    setUsers(users.map(user => (user.id === id ? { ...user, ...updatedUser } : user)));
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <><DashboardHeader /><div className="flex flex-row pt-24 px-10 pb-4">
          <DashboardSidebar />

          <div className="w-10/12">
              <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                  <div className="flex justify-between items-center mb-6">
                      <h1 className="text-xl font-bold">Manage Users</h1>
                      <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => console.log("Add User")}
                      >
                          Add User
                      </button>
                  </div>
                  <table className="w-full table-fixed">
                      <thead>
                          <tr className="bg-gray-100">
                              <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                  Login
                              </th>
                              <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                  Name
                              </th>
                              <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                  Email
                              </th>
                              <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                  Date Created
                              </th>
                              <th className="w-1/5 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                                  Actions
                              </th>
                          </tr>
                      </thead>
                      <tbody className="bg-white">
                          {users.map(user => (
                              <UserRow
                                  key={user.id}
                                  user={user}
                                  onEdit={handleEdit}
                                  onDelete={handleDelete} />
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
                          )}
                      </tbody>
                  </table>
              </div>
          </div>
      </div></>
  );
};

export default ManageUsers;
