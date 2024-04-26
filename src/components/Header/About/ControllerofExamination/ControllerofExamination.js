import React from "react";
import "../About.css";
import controllerofexamination from "./controllerofexamination.png";

function ControllerofExamination() {
  return (
    <div className="mainContainer">
      <div className="allRightContent">
        <div className="allRightContentHeading">Controller of Examinations</div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <div className="ADimg">
            <center>
              <img
                src={controllerofexamination}
                alt="Profile"/>
            </center>
          </div>
        </div>
        <center>
          <div className="profileName">
            <h3 className="ADh3">Dr. R. Gurunadha  </h3>
            <h4 className="ADh4">Controller of Examinations</h4>
          </div>
          <div className="profileDesignation">
            <h4 className="ADh4">
            Associate Professor, Department of Electronics & Communications Engineering
            </h4>
          </div>
        </center>
        <hr />
        <div className="rightcontent">
        {/* Profile description */}
        <p>Email: ce@jntugv.edu.in</p>
        <hr />
        <p>Dr. R. Gurunadha, an esteemed Associate Professor in the Department of Electronics & Communication Engineering (ECE) at JNTU-GV, 
          CEV, Vizianagaram, is a distinguished academic and researcher with a rich background in engineering and technology. With his
           extensive experience and contributions to the field, he has become a pivotal figure in shaping the future of electronics 
           and communication engineering education and research.</p>
          <h4>Educational Background:</h4> <p>
            •	Bachelor of Engineering (B.E) in Electronics & Communication Engineering, Andhra University College of Engineering (AUCE), 
            Visakhapatnam (1998- 2003)<br></br>
            •	Master of Technology (M.Tech) in Instrumentation and Control Systems, JNTU Kakinada (2003 - 2005)
          </p>
          <h4>Professional Journey:</h4><p>
            •	Office In-Charge of Examinations, JNTUK, UCEV, Vizianagaram (2009-2013)<br></br>
            •	NSS Program Officer, JNTUK, UCEV, Vizianagaram (2013-2016)<br></br>
            •	Officer In-Charge of Library, JNTUK, UCEV, Vizianagaram (2016-2019)<br></br>
            •	Sports Coordinator, JNTUK, UCEV, Vizianagaram.<br></br>
            •	In-Charge Head of the Department of ECE, JNTUK, UCEV, Vizianagaram (2010-2013)
          </p>
          <h4>Research and Publications:</h4><p>
          Dr. R. Gurunadha has made significant contributions to the field of electronics and communication engineering through his extensive 
          research and publications. His work primarily focuses on fault modeling in analog circuits, low-power digital circuit design, and 
          advancements in quantum dot cellular automata. He has authored and co-authored numerous papers in various international journals and
           conferences
          </p>
      
      <br/>  
       
        </div>
      </div>
    </div>
  );
}

export default ControllerofExamination;