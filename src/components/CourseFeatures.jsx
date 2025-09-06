import {
  MessageSquare,
  Briefcase,
  BookOpen,
  FileText,
  Layers,
  Award,
} from "lucide-react";

const features = [
  {
    icon: (
      <MessageSquare className="w-10 h-10 text-lime-500 transition-colors duration-300 group-hover:text-lime-400" />
    ),
    title: "Live Doubt Solving",
    description: "Get real-time answers from experts.",
  },
  {
    icon: (
      <Briefcase className="w-10 h-10 text-lime-500 transition-colors duration-300 group-hover:text-lime-400" />
    ),
    title: "Real-Time Projects",
    description: "Gain hands-on experience with real-world projects.",
  },
  {
    icon: (
      <BookOpen className="w-10 h-10 text-lime-500 transition-colors duration-300 group-hover:text-lime-400" />
    ),
    title: "Hands-on Lab Guides",
    description: "Practical lab sessions to apply your skills.",
  },
  {
    icon: (
      <FileText className="w-10 h-10 text-lime-500 transition-colors duration-300 group-hover:text-lime-400" />
    ),
    title: "100+ Assessments",
    description: "Regular testing to track your progress.",
  },
  {
    icon: (
      <Layers className="w-10 h-10 text-lime-500 transition-colors duration-300 group-hover:text-lime-400" />
    ),
    title: "Guided Projects",
    description: "Step-by-step project guidance from industry pros.",
  },
  {
    icon: (
      <Award className="w-10 h-10 text-lime-500 transition-colors duration-300 group-hover:text-lime-400" />
    ),
    title: "Certification",
    description: "Earn a certificate to validate your skills.",
  },
];

export default function CourseFeatures() {
  return (
    <section className="bg-black text-white py-16" id="Courses">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Course Features
          </h2>
          <div className="mt-2 h-1 w-24 bg-lime-400 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              role="article"
              className="group bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-lime-500/30 hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
