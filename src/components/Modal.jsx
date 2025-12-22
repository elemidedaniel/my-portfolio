import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import Astronut from "../assets/Astronut.png";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(true); // Open immediately
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
        "service_9koqt29",      // Your Service ID
        "template_8xt5vvm",     // Your Template ID
        e.target,
        "44k1lFoM07Rb93gTw"    // Your Public Key
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       bg-[#0b0b0b] text-white w-[90%] max-w-3xl rounded-2xl p-6 shadow-2xl"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-xl"
            >
              ✕
            </button>

            {!success ? (
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Left Image */}
                <div className="md:w-1/2 flex justify-center">
                  <motion.img
                    src={Astronut}
                    alt="Contact"
                    className="rounded-xl w-34 h-34 md:w-64 md:h-64 object-contain"
                    initial={{ y: -10 }}
                    animate={{ y: [0, -70, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Right Form */}
                <div className="md:w-1/2 w-full">
                  <h2 className="text-sm md:text-2xl font-bold mb-0.5 md:mb-2">Let’s Work <span className="text-orange-500">Together</span></h2>
                  <p className="text-white/70 text-sm mb-2 md:mb-6">
                    Drop your contact details and I’ll reach out personally.
                  </p>

                  <form onSubmit={sendEmail} className="space-y-4">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      required
                      className="w-full px-2 py-1 md:px-4 md:py-3 rounded-lg bg-white/5 border border-white/10
                                 focus:outline-none focus:border-orange-500"
                    />

                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      required
                      className="w-full px-2 py-1 md:px-4 md:py-3 rounded-lg bg-white/5 border border-white/10
                                 focus:outline-none focus:border-orange-500"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-1 md:py-3 rounded-lg bg-orange-500 hover:bg-orange-600
                                 transition font-semibold disabled:opacity-50"
                    >
                      {loading ? "Sending..." : "Get in Touch"}
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold mb-2">Thank you 🎉</h3>
                <p className="text-white/70 text-sm">
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
