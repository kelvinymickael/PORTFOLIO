// Services:
import getInfosProject from "../../services/fetchCards";

// Hooks:
import { useState, useEffect } from "react";

// RRD:
import { useParams, Link } from "react-router-dom";

// Components:
import Loading from "../../components/Loading";
import Menu from "../../components/Menu";

// I18n:
import { useTranslation } from "react-i18next";

// React Icons:
import { IoEyeSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

// Image:
// import projectImgB7Burger from "../../assets/projectImage/image-project-b7burger.jpg";

// CSS:
import "./styles.css";

const Project = () => {
  const { t } = useTranslation();

  const { id: projectId } = useParams();

  const [getDetailsProject, setGetDetailsProject] = useState([]);

  useEffect(() => {
    const getProject = async () => {
      const data = await getInfosProject("/projects");

      setGetDetailsProject(data);
    };

    getProject();
  }, []);

  const filterSpecificProject = getDetailsProject.filter((project) => {
    return project.id === +projectId;
  });

  if (getDetailsProject.length === 0) {
    return <Loading />;
  }

  console.log(getDetailsProject);

  return (
    <>
      {filterSpecificProject.length > 0 && (
        <section className="projectContainer">
          <div className="projectDetails">
            <div className="projectImage">
              <img
                loading="lazy"
                src={filterSpecificProject[0].imageProject}
                alt="Imagem do projeto B7Burger"
              />
            </div>
            <div className="projectInfos">
              <h2>{filterSpecificProject[0].titleProject}</h2>
              <p>{t(`${filterSpecificProject[0].descriptionProject}`)}</p>
              <div className="projectTechnologies">
                <h3>{t("projectInfos.techsUsedTitleDefault")}</h3>
                <ul>
                  {filterSpecificProject[0].techsUsedInTheProject.map(
                    (tech, index) => (
                      <>
                        <li key={index}>{tech}</li>
                      </>
                    )
                  )}
                </ul>
              </div>
              <div className="projectView">
                {filterSpecificProject[0].githubLink && (
                  <Link
                    to={filterSpecificProject[0].githubLink}
                    target="_blank"
                  >
                    <FaGithub />
                  </Link>
                )}
                {filterSpecificProject[0].liveDemoLink && (
                  <Link
                    to={filterSpecificProject[0].liveDemoLink}
                    target="_blank"
                  >
                    <IoEyeSharp />
                  </Link>
                )}
                {filterSpecificProject[0].figmaLink && (
                  <Link to={filterSpecificProject[0].figmaLink} target="_blank">
                    <FaFigma />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      <Menu />
    </>
  );
};

export default Project;
