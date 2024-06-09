const objectsPage = () => {
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
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                Profile
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                Settings
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                Log out
              </a>
            </div>
          </div>

            <div className="w-10/12">
                <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-800">Objects</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Add Object
                </button>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 mt-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 mr-4"></div>
                    <div>
                        <h2 className="text-lg font-bold">Object Name</h2>
                        <p className="text-gray-500">Object Description</p>
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
      </div>
    );
  }
  
  export default objectsPage;