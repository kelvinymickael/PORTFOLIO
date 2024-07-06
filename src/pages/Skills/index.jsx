// Hooks:
import { useRef } from "react";

// Components:
import Menu from "../../components/Menu";

// I18n:
import { useTranslation } from "react-i18next";

// Images:
import imageHTML from "../../assets/images/image-html.svg";
import imageCSS from "../../assets/images/image-css.svg";
import imageJS from "../../assets/images/image-js.svg";
import imageSass from "../../assets/images/image-sass.svg";
import imageGit from "../../assets/images/image-git.svg";
import imageGithub from "../../assets/images/image-github.svg";
import imageFigma from "../../assets/images/image-figma.svg";
import imageReact from "../../assets/images/image-react.svg";

// CSS:
import "./styles.css";

const Skills = () => {
  const { t } = useTranslation();

  const infosSkills = useRef();
  const nameTech = useRef();

  const handleMouseHoverTech = (e) => {
    const infosEveryTech = e.target.getAttribute("data-tech").toLowerCase();

    switch (infosEveryTech) {
      case "html5":
        nameTech.current.textContent = `${t("skills.techHTML5.langName")}`;
        infosSkills.current.textContent = `${t("skills.techHTML5.aboutLang")}`;
        break;
      case "css3":
        nameTech.current.textContent = `${t("skills.techCSS3.langName")}`;
        infosSkills.current.textContent = `${t("skills.techCSS3.aboutLang")}`;
        break;
      case "javascript":
        nameTech.current.textContent = `${t("skills.techJS.langName")}`;
        infosSkills.current.textContent = `${t("skills.techJS.aboutLang")}`;
        break;
      case "sass":
        nameTech.current.textContent = `${t("skills.techSASS.langName")}`;
        infosSkills.current.textContent = `${t("skills.techSASS.aboutLang")}`;
        break;
      case "git":
        nameTech.current.textContent = `${t("skills.techGIT.langName")}`;
        infosSkills.current.textContent = `${t("skills.techGIT.aboutLang")}`;
        break;
      case "github":
        nameTech.current.textContent = `${t("skills.techGITHUB.langName")}`;
        infosSkills.current.textContent = `${t("skills.techGITHUB.aboutLang")}`;
        break;
      case "figma":
        nameTech.current.textContent = `${t("skills.techFIGMA.langName")}`;
        infosSkills.current.textContent = `${t("skills.techFIGMA.aboutLang")}`;
        break;
      case "reactjs":
        nameTech.current.textContent = `${t("skills.techREACTJS.langName")}`;
        infosSkills.current.textContent = `${t(
          "skills.techREACTJS.aboutLang"
        )}`;
        break;
    }
  };

  return (
    <section className="skills">
      <div className="skillsContent">
        <div className="skillsInfosEveryTech">
          <h3 ref={nameTech} className="skillsNameTech">
            {t("skills.tip")}
          </h3>
          <p ref={infosSkills} className="skillsInfoText">
            {t("skills.infosTip")}
          </p>
        </div>
        <div className="skillsTech">
          <img
            loading="lazy"
            onMouseOver={handleMouseHoverTech}
            data-tech="HTML5"
            src={imageHTML}
            alt="Imagem da logo HTML5"
          />
          <img
            loading="lazy"
            onMouseOver={handleMouseHoverTech}
            data-tech="CSS3"
            src={imageCSS}
            alt="Imagem da logo CSS3"
          />
          <img
            loading="lazy"
            onMouseOver={handleMouseHoverTech}
            data-tech="JAVASCRIPT"
            src={imageJS}
            alt="Imagem da logo JavaScript"
          />
          <img
            loading="lazy"
            onMouseOver={handleMouseHoverTech}
            data-tech="SASS"
            src={imageSass}
            alt="Imagem da logo Sass"
          />
          <img
            loading="lazy"
            onMouseOver={handleMouseHoverTech}
            data-tech="GIT"
            src={imageGit}
            alt="Imagem da logo Git"
          />
          <img
            loading="lazy"
            onMouseOver={handleMouseHoverTech}
            data-tech="GITHUB"
            src={imageGithub}
            alt="Imagem da logo Github"
          />
          <img
            loading="lazy"
            onMouseOver={handleMouseHoverTech}
            data-tech="FIGMA"
            src={imageFigma}
            alt="Imagem da logo Figma"
          />
          <img
            loading="lazy"
            onMouseOver={handleMouseHoverTech}
            data-tech="REACTJS"
            src={imageReact}
            alt="Imagem da logo ReactJS"
          />
        </div>
      </div>
      <Menu />
    </section>
  );
};

export default Skills;
