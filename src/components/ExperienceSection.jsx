import React from "react";
import bannerBg from "/banner1.jpg"; // background image

const ExperienceSection = () => {
  const experienceGroups = [
    {
      years: "1-3 Yrs",
      description:
        "Kickstart your creative career by blending VFX fundamentals with AI-powered workflows. Stay ahead in a rapidly evolving industry.",
    },
    {
      years: "3-9 Yrs",
      description:
        "Lead futuristic content creation by mastering advanced VFX, motion design, and AI-enhanced post-production tools.",
    },
    {
      years: "10+ Yrs",
      description:
        "Drive creative innovation. Manage teams using AI-integrated pipelines and lead large-scale visual storytelling projects with impac",
    },
  ];

  return (
    <section
      className="relative text-white py-20 px-6 lg:px-12"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <p className="uppercase tracking-widest text-[#FF991C] text-sm mb-3">
          AI FOR ALL STAGES
        </p>
        <h2 className="text-4xl md:text-5xl font-serif font-bold">
          Who is Outskill for?
        </h2>
      </div>

      {/* Glow background */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-[640px] h-[270px] rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at center, #7fe500 0%, transparent 70%)",
        }}
      ></div>

      {/* Experience groups */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {experienceGroups.map(({ years, description }, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-lime-400 hover:scale-105 transform transition-all duration-300"
          >
            <h3 className="text-3xl font-bold mb-3 text-[#FF991C]">{years}</h3>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
