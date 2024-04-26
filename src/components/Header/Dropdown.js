import "./Dropdown.css";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
 import GroupsIcon from "@mui/icons-material/Groups";
import DraftsIcon from "@mui/icons-material/Drafts";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";
import CampaignIcon from "@mui/icons-material/Campaign";
import PhoneIcon from "@mui/icons-material/Phone";
import { useState } from "react";
// import { PiExamFill } from "react-icons/pi";

const Dropdown = () => {
  const navigate = useNavigate();

  const [menuState, setMenuState] = useState(false);

  const homeHandler = () => {
    navigate("/");
  };

  return (
    <nav className="topnav">
      <div className="menu-icon" onClick={() => setMenuState(!menuState)}>
        <MenuIcon />
        MENU
      </div>
      <div className={menuState ? "menu-on-options" : "menu-off-options"}>
        
      <div className="dropdown">
  <div className="dropbtn" onClick={homeHandler}>
    <div className="drop-icon" style={{ verticalAlign: 'middle' }}>
      <HomeIcon />
    </div>
    HOME
  </div>
</div>

        <div class="dropdown">
          <div class="dropbtn">
            <ApartmentIcon /> &nbsp;
            ABOUT
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/about-us/about-examination">
                About Examination
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-jntugv">
                About JNTU-GV
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-director">
                Director of Evaluation
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-controllerofexamination">
                Controller of Examinations
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-additionalcontrollerSDC">
                Additional Controller of Examinations SDC
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-additionalcontroller1">
                Additional Controller of Examinations 1
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-additionalcontroller2">
                Additional Controller of Examinations 2
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-additionalcontroller3">
                Additional Controller of Examinations 3
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-us/about-additionalcontrollerPG">
                Additional Controller of Examinations PG
              </Link>
            </button>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">
            <GroupsIcon />
            <Link to="/examinationteam" className="link-btn">
             EXAMINATION TEAM
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">
            <CampaignIcon />
            <Link to="/notifications" className="link-btn">
              NOTIFICATIONS
            </Link>
          </div>
        </div>

        <div class="dropdown">
          <div class="dropbtn">
            <GridViewRoundedIcon />&nbsp;  SYLLABUS
          </div>
          <div class="dropdown-content" onClick={() => setMenuState(!menuState)}>
            <button >
              {" "}
              <Link className="link-btn" to="/about-course-details/about-ug-syllabus">
                UG Syllabus
              </Link>
            </button>
            <button>
              {" "}
              <Link className="link-btn" to="/about-course-details/about-pg-syllabus">
                PG Syllabus
              </Link>
            </button>

          </div>
        </div> 
        <div className="dropdown">
          <div className="dropbtn">
            <PhoneIcon />
            <Link to="/contact" className="link-btn">
              CONTACT
            </Link>
          </div>
        </div>
          <div className="dropdown">
          <div className="dropbtn">
          <DescriptionIcon />
            <Link to="/results" className="link-btn">
              RESULTS
            </Link>
          </div>
        </div>
          <div className="dropdown">
          <div className="dropbtn">
            <DraftsIcon />
            <Link to="/programmes-offered" className="link-btn">
              CHAT WITH US
            </Link>
          </div>
        </div>
{/* <div className="dropdown">
          <div className="dropbtn">
            <DraftsIcon />
            <Link to="/forms" className="link-btn">
              FEEDBACK FORM 
            </Link>
          </div>
        </div> */}

      
      
      
      
      </div>
    </nav>
  );
};

export default Dropdown;
