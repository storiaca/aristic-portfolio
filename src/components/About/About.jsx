import aleksandar from "../../assets/Aleksandar-Ristic.jpg";
import classes from "./About.module.css";

const About = () => {
  return (
    <section className={classes.about} id="about">
      <h2 className={classes.heading}>
        About <span>Me</span>
      </h2>
      <div className={classes.aboutImg}>
        <img src={aleksandar} alt="Aleksanadr Ristic" />
        <span className={classes.circleSpin}></span>
      </div>
      <div className={classes.aboutContent}>
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
        <p>
          I am a dedicated frontend developer with expertise in React and
          WordPress, delivering high-quality, responsive, and user-focused
          websites for modern digital needs.
        </p>
      </div>
    </section>
  );
};

export default About;
