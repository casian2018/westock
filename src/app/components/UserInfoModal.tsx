import React, { use, useState } from "react";
import { useUser } from "../Providers/UserProvider";

interface StockModalProps {
  onClose: () => void;
  onSave: (stockItem: any) => void;
}

const UserInfoModal: React.FC<StockModalProps> = ({ onClose, onSave }) => {
  const user = useUser();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [permissions, setPermissions] = useState("admin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year} ${month} ${day}`;

    onSave({
      name,
      email,
      password,
      permissions,
      dateCreated: formattedDate,
      manager: user.user?._id,
    });
    onClose();
  };

  const handleOnClose = () => {
    setName("");
    setEmail("");
    setPassword("");
    setDate("");
    setPermissions("");
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-[550px] h-3/4 overflow-y-auto flex items-center justify-center flex-col">
        <h2 className="text-4xl font-bold mb-8">Add User</h2>
        <form onSubmit={handleSubmit} className="w-3/4">
          <div className="mb-8">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="location" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="location"
              id="location"
              placeholder="Location"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="fct" className="block text-gray-700">
              Permissions
            </label>
            <select
              value={permissions}
              onChange={(e) => setPermissions(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            >
              <option value="admin">Admin</option>
              <option value="stockManager">Stock Manager</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white rounded-lg px-4 py-2 mr-2"
              onClick={() => handleOnClose()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfoModal;
