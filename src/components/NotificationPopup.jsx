import React, { useEffect, useState } from "react";
import { Calendar, Clock, Video, Hourglass, X } from "lucide-react";
import Papa from "papaparse";
import { Link } from "react-router-dom";

const NotificationPopup = () => {
  const [session, setSession] = useState(null);
  const [show, setShow] = useState(false);

  // Fetch session data once
  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTRnTiryQRIMa9FmHs4Qw5cD4sYSHn_sUczGfkKNJ4dv9cpIpYUqLp1p6myvF4RmqEn8QpxDRzTXqA_/pub?gid=0&single=true&output=csv";

    fetch(csvUrl)
      .then((res) => res.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, { header: true });
        setSession(parsed.data[0]);
      })
      .catch((err) => console.error("Error fetching CSV:", err));
  }, []);

  // First popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Reappear every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/20 border-t border-white/30 text-white px-6 sm:px-10 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-6 animate-slide-up relative">
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-6 text-gray-200 hover:text-white"
        >
          <X size={22} />
        </button>

        {/* Session Info */}
        {session ? (
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-4 text-base sm:text-lg font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="text-yellow-400" size={20} />
              <span>{session.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-yellow-400" size={20} />
              <span>{session.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="text-yellow-400" size={20} />
              <span>{session.session}</span>
            </div>
            <div className="flex items-center gap-2">
              <Hourglass className="text-yellow-400" size={20} />
              <span>{session.duration}</span>
            </div>
          </div>
        ) : (
          <p className="text-gray-200 text-base">Loading session info...</p>
        )}

        {/* CTA Button */}
        <Link to="/contact">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:brightness-90 transition shadow-lg">
            Become a VFX Pro for{" "}
            <span className="font-extrabold">
              <span className="line-through text-black mr-1">Rs. 999/-</span>
              FREE
            </span>
          </button>
        </Link>
      </div>

      {/* Slide-up animation */}
      <style>
        {`
          @keyframes slideUp {
            0% { transform: translateY(100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-up {
            animation: slideUp 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default NotificationPopup;
