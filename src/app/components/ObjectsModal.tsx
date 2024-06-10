import React, { useState } from "react";

interface ObjectsModalProps {
  onClose: () => void;
  onSave: (objectItem: any) => void;
}

export const ObjectsModal: React.FC<ObjectsModalProps> = ({ onClose, onSave }) => {
  const [item, setItem] = useState("");
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      item,
      link,
      quantity: Number(quantity),
      price: Number(price),
      _id: Date.now().toString(36) + Math.random().toString(36).substr(2),
    });
    onClose();
  };

  const handleOnClose = () => {
    setItem("");
    setLink("");
    setQuantity(0);
    setPrice(0);
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white py-2 rounded-lg shadow-lg w-1/3 h-2/3 flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold mb-4">Add Object</h2>
        <form onSubmit={handleSubmit} className=" w-3/4">
          <div className="mb-8">
            <label className="block text-gray-700">Item</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={item}
              placeholder="Item 1"
              onChange={(e) => setItem(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700">Link</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={link}
              placeholder="https://example.com/item1"
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                required
                />
            </div>
            <div className="mb-8">
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
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
            }
            export default ObjectsModal;