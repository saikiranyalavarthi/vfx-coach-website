// TermsAndConditions.jsx
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-12 px-6 lg:px-20 ">
      <div className="max-w-5xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg mt-8">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-400 mb-10 text-center">
          Last updated: September 2025
        </p>

        {/* Scrollable Content */}
        <div className="prose prose-invert max-w-none text-justify space-y-6">
          <h2 className="text-2xl font-semibold text-lime-400">Introduction</h2>
          <p>
            Welcome to <b>VFX Coach</b>, a platform dedicated to helping
            learners master the art and science of Visual Effects. These Terms
            and Conditions govern your access to and use of our website,
            training programs, workshops, and self-paced learning modules. By
            enrolling in our courses or using our services, you agree to comply
            with and be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">
            Acceptance of Terms
          </h2>
          <p>
            By registering for a VFX Coach course, workshop, or any related
            service, you confirm that you have the legal authority to enter into
            this agreement. If you do not agree with any part of these Terms,
            please do not access our website or enroll in our programs.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">
            Services Provided
          </h2>
          <p>
            VFX Coach provides online and offline training in Visual Effects,
            CGI, and industry-related tools. Our offerings include live
            workshops, mentorship programs, self-paced courses, and practical
            projects designed to help students gain real-world VFX skills.
            Access to certain features may require payment of course fees.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">
            Enrollment and Payments
          </h2>
          <p>
            To enroll in a course, you must complete the registration process
            and pay the applicable fee. Payments made are subject to our Refund
            Policy, which is available separately on this website. Failure to
            make timely payments may result in suspension of your access to
            course materials.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">User Conduct</h2>
          <p>
            You agree to use the VFX Coach platform responsibly and for the sole
            purpose of learning and skill development. Any misuse of course
            materials, including unauthorized distribution, reproduction, or
            commercial use, is strictly prohibited and may result in termination
            of your access.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">
            Intellectual Property
          </h2>
          <p>
            All content provided through VFX Coach — including videos, study
            materials, designs, logos, and branding — remains the intellectual
            property of VFX Coach Pvt. Ltd. You may not copy, modify, or
            redistribute our content without prior written consent.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">
            Governing Law
          </h2>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of India. Any disputes will fall under the
            exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
          </p>

          <h2 className="text-2xl font-semibold text-lime-400">Contact</h2>
          <p>
            For questions about these Terms, enrollment issues, or any
            clarifications regarding our training services, you can reach us at:
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

export default TermsAndConditions;
