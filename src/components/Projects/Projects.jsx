import Project1 from "../../assets/projects/products.png";
import Project2 from "../../assets/projects/edubridge.png";
import Project3 from "../../assets/projects/ecommerce.png";
import Project4 from "../../assets/projects/food.png";
import "./Projects.css";

function Projects() {
  const ProjectsData = [
    {
      id: 1,
      image: Project1,
      title: "Projest Management",
      link: `https://firassrachid.github.io/Product-Management/`,
      sourceCode: `https://github.com/FirassRachid/Product-Management`,
    },
    {
      id: 2,
      image: Project2,
      title: "EduBridge",
      link: `https://fr-edubridge.netlify.app/`,
      sourceCode: `https://github.com/FirassRachid/Edu-Bridge`,
    },
    {
      id: 3,
      image: Project3,
      title: "E-commerce",
      link: `https://e-commerce-production-5218.up.railway.app/`,
      sourceCode: `https://github.com/FirassRachid/e-commerce-project`,
    },
    {
      id: 4,
      image: Project4,
      title: "Food Recipe",
      link: `https://fr-foodrecipe.netlify.app/`,
      sourceCode: `https://github.com/FirassRachid/food-recipe-app.git`,
    },
  ];
  return (
    <section className="projects" id="Projects">
      <h2>Projects</h2>
      <div className="container">
        {ProjectsData.map(({ id, image, title, link, sourceCode }) => {
          return (
            <div key={id} className="project-item">
              <div className="project-desc">
                <h3>{title} :</h3>
                <img src={image} alt={title} />
                <button>
                  <a href={link} target="_blank">
                    View project
                  </a>
                </button>
                <button>
                  <a href={sourceCode} target="_blank">
                    Source Code
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
