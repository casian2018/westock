const peoplePage = () => {
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

        <div className="mt-4 w-10/12">
            <div className="flex items-center justify-between mb-4">
                <div className="font-bold text-lg">People List</div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Person
                </button>
            </div>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Function</th>
                        <th className="py-2 px-4 border-b">Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4 border-b">John Doe</td>
                        <td className="py-2 px-4 border-b">a@email.com</td>
                        <td className="py-2 px-4 border-b">Developer</td>
                        <td className="py-2 px-4 border-b">New York</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Jane Smith</td>
                        <td className="py-2 px-4 border-b">a@email.com</td>
                        <td className="py-2 px-4 border-b">Designer</td>
                        <td className="py-2 px-4 border-b">San Francisco</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">Mike Johnson</td>
                        <td className="py-2 px-4 border-b">a@email.com</td>
                        <td className="py-2 px-4 border-b">Manager</td>
                        <td className="py-2 px-4 border-b">London</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
    </div>
  );
}

export default peoplePage;