import React, { useState } from "react";

interface StockModalProps {
  onClose: () => void;
  onSave: (stockItem: any) => void;
}

const PeopleModal: React.FC<StockModalProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [fct, setFct] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      name,
      email,
      location,
      function: fct,
      _id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    });
    onClose();
  };

  const handleOnClose = () => {
    setName("");
    setEmail("");
    setLocation("");
    setFct("");
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 flex items-center justify-center flex-col">
        <h2 className="text-xl font-bold mb-4">Add person</h2>
        <form onSubmit={handleSubmit} className=" w-3/4">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Eamil</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Function</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={fct}
              onChange={(e) => setFct(e.target.value)}
              required
            />
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

export default PeopleModal;
