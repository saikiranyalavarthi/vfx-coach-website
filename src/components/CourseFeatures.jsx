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
    icon: <MessageSquare className="w-10 h-10 text-lime-500" />,
    title: "Live Doubt Solving",
    description: "Get real-time answers from experts.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-lime-500" />,
    title: "Real-Time Projects",
    description: "Gain hands-on experience with real-world projects.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-lime-500" />,
    title: "Hands-on Lab Guides",
    description: "Practical lab sessions to apply your skills.",
  },
  {
    icon: <FileText className="w-10 h-10 text-lime-500" />,
    title: "100+ Assessments",
    description: "Regular testing to track your progress.",
  },
  {
    icon: <Layers className="w-10 h-10 text-lime-500" />,
    title: "Guided Projects",
    description: "Step-by-step project guidance from industry pros.",
  },
  {
    icon: <Award className="w-10 h-10 text-lime-500" />,
    title: "Certification",
    description: "Earn a certificate to validate your skills.",
  },
];

export default function CourseFeatures() {
  return (
    <section className="bg-black text-white py-16" id="course-features">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Course Features
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center"
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
