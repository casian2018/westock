import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img
                  className="h-7 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt=""
                />
                <p className="sr-only">WeStock</p>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                How it works
              </a>
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

      <div className="max-w-7xl mx-auto mt-12 px-4 text-center flex items-center min-h-screen">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mt-2 mb-6">
            Helping you organise your stock
            <br />
            by simplifying the process.
          </h1>
          <p className="px-4 leading-relaxed">
            We stock helps you know what you need
            <br />
            Allowing you to spend less time looking through the store,
            <br />
            giving you more time on the other things you enjoy.
          </p>
          <p className="mb-8 mt-4 px-4 leading-relaxed">
            Oh, and the best part...
            <span className="text-pink-600 font-bold">It's cheap!</span>
          </p>
          <div>
            <a
              className="inline-block py-4 px-8 leading-none text-white bg-slate-800 hover:bg-pink-600 rounded shadow text-sm font-bold"
              href="/register"
            >
              Sign-up for free, and pay later
            </a>
          </div>
        </div>
      </div>

      <div id="about" className="relative bg-white overflow-hidden mt-16 mx-48 rounded-lg my-24">
    <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="pt-1"></div>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                    <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        About us
                    </h2>

                    <p>
                        
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg" alt="" />
    </div>
</div>

<section className="max-w-5xl mx-auto w-full px-10 my-12 ">
  <div className="flex items-center justify-center flex-col gap-y-2 py-5">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Testimonials</h2>
    <p className="text-lg font-medium text-slate-700/70 ">Discover how our service can benefit you</p>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
    <div
      className="border p-7 rounded-xl bg-white  drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">Brilliant house to rent</p>
        <p className="font-medium text-slate-700/90 ">All eFounders teams have moved to Cycle for all
          things product management and it is truly a game-changer.</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Jane Cooper" className="h-10 w-10" />
        <p className="pt-2 text-sm font-semibold">Jane Cooper</p>
        <p className="text-sm font-medium text-slate-700/70 ">CEO at ABC Corporation</p>
      </div>
    </div>
    <div
      className="border p-7 rounded-xl bg-white  drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">Efficient customer support</p>
        <p className="font-medium text-slate-700/90 ">The customer support team at our service is
          incredibly responsive and helpful. They went above and beyond to assist me with my issue.</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="John Doe" className="h-10 w-10" />
        <p className="pt-2 text-sm font-semibold">Emily Smith</p>
        <p className="text-sm font-medium text-slate-700/70 ">Marketing Manager at ABC Company</p>
      </div>
    </div>
    <div
      className="border p-7 rounded-xl bg-white  drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">Seamless integration process</p>
        <p className="font-medium text-slate-700/90 ">Integrating our systems with our service was smooth
          and hassle-free. The support team guided us through every step of the process.</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Jane Doe" className="h-10 w-10" />
        <p className="pt-2 text-sm font-semibold">Sarah Brown</p>
        <p className="text-sm font-medium text-slate-700/70 ">CTO at XYZ Corporation</p>
      </div>
    </div>
    <div
      className="border p-7 rounded-xl bg-white  drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
      <div className="flex flex-col gap-y-3.5">
        <p className="font-bold text-xl">Reliable service uptime</p>
        <p className="font-medium text-slate-700/90 ">Our service has consistently maintained high uptime,
          ensuring that our operations run smoothly without any disruptions.</p>
      </div>
      <div className="flex flex-col">
        <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="Ash Doe" className="h-10 w-10" />
        <p className="pt-2 text-sm font-semibold">James White</p>
        <p className="text-sm font-medium text-slate-700/70 ">COO at XYZ Corporation</p>
      </div>
    </div>
  </div>
</section>

<div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
        <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
          <rect x="3" y="1" width="7" height="12"></rect>
          <rect x="3" y="17" width="7" height="6"></rect>
          <rect x="14" y="1" width="7" height="6"></rect>
          <rect x="14" y="11" width="7" height="12"></rect>
        </svg>
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
      </a>
      <div className="mt-6 lg:max-w-sm">
        <p className="text-sm text-gray-800">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>
        <p className="mt-4 text-sm text-gray-800">
          Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
      <div className="flex">
        <p className="mr-1 text-gray-800">Phone:</p>
        <a href="tel:850-123-5021" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">850-123-5021</a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Email:</p>
        <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">info@lorem.mail</a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Address:</p>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
          312 Lovely Street, NY
        </a>
      </div>
    </div>
    <div>
      <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
      <div className="flex items-center mt-1 space-x-3">
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path
              d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
            ></path>
          </svg>
        </a>
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
            <circle cx="15" cy="15" r="4"></circle>
            <path
              d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
            ></path>
          </svg>
        </a>
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path
              d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
            ></path>
          </svg>
        </a>
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
      </p>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm text-gray-600">
      © Copyright 2020 Lorem Inc. All rights reserved.
    </p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
      </li>
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy Policy</a>
      </li>
      <li>
        <a href="/" className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms &amp; Conditions</a>
      </li>
    </ul>
  </div>
</div>
    </main>
  );
}
