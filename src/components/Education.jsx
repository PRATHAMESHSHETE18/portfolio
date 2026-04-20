import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary-400 tracking-widest uppercase mb-3">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 section-heading">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Degree card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-7 sm:p-8"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                <HiOutlineAcademicCap size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-dark-50 mb-1">
                  Bachelor of Technology
                </h3>
                <p className="text-base text-primary-400 font-medium mb-1">
                  Information Technology
                </p>
                <p className="text-sm text-dark-400 mb-4">
                  Walchand Institute of Technology, Solapur
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-sm font-semibold">
                    <span className="text-lg">🎓</span>
                    CGPA: 9.2
                  </span>
                  <span className="px-4 py-2 rounded-lg bg-dark-800/80 border border-dark-700/50 text-dark-300 text-sm font-medium">
                    Aug 2023 – May 2027
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="glass-card p-7 sm:p-8"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-accent-amber/10 border border-accent-amber/20 flex items-center justify-center text-accent-amber flex-shrink-0">
                <HiOutlineBadgeCheck size={28} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-dark-50 mb-5">
                  Certifications & Activities
                </h3>

                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-amber flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-dark-200">
                        Data Science With Generative AI Course
                      </p>
                      <p className="text-xs text-dark-500 mt-0.5">
                        June 2024 • PW Skills
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-amber flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-dark-200">
                        Debate & Group Discussions
                      </p>
                      <p className="text-xs text-dark-500 mt-0.5">
                        Recognized as a good speaker • College-level participation
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
