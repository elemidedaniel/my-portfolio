import { motion, useReducedMotion } from "framer-motion";
import Socials from "./Socials";
import Mypage from "../assets/code.jpg";

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative min-h-[100svh] overflow-x-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-cover bg-center bg-no-repeat
          md:bg-fixed
          bg-bottom
          object-cover
        "
        style={{ backgroundImage: `url(${Mypage})` }}
      />

      {/* Overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-6 md:px-0 flex flex-col justify-center min-h-[100svh] py-16 md:py-0">
        <motion.div
          initial={
            prefersReducedMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 } // smaller offset for mobile
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-2 md:gap-4 max-w-2xl"
        >
          {/* Role */}
          <p className="uppercase tracking-widest text-orange-400 text-xs md:text-sm font-mono">
            Frontend Developer
          </p>

          {/* Name */}
          <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-snug text-white font-[Rajdhani]">
            <span className="text-gray-300 font-light inline-block">
              Elemide&nbsp;
            </span>
            Daniel
          </h1>

          {/* Tagline */}
          <p className="text-white/70 text-base sm:text-lg md:text-xl font-sans">
            Crafting next-gen digital experiences with precision, performance, and style.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl bg-orange-500 text-black font-semibold hover:bg-orange-400 transition text-sm sm:text-base"
            >
              View Projects
            </a>

            <a
              href="mailto:elemidedaniel4@gmail.com"
              className="px-5 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition text-sm sm:text-base"
            >
              Let’s work together
            </a>
          </div>

          {/* Social links */}
          <Socials />
        </motion.div>
      </div>
    </section>
  );
}
