import { motion } from "framer-motion";

export default function Footer() {
  const linkVariants = {
    hover: { y: -3, scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20 relative overflow-hidden">
      {/* Floating background shapes */}
      <motion.div
        className="absolute top-0 left-10 w-32 h-32 rounded-full bg-orange-500/20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-40 h-40 rounded-full bg-purple-500/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {["Home", "Services", "Projects", "About", "Contact"].map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-white font-medium"
              variants={linkVariants}
              whileHover="hover"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl text-gray-300">
          <motion.a
            href="https://github.com/tegawavy"
            target="_blank"
            whileHover={{ y: -3, scale: 1.1 }}
          >
            <ion-icon name="logo-github"></ion-icon>
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/daniel-elemide-47b37a302"
            target="_blank"
            whileHover={{ y: -3, scale: 1.1 }}
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </motion.a>
          <motion.a
            href="https://twitter.com/"
            target="_blank"
            whileHover={{ y: -3, scale: 1.1 }}
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </motion.a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} Daniel Korede. All rights reserved.
      </div>
    </footer>
  );
}
