"use client";

import { useUser } from "../Providers/UserProvider";
import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";

export default function dashboard() {
  const user = useUser();

  return (
    <div className="min-h-screen">
      <DashboardHeader />

      <div className="flex flex-row pt-24 px-10 pb-4">
        <DashboardSidebar />

        <div className="w-10/12">
          <div className="flex flex-row">
            <div className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6">
              <p className="text-5xl text-indigo-900">
                Welcome <br />
                <strong>{user.user?.fullName}</strong>
              </p>
              <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
                <strong>01:51</strong>
              </span>
            </div>

            <div className="bg-no-repeat bg-orange-200 border border-orange-300 rounded-xl w-5/12 ml-2 p-6">
              <p className="text-5xl text-indigo-900">
                People <br />
                <strong>{user.user?.people.length}</strong>
              </p>
              <a
                href="/people"
                className="bg-orange-300 text-xl text-white underline hover:no-underline inline-block rounded-full mt-12 px-8 py-2"
              >
                <strong>See People</strong>
              </a>
            </div>
          </div>
          <div className="flex flex-row mt-6">
            <ul className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
              <h1 className="font-bold text-[22px]">Manage Stocks</h1>
              <li>
                {user.user?.stock.map(
                  (item, index) =>
                    index < 3 && (
                      <StockItem
                        key={index}
                        name={item.item}
                        qty={item.quantity}
                      />
                    )
                )}

                {user.user?.stock.length == 0 && (
                  <div className="px-4 py-5 sm:px-6">
                    <p className="py-4 text-left text-gray-600 font-bold uppercase">Nu ai nici un item in stock.</p>
                    
                  </div>
                )}
              </li>
            </ul>
            <ul className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12">
              <h1 className="font-bold text-[22px]">Manage People</h1>
              <li>
                {user.user?.people.map(
                  (item, index) =>
                    index < 3 && (
                      <PeopleItem
                        key={index}
                        name={item.name}
                        email={item.email}
                        fct={item.function}
                      />
                    )
                )}

                {user.user?.people.length == 0 && (
                  <div className="px-4 py-5 sm:px-6">
                    <p className="py-4 text-left text-gray-600 font-bold uppercase">
                      Nu ai nici un persoana in lista de angajati.
                    </p>
                  </div>
                )}
              </li>
            </ul>
            <ul className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12">
              <h1 className="font-bold text-[22px]">Manage Objects</h1>
              <li>
                {user.user?.objects.map(
                  (item, index) =>
                    index < 3 && (
                      <ObjectItem
                        key={index}
                        name={item.item}
                        quantity={item.quantity}
                        status={item.status}
                      />
                    )
                )}

                {user.user?.objects.length == 0 && (
                  <div className="px-4 py-5 sm:px-6">
                    <p className="py-4 text-left text-gray-600 font-bold uppercase">Nu ai nici un obiect in objects.</p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StockItem({ name, qty }: { name: string; qty: number }) {
  return (
    <div className="px-4 py-5 sm:px-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{name}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {qty} {qty == 1 ? "piece" : "pieces"}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">
          Status: <span className="text-green-600">Active</span>
        </p>
      </div>
    </div>
  );
}

function PeopleItem({
  name,
  email,
  fct,
}: {
  name: string;
  email: string;
  fct: string;
}) {
  return (
    <div className="px-4 py-5 sm:px-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{name}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{email}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{fct}</p>
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Edit
        </a>
      </div>
    </div>
  );
}

function ObjectItem({
  name,
  quantity,
  status,
}: {
  name: string;
  quantity: number;
  status: string;
}) {
  return (
    <div className="px-4 py-5 sm:px-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{name}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {quantity} {quantity == 1 ? "piece" : "pieces"}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">
          Status: <span className="text-green-600">{status}</span>
        </p>
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Edit
        </a>
      </div>
    </div>
  );
}
