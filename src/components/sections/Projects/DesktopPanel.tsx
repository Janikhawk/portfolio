import { motion, AnimatePresence } from "framer-motion";
import { Globe, Code2 } from "lucide-react";
import { Project } from "@/types";
import ProjectScreenshot from "./ProjectScreenshot";
import TechStack from "./TechStack";

export default function DesktopPanel({
  project,
  isActive,
  onClick,
}: {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      transition={{
        layout: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        },
      }}
      className={[
        "relative overflow-hidden rounded-2xl cursor-pointer border select-none h-[900px]",
        isActive
          ? "flex-1 border-gray-200 shadow-card-hover"
          : "flex-none w-[62px] border-gray-200/70 hover:border-gray-300",
      ].join(" ")}
    >
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          isActive ? "bg-white" : project.panelBg
        }`}
      />

      {isActive && (
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl z-10"
          style={{ backgroundColor: project.accentColor }}
        />
      )}

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
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {project.title}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="absolute inset-0 p-7 flex flex-col overflow-y-auto thin-scrollbar z-20"
          >
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
                <p className="text-xs text-gray-400 mt-0.5">{project.fullCompany}</p>
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

            <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-shrink-0">
              {project.description}
            </p>

            {project.screenshotUrl && (
              <ProjectScreenshot
                screenshotUrl={project.screenshotUrl}
                className="mb-3 h-[500px]"
              />
            )}

            <div className="flex-shrink-0 mt-auto">
              <div className="flex items-center gap-1.5 mb-2">
                <Code2 size={12} className="text-gray-400" />
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Tech Stack
                </span>
              </div>
              <TechStack stack={project.stack} variant="desktop" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
