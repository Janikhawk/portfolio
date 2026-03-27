"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import DesktopPanel from "./DesktopPanel";
import MobileCard from "./MobileCard";

export default function Projects() {
  const [activeId, setActiveId] = useState<string>(projects[0].id);
  const [mobileActiveId, setMobileActiveId] = useState<string>("");

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
            {projects.map((project) => (
              <DesktopPanel
                key={project.id}
                project={project}
                isActive={activeId === project.id}
                onClick={() => setActiveId(project.id)}
              />
            ))}
          </div>

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
          {projects.map((project) => (
            <MobileCard
              key={project.id}
              project={project}
              isActive={mobileActiveId === project.id}
              onToggle={() =>
                setMobileActiveId((prev) => (prev === project.id ? "" : project.id))
              }
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
