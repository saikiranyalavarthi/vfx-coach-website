import React, { useEffect, useState } from "react";
import { Calendar, Clock, Video, Hourglass } from "lucide-react";
import Papa from "papaparse";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [session, setSession] = useState(null);

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

  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-gray-900/60 pointer-events-none"></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between lg:min-h-screen">
        {/* Left Side: Heading */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-3 sm:gap-4 pt-28 sm:pt-28 pb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold ">
            AI for VFX
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl font-medium text-gray-200 max-w-md leading-relaxed">
            A free workshop for filmmakers, artists,
            <br /> and content creators.
          </p>
        </div>

        {/* Right Side: Info Cards + Button */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-3 sm:gap-4 pb-0.5">
          {session ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm sm:max-w-md">
              <div className="bg-white text-black rounded-lg px-4 py-3 flex items-center gap-3 shadow">
                <Calendar className="text-[#FF991C]" />
                <span className="font-semibold text-sm sm:text-base">
                  {session.date}
                </span>
              </div>
              <div className="bg-white text-black rounded-lg px-4 py-3 flex items-center gap-3 shadow">
                <Clock className="text-[#FF991C]" />
                <span className="font-semibold text-sm sm:text-base">
                  {session.time}
                </span>
              </div>
              <div className="bg-white text-black rounded-lg px-4 py-3 flex items-center gap-3 shadow">
                <Video className="text-[#FF991C]" />
                <span className="font-semibold text-sm sm:text-base">
                  {session.session}
                </span>
              </div>
              <div className="bg-white text-black rounded-lg px-4 py-3 flex items-center gap-3 shadow">
                <Hourglass className="text-[#FF991C]" />
                <span className="font-semibold text-sm sm:text-base">
                  {session.duration}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-gray-300 text-lg">Loading session info...</p>
          )}

          {/* CTA Button */}
          <Link to="/contact" className="w-full max-w-sm sm:max-w-md">
            <button
              className="w-full bg-[#FF991C] text-black px-6 py-3 sm:py-4 rounded-lg 
              text-lg sm:text-xl hover:brightness-90 hover:cursor-pointer 
              transition font-semibold shadow-lg"
            >
              Become a VFX Pro for{" "}
              <span className="font-extrabold block sm:inline">
                <span className="line-through text-black mr-2">Rs. 999/-</span>
                FREE
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
