import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import brands1 from "../assets/projects/brands1.jpg";
import profile1 from "../assets/projects/project31.jpg";
import profile2 from "../assets/projects/profile2.jpeg";
import project16 from "../assets/projects/project16.png";
import profile7 from "../assets/projects/profile7.jpeg";
import project18 from "../assets/projects/project18.jpg";
import project21 from "../assets/projects/project21.jpg";
import project34 from "../assets/projects/project34.jpg";
import projectWeb3 from "../assets/projects/project-web3.jpg";
import project27 from "../assets/projects/project27.jpg";
import project28 from "../assets/projects/project28.jpg";
import project33 from "../assets/projects/project33.jpg";

const projects = [
  {
    id: 1,
    title: "Admin Page",
    image: project16,
    link: "https://admindashboard-rose-ten.vercel.app/",
  },
  { id: 2, title: "Landing Page Redesign", image: profile2 },
  { id: 3, title: "Project Management App", image: projectWeb3 },
  { id: 5, title: "Portfolio Website", image: profile7 },
  { id: 6, title: "SaaS Marketing Page", image: project18 },
  { id: 7, title: "3D implementation", image: profile1 },
  {
    id: 8,
    title: "Expense Tracker",
    image: project34,
    link: "https://expense-tracker-fawn-one.vercel.app/",
  },
  { id: 10, title: "Fintech Web App", image: project33 },
  { id: 12, title: "Email Collection", image: project27 },
];

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);

  // ESC key closes lightbox
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-24 bg-gradient-to-b from-white to-slate-50"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Selected <span className="text-orange-500">Projects</span>
        </h2>

        <p className="text-slate-600 text-base md:text-lg">
          A collection of interfaces and web experiences built with a focus on
          usability, performance, and clean visual design.
        </p>
      </motion.div>

      {/* Modern Responsive Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            onClick={() => {
              if (project.link) {
                window.open(project.link, "_blank");
              } else {
                setActiveProject(project);
              }
            }}
            className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-lg font-semibold tracking-wide">
                  {project.title}
                </h3>
                <p className="text-sm opacity-80">Click to preview</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setActiveProject(null)}
          >
            <motion.img
              src={activeProject.image}
              alt={activeProject.title}
              className="w-full max-w-5xl max-h-[85vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onMouseDown={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
