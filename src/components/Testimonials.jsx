import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Arun sir doesn’t just teach VFX — he brings it to life. Every session feels like stepping into a real studio. From sparks to sci-fi, I learned to create magic frame by frame.",
      name: "C. Ravi Teja",
      role: "VFX Student",
    },
    {
      quote:
        "I walked in knowing nothing about After Effects. Today, I animate, composite, and design like a pro — all thanks to Arun sir’s passion, patience, and next-level training. This course truly changed my path.",
      name: "B. Hemanth",
      role: "Motion Designer",
    },
    {
      quote:
        "Each class felt like a behind-the-scenes pass to the film industry. Arun sir’s energy, storytelling, and VFX wizardry made learning addictive. From rotoscope to renders — I gained skills I once only dreamed of.",
      name: "Raj Kumar",
      role: "Film Enthusiast",
    },
  ];

  return (
    <section className="bg-black text-white max-w-12xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          What students say
        </h2>
        <p className="mt-2 text-gray-400">
          Real stories from students trained by Arun sir
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <article
            key={i}
            className="relative bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
            aria-label={`Testimonial from ${t.name}`}
          >
            <svg
              className="w-10 h-10 text-indigo-400 opacity-90 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.17 6A5 5 0 0 0 4 10v6a2 2 0 0 0 2 2h6a5 5 0 0 0 5-5v-1a4 4 0 0 0-4-4H7.17zM17.17 6A5 5 0 0 0 14 10v6a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-1a4 4 0 0 0-4-4h-2.83z" />
            </svg>

            <blockquote className="text-gray-200 text-sm sm:text-base leading-relaxed mb-6">
              “{t.quote}”
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="flex-none w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                {t.name
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>

            {/* subtle accent */}
            <span className="absolute top-3 right-3 text-xs uppercase text-indigo-400 font-medium">
              VFX
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
