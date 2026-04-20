import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineTrendingUp, HiOutlineCurrencyDollar, HiOutlineGlobeAlt } from "react-icons/hi";

const projects = [
  {
    icon: <HiOutlineCurrencyDollar size={24} />,
    title: "Investment Portfolio Optimization",
    tech: ["Python", "Power BI"],
    color: "from-primary-500 to-primary-700",
    accent: "text-primary-400",
    borderAccent: "border-primary-500/20",
    bgAccent: "bg-primary-500/10",
    bullets: [
      "Designed a portfolio optimization tool that analyzed historical stock performance and risk factors.",
      "Created dynamic dashboards for portfolio tracking, enabling real-time updates and investor insights.",
    ],
  },
  {
    icon: <HiOutlineTrendingUp size={24} />,
    title: "Share Market Trend Analysis",
    tech: ["Excel", "Python"],
    color: "from-accent-cyan to-primary-500",
    accent: "text-accent-cyan",
    borderAccent: "border-accent-cyan/20",
    bgAccent: "bg-accent-cyan/10",
    bullets: [
      "Analyzed share market trends over 10 years using regression models and visualization tools.",
      "Delivered insights that informed trading strategies, achieving a 12% higher return rate for test cases.",
    ],
  },
  {
    icon: <HiOutlineGlobeAlt size={24} />,
    title: "GDP & Population Bubble Chart",
    tech: ["Pandas", "Matplotlib"],
    color: "from-accent-emerald to-accent-cyan",
    accent: "text-accent-emerald",
    borderAccent: "border-accent-emerald/20",
    bgAccent: "bg-accent-emerald/10",
    bullets: [
      "Created a proportional bubble chart analyzing global GDP and population data.",
      "Provided resource allocation insights for better economic understanding.",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary-400 tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 section-heading">
            Featured Work
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="glass-card group overflow-hidden flex flex-col"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${project.bgAccent} border ${project.borderAccent} flex items-center justify-center ${project.accent} flex-shrink-0`}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-50 leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6 flex-1">
                  {project.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm text-dark-400 leading-relaxed"
                    >
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${project.bgAccent} flex-shrink-0`} />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-700/40">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${project.bgAccent} ${project.accent} border ${project.borderAccent}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
