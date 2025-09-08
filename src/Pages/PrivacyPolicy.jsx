// PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-12 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-lg mt-8">
        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10 text-center">
          Last updated: September 2025
        </p>

        <div className="prose prose-invert max-w-none text-justify space-y-6">
          <h2 className="text-2xl font-semibold text-[#FF991C]">
            Introduction
          </h2>
          <p>
            At <b>VFX Coach Pvt. Ltd.</b>, we respect your privacy and are
            committed to protecting the personal information you share with us.
            This Privacy Policy explains how we collect, use, and safeguard your
            data when you access our website, enroll in our courses, or
            participate in our training programs.
          </p>

          <h2 className="text-2xl font-semibold text-[#FF991C]">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, billing details, and course enrollment
            history. Additionally, we collect technical information like your IP
            address, browser type, and usage statistics to improve our services.
          </p>

          <h2 className="text-2xl font-semibold text-[#FF991C]">
            How We Use Your Information
          </h2>
          <p>The data we collect is used for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To provide access to courses, workshops, and training material
            </li>
            <li>To process payments and manage enrollments</li>
            <li>To send updates, certificates, and course reminders</li>
            <li>To improve the quality and effectiveness of our training</li>
            <li>To ensure compliance with our Terms and Conditions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#FF991C]">
            Data Protection
          </h2>
          <p>
            We implement strict technical and organizational measures to protect
            your personal data from unauthorized access, loss, misuse, or
            disclosure. While we take all necessary precautions, please note
            that no online system is completely secure.
          </p>

          <h2 className="text-2xl font-semibold text-[#FF991C]">
            Sharing of Information
          </h2>
          <p>
            We do not sell or trade your personal data. Your information may be
            shared only with trusted third-party service providers (such as
            payment gateways or email platforms) who assist us in delivering our
            services, and only to the extent necessary.
          </p>

          <h2 className="text-2xl font-semibold text-[#FF991C]">Your Rights</h2>
          <p>As a user, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and update your personal information</li>
            <li>Request deletion of your account and related data</li>
            <li>Opt out of promotional emails at any time</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#FF991C]">Cookies</h2>
          <p>
            Our website may use cookies and similar technologies to enhance your
            browsing experience. You may disable cookies in your browser
            settings, but this could limit certain features of the platform.
          </p>

          <h2 className="text-2xl font-semibold text-[#FF991C]">
            Governing Law
          </h2>
          <p>
            This Privacy Policy shall be governed by the laws of India. Any
            disputes arising will be subject to the exclusive jurisdiction of
            the courts in Hyderabad, Telangana, India.
          </p>

          <h2 className="text-2xl font-semibold text-[#FF991C]">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data
            practices, you may contact us at:
            <br />
            <b>Email:</b> privacy@vfxcoach.com
            <br />
            <b>Address:</b> VFX Coach Pvt. Ltd., Hyderabad, Telangana, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
