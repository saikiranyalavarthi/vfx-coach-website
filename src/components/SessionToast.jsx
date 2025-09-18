// components/SessionToast.jsx
"use client";
import { useEffect, useState } from "react";
import { Calendar, Clock, Video, Hourglass } from "lucide-react"; // Make sure icons are installed

export default function SessionToast({ session }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show popup on page load
    setVisible(true);

    // Optional: hide after 10 seconds
    const timer = setTimeout(() => setVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 lg:right-8 z-50 w-full max-w-md lg:max-w-lg">
      {session ? (
        <div className="bg-white text-black rounded-xl shadow-lg p-4 flex flex-col gap-3 animate-slide-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 shadow">
              <Calendar className="text-[#FF991C]" />
              <span className="font-semibold text-sm sm:text-base">
                {session.date}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 shadow">
              <Clock className="text-[#FF991C]" />
              <span className="font-semibold text-sm sm:text-base">
                {session.time}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 shadow">
              <Video className="text-[#FF991C]" />
              <span className="font-semibold text-sm sm:text-base">
                {session.session}
              </span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 shadow">
              <Hourglass className="text-[#FF991C]" />
              <span className="font-semibold text-sm sm:text-base">
                {session.duration}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Loading session info...</p>
      )}
    </div>
  );
}
