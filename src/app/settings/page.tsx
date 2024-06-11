import router from "next/dist/client/router";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import {
  FaUser,
  FaCreditCard,
  FaCog,
  FaTrashAlt,
  FaEdit,
} from "react-icons/fa";
import OtherSettings from "../components/OtherSettings";

const settingsPage = () => {
  
  return (
    <main>
      <DashboardHeader />
      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />
        <div className="w-10/12 mx-auto mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaUser className="h-12 w-12 text-blue-500 mr-4" />
                <div>
                  <h2 className="text-lg font-bold">Profile Settings</h2>
                  <p className="text-gray-500">
                    Manage your profile information
                  </p>
                </div>
              </div>
              <div>
                <a
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
                  href="/profile"
                >
                  <FaEdit className="mr-2" /> Profile
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaCreditCard className="h-12 w-12 text-green-500 mr-4" />
                <div>
                  <h2 className="text-lg font-bold">Payment Methods</h2>
                  <p className="text-gray-500">Manage your payment methods</p>
                </div>
              </div>
              <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                  <FaEdit className="mr-2" /> Edit
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaCog className="h-12 w-12 text-purple-500 mr-4" />
                <div>
                  <h2 className="text-lg font-bold">Other Settings</h2>
                  <p className="text-gray-500">
                    Additional settings for your account
                  </p>
                </div>
              </div>
              <div className="flex items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
                  <FaEdit className="mr-2" /> View
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaCog className="h-12 w-12 text-yellow-500 mr-4" />
                <div>
                  <h2 className="text-lg font-bold">Account Settings</h2>
                  <p className="text-gray-500">Manage your account</p>
                </div>
              </div>
              <div>
                <a className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center" href="/delete">
                  <FaTrashAlt className="mr-2" /> Delete Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OtherSettings />
    </main>
  );
};
export default settingsPage;
