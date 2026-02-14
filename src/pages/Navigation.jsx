import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="fixed top-4 left-1/2 -translate-x-1/2 
      flex items-center gap-8 px-8 py-4 
      bg-slate-900/60 backdrop-blur-xl 
      border border-white/10 
      rounded-2xl 
      shadow-[0_8px_30px_rgba(15,23,42,0.25)] 
      w-fit z-50"
    >
      <ul className="flex flex-row gap-4 md:gap-8 text-white/90">
      <h2 className="font-bold text-orange-400 text-md">Developer</h2>
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>

        <NavLink to="/projects" className="nav-item">
          Projects
        </NavLink>
      </ul>
    </motion.div>
  );
}