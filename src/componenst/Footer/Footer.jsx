import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <p>Firass Rachid</p>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="a-icon-div">
        <a href="mailto:firassrachid2000@gmail.com" target="_blank">
          <MdEmail />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=963937898507"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
        <a
          href="http://www.github.com/FirassRachid
                  "
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
