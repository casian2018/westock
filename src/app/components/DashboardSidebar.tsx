export default function DashboardSidebar() {
  return (
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
  );
}
