import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/Projects";

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen px-6 md:px-20 py-24 bg-black">

      <div className="max-w-2xl mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Selected <span className="text-orange-500">Projects</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-16">

        {/* LEFT EDITORIAL TEXT */}
        <div className="md:w-1/6">
          <h4 className="
            text-white/80
            text-sm md:text-md
            italic
            font-light
            leading-relaxed
            tracking-wide
            border-l border-orange-500/50
            pl-6
          ">
            Each project represents more than visuals or code, it reflects a
            deliberate process of research, structured engineering, and refined
            user experience design. I focus on building scalable front-end
            systems that are fast, accessible, and strategically aligned with
            business goals. From concept to deployment, every decision is made
            with clarity, performance, and long-term maintainability in mind.
          </h4>

          <div className="w-12 h-[2px] bg-orange-500 mt-8"></div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid gap-10 md:grid-cols-2 flex-1">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl"
            >
              <img
                src={project.cover}
                alt={project.title}
                className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-sm text-orange-400 mt-2">
                    View Details →
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
