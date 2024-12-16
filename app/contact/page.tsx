// Support.tsx
import React from "react";

const Support = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-4">
      <div className="w-full max-w-6xl  p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Support</h1>
        <p className=" mb-4 leading-relaxed">
          Thank you for using <span className="font-semibold">QuickPeek</span>.
          If you have any questions, feedback, or need assistance, we’re here to
          help. Please don’t hesitate to reach out to us.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-4">How to Reach Us</h2>
        <p className=" mb-4 leading-relaxed">
          You can contact us via email at the address below. We aim to respond
          to all inquiries within 24-48 hours.
        </p>

        <div className=" p-4 rounded-lg mb-4">
          <p className="text-green-600 font-semibold text-lg">Email:</p>
          <a
            href="mailto:alnoman.dhoni@gmail.com"
            className="text-blue-600 hover:underline"
          >
            alnoman.dhoni@gmail.com
          </a>
        </div>

        <h2 className="text-2xl font-semibold  mt-6 mb-4">FAQs</h2>
        <p className=" mb-4 leading-relaxed">
          Check out our Frequently Asked Questions (FAQs) section for quick
          answers to common issues. If you don’t find what you’re looking for,
          feel free to reach out to us.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-4">Community Support</h2>
        <p className=" mb-4 leading-relaxed">
          Join the QuickPeek community to share tips, ask questions, and
          collaborate with other users. Visit our project repository or forums
          for more information.
        </p>

        <p className=" mt-8 leading-relaxed">
          We’re committed to making your experience with QuickPeek seamless and
          enjoyable. Thank you for your support and trust in our product.
        </p>
      </div>
    </div>
  );
};

export default Support;
