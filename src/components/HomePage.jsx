import { motion } from "framer-motion";
import Socials from "./Socials";
import Mypage from "../assets/code.jpg";

export default function HomePage() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${Mypage})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 max-w-3xl"
        >
          <p className="uppercase tracking-widest text-orange-400">
            Frontend Developer
          </p>

          <h1 className="font-bold text-4xl md:text-7xl leading-tight text-white">
            <span className="block font-light text-gray-300">
              Elemide
            </span>
            Daniel
          </h1>

          <p className="text-lg text-white/70 max-w-xl">
            Building modern, user-focused digital experiences with clean,
            scalable, and performant code.
          </p>

          {/* CTA */}
          <div className="flex gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-orange-500 text-black font-medium hover:bg-orange-400 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              Let’s work together
            </a>
          </div>

          <Socials />
        </motion.div>
      </div>
    </section>
  );
}
