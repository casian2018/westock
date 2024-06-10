import logo from "@/assets/WeStock_1.svg";

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
                    src={logo.src}
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
        </header><br /><br /><br /><br />
        <div className="container" >
            Privacy Policy
            <br />

Last Updated: June 9, 2024
<br /><br />
Welcome to WeStock. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how WeStock collects, uses, discloses, and safeguards your information when you use our web application. By accessing or using WeStock, you agree to this Privacy Policy.<br />
<br />
1. Information We Collect<br /><br />
We may collect personal information from you in various ways, including when you:
<br />
- Register for an account<br />
- Use our web application<br />
- Contact customer support<br />
- Participate in surveys or promotions
<br />
The types of information we may collect include:
<br />
- Personal Identification Information: Name, email address, phone number, company name, and address.<br />
- Financial Information: Payment details necessary for transactions.<br />
- Usage Data: Information about how you use our web application, including your IP address, browser type, access times, and pages viewed.<br />
<br />
2. How We Use Your Information<br /><br />
We use the information we collect to:
<br />
- Provide, operate, and maintain our services<br />
- Improve, personalize, and expand our services<br />
- Process transactions and send related information<br />
- Communicate with you, including responding to customer service requests<br />
- Send you updates, marketing, and promotional materials<br />
- Analyze usage and trends to enhance user experience<br />
<br />
3. Information Sharing and Disclosure<br /><br />
We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
<br />
- With your consent<br />
- To comply with legal obligations<br />
- To protect and defend our rights and property<br />
- With service providers who perform services on our behalf<br />
- In connection with a merger, acquisition, or sale of all or a portion of our assets
<br /><br />
4. Data Security<br /><br />
We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
<br /><br />
5. Your Choices and Rights<br /><br />
You have the right to:
<br />
- Access and update your personal information<br />
- Request deletion of your personal information<br />
- Opt-out of receiving marketing communications<br />
<br />
To exercise these rights, please contact us at westock@ctp.one<br />
<br />
6. Cookies and Tracking Technologies<br /><br />
We use cookies and similar tracking technologies to enhance your experience on our web application. You can control the use of cookies through your browser settings.
<br /><br />
7. Changes to This Privacy Policy<br /><br />
We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Your continued use of WeStock after such modifications will constitute your acknowledgment of the modified Privacy Policy.
<br /><br />
8. Contact Us<br /><br />
If you have any questions about this Privacy Policy, please contact us at:<br />

WeStock  <br />
Email: westock@ctp.one <br />
Address: Romania<br />
<br />
Thank you for trusting WeStock with your stock management needs.
        </div>
  </main>);
  }