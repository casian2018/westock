import React, { useState } from "react";
import { useUser } from "../Providers/UserProvider";
import saveLowHighNumberFct from "../api/auth/dashboardFunctions/saveLowHighNumber";
import { User } from "../types/types";

interface OtherSettingsProps {
  onClose: () => void;
}

const OtherSettings: React.FC<OtherSettingsProps> = ({ onClose }) => {
  const user = useUser();

  const [autoPayment, setAutoPayment] = useState(user.user?.autoPayment);

  const [lowNumber, setLowNumber] = useState(user.user?.lowNumber || 0);
  const [highNumber, setHighNumber] = useState(user.user?.highNumber || 0);

  const handleClose = () => {
    onClose();
  };

  const handleSaveLowHighNumber = async () => {
    await saveLowHighNumberFct(
      user.user || ({} as User),
      lowNumber,
      highNumber
    );
    await user.getUserData();
  };

  return (
    <div className="flex items-center justify-center p-12 absolute top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-75 z-50">
      <div className="mx-auto w-full max-w-[550px] bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Activate / Cancel Auto Payment
          </h2>

          {autoPayment ? (
            <button
              className="hover:shadow-form w-full rounded-md bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              onClick={() => setAutoPayment(false)}
            >
              Cancel Auto Payment
            </button>
          ) : (
            <button
              className="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
              onClick={() => setAutoPayment(true)}
            >
              Activate Auto Payment
            </button>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Theme</h2>
          <select
            name="themes"
            id=""
            className="w-full py-4 px-2 border-2 rounded-lg"
          >
            {user.user?.theme === "light" ? (
              <option value="light" selected>
                Light
              </option>
            ) : (
              <option value="light">Light</option>
            )}
            {user.user?.theme === "dark" ? (
              <option value="dark" selected>
                Dark
              </option>
            ) : (
              <option value="dark">Dark</option>
            )}
            {user.user?.theme === "system" ? (
              <option value="system" selected>
                System
              </option>
            ) : (
              <option value="system">System</option>
            )}
          </select>
          <p className="text-gray-500">Adjust your theme settings.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Number Range
          </h2>
          <div className="flex">
            <input
              type="number"
              className="w-1/2 py-4 px-2 border-2 rounded-lg mr-2"
              placeholder="Low Number"
              onChange={(e) => setLowNumber(parseInt(e.target.value))}
            />
            <input
              type="number"
              className="w-1/2 py-4 px-2 border-2 rounded-lg"
              placeholder="High Number"
              onChange={(e) => setHighNumber(parseInt(e.target.value))}
            />
            <button
            onClick={handleSaveLowHighNumber}
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
          >
            Save
          </button>
          </div>
          <p className="text-gray-500">Enter the low and high numbers.</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Who Has Access
          </h2>
          <a className="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none" href="/manage">
            Manage Access
          </a>
          <p className="text-gray-500">
            Manage who has access to your account.
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-500 text-white rounded-lg px-4 py-2 mr-2"
            onClick={() => handleClose()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherSettings;
