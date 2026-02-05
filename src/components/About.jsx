import workSpace from "../assets/danielspace.jpg";

export default function About() {
  return (
    <section
      id="About"
      className="w-full py-16 px-5 flex justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">

        {/* TEXT SIDE */}
        <div className="flex flex-col gap-5">
          
          {/* Section label */}
          <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm">
            About Me
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Front-End Developer crafting modern web experiences
          </h2>

          {/* Divider */}
          <div className="w-14 h-1 bg-orange-500 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-base">
            I’m <span className="font-semibold text-orange-500">Daniel</span>, a
            Front-End Developer passionate about building visually appealing and
            user-friendly websites using HTML, CSS, and JavaScript.
          </p>

          <p className="text-gray-600 leading-relaxed text-base">
            I work closely with clients to deliver tailored solutions that meet
            their unique needs, focusing on performance, usability, and clean
            design. My goal is to create interfaces that not only look good but
            feel intuitive.
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative">
          <img
            src={workSpace}
            alt="Workspace"
            className="rounded-xl shadow-md object-cover w-full h-full"
          />

          {/* subtle overlay accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-xl blur-xl"></div>
        </div>

      </div>
    </section>
  );
}
