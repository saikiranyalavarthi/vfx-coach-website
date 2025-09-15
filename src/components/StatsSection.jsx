import { TrendingUp, Briefcase, IndianRupee, LineChart } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="w-8 h-8 text-[#FF991C]" />,
    value: "160,000 ",
    label: "new jobs annually",
  },
  {
    icon: <LineChart className="w-8 h-8 text-[#FF991C]" />,
    value: "25–30%",
    label: "Annual market growth",
  },
  {
    icon: <IndianRupee className="w-8 h-8 text-[#FF991C]" />,
    value: "₹5.1 lakhs per annum",
    label: "Avg.salary",
  },

  {
    icon: <Briefcase className="w-8 h-8 text-[#FF991C]" />,
    value: "2000+",
    label: "Students completed ",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-black py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-105 animate-fadeIn"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {stat.icon}
            <h3 className="text-2xl font-bold text-white mt-3">{stat.value}</h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
