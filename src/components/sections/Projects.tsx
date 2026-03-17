"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, ChevronDown, Globe } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Vignette for the inline screenshot block: fades to white at top and bottom
const IMG_VIGNETTE =
  "linear-gradient(to bottom, transparent 0%, transparent 28%, transparent 72%, white 100%)";

export default function Projects() {
  const [activeId, setActiveId] = useState<string>(projects[0].id);
  const [mobileActiveId, setMobileActiveId] = useState<string>("");

  const toggleMobile = (id: string) =>
    setMobileActiveId((prev) => (prev === id ? "" : id));

  return (
    <section id="projects" className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Work"
            title="Featured Projects"
            description="Enterprise applications delivered across finance, healthcare, gaming, and government sectors."
          />
        </AnimatedSection>

        {/* ── Desktop: Horizontal Accordion ── */}
        <AnimatedSection delay={0.2} className="mt-16 hidden md:block">
          <div className="flex gap-2.5">
            {projects.map((project) => {
              const isActive = activeId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  onClick={() => setActiveId(project.id)}
                  transition={{
                    layout: {
                      duration: 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94] as [
                        number,
                        number,
                        number,
                        number,
                      ],
                    },
                  }}
                  className={[
                    "relative overflow-hidden rounded-2xl cursor-pointer border select-none h-[900px]",
                    isActive
                      ? "flex-1 border-gray-200 shadow-card-hover"
                      : "flex-none w-[62px] border-gray-200/70 hover:border-gray-300",
                  ].join(" ")}
                >
                  {/* Panel background: gradient when collapsed, white when expanded */}
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      isActive ? "bg-white" : project.panelBg
                    }`}
                  />

                  {/* Accent bar */}
                  {isActive && (
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl z-10"
                      style={{ backgroundColor: project.accentColor }}
                    />
                  )}

                  {/* Collapsed label */}
                  <AnimatePresence>
                    {!isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="absolute inset-0 flex items-center justify-center z-10"
                      >
                        <span
                          className="text-[11px] font-bold text-gray-500 tracking-widest uppercase whitespace-nowrap"
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {project.title}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="absolute inset-0 p-7 flex flex-col overflow-y-auto thin-scrollbar z-20"
                      >
                        {/* 1. Header */}
                        <div className="flex items-start justify-between gap-4 mb-3 flex-shrink-0">
                          <div>
                            <span
                              className="text-[11px] font-bold tracking-widest uppercase"
                              style={{ color: project.accentColor }}
                            >
                              {project.industry}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mt-0.5 leading-tight">
                              {project.title}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {project.fullCompany}
                            </p>
                          </div>

                          {project.website ? (
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-shrink-0 flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-600 border border-gray-200 hover:border-blue-300 rounded-lg px-3 py-1.5 transition-colors"
                            >
                              <Globe size={13} />
                              Visit
                            </a>
                          ) : (
                            <span className="flex-shrink-0 text-xs text-gray-300 italic">
                              Internal system
                            </span>
                          )}
                        </div>

                        {/* 2. Description */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-shrink-0">
                          {project.description}
                        </p>

                        {/* 3. Screenshot (inline, with vignette) */}
                        {project.screenshotUrl && (
                          <div className="relative rounded-xl overflow-hidden mb-3 flex-shrink-0 h-[500px]">
                            <div
                              className="absolute inset-0 bg-cover bg-no-repeat"
                              style={{
                                backgroundImage: `url(${project.screenshotUrl})`,
                              }}
                            />
                            <div
                              className="absolute inset-0"
                              style={{ background: IMG_VIGNETTE }}
                            />
                          </div>
                        )}

                        {/* 4. Tech stack */}
                        <div className="flex-shrink-0 mt-auto">
                          <div className="flex items-center gap-1.5 mb-2">
                            <Code2 size={12} className="text-gray-400" />
                            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                              Tech Stack
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 text-xs font-medium bg-gray-50 border border-gray-200 text-gray-700 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Dot nav */}
          <div className="mt-4 flex items-center gap-3">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeId === project.id
                    ? "w-6 bg-blue-600"
                    : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View ${project.title}`}
              />
            ))}
          </div>
        </AnimatedSection>

        {/* ── Mobile: Vertical Accordion ── */}
        <AnimatedSection delay={0.2} className="mt-12 md:hidden space-y-3">
          {projects.map((project) => {
            const isActive = mobileActiveId === project.id;

            return (
              <div
                key={project.id}
                className="rounded-xl border border-gray-200 overflow-hidden"
              >
                {/* Header button — always uses gradient, no screenshot here */}
                <button
                  onClick={() => toggleMobile(project.id)}
                  className="relative w-full text-left overflow-hidden"
                >
                  <div className={`absolute inset-0 ${project.panelBg}`} />
                  <div className="relative z-10 px-5 py-4 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5 text-gray-500">
                        {project.industry}
                      </p>
                      <h3 className="font-bold text-sm text-gray-900">
                        {project.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={16} className="text-gray-400" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 bg-white border-t border-gray-100">
                        {/* Description */}
                        <p className="text-gray-400 text-xs mt-3 mb-1">
                          {project.fullCompany}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          {project.description}
                        </p>

                        {/* Screenshot inline */}
                        {project.screenshotUrl && (
                          <div className="relative h-32 rounded-lg overflow-hidden mb-3">
                            <div
                              className="absolute inset-0 bg-cover bg-no-repeat"
                              style={{
                                backgroundImage: `url(${project.screenshotUrl})`,
                              }}
                            />
                            <div
                              className="absolute inset-0"
                              style={{ background: IMG_VIGNETTE }}
                            />
                          </div>
                        )}

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded border border-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                          >
                            Visit Website
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
