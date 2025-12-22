export default function Tool({ toolImage, toolName }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
            <img src={toolImage} alt="" className="w-8 h-8 md:w-16 md:h-16"/>
            <h4 className="text-[#0F172A]">{toolName}</h4>
        </div>
    )
}