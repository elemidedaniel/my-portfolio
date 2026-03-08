import { motion, useScroll, useTransform, animate, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Socials from "../components/Socials";
import Mypage from "../assets/code.jpg";
import ToolsPage from "../components/ToolsPage";
import About from "../components/About";
import Modal from "../components/Modal";
import Services from "../components/Services";
import Contact from "../components/Contact";
import ProjectsPage from "../components/ProjectsSection";
import Reviews from "../components/Review";
import FAQ from "../components/Faq";

/* ─────────────────────────────────────────────────────
   Add to index.html <head>:
   <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
───────────────────────────────────────────────────── */

/* ── CountUp (triggers on scroll into view) ── */
function CountUp({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const ctrl = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(v) { setCount(Number.isInteger(value) ? Math.round(v) : v.toFixed(1)); },
    });
    return () => ctrl.stop();
  }, [started, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Rotating text ── */
function RotatingRole() {
  const roles = ["React Engineer", "TypeScript Developer", "Design Systems Builder", "Full-Stack Developer"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-5 overflow-hidden w-56">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[idx]}
          className="absolute text-[11px] uppercase tracking-[0.25em] text-orange-400"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {roles[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

/* ── Marquee strip ── */
function MarqueeStrip() {
  const tags = ["React", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion",
    "MongoDB", "TheX Library", "Open Source", "Cryptex", "Design Systems", "REST APIs", "JWT Auth"];
  return (
    <div className="relative overflow-hidden py-3 border-t border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
      <motion.div
        className="flex whitespace-nowrap gap-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        {[...Array(2)].map((_, i) => (
          <span key={i} className="flex">
            {tags.map(tag => (
              <span key={tag} className="flex items-center">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/15 px-6"
                  style={{ fontFamily: "'Inter', sans-serif" }}>{tag}</span>
                <span className="text-orange-500/40 text-xs">✦</span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Stars ── */
function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(4)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.01 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
        </svg>
      ))}
      <svg className="w-3.5 h-3.5 text-orange-400" viewBox="0 0 20 20">
        <defs><linearGradient id="hg"><stop offset="50%" stopColor="#fb923c" /><stop offset="50%" stopColor="transparent" /></linearGradient></defs>
        <path fill="url(#hg)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.175 0l-3.37 2.449c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.01 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
      </svg>
    </div>
  );
}

/* ── HERO ── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-black flex flex-col">

      {/* ── Parallax BG ── */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Mypage})` }}
        />
        {/* deep left-side fade so text always readable */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(100deg, rgba(0,0,0,0.98) 38%, rgba(0,0,0,0.70) 62%, rgba(0,0,0,0.88) 100%)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #000 0%, transparent 35%)" }} />
      </motion.div>

      {/* ── Ambient orange glow top-left ── */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)" }} />

      {/* ── Thin orange vertical accent ── */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{ background: "linear-gradient(to bottom, transparent 5%, #f97316 40%, #f97316 60%, transparent 95%)", opacity: 0.35 }} />

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="relative z-10 flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 xl:px-28 pt-24 pb-4"
      >
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-16 xl:gap-24 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col">

            {/* Available pill */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="w-fit flex items-center gap-2 px-3 py-1.5 mb-7 rounded-full border"
              style={{ borderColor: "rgba(74,222,128,0.2)", background: "rgba(74,222,128,0.04)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-[11px] uppercase tracking-[0.22em]"
                style={{ fontFamily: "'Inter', sans-serif" }}>Available for Work</span>
            </motion.div>

            {/* Cycling role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px bg-orange-500" />
              <RotatingRole />
            </motion.div>

            {/* ── NAME — big, serif-bold ── */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 leading-[1.05]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="block font-bold text-white"
                style={{ fontSize: "clamp(3.8rem, 5.5vw, 6.8rem)", letterSpacing: "-0.03em" }}>
                Elemide
              </span>
              <span
                className="block font-bold"
                style={{
                  fontSize: "clamp(2.8rem, 5.5vw, 5.8rem)",
                  letterSpacing: "-0.03em",
                  WebkitTextStroke: "2px #f97316",
                  color: "transparent",
                }}
              >
                Daniel.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="max-w-[480px] text-base md:text-lg leading-relaxed mb-10 text-white/45"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              I build refined digital products, AI-powered platforms,
              open source component libraries, and full-stack applications
              engineered to production standard.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#projects"
                className="group relative overflow-hidden inline-flex items-center gap-3 px-4 py-3 rounded-md  text-[12px] uppercase tracking-[0.18em] font-semibold text-black transition-all duration-200"
                style={{ background: "#f97316", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => e.currentTarget.style.background = "#fb923c"}
                onMouseLeave={e => e.currentTarget.style.background = "#f97316"}
              >
                View Selected Work
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="mailto:elemidedaniel4@gmail.com"
                className="group inline-flex items-center gap-3 px-4 py-3 rounded-md text-[12px] uppercase tracking-[0.18em] text-white/60 border transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.10)", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(249,115,22,0.45)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
              >
                Let's Work Together
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.82 }}>
              <Socials />
            </motion.div>
          </div>

          {/* ── RIGHT — Stat cards (desktop) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden xl:grid grid-cols-2 gap-3"
          >
            {[
              { label: "Years Experience", value: 3, suffix: "+", accent: true },
              { label: "Projects Shipped", value: 35, suffix: "+", accent: false },
              { label: "Clients Worldwide", value: 18, suffix: "+", accent: false },
              { label: "Avg Rating", value: 4.7, suffix: "", accent: false, stars: true },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col justify-between p-5 border"
                style={{
                  borderColor: s.accent ? "rgba(249,115,22,0.25)" : "rgba(255,255,255,0.06)",
                  background: s.accent ? "rgba(249,115,22,0.04)" : "rgba(255,255,255,0.02)",
                }}
              >
                <p
                  className="text-4xl font-extrabold text-white mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <CountUp value={s.value} suffix={s.suffix} />
                </p>
                {s.stars && <Stars />}
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/90 mt-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  {s.label}
                </p>
                {s.accent && <div className="mt-3 h-px bg-orange-500/40" />}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Mobile stats ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        className="xl:hidden relative z-10 grid grid-cols-4 border-t mx-6 sm:mx-12 mb-4"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        {[
          { label: "Exp", value: 3, suffix: "+ yrs" },
          { label: "Projects", value: 35, suffix: "+" },
          { label: "Clients", value: 18, suffix: "+" },
          { label: "Rating", value: 4.5, suffix: "" },
        ].map((s, i) => (
          <div key={s.label} className={`py-5 flex flex-col items-center ${i < 3 ? "border-r" : ""}`}
            style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <p className="text-2xl font-extrabold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="text-[10px] text-white/30 uppercase tracking-wider mt-1"
              style={{ fontFamily: "'Inter', sans-serif" }}>{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* ── Marquee at bottom ── */}
      <div className="relative z-10">
        <MarqueeStrip />
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-24 right-8 md:right-14 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          className="w-px h-14 origin-top"
          style={{ background: "linear-gradient(to bottom, #f97316, transparent)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

/* ── Featured Projects Strip ── */
function FeaturedStrip() {
  const projects = [
    { num: "01", title: "TheX", desc: "Open Source React Component Library", tag: "Design Systems", href: "https://thex-uw4j.vercel.app" },
    { num: "02", title: "Cryptex", desc: "AI-Powered Crypto Intelligence Platform", tag: "Full Stack", href: "https://signallens-virid.vercel.app" },
    { num: "03", title: "CareBridge", desc: "Adult Care Booking Platform", tag: "Frontend", href: "#projects" },
  ];

  return (
    <section className="bg-black">
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-28 pt-20 pb-8 flex items-end justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-orange-500 mb-2"
            style={{ fontFamily: "'Inter', sans-serif" }}>Selected Work</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Featured Projects</h2>
        </div>
        <a href="#projects" className="hidden md:inline-flex text-[11px] uppercase tracking-[0.2em] text-white/30 hover:text-orange-400 transition-colors duration-200"
          style={{ fontFamily: "'Inter', sans-serif" }}>
          View All →
        </a>
      </div>

      {/* List */}
      <div className="max-w-7xl mx-auto border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.55 }}
            className="group flex items-center justify-between px-8 sm:px-12 lg:px-20 xl:px-28 py-7 border-b transition-colors duration-200"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(249,115,22,0.03)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <div className="flex items-center gap-5 sm:gap-8 min-w-0">
              <span className="text-xs font-mono text-white/15 shrink-0">{p.num}</span>

              <span
                className="shrink-0 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 border"
                style={{ color: "#fb923c", borderColor: "rgba(249,115,22,0.2)", fontFamily: "'Inter', sans-serif" }}
              >
                {p.tag}
              </span>

              <div className="min-w-0">
                <p
                  className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-200 truncate"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {p.title}
                </p>
                <p className="hidden sm:block text-sm text-white/25 mt-0.5 truncate"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  {p.desc}
                </p>
              </div>
            </div>

            <motion.div
              className="ml-4 shrink-0 w-9 h-9 flex items-center justify-center border text-white/30 group-hover:border-orange-500/50 group-hover:text-orange-400 transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
              whileHover={{ rotate: -45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              →
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

/* ── Main ── */
export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <div style={{ background: "#000" }}>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Hero />
      <FeaturedStrip />
      <div className="bg-black">
        <section id="skills"><ToolsPage /></section>
        <section id="about"><About /></section>
        <section id="projects"><ProjectsPage /></section>
        <section id="services"><Services /></section>
        <section id="reviews"><Reviews /></section>
        <section id="faq"><FAQ /></section>
        <section id="contact"><Contact /></section>
        
      </div>
    </div>
  );
}