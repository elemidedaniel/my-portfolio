import Tool from "./Tool";

import Css from "../assets/css.png";
import Figma from "../assets/figma.png";
import Git from "../assets/git.png";
import Html from "../assets/html5.png";
import Javascript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwindcss.png";
import Bootstrap from "../assets/bootstrap.png";
import Vite from "../assets/vite.png";

export default function ToolPage() {
  return (
    <div className="w-full mt-20 overflow-hidden bg-[#626262]">
      <div
        className="flex w-max gap-10 hover:[animation-play-state:paused] bg-[#626262] px-4 py-2 rounded-sm"
        style={{
          animation: "marquee 25s linear infinite",
        }}
      >
        {/* Original */}
        <Tool toolImage={Css} toolName="CSS" />
        <Tool toolImage={Figma} toolName="Figma" />
        <Tool toolImage={Git} toolName="Git" />
        <Tool toolImage={Html} toolName="HTML" />
        <Tool toolImage={Javascript} toolName="JavaScript" />
        <Tool toolImage={ReactLogo} toolName="React" />
        <Tool toolImage={Tailwind} toolName="Tailwind" />
        <Tool toolImage={Bootstrap} toolName="Bootstrap" />
        <Tool toolImage={Vite} toolName="Vite" />

        {/* Duplicate */}
        <Tool toolImage={Css} toolName="CSS" />
        <Tool toolImage={Figma} toolName="Figma" />
        <Tool toolImage={Git} toolName="Git" />
        <Tool toolImage={Html} toolName="HTML" />
        <Tool toolImage={Javascript} toolName="JavaScript" />
        <Tool toolImage={ReactLogo} toolName="React" />
        <Tool toolImage={Tailwind} toolName="Tailwind" />
        <Tool toolImage={Bootstrap} toolName="Bootstrap" />
        <Tool toolImage={Vite} toolName="Vite" />
      </div>
    </div>
  );
}
