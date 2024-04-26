import "./Footer.css";

import { Link } from "react-router-dom";
import {
  Examination_Wing,
  Examination_Team,
 
 Syllabus,
  JntuGv_Units,
 
} from "./FooterData.js";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="mainFooter">
      <div className="subcontainer1Footer">
       
      </div>
      <div className="subcontainer2Footer">
        {/* Administration_Wing */}
        <div className="container1Footer">
          <p className="subheadingFooter">Examination Wing</p>
          <hr className="subFooter" />
          <div>
            {Examination_Wing.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
             </div>
        </div>

        {/* Online_Courses */}
        <div className="container3Footer">
          {/* Consituent Colleges */}
          <p className="subheadingFooter">Syllabus</p>
          <hr className="subFooter" />
          <div>
            {Syllabus.map((item, index) => (
              <div key={index}>
                <p>
                  <Link
                    to={item.link}
                    className="sublinksFooter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}
         
         
          
          </div>
        </div>

        <div className="container4Footer">
          {/* JNTU GV UNITS */}
          <p className="subheadingFooter">JNTU-GV Units</p>
          <hr className="subFooter" />
          <div>
            {JntuGv_Units.map((item, index) => (
              <div key={index}>
                <p>
                  <Link
                    to={item.link}
                    className="sublinksFooter"
                    target="_blankx "
                  >
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}

</div>
        </div>

        {/* Central_Facilites */}

        <div className="container2Footer">
          <p className="subheadingFooter">Examination Team</p>
          <hr className="subFooter" />
          <div>
            {Examination_Team.map((item, index) => (
              <div key={index}>
                <p>
                  <Link to={item.link} className="sublinksFooter">
                    {item.title}
                  </Link>
                </p>
              </div>
            ))}


          </div>
        
        </div>
      </div>
      <hr className="footerHr" />
      <div className="subcontainer3Footer">
        {/* Contact Us */}
        <p className="subheadingFooter">Contact Us :</p>
        <p className="T">
          JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY-GURAJADA
          VIZIANAGARAM,DWARAPUDI, VIZIANAGARAM, ANDHRA PRADESH - 535 003, Andhra
          Pradesh, INDIA.
        </p>
        <br></br>
      </div>
      <div className="BelowBar">
          <div className="BelowBar-links">
            <a
              href="https://www.facebook.com/JNTUGurajada"
              className="Below-Social-links"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/jntugurajada/"
              className="Below-Social-links"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/JNTU_Gurajada"
              className="Below-Social-links"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/jntu_gurajada/"
              className="Below-Social-links"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@JNTUGV"
              className="Below-Social-links"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

      {/* Copyright  */}
      <div className="mobilefooter">
        <p className="T">© Copyright 2023 JNTU-GV Vizianagaram. All Rights Reserved.</p>
      </div>
    </div>
  );
}
export default Footer;
