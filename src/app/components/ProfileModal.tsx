import React, { useState } from "react";

interface EditAccountProps {
  onClose: () => void;
  onSave: (accountInfo: { name: string; email: string }) => void;
}

const EditAccount: React.FC<EditAccountProps> = ({ onClose, onSave }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [busniessType, setBusniessType] = useState("");
    const [busniessIndustry, setBusniessIndustry] = useState("");
    const [busniessLocation, setBusniessLocation] = useState("");
    const [busniessNumber, setBusniessNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, email, busniessType, busniessIndustry, busniessLocation, busniessNumber});
    onClose();
  };

  const handleOnClose = () => {
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white py-2 rounded-lg shadow-lg w-1/3 h-2/3 flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold mb-4">Edit Account</h2>
        <form onSubmit={handleSubmit} className="w-3/4">
          <div className="mb-8">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={email}
              placeholder="email@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
            <div className="mb-8">
                <label className="block text-gray-700">Business Type</label>
                <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={busniessType}
                placeholder="e.g., Retail, Wholesale"
                onChange={(e) => setBusniessType(e.target.value)}
                required
                />
            </div>
            <div className="mb-8">
                <label className="block text-gray-700">Industry</label>
                <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={busniessIndustry}
                placeholder="e.g., Food, Clothing"
                onChange={(e) => setBusniessIndustry(e.target.value)}
                required
                />
            </div>
            <div className="mb-8">
                <label className="block text-gray-700">Location</label>
                <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={busniessLocation}
                placeholder="e.g., Lagos, Nigeria"
                onChange={(e) => setBusniessLocation(e.target.value)}
                required
                />
            </div>
            <div className="mb-8">
                <label className="block text-gray-700">Phone Number</label>
                <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={busniessNumber}
                placeholder="e.g., 08012345678"
                onChange={(e) => setBusniessNumber(e.target.value)}
                required
                />
            </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white rounded-lg px-4 py-2 mr-2"
              onClick={handleOnClose}
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

export default EditAccount;
