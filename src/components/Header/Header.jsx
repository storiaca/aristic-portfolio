import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Header = () => {
  const [bgColor, setBgColor] = useState(false);

  useEffect(() => {
    const handleChangeBgColor = () => {
      setBgColor(window.scrollY > 45);
    };

    window.addEventListener("scroll", handleChangeBgColor);

    return () => {
      window.removeEventListener("scroll", handleChangeBgColor);
    };
  }, []);

  return (
    <header className={bgColor ? "header sticky" : "header"}>
      <h1 className="logo">Aleksandar Ristic.</h1>
      <nav className="navbar">
        <a
          href="https://www.linkedin.com/in/aleksandar-ristic-dev/"
          target="_blank"
        >
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <div>
              <IoLogoLinkedin />
            </div>
          </IconContext.Provider>
        </a>
        <a href="https://github.com/storiaca" target="_blank">
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <div>
              <BsGithub />
            </div>
          </IconContext.Provider>
        </a>
        <a href="https://x.com/storiaca" target="_blank">
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <div>
              <FaSquareXTwitter />
            </div>
          </IconContext.Provider>
        </a>
        <a href="mailto:someone@example.com">
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <div>
              <HiOutlineMail />
            </div>
          </IconContext.Provider>
        </a>
      </nav>
    </header>
  );
};

export default Header;
