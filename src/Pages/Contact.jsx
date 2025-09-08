// ContactPage.jsx
import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields properly.");
      return;
    }

    setLoading(true);

    const text = encodeURIComponent(
      `👋 Hello, I want to connect with you.\n
----------------------\n
👤 Name: ${formData.name}\n
📧 Email: ${formData.email}\n
📱 Mobile: ${formData.mobile}\n
💬 Message: ${formData.message}\n
----------------------`
    );

    const whatsappNumber = "919000999551";

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");

    setFormData({ name: "", email: "", mobile: "", message: "" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Hero / Heading Section */}
      <header className="py-16 px-6 md:px-14 text-center mt-12">
        <p className="uppercase text-sm font-semibold tracking-wide text-green-400">
          GET IN TOUCH
        </p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Fill in the form below and your details will be sent directly to our
          WhatsApp.
        </p>
      </header>

      {/* Contact Form */}
      <main className="flex-grow flex items-center justify-center px-6 md:px-14">
        <form onSubmit={handleSubmit} className="w-full max-w-3xl grid gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            aria-label="Your Name"
            className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            aria-label="Your Email"
            className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
            required
          />
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Your Mobile Number"
            aria-label="Your Mobile Number"
            pattern="[0-9]{10}"
            className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            aria-label="Your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full bg-gradient-to-r from-lime-400 to-green-500 text-black font-semibold shadow-lg transition transform ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </main>
    </div>
  );
}
