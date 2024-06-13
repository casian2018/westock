// pages/pricing.js
import React from "react";
import logo from "@/assets/WeStock_1.svg";

const Pricing = () => {
  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img className="h-7 w-auto" src={logo.src} alt="" />
                <p className="sr-only">WeStock</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="/pricing"
              >
                Pricing
              </a>
            </div>
            <div className="flex items-center justify-end gap-3">
              <a
                className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
                href="/register"
              >
                Sign up
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="p-4 h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
          <div className="bg-white p-8 lg:flex-1">
            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Subscription
            </h3>
            <p className="mt-6 text-gray-600 text-lg">
              The Team subscription grants your entire team access to a wide
              range of exclusive benefits and perks. WeStock is a comprehensive
              web app designed to streamline stock management for retail shops.
              It offers real-time inventory tracking, automated stock alerts,
              and detailed reporting, enabling efficient oversight and
              preventing stockouts or overstocking. With an intuitive interface
              and seamless integration with point-of-sale systems, WeStock
              simplifies inventory tasks, enhances accuracy, and boosts
              productivity. Ideal for small to medium-sized businesses, WeStock
              ensures optimal stock levels, helping shops run smoothly and
              profitably.
            </p>
            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase text-teal-600">
                What's included
              </h4>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="ml-3 text-lg text-gray-700">
                    Access to notifications for low stock levels
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="ml-3 text-lg text-gray-700">
                    Express Shipping on your products
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="ml-3 text-lg text-gray-700">
                    Early access to upcoming features
                  </p>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="ml-3 text-lg text-gray-700">
                    Dedicated customer support
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 p-8 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center">
            <p className="text-xl font-medium text-gray-900">
              A single payment for your entire team
            </p>
            <div className="mt-6 flex items-baseline justify-center text-5xl font-extrabold text-gray-900">
              <span className="text-teal-500">$19.99</span>
              <span className="text-xl font-medium text-gray-500">/month</span>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700"
              >
                Start your 7-day free trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
