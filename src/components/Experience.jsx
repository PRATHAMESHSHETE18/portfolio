import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineBriefcase } from "react-icons/hi";

const experiences = [
  {
    role: "Data Analyst",
    highlights: [
      "Developed financial models to optimize investment strategies, leveraging advanced statistical methods.",
      "Conducted data audits to ensure compliance with corporate governance standards.",
    ],
  },
  {
    role: "Data Science",
    highlights: [
      "Built predictive models for market analysis using Python and machine learning libraries.",
      "Automated data cleaning processes, reducing manual efforts by 50%.",
      "Collaborated with cross-functional teams to identify business needs and implement tailored data solutions.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative bg-dark-900/40">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary-400 tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 section-heading">
            Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-12 space-y-12">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              className="relative"
            >
              <div className="timeline-dot" />

              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                    <HiOutlineBriefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-50">
                      {exp.role}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm text-dark-300 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
