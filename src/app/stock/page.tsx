const stock = () => {
  return (
    <div className="bg-orange-100 min-h-screen">
      <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
        <div className="flex items-center justify-between py-2 text-5x1">
          <div className="font-bold text-blue-900 text-xl">
            We<span className="text-orange-600">Stock</span>
          </div>
          <div className="flex items-center text-gray-500">
            <input
              className="material-icons-outlined p-2"
              placeholder="Search"
            />
            <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row pt-24 px-10 pb-4">
        <div className="w-2/12 mr-6">
          <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <a
              href="/stock"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              Stock
            </a>
            <a
              href="/people"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              People
            </a>
            <a
              href="/objects"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              Objects
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
            <a
              href="/profile"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              Profile
            </a>
            <a
              href="/settings"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              Settings
            </a>
            <a
              href="/logout"
              className="inline-block text-gray-600 hover:text-black my-4 w-full"
            >
              Log out
            </a>
          </div>
        </div>

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