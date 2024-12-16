// Privacy.tsx
import React from "react";

const Privacy = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-4">
      <div className="w-full max-w-6xl p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-600 mb-6">
          Privacy Policy
        </h1>
        <p className=" mb-4 leading-relaxed">
          Thank you for using <span className="font-semibold">QuickPeek</span>.
          We value your trust and are committed to protecting your privacy. This
          privacy policy explains how we handle your data.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-4">
          No Data Collection
        </h2>
        <p className=" mb-4 leading-relaxed">
          QuickPeek is designed with your privacy in mind. We do not collect,
          store, or process any of your personal data. All the features in this
          extension operate locally on your device, ensuring your information
          stays private and secure.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-4">No Tracking</h2>
        <p className=" mb-4 leading-relaxed">
          We do not track your browsing activity, search history, or any other
          interactions with the extension. Your data is yours alone, and
          QuickPeek does not transmit any information to external servers or
          third-party services.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-4">
          Open Source Commitment
        </h2>
        <p className=" mb-4 leading-relaxed">
          QuickPeek is built with transparency in mind. Being an open-source
          project, you can review the source code to verify our commitment to
          privacy. We encourage users to explore the codebase to gain confidence
          in how QuickPeek operates.
        </p>

        <h2 className="text-2xl font-semibold  mt-6 mb-4">
          Your Trust Matters
        </h2>
        <p className=" mb-4 leading-relaxed">
          We understand the importance of privacy in today's digital age.
          QuickPeek is committed to ensuring that your experience is not only
          efficient but also secure and private.
        </p>

        <p className=" mt-8 leading-relaxed">
          If you have any questions or concerns about this privacy policy,
          please feel free to reach out to us via the project's repository or
          our official support channels.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
