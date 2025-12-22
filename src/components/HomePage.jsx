import Universe from "../assets/universe.png";
import Socials from "./Socials";

export default function HomePage() {
  return (
    <div id="home" className="h-full">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-10 md:mt-20 px-6 md:px-0 mx-auto mt-20">
        <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4">
          <p className="text-orange-500">Front-End Developer</p>
          <h1 className="font-bold text-3xl md:text-8xl text-orange-500 leading-none">
            <span className="md:block font-extralight md:text-5xl text-amber-50">Elemide </span>Daniel</h1>

          <p className="text-sm md:text-lg italic md:mt-5 text-white/70 text-center md:text-left md:max-w-md">
            Building modern, user-focused digital experiences with
            clean, efficient, and scalable code.
          </p>
          <Socials />
        </div>
        <div className="w-1/2 aspect-square overflow-hidden flex items-center justify-center">
          <img
            src={Universe}
            alt="Universe"
            className="w-full h-full object-contain origin-center animate-[spin_50s_linear_infinite]"
          />
        </div>
      </div>
    </div>
  );
}
