import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ORANGE = "#f97316";

/* ── Fade-up animation helper ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] },
});

/* ── Input Field ── */
function Field({ label, name, type = "text", placeholder, textarea = false, value, onChange, focused, onFocus, onBlur }) {
  const isFocused = focused === name;
  const base = {
    background: "rgba(255,255,255,0.03)",
    border: isFocused ? "1px solid rgba(249,115,22,0.55)" : "1px solid rgba(255,255,255,0.07)",
    borderRadius: "6px",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border 0.2s, box-shadow 0.2s",
    boxShadow: isFocused ? "0 0 0 3px rgba(249,115,22,0.08)" : "none",
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[10px] uppercase tracking-[0.22em]"
        style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required
          rows={5}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{ ...base, padding: "14px 16px", resize: "none" }}
          className="placeholder-white/20"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          style={{ ...base, padding: "14px 16px" }}
          className="placeholder-white/20"
        />
      )}
    </div>
  );
}

/* ── Info card ── */
function InfoCard({ icon, label, value, href, delay }) {
  return (
    <motion.a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      {...fadeUp(delay)}
      className="group flex items-center gap-4 p-5 transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "8px",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(249,115,22,0.3)";
        e.currentTarget.style.background = "rgba(249,115,22,0.03)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
      }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center shrink-0"
        style={{
          background: "rgba(249,115,22,0.08)",
          border: "1px solid rgba(249,115,22,0.15)",
          borderRadius: "8px",
          color: ORANGE,
        }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.2em] mb-0.5"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}>
          {label}
        </p>
        <p className="text-sm font-medium text-white truncate group-hover:text-orange-400 transition-colors duration-200"
          style={{ fontFamily: "'Inter', sans-serif" }}>
          {value}
        </p>
      </div>
    </motion.a>
  );
}

/* ── Main Contact Page ── */
export default function ContactPage() {
  const formRef = useRef(null);
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ user_name: "", user_email: "", subject: "", message: "" });

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_9koqt29", "template_8xt5vvm", formRef.current, "44k1lFoM07Rb93gTw")
      .then(() => { setSuccess(true); setLoading(false); })
      .catch(() => { setLoading(false); alert("Something went wrong. Please try again."); });
  };

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>

      {/* ── Top orange line ── */}
      <div className="h-[2px] w-full"
        style={{ background: "linear-gradient(to right, transparent, #f97316 30%, #fb923c 70%, transparent)" }} />

      {/* ── Ambient glow ── */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top left, rgba(249,115,22,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20 md:py-28">

        {/* ── Header ── */}
        <div className="mb-16 md:mb-20">
          <motion.p {...fadeUp(0)}
            className="text-[11px] uppercase tracking-[0.3em] text-orange-500 mb-3"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            Get in touch
          </motion.p>
          <motion.h1 {...fadeUp(0.08)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "-0.02em" }}>
            Let's Work{" "}
            <span style={{ WebkitTextStroke: "2px #f97316", color: "transparent" }}>
              Together.
            </span>
          </motion.h1>
          <motion.p {...fadeUp(0.14)}
            className="text-base md:text-lg max-w-xl"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Whether you have a project in mind, a job opportunity, or just want to say hello,
            my inbox is always open.
          </motion.p>
        </div>

        {/* ── Grid — form + sidebar ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 xl:gap-16">

          {/* ── LEFT — Form ── */}
          <motion.div {...fadeUp(0.1)}>
            {!success ? (
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-5"
              >
                {/* Row: name + email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field
                    label="Your Name" name="user_name" placeholder="e.g. John Smith"
                    value={form.user_name} onChange={handleChange}
                    focused={focused} onFocus={() => setFocused("user_name")} onBlur={() => setFocused("")}
                  />
                  <Field
                    label="Email Address" name="user_email" type="email" placeholder="e.g. hello@company.com"
                    value={form.user_email} onChange={handleChange}
                    focused={focused} onFocus={() => setFocused("user_email")} onBlur={() => setFocused("")}
                  />
                </div>

                {/* Subject */}
                <Field
                  label="Subject" name="subject" placeholder="e.g. Frontend Developer Role / Project Collaboration"
                  value={form.subject} onChange={handleChange}
                  focused={focused} onFocus={() => setFocused("subject")} onBlur={() => setFocused("")}
                />

                {/* Message */}
                <Field
                  label="Message" name="message" textarea placeholder="Tell me about your project, timeline, budget, or whatever's on your mind..."
                  value={form.message} onChange={handleChange}
                  focused={focused} onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                />

                {/* Submit */}
                <div className="flex items-center gap-5 pt-2">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-3 px-8 py-4 text-[12px] uppercase tracking-[0.18em] font-semibold text-black transition-all duration-200 disabled:opacity-50"
                    style={{ background: ORANGE, borderRadius: "6px", fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => !loading && (e.currentTarget.style.background = "#fb923c")}
                    onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}
                  >
                    {loading ? (
                      <>
                        <motion.span
                          className="w-3.5 h-3.5 rounded-full border-2 border-black/30 border-t-black inline-block"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                      </>
                    )}
                  </motion.button>
                  <p className="text-[11px]"
                    style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'Inter', sans-serif" }}>
                    I reply within 24 hours.
                  </p>
                </div>
              </form>
            ) : (
              /* ── Success ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start justify-center py-20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                  className="w-14 h-14 flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(249,115,22,0.08)",
                    border: "1px solid rgba(249,115,22,0.25)",
                    borderRadius: "8px",
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <motion.path
                      d="M5 12l5 5L19 7"
                      stroke={ORANGE}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    />
                  </svg>
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Message Sent!
                </h3>
                <p className="text-base max-w-md"
                  style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
                  Thanks for reaching out. I've received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSuccess(false); setForm({ user_name: "", user_email: "", subject: "", message: "" }); }}
                  className="mt-8 text-[11px] uppercase tracking-[0.2em] text-orange-400 hover:text-orange-300 transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  ← Send another message
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* ── RIGHT — Sidebar ── */}
          <div className="flex flex-col gap-4">

            {/* Info cards */}
            <InfoCard
              delay={0.15}
              label="Email"
              value="elemidedaniel4@gmail.com"
              href="mailto:elemidedaniel4@gmail.com"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
            />

            <InfoCard
              delay={0.2}
              label="Phone / WhatsApp"
              value="+234 906 920 6248"
              href="https://wa.me/2349069206248"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 0 1 .07 3.18 2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.75-.75a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              }
            />

            <InfoCard
              delay={0.25}
              label="Location"
              value="Lagos, Nigeria — Remote Worldwide"
              href="#"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            />

            <InfoCard
              delay={0.3}
              label="GitHub"
              value="github.com/elemidedaniel"
              href="https://github.com/elemidedaniel"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              }
            />

            {/* Availability card */}
            <motion.div
              {...fadeUp(0.35)}
              className="mt-2 p-6"
              style={{
                background: "rgba(249,115,22,0.04)",
                border: "1px solid rgba(249,115,22,0.15)",
                borderRadius: "8px",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.22em] text-green-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  Available for Work
                </span>
              </div>
              <p className="text-sm text-white font-medium mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Open to new opportunities
              </p>
              <p className="text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}>
                Full-time, contract, or freelance roles. Comfortable with remote and async workflows across UK, US, and EU time zones.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Remote", "Full-time", "Contract", "Freelance"].map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider px-2.5 py-1"
                    style={{
                      color: "#f97316",
                      border: "1px solid rgba(249,115,22,0.2)",
                      borderRadius: "4px",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}