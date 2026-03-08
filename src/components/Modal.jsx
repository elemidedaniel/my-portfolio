import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Astronut from "../assets/Astronut.png";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");

  function closeModal() { setIsOpen(false); }

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_9koqt29", "template_8xt5vvm", e.target, "44k1lFoM07Rb93gTw")
      .then(() => { setSuccess(true); setLoading(false); })
      .catch(() => { setLoading(false); alert("Something went wrong. Please try again."); });
  }

  const inputStyle = (name) => ({
    background: "rgba(255,255,255,0.04)",
    border: focused === name
      ? "1px solid rgba(249,115,22,0.55)"
      : "1px solid rgba(255,255,255,0.08)",
    borderRadius: "8px",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    padding: "12px 14px",
    transition: "border 0.2s, box-shadow 0.2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(249,115,22,0.08)" : "none",
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            className="fixed inset-0 z-40"
            style={{ background: "rgba(0,0,0,0.80)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* ══════════════════════════════════════
              MOBILE — bottom sheet (< sm)
          ══════════════════════════════════════ */}
          <motion.div
            className="fixed inset-x-0 bottom-0 z-50 sm:hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative overflow-hidden w-full"
              style={{
                background: "#0d0d0d",
                borderTop: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px 20px 0 0",
                boxShadow: "0 -20px 60px rgba(0,0,0,0.8)",
                paddingBottom: "env(safe-area-inset-bottom, 16px)",
              }}
            >
              {/* Orange top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(to right, transparent, #f97316 30%, #fb923c 70%, transparent)" }} />

              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-white/15" />
              </div>

              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center"
                style={{ color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px" }}
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              {!success ? (
                <div className="px-5 pt-2 pb-6">
                  {/* Header row */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.img
                      src={Astronut}
                      alt="Astronaut"
                      className="w-14 h-14 object-contain"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-orange-500 mb-0.5"
                        style={{ fontFamily: "'Inter', sans-serif" }}>
                        Open to opportunities
                      </p>
                      <h2 className="text-lg font-bold text-white leading-tight"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Let's Work Together
                      </h2>
                      <p className="text-xs text-white/35 mt-0.5"
                        style={{ fontFamily: "'Inter', sans-serif" }}>
                        I'll reply within 24 hours.
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={sendEmail} className="flex flex-col gap-3">
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] mb-1.5"
                        style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}>
                        Your Name
                      </label>
                      <input
                        type="text" name="user_name" placeholder="e.g. John Smith" required
                        onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                        style={inputStyle("name")}
                        className="placeholder-white/20"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.2em] mb-1.5"
                        style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}>
                        Email Address
                      </label>
                      <input
                        type="email" name="user_email" placeholder="e.g. hello@company.com" required
                        onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                        style={inputStyle("email")}
                        className="placeholder-white/20"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 mt-1 text-[12px] uppercase tracking-[0.18em] font-semibold text-black disabled:opacity-50"
                      style={{ background: "#f97316", borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.span
                            className="w-3.5 h-3.5 rounded-full border-2 border-black/30 border-t-black inline-block"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </span>
                      ) : "Get in Touch →"}
                    </motion.button>

                    <p className="text-center text-[10px] text-white/20"
                      style={{ fontFamily: "'Inter', sans-serif" }}>
                      No spam. Only relevant replies.
                    </p>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center text-center px-5 py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-14 h-14 flex items-center justify-center mb-4"
                    style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: "12px" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <motion.path d="M5 12l5 5L19 7" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.2, duration: 0.5 }} />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Message Received 🎉</h3>
                  <p className="text-sm text-white/40 max-w-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}>
                    I'll get back to you within 24 hours.
                  </p>
                  <button onClick={closeModal}
                    className="mt-6 px-7 py-3 text-[11px] uppercase tracking-[0.18em] font-semibold text-black"
                    style={{ background: "#f97316", borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}>
                    Back to Portfolio
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* ══════════════════════════════════════
              DESKTOP — centered modal (sm+)
          ══════════════════════════════════════ */}
          <div
            className="hidden sm:flex fixed inset-0 z-50 items-center justify-center px-4"
            onClick={closeModal}
          >
            <motion.div
              onClick={e => e.stopPropagation()}
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden w-full"
              style={{
                maxWidth: "820px",
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "18px",
                boxShadow: "0 0 0 1px rgba(249,115,22,0.07), 0 40px 100px rgba(0,0,0,0.9)",
              }}
            >
              {/* Orange top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(to right, transparent, #f97316 30%, #fb923c 70%, transparent)" }} />

              {/* Ambient glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)" }} />

              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center transition-all duration-200"
                style={{ color: "rgba(255,255,255,0.25)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "6px" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(249,115,22,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.25)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              {!success ? (
                <div className="flex">
                  {/* Left panel */}
                  <div
                    className="relative flex flex-col items-center justify-center px-8 py-12 w-[42%] shrink-0"
                    style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    {/* Grid bg */}
                    <div className="absolute inset-0 opacity-[0.025]" style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }} />

                    {/* Astronaut */}
                    <motion.div
                      animate={{ y: [0, -14, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10 mb-3"
                    >
                      <div className="absolute inset-0 blur-2xl opacity-25"
                        style={{ background: "radial-gradient(circle, #f97316, transparent)" }} />
                      <img src={Astronut} alt="Astronaut"
                        className="relative w-42 h-42 object-contain drop-shadow-2xl" />
                    </motion.div>

                    {/* Shadow */}
                    <motion.div
                      animate={{ scaleX: [1, 0.65, 1], opacity: [0.25, 0.1, 0.25] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-14 h-2 rounded-full mb-8"
                      style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.5), transparent)" }}
                    />

                    <div className="relative z-10 text-center">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-orange-500 mb-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}>
                        Open to opportunities
                      </p>
                      <h3 className="text-xl font-bold text-white mb-2"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Let's Build Something
                      </h3>
                      <p className="text-sm leading-relaxed"
                        style={{ color: "rgba(255,255,255,0.32)", fontFamily: "'Inter', sans-serif" }}>
                        Drop your details and I'll reach out personally within 24 hours.
                      </p>
                    </div>

                    {/* Trust tags */}
                    <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-7 pt-6 border-t w-full"
                      style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                      {["Remote OK", "Full-time / Contract", "≤ 24hr Reply"].map(tag => (
                        <span key={tag}
                          className="text-[9px] uppercase tracking-wider"
                          style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'Inter', sans-serif" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right panel — form */}
                  <div className="flex-1 px-8 py-12 flex flex-col justify-center">
                    <div className="mb-7">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-orange-500 mb-1.5"
                        style={{ fontFamily: "'Inter', sans-serif" }}>
                        Get in touch
                      </p>
                      <h2 className="text-2xl font-bold text-white"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Start a Conversation
                      </h2>
                    </div>

                    <form onSubmit={sendEmail} className="flex flex-col gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] mb-1.5"
                          style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}>
                          Your Name
                        </label>
                        <input
                          type="text" name="user_name" placeholder="e.g. John Smith" required
                          onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                          style={inputStyle("name")}
                          className="placeholder-white/20"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.2em] mb-1.5"
                          style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif" }}>
                          Email Address
                        </label>
                        <input
                          type="email" name="user_email" placeholder="e.g. hello@company.com" required
                          onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                          style={inputStyle("email")}
                          className="placeholder-white/20"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3.5 mt-1 text-[12px] uppercase tracking-[0.18em] font-semibold text-black disabled:opacity-50 transition-all duration-200"
                        style={{ background: "#f97316", borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                        onMouseEnter={e => !loading && (e.currentTarget.style.background = "#fb923c")}
                        onMouseLeave={e => (e.currentTarget.style.background = "#f97316")}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.span
                              className="w-3.5 h-3.5 rounded-full border-2 border-black/30 border-t-black inline-block"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            Get in Touch <span>→</span>
                          </span>
                        )}
                      </motion.button>

                      <p className="text-center text-[11px]"
                        style={{ color: "rgba(255,255,255,0.18)", fontFamily: "'Inter', sans-serif" }}>
                        No spam. I'll only reach out about your enquiry.
                      </p>
                    </form>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center text-center py-16 px-8 min-h-[300px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 flex items-center justify-center mb-5"
                    style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.25)", borderRadius: "12px" }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <motion.path d="M5 12l5 5L19 7" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.35, duration: 0.5 }} />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Message Received 🎉
                  </h3>
                  <p className="text-sm max-w-xs"
                    style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-7 px-8 py-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-black transition-all duration-200"
                    style={{ background: "#f97316", borderRadius: "8px", fontFamily: "'Inter', sans-serif" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#fb923c"}
                    onMouseLeave={e => e.currentTarget.style.background = "#f97316"}
                  >
                    Back to Portfolio
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}