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
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        Terms and Conditions
        <br />
        Last Updated: June 9, 2024
        <br />
        <br />
        Welcome to WeStock. These Terms and Conditions govern your use of our
        web application. By accessing or using WeStock, you agree to be bound by
        these Terms and Conditions. If you do not agree with any part of these
        terms, please do not use our services. 1. Acceptance of Terms
        <br />
        <br />
        By using WeStock, you affirm that you are at least 18 years old or have
        the necessary legal capacity to enter into these Terms and Conditions.
        You agree to comply with all applicable laws and regulations while using
        our services.
        <br />
        <br />
        2. Registration and Account
        <br />
        <br />
        To use certain features of WeStock, you may be required to register for
        an account. You agree to:
        <br />
        <br />
        - Provide accurate and complete information during registration
        <br />
        - Maintain the security of your account by keeping your password
        confidential
        <br />
        - Notify us immediately of any unauthorized use of your account
        <br />
        - Be responsible for all activities that occur under your account
        <br />
        <br />
        3. Use of the Service
        <br />
        You agree to use WeStock solely for lawful purposes and in accordance
        with these Terms and Conditions. You are prohibited from:
        <br />
        - Using WeStock in any way that violates applicable laws or regulations
        <br />
        - Attempting to gain unauthorized access to WeStock, other user
        accounts, or computer systems - Interfering with the security or
        integrity of WeStock
        <br />
        - Engaging in any conduct that restricts or inhibits others from using
        or enjoying WeStock
        <br />
        <br />
        4. Payment and Fees
        <br />
        <br />
        If you purchase any services or products through WeStock, you agree to
        pay all applicable fees and charges. We reserve the right to change our
        pricing at any time, but we will notify you of any changes in advance.
        All payments are non-refundable unless otherwise stated.
        <br />
        <br />
        5. Intellectual Property
        <br />
        <br />
        All content, features, and functionality on WeStock, including but not
        limited to text, graphics, logos, and software, are the exclusive
        property of WeStock or its licensors and are protected by intellectual
        property laws. You agree not to reproduce, distribute, or create
        derivative works based on any content from WeStock without our explicit
        permission.
        <br />
        <br />
        6. Termination
        <br />
        <br />
        We reserve the right to terminate or suspend your account and access to
        WeStock at our sole discretion, without prior notice, for conduct that
        we believe violates these Terms and Conditions or is harmful to other
        users or us. You may also terminate your account at any time by
        contacting us.
        <br />
        <br />
        7. Disclaimer of Warranties
        <br />
        <br />
        WeStock is provided "as is" and "as available" without any warranties of
        any kind, whether express or implied. We do not guarantee that WeStock
        will be uninterrupted, error-free, or secure. Your use of WeStock is at
        your own risk.
        <br />
        <br />
        8. Limitation of Liability
        <br />
        <br />
        In no event shall WeStock, its affiliates, or its licensors be liable
        for any indirect, incidental, special, consequential, or punitive
        damages arising out of or related to your use of, or inability to use,
        WeStock, even if we have been advised of the possibility of such
        damages.
        <br />
        <br />
        9. Governing Law
        <br />
        <br />
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of [Your Jurisdiction], without regard to its
        conflict of law principles. You agree to submit to the exclusive
        jurisdiction of the courts located in [Your Jurisdiction] for any
        disputes arising out of or related to these Terms and Conditions.
        <br />
        <br />
        10. Changes to These Terms
        <br />
        <br />
        We may update these Terms and Conditions from time to time. We will
        notify you of any changes by posting the new Terms and Conditions on
        this page. Your continued use of WeStock after such modifications will
        constitute your acknowledgment of the modified Terms and Conditions.
        <br />
        <br />
        11. Contact Us
        <br />
        <br />
        If you have any questions about these Terms and Conditions, please
        contact us at:
        <br />
        WeStock <br />
        Email: westock@ctp.one <br />
        Address: 123 Inventory Lane, Business City, BC 12345
        <br />
        <br />
        Thank you for using WeStock!
      </div>
    </main>
  );
}
