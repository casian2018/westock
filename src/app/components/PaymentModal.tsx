import React, { useState } from "react";
import { COUNTRIES_LIST, verifyCardData } from "../constants/countries";
import savePaymentInfo from "../api/auth/dashboardFunctions/savePaymentInfo";
import { useUser } from "../Providers/UserProvider";
import { User } from "../types/types";

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  const user = useUser();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState<{
    month: number | undefined;
    year: number | undefined;
  }>({ month: undefined, year: undefined });
  const [cvv, setCvv] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");

  const handleCLose = () => {
    setCardNumber("");
    setExpiryDate({ month: undefined, year: undefined });
    setCvv("");
    setFirstname("");
    setLastname("");
    setStreet("");
    setCity("");
    setState("");
    setZip("");
    setCountry("");

    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!verifyCardData(cardNumber, expiryDate, cvv)) {
      alert("Invalid card data");
      return;
    }

    if (!firstname || !lastname || !street || !city || !state || !zip) {
      alert("Please fill all fields");
      return;
    }

    if (!country) {
      alert("Please select a country");
      return;
    }

    const paymentInfo = {
      cardNumber,
      expiaryDate: `${expiryDate.month}/${expiryDate.year}`,
      cvv,
      firstName: firstname,
      lastName: lastname,
      street,
      city,
      state,
      zip,
      country,
    };

    await savePaymentInfo(user?.user || ({} as User), paymentInfo);

    onClose();
  };

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-white py-2 rounded-lg shadow-lg w-1/3 py-8 flex items-center justify-center flex-col">
        <h2 className="text-3xl font-bold mb-4">Payment Modal</h2>
        <form onSubmit={handleSubmit} className="w-3/4">
          <div className="mb-8">
            <label className="block text-gray-700" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700" htmlFor="expiryDate">
              Expiry Date
            </label>
            <div className="flex">
              <input
                type="number"
                id="expiryDateMonth"
                className="w-1/2 border border-gray-300 rounded px-3 py-2 mr-1"
                value={expiryDate.month}
                placeholder="MM"
                onChange={(e) =>
                  setExpiryDate({
                    ...expiryDate,
                    month: Number(e.target.value),
                  })
                }
                required
              />
              <input
                type="number"
                id="expiryDateYear"
                className="w-1/2 border border-gray-300 rounded px-3 py-2 ml-1"
                value={expiryDate.year}
                placeholder="YYYY"
                onChange={(e) =>
                  setExpiryDate({ ...expiryDate, year: Number(e.target.value) })
                }
                required
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-gray-700" htmlFor="cvv">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700" htmlFor="firstname">
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700" htmlFor="lastname">
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700" htmlFor="street">
              Street
            </label>
            <input
              type="text"
              id="street"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700" htmlFor="city">
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700" htmlFor="state">
              State
            </label>
            <input
              type="text"
              id="state"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700" htmlFor="zip">
              Zip
            </label>
            <input
              type="text"
              id="zip"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700" htmlFor="country">
              Country
            </label>
            <select
              id="country"
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
              onChange={(e) => setCountry(e.target.value)}
            >
              {COUNTRIES_LIST.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white rounded-lg px-4 py-2 mr-2"
              onClick={() => handleCLose()}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
