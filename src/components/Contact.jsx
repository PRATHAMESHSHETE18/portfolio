import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative bg-dark-900/40">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-primary-400 tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-50 section-heading mx-auto">
            Let's Work Together
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-dark-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          I'm always excited to connect on data-driven projects, internship
          opportunities, or collaborative work. Feel free to reach out — let's
          turn data into impact.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-12"
        >
          <a
            href="mailto:prathameshshete900@gmail.com"
            className="glass-card p-6 flex flex-col items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/20 transition-colors">
              <HiOutlineMail size={26} />
            </div>
            <div>
              <p className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-1">
                Email
              </p>
              <p className="text-sm font-medium text-dark-200 group-hover:text-primary-400 transition-colors">
                prathameshshete900@gmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+919284876012"
            className="glass-card p-6 flex flex-col items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
              <HiOutlinePhone size={26} />
            </div>
            <div>
              <p className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-1">
                Phone
              </p>
              <p className="text-sm font-medium text-dark-200 group-hover:text-accent-cyan transition-colors">
                +91-9284876012
              </p>
            </div>
          </a>
        </motion.div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a
            href="mailto:prathameshshete900@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-semibold bg-primary-600 text-white hover:bg-primary-500 transition-all duration-200 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/30 hover:scale-[1.02]"
          >
            <FiSend size={18} />
            Send a Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
