import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Astronut from "../assets/Astronut.png";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9koqt29",
        "template_8xt5vvm",
        e.target,
        "44k1lFoM07Rb93gTw"
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="
              fixed z-50 flex gap-6 justify-center
              bottom-0 left-1/2 -translate-x-1/2
              md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
              bg-[#FAFAF9] text-[#0F172A]
              w-full md:w-[90%] max-w-3xl
              rounded-t-2xl md:rounded-2xl
              p-6 pb-[env(safe-area-inset-bottom)]
              shadow-[0_30px_80px_rgba(15,23,42,0.25)]
            "
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 text-xl"
            >
              ✕
            </button>

            {!success ? (
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                {/* Left Image */}
                <div className="md:w-1/2 flex justify-center">
                  <motion.img
                    src={Astronut}
                    alt="Contact"
                    className="rounded-xl w-40 h-40 md:w-64 md:h-64 object-contain"
                    initial={{ y: -10 }}
                    animate={{ y: [0, -30, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Right Form */}
                <div className="md:w-1/2 w-full">
                  <h2 className="text-xl md:text-2xl font-bold mb-1">
                    Let’s Work <span className="text-orange-500">Together</span>
                  </h2>

                  <p className="text-slate-600 text-sm md:mb-6">
                    Drop your contact details and I’ll reach out personally.
                  </p>

                  <form onSubmit={sendEmail} className="space-y-4">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      required
                      className="w-full px-2 py-1.5 md:px-4 md:py-3 rounded-lg
                                 bg-white border border-slate-200
                                 focus:outline-none focus:border-orange-500"
                    />

                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      required
                      className="w-full px-2 py-1.5 md:px-4 md:py-3 rounded-lg
                                 bg-white border border-slate-200
                                 focus:outline-none focus:border-orange-500"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-2 md:py-3 rounded-lg mb-2
                                 bg-orange-500 hover:bg-orange-600
                                 text-white font-semibold
                                 transition disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Get in Touch"}
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold mb-2 text-[#0F172A]">
                  Thank you 🎉
                </h3>
                <p className="text-slate-600 text-sm">
                  I’ve received your details and will contact you shortly.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
