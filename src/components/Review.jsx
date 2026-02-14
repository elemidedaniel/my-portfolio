import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "David A.",
    company: "Startup Founder",
    review:
      "Working with Daniel was a great experience. The interface was clean, fast, and delivered ahead of schedule.",
  },
  {
    id: 2,
    name: "Eniola M.",
    company: "Product Manager",
    review:
      "Very professional and detail-oriented. Communication was smooth and the final product exceeded expectations.",
  },
  {
    id: 3,
    name: "James K.",
    company: "Agency Director",
    review:
      "One of the best frontend developers we've worked with. Strong design sense and solid execution.",
  },
];

export default function Reviews() {
  return (
    <section className="py-15 px-6 md:px-20 bg-gradient-to-b from-slate-50 to-white">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Client <span className="text-orange-500">Reviews</span>
        </h2>

        <p className="text-slate-600 text-base md:text-lg">
          Feedback from people and teams I’ve worked with.
        </p>
      </motion.div>

      {/* Reviews Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-500 p-6 border border-slate-100"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4 text-orange-400">
              {"★★★★★"}
            </div>

            {/* Review Text */}
            <p className="text-slate-600 mb-6 leading-relaxed">
              "{item.review}"
            </p>

            {/* Client Info */}
            <div>
              <h4 className="font-semibold text-slate-800">{item.name}</h4>
              <p className="text-sm text-slate-500">{item.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
