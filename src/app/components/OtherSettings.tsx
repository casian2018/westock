import React from "react";
import { useUser } from "../Providers/UserProvider";

interface OtherSettingsProps {
  onClose: () => void;
}

const OtherSettings: React.FC<OtherSettingsProps> = ({ onClose }) => {
  const user = useUser();

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="flex items-center justify-center p-12 absolute top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-75 z-50">
      <div className="mx-auto w-full max-w-[550px] bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Activate / Cancel Auto Payment
          </h2>

          {user.user?.autoPayment ? (
            <button className="hover:shadow-form w-full rounded-md bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Cancel Auto Payment
            </button>
          ) : (
            <button className="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
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
            Who Has Access
          </h2>
          <button className="hover:shadow-form w-full rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Manage Access
          </button>
          <table className="w-full border-2 my-4">
            <thead>
              <tr className="bg-gray-50">
                <th className="border-2">Name</th>
                <th className="border-2">Email</th>
                <th className="border-2">Access</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border-2">John Doe</td>
                <td className="border-2">
                  <a href="mailto:info@ctp.one" className="text-blue-500">
                    <span>info@ctp.one</span>
                  </a>
                </td>
                <td className="border-2">Admin</td>
              </tr>
            </tbody>
          </table>
          <p className="text-gray-500">
            Manage who has access to your account.
          </p>
        </div>

        <div>
          <button className="w-12 bg-slate-500 text-white">Save</button>
          <button
            className="w-12 bg-slate-500 text-white"
            onClick={() => handleClose()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherSettings;
