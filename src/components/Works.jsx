import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import brands1 from "../assets/projects/brands1.jpg";
import profile1 from "../assets/projects/project31.jpg";
import profile2 from "../assets/projects/profile2.jpeg";
import project16 from "../assets/projects/project16.jpg";
import profile7 from "../assets/projects/profile7.jpeg";
import project18 from "../assets/projects/project18.jpg";
import project21 from "../assets/projects/project21.jpg";
import project34 from "../assets/projects/project34.jpg";
import projectWeb3 from "../assets/projects/project web3.jpg";
import project27 from "../assets/projects/project27.jpg";
import project28 from "../assets/projects/project28.jpg";
import project33 from "../assets/projects/project33.jpg";


const projects = [
  { id: 1, title: "3D implementation", image: profile1 },
  { id: 2, title: "Landing Page Redesign", image: profile2 },
  { id: 3, title: "Project Management App", image: projectWeb3},
  { id: 4, title: "Product Showcase", image: brands1 },
  { id: 5, title: "Portfolio Website", image: profile7 },
  { id: 6, title: "SaaS Marketing Page", image: project18 },
  { id: 7, title: "Admin Panel UI", image: project21 },
  { id: 8, title: "Expense Tracker", image: project34 },
  { id: 9, title: "Analytics Dashboard", image: project16 },
  { id: 10, title:  "Fintech Web App", image: project33 },
  { id: 11, title: "Design System", image: project28 },
  { id: 12, title: "Email Collection", image: project27},
];


export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);

  // ESC key close
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
      className="min-h-screen text-white px-6 md:px-20 py-24"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-16"
      >
        <h2 className="text-2xl md:text-5xl font-bold mb-4">
          Selected <span className="text-orange-500">Projects</span>
        </h2>
        <p className="text-white/70">
          A collection of interfaces and web experiences I’ve built with a focus
          on performance, usability, and clean design.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            onClick={() => setActiveProject(project)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`
              relative cursor-pointer overflow-hidden rounded-2xl group shadow-xl
              ${index % 3 === 0 ? "lg:row-span-2" : ""}
              ${index % 4 === 0 ? "lg:col-span-2" : ""}
            `}
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover
                         transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-5">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // 🔒 capture event BEFORE click reaches grid
            onMouseDown={(e) => {
              e.stopPropagation();
              setActiveProject(null);
            }}
          >
            <motion.img
              src={activeProject.image}
              alt={activeProject.title}
              className="
                w-full
                max-w-3xl
                md:max-w-4xl
                max-h-[80vh]
                object-contain
                rounded-2xl
                shadow-2xl
              "
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              // ❌ clicking image does NOT close
              onMouseDown={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

