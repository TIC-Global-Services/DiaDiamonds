export const metadata = {
  title: "Shipping Policy | Dia Diamonds",
};

export default function ShippingPolicy() {
  return (
    <>
      <h1 className="text-3xl md:text-5xl font-medium mb-6">
        Shipping Policy
      </h1>

      <p className="mb-4">
        Dia Diamonds ensures safe and timely delivery of all products.
        We partner with trusted logistics providers to deliver your jewelry securely.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">Shipping Time</h2>
      <p className="mb-4">
        Orders are typically processed within 2–5 business days.
        Delivery timelines may vary depending on location.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">Shipping Charges</h2>
      <p className="mb-4">
        We offer free shipping on most orders. Any applicable charges will be displayed
        at checkout.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">Order Tracking</h2>
      <p className="mb-4">
        Once your order is shipped, you will receive tracking details via email or SMS.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">Delivery Issues</h2>
      <p className="mb-4">
        If your order is delayed or not delivered, please contact our support team
        for assistance.
      </p>

      <h2 className="text-xl font-medium mt-6 mb-2">International Shipping</h2>
      <p className="mb-4">
        International shipping may be available depending on location. Additional
        customs duties or taxes may apply.
      </p>

      <p className="mt-8 font-medium">
        For shipping-related queries, contact us at hello@diadiamonds.com.
      </p>
    </>
  );
}