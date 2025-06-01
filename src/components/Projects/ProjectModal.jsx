import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target.classList.contains("backdrop-blur-sm")) onClose();
          }}
        >
          <motion.div
            className="project-modal-wrap"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="pm-wrap-button" onClick={onClose}>
              ✕
            </button>
            <motion.h2
              className="pm-wrap-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.title} Details
            </motion.h2>
            <div className="pm-wrap-text">
              <p>
                <span>Situation:</span> {project.details.situation}
              </p>
              <p>
                <span>Task:</span> {project.details.task}
              </p>
              <p>
                <span>Action:</span> {project.details.action}
              </p>
              <p>
                <span>Result:</span> {project.details.result}
              </p>
              <p>
                <span>Technologies:</span> {project.details.technologies}
              </p>
              <p>
                <span>Live URL:</span>{" "}
                <a
                  href={project.details.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.details.liveUrl}
                </a>
              </p>
              <p>
                <span>GitHub:</span>{" "}
                <a
                  href={project.details.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.details.github}
                </a>
              </p>
            </div>
            <div className="pm-wrap-close">
              <button onClick={onClose}>Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-project")
  );
}
