import React, { useState } from "react";

interface EditAccountProps {
  onClose: () => void;
  onSave: (usr: any) => void;

  currentType: string;
  currentIndustry: string;
  currentLocation: string;
  currentNumber: string;
}

const EditAccount: React.FC<EditAccountProps> = ({
  onClose,
  onSave,
  currentType,
  currentIndustry,
  currentLocation,
  currentNumber,
}) => {
  const [busniessType, setBusniessType] = useState(currentType);
  const [busniessIndustry, setBusniessIndustry] = useState(currentIndustry);
  const [busniessLocation, setBusniessLocation] = useState(currentLocation);
  const [busniessNumber, setBusniessNumber] = useState(currentNumber);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      busniessType,
      busniessIndustry,
      busniessLocation,
      busniessNumber,
    });
    onClose();
  };

  const handleOnClose = () => {
    setBusniessType("");
    setBusniessIndustry("");
    setBusniessLocation("");
    setBusniessNumber("");
    onClose();
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white py-6 px-8 rounded-lg shadow-lg w-full max-w-[550px] h-3/4 overflow-y-auto flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold mb-4">
          Edit Account & Book Appointment
        </h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="businessType"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Business Type
            </label>
            <input
              type="text"
              name="businessType"
              value={busniessType}
              id="businessType"
              placeholder="e.g., Retail, Wholesale"
              onChange={(e) => setBusniessType(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="industry"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Industry
            </label>
            <input
              type="text"
              name="industry"
              id="industry"
              placeholder="e.g., Food, Clothing"
              value={busniessIndustry}
              onChange={(e) => setBusniessIndustry(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="location"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="e.g., Lagos, Nigeria"
              value={busniessLocation}
              onChange={(e) => setBusniessLocation(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="businessNumber"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Business Phone Number
            </label>
            <input
              type="text"
              name="businessNumber"
              id="businessNumber"
              placeholder="e.g., 08012345678"
              value={busniessNumber}
              onChange={(e) => setBusniessNumber(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
