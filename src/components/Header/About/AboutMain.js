import { Link, Outlet, useLocation } from "react-router-dom";
import "./About.css"; 
const AboutMain = () => {
  const location = useLocation();

  return (
    <div className="ABOUT-Main">
      <div className="ABOUTallLeftMenu">
         
         <Link
          to="about-examination"
          className={`menuButton ${
            location.pathname === "/about-us/about-examination" ? "active" : ""
          }`}
        >
          About Examination
        </Link>
        <Link
          to="about-jntugv"
          className={`menuButton ${
            location.pathname === "/about-us/about-jntugv" ? "active" : ""
          }`}
        >
          JNTU-GV
        </Link>
        <Link
          to="about-director"
          className={`menuButton ${
            location.pathname === "/about-us/about-director" ? "active" : ""
          }`}
        >
          Director of Evaluation
        </Link>
        <Link
          to="about-controllerofexamination"
          className={`menuButton ${
            location.pathname === "/about-us/about-controllerofexamination" ? "active" : ""
          }`}
        >
          Controller of Examinations
        </Link>
        <Link
          to="about-additionalcontrollerSDC"
          className={`menuButton ${
            location.pathname === "/about-additionalcontrollerSDC" ? "active" : ""
          }`}
        >
          Additional Controller of Examinations SDC
        </Link>
        <Link
          to="about-additionalcontroller1"
          className={`menuButton ${
            location.pathname === "/about-additionalcontroller1" ? "active" : ""
          }`}
        >
          Additional Controller of Examinations 1
        </Link>
        <Link
          to="about-additionalcontroller2"
          className={`menuButton ${
            location.pathname === "/about-additionalcontroller2" ? "active" : ""
          }`}
        >
          Additional Controller of Examinations 2
        </Link>
        <Link
          to="about-additionalcontroller3"
          className={`menuButton ${
            location.pathname === "/about-additionalcontroller3" ? "active" : ""
          }`}
        >
          Additional Controller of Examinations 3
        </Link>
        <Link
          to="about-additionalcontrollerPG"
          className={`menuButton ${
            location.pathname === "/about-additionalcontrollerPG" ? "active" : ""
          }`}
        >
          Additional Controller of Examinations PG
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutMain;