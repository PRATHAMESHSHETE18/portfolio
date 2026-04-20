import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiGithub,
} from "react-icons/si";
import { TbSql, TbChartBar } from "react-icons/tb";
import { HiOutlineTable, HiOutlineChartSquareBar, HiOutlineChartPie } from "react-icons/hi";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <SiPython size={20} />, level: 90 },
      { name: "SQL", icon: <TbSql size={20} />, level: 85 },
    ],
  },
  {
    title: "Analytical Tools",
    skills: [
      { name: "Excel", icon: <HiOutlineTable size={20} />, level: 88 },
      { name: "Power BI", icon: <HiOutlineChartSquareBar size={20} />, level: 85 },
      { name: "Tableau", icon: <HiOutlineChartPie size={20} />, level: 78 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Pandas", icon: <SiPandas size={20} />, level: 88 },
      { name: "NumPy", icon: <SiNumpy size={20} />, level: 82 },
      { name: "Matplotlib", icon: <TbChartBar size={20} />, level: 80 },
      { name: "GitHub", icon: <SiGithub size={20} />, level: 75 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative bg-dark-900/40">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary-400 tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 section-heading">
            Technical Toolkit
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + ci * 0.12 }}
              className="glass-card p-6 sm:p-7"
            >
              <h3 className="text-sm font-semibold text-dark-400 uppercase tracking-wider mb-6">
                {cat.title}
              </h3>

              <div className="space-y-6">
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-primary-400">{skill.icon}</span>
                        <span className="text-sm font-medium text-dark-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-dark-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1.2,
                          delay: 0.4 + ci * 0.15 + si * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
