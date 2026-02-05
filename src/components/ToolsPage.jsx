import { motion, AnimatePresence } from "framer-motion";

import Css from "../assets/css.png";
import Figma from "../assets/figma.png";
import Git from "../assets/git.png";
import Html from "../assets/html5.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwindcss.png";
import Bootstrap from "../assets/bootstrap.png";

/* -----------------------------
   SKILLS DATA
-------------------------------- */
const skills = [
  { name: "HTML", icon: Html, level: 95, years: 4 },
  { name: "CSS", icon: Css, level: 90, years: 4 },
  { name: "JavaScript", icon: Javascript, level: 88, years: 3 },
  { name: "React", icon: ReactLogo, level: 85, years: 3 },
  { name: "Tailwind", icon: Tailwind, level: 90, years: 2 },
  { name: "Bootstrap", icon: Bootstrap, level: 80, years: 2 },
  { name: "Git", icon: Git, level: 85, years: 3 },
  { name: "Figma", icon: Figma, level: 75, years: 2 },
];

/* -----------------------------
   SKILL CARD
-------------------------------- */
function SkillCard({ skill }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="
        group relative
        rounded-xl p-4
        bg-white
        border border-gray-200
        shadow-sm
        w-32 h-30
        md:w-32 md:h-30
        flex flex-col justify-between items-center
        cursor-pointer
        hover:shadow-lg
        transition
      "
    >
      {/* Years */}
      <div className="absolute top-2 right-2 text-[10px] px-2 py-1 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition">
        {skill.years} yrs
      </div>

      {/* Icon */}
      <motion.img
        src={skill.icon}
        alt={skill.name}
        className="w-10 h-10 object-contain mb-3 mx-auto"
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />

      {/* Name */}
      <p className="text-sm text-gray-800 mb-2 text-center">
        {skill.name}
      </p>

      {/* Progress */}
      <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-orange-400 to-pink-500"
        />
      </div>
    </motion.div>
  );
}

/* -----------------------------
   MAIN SECTION
-------------------------------- */
export default function SkillsSection() {
  return (
    <section className="w-full mt-14 px-4">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h2 className="text-gray-800 text-3xl font-semibold">
          Skills
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence>
          <motion.div
            layout
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              gap-4
              place-items-center
            "
          >
            {skills.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
