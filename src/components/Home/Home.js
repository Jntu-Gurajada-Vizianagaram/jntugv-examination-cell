import React from "react";
import "./Home.css";
import Jntu from "./Jntu.jpg";

function Home() {
    return (
      <div className="Exam-heading">
        <header className="e-image">
          <img src={Jntu} alt="Jntu"  className="e-image1"/>
          <h1><b>Welcome To
                <br />
                Examination Cell</b>
                </h1>
          <div className="Exam-Container"> 
                <h3>
                An examination cell is an administrative unit within educational institutions such as colleges,
           and universities responsible for managing various aspects of examinations. It oversees the planning, organization, and 
           execution of exams, aiming to ensure efficiency and integrity throughout the process. Students interact with the examination
            cell to register for exams, whether for regular examinations or supplementary ones. Additionally, the examination cell 
            handles the generation of hall tickets or admit cards, providing students with essential exam details such as date, time,
             and venue.</h3>
             <h3>Detailed exam timetables are coordinated and published by the examination cell, enabling 
            students to plan their study schedules effectively. Following the completion of exams, the examination cell promptly
             publishes results, allowing students to access their scores and grades online. It effectively manages student data 
             related to exams, including registration details, exam scores, and academic records, ensuring organized and easily 
             accessible information.
              </h3>
              </div>
              <br />
              </header>
          <div><h3>Vision </h3></div><hr />
          <p><b>❖ To emerge as a premier technical Institution in the field of engineering and research with a focus to produce professionally competent and
socially sensitive engineers capable of working in a multidisciplinary global environment.</b></p>

<div><h3>Mission</h3></div><hr />
<p><b>❖ To provide high-quality technical education through a creative balance of academia and industry by adopting highly effective teaching-learning processes.</b></p>
<p><b>❖ To promote multidisciplinary research with a global perspective to attain professional excellence.</b></p>
<p><b>❖ To establish standards that inculcate ethical and moral values that contribute to the growth in the career and development of society.</b></p>
          <br></br><br></br>
       
      </div>
    );
  }

export default Home;
