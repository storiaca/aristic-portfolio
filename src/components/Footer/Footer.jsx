import { IconContext } from "react-icons";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2025 by Aleksandar Ristic | All Rights Reserved.</p>
      </div>
      <div className="footer-icon_top group">
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
