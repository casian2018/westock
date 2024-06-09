export default function Test() {
  return (
    <div className="bg-gray-100 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-md border">
          <h1 className="text-2xl font-bold text-gray-800">Add Person</h1>
          <div className="mb-6">
            <div className="mt-4">
              <label htmlFor="fullName" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full rounded-lg border py-2 px-3"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border py-2 px-3"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="location" className="block text-gray-700">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full rounded-lg border py-2 px-3"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="state" className="block text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full rounded-lg border py-2 px-3"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-gray-700">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  className="w-full rounded-lg border py-2 px-3"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              Payment Information
            </h2>
            <div className="mt-4">
              <label htmlFor="card_number" className="block text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="card_number"
                className="w-full rounded-lg border py-2 px-3"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="exp_date" className="block text-gray-700">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="exp_date"
                  className="w-full rounded-lg border py-2 px-3"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full rounded-lg border py-2 px-3"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
