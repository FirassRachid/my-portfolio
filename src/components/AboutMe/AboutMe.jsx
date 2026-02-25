import "./AboutMe.css";
import Me from "../../assets/formal-style.png";
function AboutMe() {
  return (
    <section className="about-me" id="About">
      <h2>About Me</h2>
      <div className="about">
        <div className="photo-container">
          <img src={Me} alt="My Photo" />
        </div>
        <div>
          <p>
            Telecommunications and Electronics Engineer, graduated from Latakia
            University in Syria. Completed multiple training programs in CCNA,
            A+, ICDL, HR, and English language studies. These experiences have
            sharpened my communication and teamwork skills. But I transitioned
            into web development with a focus on front-end technologies, driven
            by a strong passion for this field. I dedicated to continuously
            improving my expertise in front-end development while seeking
            opportunities that align with my interests and career goals.
          </p>
          <button>
            <a
              href="https://api.whatsapp.com/send?phone=963937898507"
              target="_blank"
            >
              Let's Talk
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
