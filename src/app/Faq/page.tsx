import logo from "@/assets/WeStock_1.svg";
export default function Home() {
  return (
    <main className="w-full">
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
      <div className="py-4 max-w-screen-sm mx-auto mt-24">
    <div className="text-center mb-16">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            F.A.Q
        </p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Frequently Asked <span className="text-indigo-600">Questions</span>
        </h3>
    </div>

    <div className="px-10 sm:px-16">

        <div className="py-3 uppercase text-sm text-gray-500 font-medium">
            General
        </div>

        <div className="ml-5">

            <div className="flex items-start my-8">
                <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="text-md">
                    <h1 className="text-gray-900 font-semibold mb-2">What is WeStock?</h1>
                    <p className="text-gray-500 text-sm">WeStock is a web application designed to simplify and streamline inventory management for businesses of all sizes. Our platform offers real-time updates, detailed analytics, and smart forecasting tools to help you manage your stock efficiently.</p>
                </div>
            </div>

            <div className="flex items-start my-8">
                <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="text-md">
                    <h1 className="text-gray-900 font-semibold mb-2">How do I create an account?</h1>
                    <p className="text-gray-500 text-sm">To create an account, click on the "Sign Up" button on our homepage and fill in the required information, including your name, email address, and password. You will receive a confirmation email to verify your account.</p>
                </div>
            </div>

            <div className="flex items-start my-8">
                <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="text-md">
                    <h1 className="text-gray-900 font-semibold mb-2">Is there a free trial available?</h1>
                    <p className="text-gray-500 text-sm">Yes, we offer a 30-day free trial for new users. During this trial period, you can explore all the features of WeStock without any limitations. To start your free trial, simply sign up on our website.</p>
                </div>
            </div>

        </div>

        <div className="py-3 uppercase text-sm text-gray-500 font-medium">
            Billing
        </div>

        <div className="ml-5">

            <div className="flex items-start my-8">
                <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="text-md">
                    <h1 className="text-gray-900 font-semibold mb-2">What payment methods do you accept?</h1>
                    <p className="text-gray-500 text-sm">We accept major credit cards, including Visa, MasterCard, and American Express. For larger organizations, we can also arrange for invoicing and bank transfers. Please contact our sales team for more details.</p>
                </div>
            </div>

            <div className="flex items-start my-8">
                <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="text-md">
                    <h1 className="text-gray-900 font-semibold mb-2">How do I reset my password?</h1>
                    <p className="text-gray-500 text-sm">If you have forgotten your password, click on the "Forgot Password?" link on the login page. Enter your registered email address, and we will send you instructions on how to reset your password.</p>
                </div>
            </div>

            <div className="flex items-start my-8">
                <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="text-md">
                    <h1 className="text-gray-900 font-semibold mb-2">Can I import my existing inventory data into WeStock?</h1>
                    <p className="text-gray-500 text-sm">Yes, you can easily import your existing inventory data into WeStock using our import tool. We support various file formats, including CSV and Excel. Detailed instructions can be found in our user guide.</p>
                </div>
            </div>

        </div>

        <div className="py-3 uppercase text-sm text-gray-500 font-medium">
            Security
        </div>

        <div className="ml-5">

            <div className="flex items-start my-8">
                <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="text-md">
                    <h1 className="text-gray-900 font-semibold mb-2">How secure is my data?</h1>
                    <p className="text-gray-500 text-sm">We take data security seriously at WeStock. Our platform uses industry-standard encryption to protect your data. Additionally, we regularly back up data and employ strict access controls to ensure your information is safe.</p>
                </div>
            </div>

            <div className="flex items-start my-8">
                <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="text-md">
                    <h1 className="text-gray-900 font-semibold mb-2">Can multiple users access the same account?</h1>
                    <p className="text-gray-500 text-sm">Yes, WeStock supports multiple user accounts with different access levels. You can add team members to your account and assign roles and permissions to control what they can see and do within the platform.</p>
                </div>
            </div>

            <div className="flex items-start my-8">
                <div
                    className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g data-name="Layer 2">
                            <g data-name="menu-arrow">
                                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                                <path
                                    d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                                </path>
                                <circle cx="12" cy="19" r="1"></circle>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className="text-md">
                    <h1 className="text-gray-900 font-semibold mb-2">What kind of customer support do you offer?</h1>
                    <p className="text-gray-500 text-sm">We offer comprehensive customer support through various channels, including email, live chat, and phone support. Our support team is available 24/7 to assist you with any questions or issues you may have.</p>
                </div>
            </div>

        </div>

    </div>

</div>

      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={logo.src} alt="logo of westock" className="w-12 h-12" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                WeStock
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="mt-4 text-sm text-gray-800">
                With WeStock, you can say goodbye to the hassles of manual stock
                tracking and hello to streamlined operations and increased
                productivity. Join us on the journey to smarter inventory
                management and experience the ease and reliability that WeStock
                brings to your business. Together, let's make stock management
                simple, effective, and stress-free. Welcome to WeStock!
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:850-123-5021"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                0729 459 468
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:westock@ctp.one"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                westock@ctp.one
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Romania
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2024 | All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
