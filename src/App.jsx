import { motion } from "framer-motion";


import HomePage from "./components/HomePage";
import ToolsPage from "./components/ToolsPage";
import About from "./components/About";
import Works from "./components/Works";
import Modal from "./components/Modal";
import Services from "./components/Services";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#475569]">
      <Modal />

      {/* Floating Glass Navbar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed top-4 left-1/2 -translate-x-1/2 
        flex items-center gap-8 px-8 py-4 
        bg-slate-900/60 backdrop-blur-xl 
        border border-white/10 
        rounded-2xl 
        shadow-[0_8px_30px_rgba(15,23,42,0.25)] 
        w-fit z-50"
      >
        <ul className="flex flex-row gap-4 md:gap-8">
          <a href="#services">
            <li className="relative cursor-pointer text-white/90 hover:text-white
              after:content-[''] after:absolute after:-bottom-1 after:left-0 
              after:w-0 after:h-0.5 after:bg-[#F97316] 
              after:transition-all after:duration-300 hover:after:w-full">
              Services
            </li>
          </a>

          <a href="#About">
            <li className="relative cursor-pointer text-white/90 hover:text-white
              after:content-[''] after:absolute after:-bottom-1 after:left-0 
              after:w-0 after:h-0.5 after:bg-[#F97316] 
              after:transition-all after:duration-300 hover:after:w-full">
              About
            </li>
          </a>

          <a href="#projects">
            <li className="relative cursor-pointer text-white/90 hover:text-white
              after:content-[''] after:absolute after:-bottom-1 after:left-0 
              after:w-0 after:h-0.5 after:bg-[#F97316] 
              after:transition-all after:duration-300 hover:after:w-full">
              Projects
            </li>
          </a>
        </ul>
      </motion.div>

      {/* Pages */}
      <HomePage />
      <ToolsPage />
      <About />
      <Works />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
