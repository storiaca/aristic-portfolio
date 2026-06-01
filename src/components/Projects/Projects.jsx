import ProjectCards from "./ProjectCards";
import states from "../../assets/states.png";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <ProjectCards />
      <img src={states} alt={"States"} />
    </section>
  );
};

export default Projects;
