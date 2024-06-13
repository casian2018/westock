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
      <div className="payment-modal-content">
        <h2>Payment Modal</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="number"
              id="expiryDate"
              value={expiryDate.month}
              placeholder="MM"
              onChange={(e) =>
                setExpiryDate({ ...expiryDate, month: Number(e.target.value) })
              }
              required
            />{" "}
            /
            <input
              type="number"
              id="expiryDate"
              value={expiryDate.year}
              placeholder="YYYY"
              onChange={(e) =>
                setExpiryDate({ ...expiryDate, year: Number(e.target.value) })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">Firstname</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">Lastname</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">Street</label>
            <input
              type="text"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">State</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">Zip</label>
            <input
              type="text"
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">Country</label>
            <select
              id="country"
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

          <button onClick={() => handleCLose()}>Close</button>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
