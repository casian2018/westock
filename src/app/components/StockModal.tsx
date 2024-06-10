import React, { useState } from "react";

interface StockModalProps {
  onClose: () => void;
  onSave: (stockItem: any) => void;
}

const StockModal: React.FC<StockModalProps> = ({ onClose, onSave }) => {
  const [item, setItem] = useState("");
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

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
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 flex items-center justify-center flex-col">
        <h2 className="text-xl font-bold mb-4">Add Stock</h2>
        <form onSubmit={handleSubmit} className=" w-3/4">
          <div className="mb-4">
            <label className="block text-gray-700">Item</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Link</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Quantity</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
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

export default StockModal;
