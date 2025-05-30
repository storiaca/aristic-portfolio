import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

import zomont from "../../assets/zomont.png";
import xoGame from "../../assets/xo-game.png";

const projects = [
  {
    id: 1,
    image: zomont,
    title: "Project One",
    shortDescription: "This is a short description of project one.",
    details: {
      situation:
        "A global clean energy provider needed two frontend portals: one for clients to manage their energy usage, and another for internal account managers.",
      task: "Build responsive, real-time dashboards and a shared UI component library, ensuring data integrity and performance at scale.",
      action:
        "Developed an internal component library using Material-UI, enabling design consistency across portals. Built Highcharts dashboards with live telemetry data from IoT sensors. Created a modular Redux (Saga) architecture to support asynchronous flows and caching. Designed responsive, print-friendly invoice views with downloadable PDF generation. Integrated Jenkins CI for automated testing and deployment.",
      result:
        "Reduced duplicate code by 50% via shared component usage. Enabled customers to self-serve reports, cutting support tickets by 30%. Streamlined portal performance with lazy loading, reducing TTI by 40%.",
      technologies:
        "React, TypeScript, Redux (Saga), MUI v4/v5, Highcharts, Jenkins, Luxon",
      liveUrl: "(Enterprise Portal)",
      github: "(Private Repo)",
    },
    link: "https://example.com/project-one",
  },
  {
    id: 2,
    image: xoGame,
    title: "Project Two",
    shortDescription: "This is a short description of project two.",
    details: {
      situation:
        "A global clean energy provider needed two frontend portals: one for clients to manage their energy usage, and another for internal account managers.",
      task: "Build responsive, real-time dashboards and a shared UI component library, ensuring data integrity and performance at scale.",
      action:
        "Developed an internal component library using Material-UI, enabling design consistency across portals. Built Highcharts dashboards with live telemetry data from IoT sensors. Created a modular Redux (Saga) architecture to support asynchronous flows and caching. Designed responsive, print-friendly invoice views with downloadable PDF generation. Integrated Jenkins CI for automated testing and deployment.",
      result:
        "Reduced duplicate code by 50% via shared component usage. Enabled customers to self-serve reports, cutting support tickets by 30%. Streamlined portal performance with lazy loading, reducing TTI by 40%.",
      technologies:
        "React, TypeScript, Redux (Saga), MUI v4/v5, Highcharts, Jenkins, Luxon",
      liveUrl: "(Enterprise Portal)",
      github: "(Private Repo)",
    },
    link: "https://example.com/project-two",
  },
  {
    id: 3,
    image: zomont,
    title: "Project Three",
    shortDescription: "This is a short description of project three.",
    details: {
      situation:
        "A global clean energy provider needed two frontend portals: one for clients to manage their energy usage, and another for internal account managers.",
      task: "Build responsive, real-time dashboards and a shared UI component library, ensuring data integrity and performance at scale.",
      action:
        "Developed an internal component library using Material-UI, enabling design consistency across portals. Built Highcharts dashboards with live telemetry data from IoT sensors. Created a modular Redux (Saga) architecture to support asynchronous flows and caching. Designed responsive, print-friendly invoice views with downloadable PDF generation. Integrated Jenkins CI for automated testing and deployment.",
      result:
        "Reduced duplicate code by 50% via shared component usage. Enabled customers to self-serve reports, cutting support tickets by 30%. Streamlined portal performance with lazy loading, reducing TTI by 40%.",
      technologies:
        "React, TypeScript, Redux (Saga), MUI v4/v5, Highcharts, Jenkins, Luxon",
      liveUrl: "(Enterprise Portal)",
      github: "(Private Repo)",
    },
    link: "https://example.com/project-three",
  },
];

export default function ProjectCards() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        My <span>Projects</span>
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-[#112e42] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-[#00abf0]">
                {project.title}
              </h2>
              <p className="text-sm mb-4">{project.shortDescription}</p>
              <div className="flex justify-between items-center">
                <button
                  className="bg-[#00abf0] text-[#081b29] px-4 py-2 rounded hover:bg-[#00abf0]/80 transition"
                  onClick={() => setActiveProject(project)}
                >
                  Read More
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-[#00abf0] text-[#00abf0] px-4 py-2 rounded hover:bg-[#00abf0]/10 transition">
                    Visit Site
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
