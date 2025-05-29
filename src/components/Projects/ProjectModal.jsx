import React from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target.classList.contains("backdrop-blur-sm")) onClose();
          }}
        >
          <motion.div
            className="bg-[#112e42] rounded-xl p-6 max-w-lg w-full relative overflow-y-auto max-h-[80vh] shadow-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-[#ededed] text-2xl hover:text-[#00abf0] transition"
              onClick={onClose}
            >
              ✕
            </button>
            <motion.h2
              className="text-3xl font-bold mb-4 text-[#00abf0]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.title} Details
            </motion.h2>
            <div className="text-sm space-y-2">
              <p>
                <span className="font-semibold">Situation:</span>{" "}
                {project.details.situation}
              </p>
              <p>
                <span className="font-semibold">Task:</span>{" "}
                {project.details.task}
              </p>
              <p>
                <span className="font-semibold">Action:</span>{" "}
                {project.details.action}
              </p>
              <p>
                <span className="font-semibold">Result:</span>{" "}
                {project.details.result}
              </p>
              <p>
                <span className="font-semibold">Technologies:</span>{" "}
                {project.details.technologies}
              </p>
              <p>
                <span className="font-semibold">Live URL:</span>{" "}
                {project.details.liveUrl}
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                {project.details.github}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-[#00abf0] text-[#081b29] px-4 py-2 rounded hover:bg-[#00abf0]/80 transition"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("modal-project")
  );
}
