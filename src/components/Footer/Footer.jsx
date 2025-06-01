import { IconContext } from "react-icons";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2025 by Aleksandar Ristic</p>
      </div>
      <div className="footer-icon_top">
        <a href="#home">
          <IconContext.Provider
            value={{
              className: "icon",
            }}
          >
            <div>
              <FaArrowUp />
            </div>
          </IconContext.Provider>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
