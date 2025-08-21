import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

import zomont from "../../assets/zomont.png";
import xoGame from "../../assets/xo-game.png";
import fpcsite from "../../assets/fpc-website.png";

const projects = [
  {
    id: 1,
    image: zomont,
    title: "Zomont D.O.O.",
    shortDescription:
      "Zomont is a interior furnishing company, project built with:",
    details: {
      situation:
        "Zomont D.O.O., a manufacturer of aluminum and PVC joinery, needed a modern, SEO-friendly website to showcase products and services.",
      task: "Design and develop a custom WordPress site with responsive design, easy content management, and clear lead-generation focus.",
      action:
        "Developed a custom WordPress theme from scratch using Bootstrap for responsive design. Integrated Advanced Custom Fields (ACF) to allow the client to easily manage content and product listings without technical knowledge. Implemented JavaScript enhancements for smooth UI interactions and better user experience. Optimized the site for SEO, ensuring fast load times and mobile responsiveness.",
      result:
        "The final website provided Zomont D.O.O. with a modern, professional, and user-friendly online presence. The new design improved brand credibility, increased customer inquiries through clear CTAs, and made content management significantly easier for the client. The responsive and SEO-optimized structure positioned the company strongly in its local market.",
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
        "I wanted to create a small, interactive project to practice React with TypeScript and modern styling using Tailwind CSS. The idea was to implement the classic Tic-Tac-Toe (X/O) game with a clean UI and reusable components.",
      task: "Build a responsive and interactive web-based Tic-Tac-Toe game that demonstrates component-based design, type safety, and state management.",
      action:
        "Developed the game logic and win/draw conditions using TypeScript for strong typing and code safety. Built reusable React components for the game board, cells, and game status. Styled the interface with Tailwind CSS for a clean and responsive design. Deployed the project to Vercel for easy access and live demo",
      result:
        "Delivered a fully functional, responsive, and visually appealing X/O game. The project served as a hands-on demonstration of React + TypeScript best practices and reinforced skills in UI development, state management, and deployment workflows",
      technologies: ["React", "TypeScript", "Tailwind"],
      liveUrl: "https://react-tic-tac-toe-n7nn.vercel.app/",
      github: "https://github.com/storiaca/react-tic-tac-toe",
    },
    link: "https://react-tic-tac-toe-n7nn.vercel.app/",
  },
  {
    id: 3,
    image: fpcsite,
    title: "Financial Policy Council",
    shortDescription:
      "Financial Policy Council is a nonprofit think tank, project built with:",
    details: {
      situation:
        "The Financial Policy Council, a nonprofit think tank, needed a modern and professional website to highlight publications, events, and thought leadership. Their old site lacked structure, was not mobile-friendly, and made it difficult for staff to manage and update content.",
      task: "Redesign and rebuild the website on WordPress with a custom theme that supports easy content management, clear information hierarchy, and an engaging, responsive design.",
      action:
        "Developed a custom WordPress theme using Bootstrap for responsiveness and accessibility. Integrated Advanced Custom Fields (ACF) to give staff simple tools for managing posts, events, and publications. Implemented JavaScript enhancements for interactivity and improved navigation. Optimized site performance and SEO to increase visibility and reach. tructured layouts to highlight articles, research, and upcoming events in a user-friendly way.",
      result:
        "Delivered a professional, responsive, and content-driven website that elevated the organization’s online presence. The new design improved readability, user engagement, and simplified content management, allowing staff to keep the site regularly updated with minimal effort.",
      technologies: [
        "WordPress",
        "ACF",
        "Bootstrap",
        "JavaScript",
        "Custom Theme",
      ],
      liveUrl: "https://financialpolicycouncil.org/",
      github: "(Private Repo)",
    },
    link: "https://financialpolicycouncil.org/",
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
