import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiArrowDownCircle } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center pt-28 pb-20 dot-grid overflow-hidden"
    >
      {/* Animated orbs */}
      <div className="orb w-[500px] h-[500px] bg-primary-600 top-[-10%] left-[-10%]" />
      <div
        className="orb w-[400px] h-[400px] bg-accent-cyan top-[60%] right-[-10%]"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="orb w-[300px] h-[300px] bg-primary-500 bottom-[-5%] left-[40%]"
        style={{ animationDelay: "-14s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          <span className="text-sm font-medium text-primary-300">
            Open to opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          <span className="text-dark-50">Hi, I'm </span>
          <span className="gradient-text">Prathamesh</span>
          <br />
          <span className="text-dark-50">Shete</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl text-dark-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <span className="text-primary-400 font-semibold">Data Analyst</span>{" "}
          &{" "}
          <span className="text-accent-cyan font-semibold">
            Data Scientist
          </span>{" "}
          — transforming raw data into actionable insights, predictive models,
          and stunning visualizations.
        </motion.p>

        {/* Contact pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="mailto:prathameshshete900@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-800/60 border border-dark-700/50 text-dark-300 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-200 text-sm font-medium"
          >
            <HiOutlineMail size={18} />
            prathameshshete900@gmail.com
          </a>
          <a
            href="tel:+919284876012"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-800/60 border border-dark-700/50 text-dark-300 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-200 text-sm font-medium"
          >
            <HiOutlinePhone size={18} />
            +91-9284876012
          </a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl text-sm font-semibold bg-primary-600 text-white hover:bg-primary-500 transition-all duration-200 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/30"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-xl text-sm font-semibold bg-dark-800/50 border border-dark-700/50 text-dark-200 hover:border-primary-500/30 hover:text-primary-400 transition-all duration-200"
          >
            Learn More
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-dark-500 hover:text-primary-400 transition-colors mt-auto"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <FiArrowDownCircle size={28} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
