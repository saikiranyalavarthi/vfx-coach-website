import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Encode the WhatsApp message
    const text = encodeURIComponent(
      `👋 Hello, I want to connect with you.\n
----------------------\n
👤 Name: ${formData.name}\n
📧 Email: ${formData.email}\n
📱 Mobile: ${formData.mobile}\n
💬 Message: ${formData.message}\n
----------------------`
    );

    // Your WhatsApp number (with country code 91 for India)
    const whatsappNumber = "919000999551";

    // Open WhatsApp API (works on both mobile + desktop)
    window.open(
      `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`,
      "_blank"
    );

    // Reset form after sending
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-6 md:px-14">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="uppercase text-sm font-semibold tracking-wide text-green-400">
          GET IN TOUCH
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">
          Contact Us
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Fill in the form below and your details will be sent directly to our
          WhatsApp.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
          required
        />
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Your Mobile Number"
          className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold shadow-lg hover:scale-105 transition transform"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
