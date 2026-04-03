export const metadata = {
  title: "Privacy Policy | Dia Diamonds",
};

export default function PrivacyPolicy() {
  return (
    <section className="w-full min-h-screen bg-[#FAFAFA] text-[#111] px-6 md:px-0 py-10 md:py-16">

      {/* CONTAINER */}
      <div className="max-w-[900px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            Privacy Policy
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3">
            Dia Diamonds
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">

          <p className="text-[15px] leading-relaxed text-gray-700">
            Welcome to Dia Diamonds. This section pertains to the Privacy Policy
            of our website and mobile applications. We may update this policy
            from time to time, and you are encouraged to review it regularly.
          </p>

          <p className="text-[15px] leading-relaxed text-gray-700">
            Protecting your personal information is our top priority. This policy
            explains how we collect, use, and safeguard your data.
          </p>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Information We Collect
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Personal information includes your name, email, phone number,
              address, and payment details that help us serve you better.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Cookies
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              We use cookies to enhance your experience. Cookies help us
              understand user behavior and improve our services.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Usage of Information
            </h2>
            <ul className="list-disc pl-5 text-[15px] text-gray-600 space-y-1">
              <li>Improve our website</li>
              <li>Provide a better shopping experience</li>
              <li>Send offers and updates</li>
            </ul>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Third-Party Sharing
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              We may share data with trusted partners like delivery services and
              payment processors to complete your orders.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Security
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              We ensure your data is protected and not shared with unauthorized
              entities.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              External Links
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Our website may contain links to external sites. We are not
              responsible for their privacy policies.
            </p>
          </div>

          {/* FOOTER NOTE */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-[15px] font-medium text-gray-800">
              By using our website, you agree to this Privacy Policy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}