import { BiSolidUpArrowSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2023 by Codehal | All Rights Reserved.</p>
      </div>
      <div className="footer-iconTop">
        <a href="#home">
          <BiSolidUpArrowSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
