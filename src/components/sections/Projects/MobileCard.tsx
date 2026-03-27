import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Project } from "@/types";
import ProjectScreenshot from "./ProjectScreenshot";
import TechStack from "./TechStack";

export default function MobileCard({
  project,
  isActive,
  onToggle,
}: {
  project: Project;
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      <button onClick={onToggle} className="relative w-full text-left overflow-hidden">
        <div className={`absolute inset-0 ${project.panelBg}`} />
        <div className="relative z-10 px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-widest uppercase mb-0.5 text-gray-500">
              {project.industry}
            </p>
            <h3 className="font-bold text-sm text-gray-900">{project.title}</h3>
          </div>
          <motion.div animate={{ rotate: isActive ? 180 : 0 }} transition={{ duration: 0.25 }}>
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
              <p className="text-gray-400 text-xs mt-3 mb-1">{project.fullCompany}</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {project.description}
              </p>

              {project.screenshotUrl && (
                <ProjectScreenshot
                  screenshotUrl={project.screenshotUrl}
                  className="h-32 mb-3"
                />
              )}

              <div className="mb-4">
                <TechStack stack={project.stack} variant="mobile" />
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
}
