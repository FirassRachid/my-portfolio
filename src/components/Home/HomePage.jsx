import "./HomePage.css";
import MyImag from "../../assets/formal-style.png";
import { FaGithub } from "react-icons/fa6";
import CV from "../../public/cv.pdf";
function HomePage() {
  return (
    <section className="home-page">
      <div className="name">
        <h4>Hello I'm</h4>
        <h1>Firass Rachid</h1>
        <h4>Frontend Developer</h4>
        <button>
          <a href={CV} download>
            Download CV-<small>En</small>
          </a>
        </button>
        <button>
          <a href={CV} download>Download CV-<small>Ar</small></a>
        </button>
      </div>
      <div className="my-photo">
        <img src={MyImag} className="my-img" />
      </div>
      <div className="git-icon-div" >
        <a
          href="http://www.github.com/FirassRachid
      "
          target="_blank"
        >
          GitHub
          <FaGithub className="github-icon" />
        </a>
      </div>
    </section>
  );
}

export default HomePage;
