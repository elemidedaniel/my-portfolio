import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../pages/Navigation";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-[#475569] relative">

      {/* Floating Animated Navbar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed left-1/2 -translate-x-1/2 z-50"
      >
        <Navbar />
      </motion.div>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
