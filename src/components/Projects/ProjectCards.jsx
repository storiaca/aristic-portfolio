import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

import zomont from "../../assets/zomont.png";
import xoGame from "../../assets/xo-game.png";

const projects = [
  {
    id: 1,
    image: zomont,
    title: "Zomont D.O.O.",
    shortDescription:
      "Zomont is a interior furnishing company, project built with:",
    details: {
      situation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit consequatur quo ut ipsum vitae fugiat nihil voluptates, quam esse eos commodi velit quas fuga porro nobis. Nihil, tempora quae dolor optio natus aut saepe eos velit quibusdam adipisci ex architecto.",
      task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt",
      action:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit consequatur quo ut ipsum vitae fugiat nihil voluptates, quam esse eos commodi velit quas fuga porro nobis. Nihil, tempora quae dolor optio natus aut saepe eos velit quibusdam adipisci ex architecto.",
      result:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit consequatur quo ut ipsum vitae fugiat nihil voluptates, quam esse eos commodi velit quas fuga porro nobis. Nihil,",
      technologies: [
        "WordPress",
        "ACF",
        "Bootstrap",
        "JavaScript",
        "Custom Theme",
      ],
      liveUrl: "https://zomont.rs/",
      github: "(Private Repo)",
    },
    link: "https://zomont.rs/",
  },
  {
    id: 2,
    image: xoGame,
    title: "X/O Game",
    shortDescription: "Simple XO game, project built with:",
    details: {
      situation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit consequatur quo ut ipsum vitae fugiat nihil voluptates, quam esse eos commodi velit quas fuga porro nobis. Nihil, tempora quae dolor optio natus aut saepe eos velit quibusdam adipisci ex architecto.",
      task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit",
      action:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit consequatur quo ut ipsum vitae fugiat nihil voluptates, quam esse eos commodi velit quas fuga porro nobis. Nihil, tempora quae dolor optio natus aut saepe eos velit quibusdam adipisci ex architecto.",
      result:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit",
      technologies: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://react-tic-tac-toe-n7nn.vercel.app/",
      github: "https://github.com/storiaca/react-tic-tac-toe",
    },
    link: "https://react-tic-tac-toe-n7nn.vercel.app/",
  },
  {
    id: 3,
    image: zomont,
    title: "Financial Policy Council",
    shortDescription: "This is a short description of project three.",
    details: {
      situation:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit consequatur quo ut ipsum vitae fugiat nihil voluptates, quam esse eos commodi velit quas fuga porro nobis. Nihil, tempora quae dolor optio natus aut saepe eos velit quibusdam adipisci ex architecto.",
      task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit.",
      action:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit consequatur quo ut ipsum vitae fugiat nihil voluptates, quam esse eos commodi velit quas fuga porro nobis. Nihil, tempora quae dolor optio natus aut saepe eos velit quibusdam adipisci ex architecto.",
      result:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea, facere, praesentium animi ex libero vero incidunt ullam fugit consequatur quo ut ipsum vitae fugiat nihil voluptates, quam esse eos commodi velit quas fuga porro nobis. Nihil, tempora quae dolor optio natus aut saepe eos velit quibusdam adipisci ex architecto.",
      technologies: [
        "WordPress",
        "ACF",
        "Bootstrap",
        "JavaScript",
        "Custom Theme",
      ],
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
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h2 className="project-info_title">{project.title}</h2>
              <p className="project-info_text">{project.shortDescription}</p>
              <ul className="project-info_technologies">
                {project.details?.technologies.map((tech) => (
                  <li key={tech} className="pi-tech">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="project-info_links">
                <button
                  className="btn primary-btn"
                  onClick={() => setActiveProject(project)}
                >
                  Read More
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn secondary-btn"
                >
                  Visit Site
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
