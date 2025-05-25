import React from "react";

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
          <i className="bx bxl-facebook"></i>
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
