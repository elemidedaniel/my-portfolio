import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

// Example services
const services = [
  {
    title: "Web Development",
    description: "I build responsive, performant websites using React, Tailwind, and modern web technologies.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly and visually appealing interfaces for web and mobile apps.",
    icon: "🎨",
  },
  {
    title: "E-commerce Solutions",
    description: "Creating scalable and secure e-commerce platforms tailored to your business needs.",
    icon: "🛒",
  },
  {
    title: "Website Optimization",
    description: "Improving speed, SEO, and accessibility to maximize user engagement and conversions.",
    icon: "⚡",
  },
  {
    title: "Portfolio & Landing Pages",
    description: "Building creative portfolio and landing pages that attract and convert visitors.",
    icon: "🌟",
  },
  {
    title: "API Integration",
    description: "Seamlessly integrating third-party APIs to enhance your website or web app.",
    icon: "🔌",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  hover: { scale: 1.06, y: -5, transition: { type: "spring", stiffness: 200 } },
};

// Floating background circles
const FloatingCircle = ({ size, x, y, color, duration }) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{ width: size, height: size, top: y, left: x }}
    animate={{ y: [0, 20, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen bg-linear-to-b from-gray-900 to-gray-800 text-white overflow-hidden px-6 md:px-20 py-20">
      
      {/* Floating Background Shapes */}
      <FloatingCircle size={100} x={50} y={50} color="bg-orange-500/20" duration={6} />
      <FloatingCircle size={150} x={300} y={200} color="bg-purple-500/20" duration={8} />
      <FloatingCircle size={80} x={600} y={100} color="bg-blue-500/20" duration={5} />
      <FloatingCircle size={120} x={800} y={300} color="bg-pink-500/20" duration={7} />

      {/* Heading */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-500">
          My Services
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          I help clients build high-quality digital experiences that are fast, responsive, and visually appealing.
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              {service.icon}
            </motion.div>
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
