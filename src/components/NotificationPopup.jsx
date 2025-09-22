import React, { useEffect, useState } from "react";
import { Calendar, Clock, Video, Hourglass, X } from "lucide-react";
import Papa from "papaparse";
import { Link } from "react-router-dom";

const NotificationPopup = () => {
  const [session, setSession] = useState(null);
  const [show, setShow] = useState(false);

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

  // Handle delayed popup and auto-dismiss
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000); // show after 2s
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (show) {
      const autoDismiss = setTimeout(() => setShow(false), 10000); // hide after 10s
      return () => clearTimeout(autoDismiss);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm sm:max-w-md z-50">
      <div className="bg-gray-900 text-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col gap-3 animate-slide-up relative">
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          <X size={18} />
        </button>

        {session ? (
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="bg-white text-black rounded-lg px-3 py-2 flex items-center gap-2 shadow">
              <Calendar className="text-[#FF991C]" />
              <span className="font-semibold text-sm sm:text-base">
                {session.date}
              </span>
            </div>
            <div className="bg-white text-black rounded-lg px-3 py-2 flex items-center gap-2 shadow">
              <Clock className="text-[#FF991C]" />
              <span className="font-semibold text-sm sm:text-base">
                {session.time}
              </span>
            </div>
            <div className="bg-white text-black rounded-lg px-3 py-2 flex items-center gap-2 shadow">
              <Video className="text-[#FF991C]" />
              <span className="font-semibold text-sm sm:text-base">
                {session.session}
              </span>
            </div>
            <div className="bg-white text-black rounded-lg px-3 py-2 flex items-center gap-2 shadow">
              <Hourglass className="text-[#FF991C]" />
              <span className="font-semibold text-sm sm:text-base">
                {session.duration}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-gray-300 text-sm sm:text-base">
            Loading session info...
          </p>
        )}

        <Link to="/contact">
          <button className="w-full bg-[#FF991C] text-black px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base hover:brightness-90 transition font-semibold shadow-lg mt-2">
            Become a VFX Pro for{" "}
            <span className="font-extrabold block sm:inline">
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
            animation: slideUp 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default NotificationPopup;
