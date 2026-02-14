import workSpace from "../assets/danielspace.jpg";
import { motion } from "framer-motion";
import { title } from "framer-motion/client";
import { useState, useRef, useEffect } from "react";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);

  const sentences = [
      "I build scalable front-end systems with React and Next.js.",
      "I design structured UI architectures using Tailwind and reusable components.",
      "I engineer experiences that are fast, accessible, and conversion-focused."
  ];

  const impact = [
    "I transform product ideas into intuitive digital products.",
    "I collaborate closely with founders to ship meaningful features.",
    "My process blends strategy, clean code, and long-term scalability."
  ];

  // Detect if section is in viewport
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsActive(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="About"
      className={`relative w-full py-32 bg-black overflow-hidden ${
        isActive ? "cursor-none" : ""
      }`}
      onMouseMove={(e) => {
        if (isActive) {
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
      }}
    >
      {/* ================= CUSTOM CURSOR (ONLY ACTIVE WHEN IN VIEW) ================= */}

      {isActive && (
        <>
          {/* Main Dot */}
          <motion.div
            animate={{
              x: mousePosition.x - 8,
              y: mousePosition.y - 8,
              scale: isHovering ? 1.8 : 1,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed top-0 left-0 w-4 h-4 bg-orange-500 rounded-full z-50 pointer-events-none"
          />

          {/* Glow Ring */}
          <motion.div
            animate={{
              x: mousePosition.x - 40,
              y: mousePosition.y - 40,
              scale: isHovering ? 1.4 : 1,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="fixed top-0 left-0 w-20 h-20 border border-orange-500 rounded-full z-40 pointer-events-none opacity-40"
          />

          {/* Soft Aura */}
          <motion.div
            animate={{
              x: mousePosition.x - 100,
              y: mousePosition.y - 100,
            }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="fixed top-0 left-0 w-52 h-52 bg-orange-500 opacity-10 rounded-full pointer-events-none z-30"
          />
        </>
      )}

      {/* ================= CONTENT ================= */}

      <h1 className="text-white absolute top-32 md:top-20 left-1/2 -translate-x-1/2 text-[80px] md:text-[120px] lg:text-[200px] font-bold opacity-5 select-none pointer-events-none">
        DEVELOPER
      </h1>

      <div className="relative z-10 w-[90%] max-w-6xl mx-auto space-y-24">
        {/* HEADER */}
      

        {/* GRID */}
<section className="relative py-10 px-6 md:px-16 text-white">

  {/* Section Header */}
  <div className="mb-20 max-w-3xl">
    <p className="uppercase tracking-[0.4em] text-orange-500 text-xs mb-4">
      Approach
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
      How I Build & Deliver
    </h2>

    <div className="w-20 h-[2px] bg-orange-500 mt-6"></div>
  </div>

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ staggerChildren: 0.2 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-16 items-start"
  >

    {/* LEFT GRID */}
    <div>
      <h3 className="text-sm uppercase tracking-widest text-white/40 mb-8">
        Engineering Focus
      </h3>

      <div className="space-y-6 text-gray-300 text-xl font-light leading-relaxed">
        {sentences.map((text, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`transition-all duration-300 hover:scale-[1.05] hover:text-white ${
              index === 0 ? "text-2xl font-semibold text-white" : ""
            }`}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>

    {/* RIGHT GRID */}
    <div>
      <h3 className="text-sm uppercase tracking-widest text-white/40 mb-8">
        Product Impact
      </h3>

      <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
        {impact.map((text, index) => (
          <p
            key={index}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative group inline-block overflow-hidden"
          >
            <span className="absolute inset-0 bg-orange-500 scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></span>
            <span className="relative group-hover:text-black transition-colors duration-500">
              {text}
            </span>
          </p>
        ))}
      </div>
    </div>

  </motion.div>

  {/* Bottom Metrics Row */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 border-t border-white/10 pt-16 text-center">
    <div>
      <p className="text-3xl font-semibold">3+</p>
      <p className="text-white/40 text-sm mt-2">Years Experience</p>
    </div>

    <div>
      <p className="text-3xl font-semibold">30+</p>
      <p className="text-white/40 text-sm mt-2">Projects Built</p>
    </div>

    <div>
      <p className="text-3xl font-semibold">100%</p>
      <p className="text-white/40 text-sm mt-2">Responsive</p>
    </div>

    <div>
      <p className="text-3xl font-semibold">∞</p>
      <p className="text-white/40 text-sm mt-2">Learning Mode</p>
    </div>
  </div>

</section>


        {/* VISION BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative md:w-3/4 md:ml-auto space-y-6"
        >
          <h3 className="text-3xl md:text-4xl font-magazine text-white">
            Vision & Approach
          </h3>

          <p
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="text-gray-300 text-lg leading-relaxed"
          >
            My <span className="text-orange-500 font-extralight">vision</span> is to build products that feel effortless to use but are
            engineered with precision under the hood. I approach every client
            project with clarity, structured planning, and deep collaboration,
            ensuring the final product is not just beautiful, but strategically
            aligned with business goals.
          </p>

          <p
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="text-gray-400 text-base leading-relaxed"
          >
            From concept to deployment, I prioritize communication,
            performance optimization, maintainable codebases, and long term
            scalability. I don’t just deliver interfaces, I deliver systems
            built to grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}





