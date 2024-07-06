// RRD:
import { Link } from "react-router-dom";

// React Icons:
import { IoEyeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

// CSS:
import "./styles.css";

const CardProject = ({ imageCard, techs, viewProject, githubLink, cardId }) => {
  return (
    <article className="card">
      <div className="cardContent">
        <div className="cardContentImage">
          <div className="cardContentTechs"></div>
          <Link to={`/projects/${cardId}`}>
            <img loading="lazy" src={imageCard} alt="" />
          </Link>
        </div>
        <div className="cardContentIcons">
          <div className="cardContentIconsViewProject">
            <Link to={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </Link>
            <Link to={viewProject} target="_blank" rel="noopener noreferrer">
              <IoEyeSharp />
            </Link>
          </div>
          <div className="cardContentTechsProject">
            {techs.length > 0 &&
              techs.map((tech) => (
                <>
                  <img loading="lazy" src={tech} alt={`Logo ${tech}`} />
                </>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
