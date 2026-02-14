import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import Socials from "../components/Socials";
import Mypage from "../assets/code.jpg";

import ToolsPage from "../components/ToolsPage";
import About from "../components/About";
import Modal from "../components/Modal";

import Services from "../components/Services";
import Footer from "../components/Footer";
import ProjectsPage from "../components/ProjectsSection";
import Reviews from "../components/Review";
import FAQ from "../components/Faq";

/* -----------------------------
   CountUp
-------------------------------- */
function CountUp({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        if (Number.isInteger(value)) {
          setCount(Math.round(latest));
        } else {
          setCount(latest.toFixed(1));
        }
      },
    });

    return () => controls.stop();
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* -----------------------------
   Star Rating (4.5 stars)
-------------------------------- */
function StarRating() {
  return (
    <div className="flex items-center gap-1">
      {[...Array(4)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.01 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
        </svg>
      ))}

      {/* Half star */}
      <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          fill="url(#half)"
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.01 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z"
        />
      </svg>
    </div>
  );
}

/* -----------------------------
   Liquid Glass Panel
-------------------------------- */
function GlassPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="
        backdrop-blur-1xl bg-white/0
        border border-white/20
        rounded-3xl p-8
        shadow-[0_0_80px_rgba(255,255,255,0.08)]
        w-full max-w-md
      "
    >
      <div className="flex flex-col gap-3 md:gap-6 text-white">
        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">
            Clients Worldwide
          </p>
          <p className="text-2xl md:text-3xl font-bold border border-white/60 bg-black rounded-lg px-4 py-2 mt-1 w-max">
            <CountUp value={18} suffix="+" />
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-white/60">
            Average Rating
          </p>
          <div className="flex items-center gap-3 border border-white/60 bg-black rounded-lg px-4 py-2 mt-1 w-max">
            <span className="text-lg font-semibold">
              <CountUp value={4.5} />
            </span>
            <StarRating />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">
              Projects
            </p>
            <p className="text-lg md:text-xl font-bold border border-white/60 bg-black rounded-lg px-4 py-2 mt-1 w-max">
              <CountUp value={35} suffix="+" />
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">
              Experience
            </p>
            <p className="text-lg md:text-xl font-bold border border-white/60 bg-black rounded-lg px-4 py-2 mt-1 w-max">
              <CountUp value={3} suffix=" yrs" />
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* -----------------------------
   Home Page (NEW UI)
-------------------------------- */
export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      {/* ================= HERO SECTION (UNCHANGED) ================= */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Mypage})` }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center w-full">
            {/* LEFT */}
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white flex flex-col justify-center"
            >
              {/* Available Badge */}
              <div className="mt-24 md:mt-0 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/10 text-green-400 text-xs tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available for Work
                </span>
              </div>

              {/* Role */}
              <p className="uppercase tracking-[0.4em] text-white/40 text-xs md:text-sm font-medium">
                <span className="text-orange-400">Frontend</span> Engineer
              </p>

              {/* Name */}
              <h1 className="leading-tight mt-4">
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
                  Elemide Daniel
                </span>
              </h1>

              {/* Divider Line */}
              <div className="w-16 h-[2px] bg-orange-500 mt-6 mb-6" />

              {/* Description */}
              <p className="text-white/70 max-w-lg text-base md:text-lg leading-relaxed">
                I craft refined digital experiences using React, Next.js and
                modern frontend architecture, focused on performance,
                scalability and real-world impact.
              </p>

              {/* CTAs */}
              <div className="flex flex-row gap-4 mt-8">
                <a
                  href="#projects"
                  className="px-3 md:px-7 py-2 md:py-3 rounded-lg bg-white text-black font-medium hover:opacity-90 transition"
                >
                  View Selected Work
                </a>

                <a
                  href="mailto:elemidedaniel4@gmail.com"
                  className="px-3 md:px-7 py-2 md:py-3 rounded-lg border border-white/20 hover:bg-white/10 transition"
                >
                  Let’s Work Together
                </a>
              </div>

              {/* Socials */}
              <div className="mt-10">
                <Socials />
              </div>
            </motion.div>

            {/* RIGHT */}
            <div className="flex justify-center lg:justify-end">
              <GlassPanel />
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW SECTIONS ADDED ================= */}

      <div className="bg-black">
        {/* Skills */}
        <section id="skills">
          <ToolsPage />
        </section>

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Projects */}
        <section id="projects">
          <ProjectsPage />
        </section>

        {/* Services */}
        <section id="services">
          <Services />
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-14-0">
          <Reviews />
        </section>

        {/* FAQ */}
        <section id="faq">
          <FAQ />
        </section>
      </div>
    </>
  );
}
