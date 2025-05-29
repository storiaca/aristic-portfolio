import { IconContext } from "react-icons";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoDocker,
  IoLogoWordpress,
} from "react-icons/io5";
import { SiTypescript, SiReactquery, SiTailwindcss } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      <div className="skills-row">
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#F7DF1E",
                  className: "w-16 h-16",
                }}
              >
                <div>
                  <IoLogoJavascript />
                </div>
              </IconContext.Provider>
              <h3 className="title">JavaScript</h3>
              <p>Advanced scripting and interactivity</p>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#E34F26",
                  className: "w-16 h-16",
                }}
              >
                <div>
                  <IoLogoHtml5 />
                </div>
              </IconContext.Provider>
              <h3 className="title">HTML5</h3>
              <p>Semantic markup and accessibility</p>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#1572B6",
                  className: "w-16 h-16",
                }}
              >
                <div>
                  <IoLogoCss3 />
                </div>
              </IconContext.Provider>
              <h3 className="title uppercase">Css3</h3>
              <p>Responsive and modern styling</p>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#3178C6",
                  className: "w-14 h-14",
                }}
              >
                <div>
                  <SiTypescript />
                </div>
              </IconContext.Provider>
              <h3 className="title">TypeScript</h3>
              <p>TypeScript is a superset of JavaScript</p>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#61DAFB",
                  className: "w-16 h-16",
                }}
              >
                <div>
                  <IoLogoReact />
                </div>
              </IconContext.Provider>
              <h3 className="title">React</h3>
              <p>Library for web and native user interfaces</p>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#764ABC",
                  className: "w-16 h-16",
                }}
              >
                <div>
                  <TbBrandRedux />
                </div>
              </IconContext.Provider>
              <h3 className="title">Redux</h3>
              <p>Library used for managing the state of a web application</p>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#FF4154",
                  className: "w-14 h-14",
                }}
              >
                <div>
                  <SiReactquery />
                </div>
              </IconContext.Provider>
              <h3 className="title">TanStack</h3>
              <p>
                Open-source libraries that simplify web application development
              </p>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#06B6D4",
                  className: "w-14 h-14",
                }}
              >
                <div>
                  <SiTailwindcss />
                </div>
              </IconContext.Provider>
              <h3 className="title">Tailwind CSS</h3>
              <p>
                CSS framework that provides a collection of pre-designed classes
                for HTML elements
              </p>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#F05032",
                  className: "w-14 h-14",
                }}
              >
                <div>
                  <FaGithub />
                </div>
              </IconContext.Provider>
              <h3 className="title">Git</h3>
              <p>Version control and collaboration</p>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#2496ED",
                  className: "w-14 h-14",
                }}
              >
                <div>
                  <IoLogoDocker />
                </div>
              </IconContext.Provider>
              <h3 className="title">Docker</h3>
              <p>
                Platform that allows developers to package applications into
                containers
              </p>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  color: "#21759B",
                  className: "w-14 h-14",
                }}
              >
                <div>
                  <IoLogoWordpress />
                </div>
              </IconContext.Provider>
              <h3 className="title">WordPress</h3>
              <p>CMS tool for building and managing content on your website</p>
            </div>
          </div>
        </div>
        <div className="skills-column">
          <div className="skills-box">
            <div className="skills-content">
              <IconContext.Provider
                value={{
                  className: "w-16 h-16",
                }}
              >
                <div>
                  <FcLinux />
                </div>
              </IconContext.Provider>
              <h3 className="title">Linux</h3>
              <p>Open source operating system (OS) based on Unix</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
