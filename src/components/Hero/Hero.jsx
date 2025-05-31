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
          I’m a creative problem-solver with a passion for building intuitive
          digital experiences. For the past eight years, I've been dedicated to
          crafting engaging interfaces that connect people with information and
          ideas.
        </p>
        <p>
          My work centers around understanding user needs and translating them
          into beautiful, functional designs. Driven by curiosity and a love of
          learning, I constantly seek new ways to refine my craft – and find
          moments of peace in nature’s rhythms. Let’s collaborate on something
          meaningful.
        </p>
        <div className="btn-box">
          <a
            href="Aleksandar_Ristic_CV.pdf"
            className="btn"
            download="Aleksandar_Ristic_CV.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="home-img_hover"></div>
    </section>
  );
};

export default Hero;
