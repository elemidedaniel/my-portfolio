import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/Projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return <div className="text-white p-20 text-center">Project Not Found</div>;

  return (
    <section className="bg-black text-white min-h-screen">

      {/* COVER IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full h-[70vh] relative overflow-hidden"
      >
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-center">
            {project.title}
          </h1>
        </div>
      </motion.div>

      {/* CENTER TEXT CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-16">

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Overview
          </h2>
          <p className="text-white/70 leading-relaxed text-lg">
            {project.description}
          </p>
        </motion.div>

        {/* What I Did */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            What I Did
          </h2>
          <p className="text-white/70 leading-relaxed text-lg">
            {project.whatIDid}
          </p>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Challenges & Solutions
          </h2>
          <ul className="space-y-3 text-white/70">
            {project.challenges.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-orange-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-4">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-white/20 rounded-full text-sm text-white/70 hover:bg-orange-500 hover:text-black transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* IMAGE GALLERY */}
      <div className="px-6 md:px-20 pb-20 grid md:grid-cols-2 gap-10">
        {project.images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt=""
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`rounded-3xl shadow-2xl ${
              i % 2 === 0 ? "md:-rotate-2" : "md:rotate-2"
            } hover:rotate-0 transition duration-500`}
          />
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-8 pb-32">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="px-10 py-4 bg-white text-black rounded-xl font-semibold hover:scale-110 transition duration-300"
        >
          View GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="px-10 py-4 border border-orange-500 text-orange-500 rounded-xl hover:bg-orange-500 hover:text-black transition duration-300"
        >
          Visit Website
        </a>
      </div>

    </section>
  );
}