import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineChartBar, HiOutlineLightBulb, HiOutlineCog } from "react-icons/hi";

const highlights = [
  {
    icon: <HiOutlineChartBar size={24} />,
    title: "Data-Driven Decisions",
    text: "Skilled in analyzing complex datasets to craft insightful dashboards and data-driven strategies.",
  },
  {
    icon: <HiOutlineLightBulb size={24} />,
    title: "AI & ML Expertise",
    text: "Strong foundation in machine learning, deep learning, and AI-driven insights for business impact.",
  },
  {
    icon: <HiOutlineCog size={24} />,
    title: "Finance & Analytics",
    text: "Deep understanding of financial modeling, market analysis, and investment portfolio optimization.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary-400 tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 section-heading">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-dark-300 leading-relaxed text-base">
              I'm an aspiring <span className="text-primary-400 font-medium">Data Analyst</span> and{" "}
              <span className="text-accent-cyan font-medium">Data Scientist</span> pursuing my B.Tech in
              Information Technology at{" "}
              <span className="text-dark-100 font-medium">
                Walchand Institute of Technology, Solapur
              </span>{" "}
              with a <span className="text-accent-emerald font-semibold">CGPA of 9.2</span>.
            </p>
            <p className="text-dark-400 leading-relaxed text-base">
              I specialize in transforming complex datasets into actionable insights using Python, SQL, and
              modern visualization tools. My work spans from building predictive models for market analysis
              to designing portfolio optimization tools and crafting dynamic dashboards.
            </p>
            <p className="text-dark-400 leading-relaxed text-base">
              With a strong foundation in statistics, finance, and machine learning, I'm passionate about
              using data to solve real-world problems and drive informed decision-making.
            </p>

            {/* Coursework tags */}
            <div className="pt-4">
              <p className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-3">
                Key Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Analysis",
                  "Statistical Analysis",
                  "EDA",
                  "Machine Learning",
                  "Deep Learning",
                  "Financial Modeling",
                  "Power BI",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-dark-800/80 border border-dark-700/50 text-dark-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-3 grid sm:grid-cols-1 gap-5"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                className="glass-card p-6 flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-dark-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
