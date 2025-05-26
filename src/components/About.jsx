import aleksandar from "../assets/Aleksandar-Ristic.jpg";
const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="about-img">
        <img src={aleksandar} alt="Abou image" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>Experience Builder!</h3>
        <p>
          I’m a creative problem-solver with a passion for building intuitive
          digital experiences. For the past eight years, I've been dedicated to
          crafting engaging interfaces that connect people with information and
          ideas. My work centers around understanding user needs and translating
          them into beautiful, functional designs. Driven by curiosity and a
          love of learning, I constantly seek new ways to refine my craft – and
          find moments of peace in nature’s rhythms. Let’s collaborate on
          something meaningful.
        </p>
      </div>
    </section>
  );
};

export default About;
