// RefundPolicy.jsx
import React from "react";

const RefundPolicy = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-12 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg mt-8">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Refund Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10 text-center">
          Last updated: September 2025
        </p>

        <div className="prose prose-invert max-w-none text-justify space-y-6">
          <h2 className="text-2xl font-semibold text-lime-400">Introduction</h2>
          <p>
            At <b>VFX Coach Pvt. Ltd.</b>, we strive to provide the best
            learning experience to our students. This Refund Policy outlines the
            terms under which refunds may be requested for courses, workshops,
            and training programs offered through our platform.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">
            Eligibility for Refund
          </h2>
          <p>Refunds are applicable only under the following conditions:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The refund request is made within <b>7 days of enrollment</b>.
            </li>
            <li>
              The student has not consumed more than{" "}
              <b>20% of the course content</b> or attended more than one live
              workshop session.
            </li>
            <li>
              Technical issues that prevent access to the course and cannot be
              resolved by our support team.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-lime-400">
            Non-Refundable Items
          </h2>
          <p>
            Please note that the following are <b>non-refundable</b>:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>One-on-one mentorship or personalized training sessions</li>
            <li>Course materials once downloaded</li>
            <li>Completed workshops, webinars, or bootcamps</li>
            <li>Payments made beyond the refund eligibility period</li>
          </ul>

          <h2 className="text-2xl font-semibold text-lime-400">
            How to Request a Refund
          </h2>
          <p>
            To initiate a refund request, please contact our support team at{" "}
            <b>support@vfxcoach.com</b> with your order details and the reason
            for the request. Our team will review your request and respond
            within <b>5–7 business days</b>.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">
            Mode of Refund
          </h2>
          <p>
            Approved refunds will be processed back to your original payment
            method (credit/debit card, UPI, or net banking) within{" "}
            <b>7–10 working days</b>, depending on your bank or payment
            provider.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">
            Changes to this Policy
          </h2>
          <p>
            VFX Coach reserves the right to modify or update this Refund Policy
            at any time. Any changes will be posted on this page with the
            updated date.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">Contact Us</h2>
          <p>
            If you have questions regarding this Refund Policy, please contact
            us at:
            <br />
            <b>Email:</b> support@vfxcoach.com
            <br />
            <b>Address:</b> VFX Coach Pvt. Ltd., Hyderabad, Telangana, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
