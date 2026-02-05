import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does a website project usually take?",
    a: "Timelines depend on the scope of the project. A simple website can take 1–2 weeks, while more advanced platforms with custom features may take several weeks to design, build, and test properly.",
  },
  {
    q: "How do you price your web projects?",
    a: "Every project is unique. Pricing is based on features, pages, and complexity. After understanding your needs, we provide a clear, tailored quote that fits your budget.",
  },
  {
    q: "What kind of websites do you build?",
    a: "We design and develop business websites, e-commerce platforms, landing pages, portfolios, and custom web applications tailored to different industries and goals.",
  },
  {
    q: "Is there support after the website goes live?",
    a: "Absolutely. We provide post-launch support to ensure everything runs smoothly and offer optional maintenance plans for long-term reliability.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full py-28 px-6 lg:px-20 bg-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.35em] text-xs text-orange-400 mb-4 font-medium">
          FREQUENTLY ASKED
        </p>

        <h2 className="font-grat text-[clamp(2rem,4vw,3.2rem)] leading-tight">
          Things Clients Ask Before We Start
        </h2>

        <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-6" />
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto mt-20 space-y-8">
        {faqs.map((item, i) => (
          <div key={i} className="border-b border-gray-200 pb-8">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between gap-6 text-left group"
            >
              <span className="text-lg font-medium text-gray-900 group-hover:text-orange-400 transition-colors">
                {item.q}
              </span>

              <ChevronDown
                className={`shrink-0 mt-1 text-orange-400 transition-transform duration-300 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open === i
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden text-gray-600 text-sm leading-relaxed pr-8">
                {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
