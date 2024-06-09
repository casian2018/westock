import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

const peoplePage = () => {
  return (
    <div className="bg-orange-100 min-h-screen">
      <DashboardHeader />

      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />

        <div className="mt-4 w-10/12">
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold text-lg">People List</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Person
            </button>
          </div>

          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-100">
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Name
                </th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Email
                </th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Phone
                </th>
                <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">
                  johndoe@gmail.com
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  555-555-5555
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-green-500 text-white py-1 px-2 rounded-full text-xs">
                    Active
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">
                  janedoe@gmail.com
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  555-555-5555
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
                    Inactive
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">
                  janedoe@gmail.com
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  555-555-5555
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
                    Inactive
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                <td className="py-4 px-6 border-b border-gray-200 truncate">
                  janedoe@gmail.com
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  555-555-5555
                </td>
                <td className="py-4 px-6 border-b border-gray-200">
                  <span className="bg-red-500 text-white py-1 px-2 rounded-full text-xs">
                    Inactive
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default peoplePage;
