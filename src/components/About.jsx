import workSpace from "../assets/danielspace.jpg";

export default function About() {
  return (
    <div
      id="About"
      className="w-full mt-10 md:mt-20 flex flex-col items-center justify-center px-5 md:px-0"
    >
      <div className="container flex flex-col md:flex-row gap-10 [mt-10] items-center">
        <div className="md:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold self-start text-orange-500">
            About
          </h2>
          <p className="md:pt-20 text-sm md:text-lg leading-relaxed tracking-widest text-justify text-pretty">
            I’m <span className="font-bold text-orange-500">Daniel</span> a
            Front-End Developer passionate about crafting visually appealing and
            user-friendly websites using HTML, CSS, and JavaScript. I work
            closely with clients to deliver tailored solutions that meet their
            unique needs, prioritizing user-focused design to enhance
            engagement. My commitment to ongoing support ensures your website
            remains fresh and functional. What sets me apart is my blend of
            creativity and technical skills, along with a dedication to clear
            communication and collaboration throughout our projects.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg md:w-1/2 h-auto">
          <img src={workSpace} alt="Workspace" />
        </div>
      </div>
    </div>
  );
}
