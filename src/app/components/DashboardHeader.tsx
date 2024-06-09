export default function DashboardHeader() {
  return (
    <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
      <div className="flex items-center justify-between py-2 text-5x1">
        <a href="/dashboard" className="cursor-pointer">
          <div className="font-bold text-blue-900 text-xl">
            We<span className="text-orange-600">Stock</span>
          </div>
        </a>
        <div className="flex items-center text-gray-500">
          <input className="material-icons-outlined p-2" placeholder="Search" />
          <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2"></div>
        </div>
      </div>
    </div>
  );
}
