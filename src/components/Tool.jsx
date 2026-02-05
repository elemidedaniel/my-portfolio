export default function Tool({ toolImage, toolName }) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-4 text-white">
      <img
        src={toolImage}
        alt={toolName}
        className="w-14 h-14 object-contain"
      />
      <p className="text-sm font-medium tracking-wide text-white/80">
        {toolName}
      </p>
    </div>
  );
}
