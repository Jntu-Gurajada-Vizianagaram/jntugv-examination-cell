import React from 'react';
import SDC from "./SDC.png";
import '../About.css'; 

function AdditionalControllerSDC() {
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Additional Controller of Examinations-SDC
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            
          <img src = {SDC} alt="Profile" />
        
          </div>
          <div className="profileName">
            <h3 className="ADh3">Dr. Ch.Bindu Madhuri</h3>
            <h4 className="ADh4">Additional Controller of Examinations SDC</h4>
            </div>
            <div className="profileDesignation">
            <h4 className="ADh4">
            Assistant Professor, Department of IT </h4>
          </div>
          </center>
          </div>
          <hr />
          <div className="rightcontent">
          <p>Email: acesdc@jntugv.edu.in</p>
          <hr />
          <p>Dr Ch Bindu Madhuri is having a total of 17 years of experience in teaching and research. She worked as Officer in-charge of Examinations, APSSDC Skill development coordinator, Deputy Warden and presently working as Nodal Officer Biometric Attendance and Additional Controller of Examinations.</p>
          <p>Dr Ch Bindu Madhuri is a member of IEEE. She published 20 research papers in various international/national journals and conferences. She is an editorial board member and reviewer of many international journals. She is currently guiding 8 research scholars as Supervisor/Co- Supervisor for their PhD degrees. Her research areas include the Artificial Intelligence, Machine Learning, Deep Learning, and Natural Language Processing.</p>
        </div>
      </div>
    </div>
   
  );
}

export default AdditionalControllerSDC;
