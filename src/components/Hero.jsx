import { IconContext } from "react-icons";
import { BiLogoLinkedin } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi I'm <span>Aleksandar Ristic</span>
        </h1>
        <div className="text-animate">
          <h2>Frontend Developer</h2>
        </div>
        <p>
          I am a dedicated frontend developer with expertise in React and
          WordPress, delivering high-quality, responsive, and user-focused
          websites for modern digital needs.
        </p>
        <div className="btn-box">
          <a href="#" className="btn">
            Hire Me
          </a>
          <a href="#" className="btn">
            Let's Talk
          </a>
        </div>
      </div>

      <div className="home-sci">
        <a href="#">
          <IconContext.Provider
            value={{
              color: "red",
              className: "w-10 h-10",
            }}
          >
            <div>
              <BiLogoLinkedin />
            </div>
          </IconContext.Provider>
        </a>
        <a href="#">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>

      <div className="home-imgHover"></div>
    </section>
  );
};

export default Hero;
