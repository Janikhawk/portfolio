"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const techStack = [
  "Angular",
  "React",
  "TypeScript",
  "RxJS",
  "NgRx",
  "Redux",
  "HTML5 / CSS3",
  "TailwindCSS",
  "REST APIs",
];

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "7+", label: "Enterprise Projects" },
  { value: "5+", label: "Industries" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #111827 1px, transparent 0)",
          backgroundSize: "40px 40px",
          opacity: 0.028,
        }}
      />

      {/* Blue ambient glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600 rounded-full blur-3xl opacity-[0.035] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-3xl opacity-[0.025] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-[1fr_300px] gap-16 xl:gap-24 items-center">
          {/* Left: text content */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold text-blue-600 tracking-[0.2em] uppercase mb-5"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.04] mb-5"
            >
              Zhangeldy
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Kuldeyev
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl text-gray-400 font-medium mb-7"
            >
              Senior Frontend Engineer
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-lg leading-relaxed max-w-xl mb-9"
            >
              I build high-performance web applications for global enterprises —
              from financial trading platforms to healthcare systems. Specializing
              in{" "}
              <span className="text-gray-900 font-semibold">Angular</span>,{" "}
              <span className="text-gray-900 font-semibold">React</span>, and{" "}
              <span className="text-gray-900 font-semibold">TypeScript</span>{" "}
              with a focus on clean architecture and exceptional user experience.
            </motion.p>

            {/* Tech badges */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 mb-10"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-full border border-gray-200 font-medium hover:bg-gray-200 hover:text-gray-800 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <a
                href="https://github.com/janikhawk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/janikhawk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <span className="w-px h-5 bg-gray-200" />
              <a
                href="https://www.linkedin.com/in/janikhawk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-blue-600 transition-colors font-medium"
              >
                linkedin.com/in/janikhawk
              </a>
            </motion.div>
          </motion.div>

          {/* Right: floating stats */}
          <div className="hidden lg:flex flex-col gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.5 + i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                }}
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3.5,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-white rounded-2xl p-6 shadow-card border border-gray-100 hover:shadow-card-hover transition-shadow duration-300"
                >
                  <p className="text-4xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-300"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
