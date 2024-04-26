import React from 'react';
import controller3 from "././controller3.png";
import '../About.css'; 

function AdditionalController3() {
  return (
    <div className="mainContainer">
      <div className="allLeftMenu">
      </div>
      <div className="allRightContent">
        <div className="allRightContentHeading">
          Additional Controller of Examinations-3
        </div>
        <br></br>
        <div className="allRightContentProfile">
          {/* Profile information */}
          <center>
          <div className="profileImage">
            
          <img src = {controller3} alt="Profile" />
        
          </div>
          <div className="profileName">
            <h3 className="ADh3">Mr. G.Appala Naidu</h3>  
            <h4 className="ADh4">Additional Controller of Examinations 3</h4>
            </div>
            <div className="profileDesignation">
            <h4 className="ADh4">Assistant Professor, Department of Electronics & Communications Engineering</h4>
          </div>
          </center>
          </div>
          <hr />
          <div className="rightcontent">
          {/* Profile description */}
          <p>Email: ace3@jntugv.edu.in</p>
          <hr />
          <p>Mr.G.Appala Naidu having a total of 15 years of experience in teaching and research. He worked as Officer in-charge of Examinations, Deputy Warden and presently working as NSS Programme officer and Additional Controller of Examinations.</p>
          <p>Mr.G.Appala Naidu has published 19 research papers in various international/national journals and conferences. His research area is Analog VLSI.</p>
        </div>
      </div>
    </div>
    
  );
}

export default AdditionalController3;
