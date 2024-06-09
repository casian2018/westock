import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

const settingsPage = () => {
  return (
    <main>
      <DashboardHeader />
      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />
        <div className="w-10/12 mx-auto mt-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Edit Settings
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 mr-4"></div>
                <div>
                  <h2 className="text-lg font-bold">Profile Settings</h2>
                  <p className="text-gray-500">
                    Manage your profile information
                  </p>
                </div>
              </div>
              <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 mr-4"></div>
                <div>
                  <h2 className="text-lg font-bold">Payment Methods</h2>
                  <p className="text-gray-500">Manage your payment methods</p>
                </div>
              </div>
              <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 mr-4"></div>
                <div>
                  <h2 className="text-lg font-bold">Account Settings</h2>
                  <p className="text-gray-500">Manage your account</p>
                </div>
              </div>
              <div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                  Delete Account
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 mr-4"></div>
                <div>
                  <h2 className="text-lg font-bold">Other Settings</h2>
                  <p className="text-gray-500">
                    Additional settings for your account
                  </p>
                </div>
              </div>
              <div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg ml-2">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default settingsPage;
