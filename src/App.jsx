import HomePage from "./components/HomePage";
import ToolsPage from "./components/ToolsPage";
import About from "./components/About";
import Works from "./components/Works";
import Modal from "./components/Modal";
import Services from "./components/Services";
import Footer from "./components/Footer";

// Background: #0B0B0B
// Surface:    #141414
// Text:       #EDEDED
// Muted text: #9CA3AF
// Accent:     #F97316 (Orange)
// Border:     #262626


function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] px-1 py-1 md:px-6 md:py-4 text-[#EDEDED]">
      <Modal />
      <div className="fixed top-2 left-1/2 -translate-x-1/2 flex items-center gap-8 px-7 py-4 bg-white/5 backdrop-blur-lg rounded-xl shadow-lg w-fit z-50">
        {/* <h2 className="font-bold text-2xl">DANIEL</h2> */}
        <div className="">
          <ul className="flex flex-row gap-8">
            <a href="#services">
              <li className="relative cursor-pointer text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F97316] after:transition-all after:duration-300 hover:after:w-full">
                Services
              </li>
            </a>
            <a href="#About">
              <li className="relative cursor-pointer text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F97316] after:transition-all after:duration-300 hover:after:w-full">
                About
              </li>
            </a>
            <a href="#projects">
              <li className="relative cursor-pointer text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F97316] after:transition-all after:duration-300 hover:after:w-full">
                Projects
              </li>
            </a>
          </ul>
        </div>
      </div>
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
