export const metadata = {
  title: "Shipping Policy | Dia Diamonds",
};

export default function ShippingPolicy() {
  return (
    <section className="w-full min-h-screen bg-[#FAFAFA] text-[#111] px-6 md:px-0 py-10 md:py-16">
      
      <div className="max-w-[900px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            Shipping Policy
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3">
            Dia Diamonds
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm space-y-6">

          <p className="text-[15px] leading-relaxed text-gray-700">
            Dia Diamonds ensures safe and timely delivery of all products.
            We partner with trusted logistics providers to deliver your jewelry securely.
          </p>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Shipping Time
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Orders are typically processed within 2–5 business days.
              Delivery timelines may vary depending on location.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Shipping Charges
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              We offer free shipping on most orders. Any applicable charges will be displayed
              at checkout.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Order Tracking
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Once your order is shipped, you will receive tracking details via email or SMS.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Delivery Issues
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              If your order is delayed or not delivered, please contact our support team
              for assistance.
            </p>
          </div>

          {/* SECTION */}
          <div>
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              International Shipping
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              International shipping may be available depending on location. Additional
              customs duties or taxes may apply.
            </p>
          </div>

          {/* FOOTER */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-[15px] font-medium text-gray-800">
              For shipping-related queries, contact us at hello@diadiamonds.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}