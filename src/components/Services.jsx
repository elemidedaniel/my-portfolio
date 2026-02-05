import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Responsive, high-performance websites built with React, Tailwind, and modern best practices.",
  },
  {
    title: "UI / UX Design",
    description:
      "Clean, intuitive interfaces designed to make products easy to use and visually refined.",
  },
  {
    title: "E-commerce Platforms",
    description:
      "Scalable online stores with secure payments and conversion-focused user flows.",
  },
  {
    title: "Performance & SEO Optimization",
    description:
      "Improving speed, accessibility, and search visibility for better engagement.",
  },
  {
    title: "Landing Pages & Portfolios",
    description:
      "High-converting pages crafted to communicate value and capture attention.",
  },
  {
    title: "API & System Integrations",
    description:
      "Connecting third-party services and APIs seamlessly into your product.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6 lg:px-20 bg-gradient-to-b from-orange-50/40 to-white"
    >
      {/* Header */}
      <div className="max-w-3xl">
        <p className="text-xs tracking-[0.35em] text-orange-400 mb-6">
          SERVICES
        </p>

        <h2 className="font-grat text-[clamp(2.2rem,4vw,3.5rem)] leading-tight">
          What I Help Clients Build
        </h2>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl">
          I design and develop digital products that are fast, elegant, and
          built with attention to detail from concept to deployment.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group bg-white border border-gray-100 rounded-2xl p-8
  shadow-sm hover:shadow-xl hover:-translate-y-1
  transition-all duration-300"
          >
            <div
              className="w-10 h-[3px] bg-orange-400/80 mb-6 rounded-full
  group-hover:w-16 transition-all duration-300"
            />

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {service.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
