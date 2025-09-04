import React from "react";
import bannerBg from "/banner1.jpg"; // background image

const ExperienceSection = () => {
  const experienceGroups = [
    {
      years: "1-3 Yrs",
      description: "of Experience\nStand out early by leveraging AI as your",
    },
    {
      years: "3-9 Yrs",
      description: "of Experience\nLead AI-driven projects and deliver",
    },
    {
      years: "10+ Yrs",
      description: "of Experience\nManage AI teams and drive organizational",
    },
  ];

  return (
    <section
      className="relative text-white py-16 px-4"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Section Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
        <p className="uppercase tracking-wide text-green-400 text-sm mb-2">
          AI FOR ALL STAGES
        </p>
        <h2 className="text-4xl font-serif font-bold">Who is Outskill for?</h2>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Green gradient background */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[640px] h-[270px] rounded-xl"
          style={{
            background:
              "radial-gradient(ellipse at center, #7fe500 0%, transparent 70%)",
            filter: "brightness(130%)",
            zIndex: 0,
            opacity: 0.8,
          }}
        ></div>

        {/* Experience Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-lg max-w-4xl mx-auto relative z-20">
          {experienceGroups.map(({ years, description }, idx) => (
            <div key={idx}>
              <h3 className="text-white text-3xl font-semibold mb-2">
                {years}
              </h3>
              <p className="text-gray-300 whitespace-pre-line">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
