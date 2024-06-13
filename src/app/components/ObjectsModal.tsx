import React, { useState } from "react";

interface ObjectsModalProps {
  onClose: () => void;
  onSave: (objectsItem: any) => void;
}

export const ObjectsModal: React.FC<ObjectsModalProps> = ({
  onClose,
  onSave,
}) => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      item,
      quantity: Number(quantity),
      price: Number(price),
      location: location,
      status: status,
      _id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    });
    onClose();
  };

  const handleOnClose = () => {
    setItem("");
    setQuantity(0);
    setPrice(0);
    setLocation("");
    setStatus("");
    onClose();
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white py-8 px-6 rounded-lg shadow-lg w-full max-w-[550px] h-3/4 overflow-y-auto flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold mb-6">Add Object</h2>
        <form onSubmit={handleSubmit} className="w-3/4">
          <div className="mb-6">
            <label htmlFor="item" className="block text-gray-700 mb-2">
              Item
            </label>
            <input
              type="text"
              name="item"
              id="item"
              placeholder="Item 1"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="price" className="block text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="status" className="block text-gray-700 mb-2">
              Status
            </label>
            <select
              name="status"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md"
            >
              <option value="Available">Available</option>
              <option value="Sold">Sold</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleOnClose}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ObjectsModal;
