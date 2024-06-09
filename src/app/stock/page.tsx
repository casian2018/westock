import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

const stock = () => {
  return (
    <div className="bg-orange-100 min-h-screen">
      <DashboardHeader />

      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />

        <div className="w-10/12">
          <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Stock</h1>
              <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                Add Stock
              </button>
            </div>
            <table className="w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left">Name</th>
                  <th className="text-left">Quantity</th>
                  <th className="text-left">Price</th>
                  <th className="text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>10</td>
                  <td>100</td>
                  <td>
                    <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white rounded-lg px-4 py-2 ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>20</td>
                  <td>200</td>
                  <td>
                    <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white rounded-lg px-4 py-2 ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td>30</td>
                  <td>300</td>
                  <td>
                    <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white rounded-lg px-4 py-2 ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stock;
