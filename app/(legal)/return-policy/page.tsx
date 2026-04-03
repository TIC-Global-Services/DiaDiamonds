export const metadata = {
  title: "Return Policy | Dia Diamonds",
};

export default function ReturnPolicy() {
  return (
    <section className="w-full min-h-screen bg-[#FAFAFA] text-[#111] px-6 md:px-0 py-10 md:py-16">
      
      <div className="max-w-[900px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            Return Policy
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3">
            Dia Diamonds
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">

          <p className="text-[15px] leading-relaxed text-gray-700">
            At Dia Diamonds, we strive to ensure complete satisfaction with every purchase.
            If you are not entirely satisfied, we are here to help.
          </p>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Eligibility for Returns
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Items must be returned within 7–14 days of delivery in their original condition,
              unused, and with all original packaging and certifications.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Non-Returnable Items
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Customized jewelry, engraved items, and products purchased during special sales
              are not eligible for returns.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Return Process
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              To initiate a return, contact our support team with your order details.
              Our team will guide you through the return process.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Refunds
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Once your return is received and inspected, we will notify you about the approval
              of your refund. Approved refunds will be processed within 7–10 business days.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Exchanges
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Exchanges are allowed only for defective or damaged items. Please contact us immediately
              if you receive a damaged product.
            </p>
          </div>

          {/* FOOTER */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-[15px] font-medium text-gray-800">
              For any queries, contact us at hello@diadiamonds.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}